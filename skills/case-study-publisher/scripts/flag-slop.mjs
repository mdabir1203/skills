#!/usr/bin/env node
/**
 * flag-slop.mjs — AI-slop detector for case studies.
 *
 * Reads a markdown file (or stdin), checks for banned words, long sentences,
 * passive-voice density, vague quantifiers, generic openers, and filler
 * intensifiers. Exits non-zero on any Tier 1 or Tier 2 hit. Prints a
 * report with line:column pointers and suggested rewrites.
 *
 * Usage:
 *   node flag-slop.mjs path/to/post.md
 *   node flag-slop.mjs < path/to/post.md
 *   Get-Content path/to/post.md | node flag-slop.mjs
 *
 * Exit codes:
 *   0 — clean (or only Tier 3 hits with justification)
 *   1 — one or more Tier 1/2 violations
 *   2 — usage error
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// ---------- Configuration ----------

const TIER_1 = [
  // Single banned words (case-insensitive, whole-word match)
  { pattern: /\bdelve(?:s|d)?\b/gi, replacement: 'cut entirely — use "look at", "explore", or "examine"' },
  { pattern: /\bleverage(?:s|d|ing)?\b/gi, replacement: '"use" or "apply"' },
  { pattern: /\brobust(?:ly)?\b/gi, replacement: 'cut, or describe what makes it work ("it handles 5,898 rows without dropping one")' },
  { pattern: /\bseamless(?:ly)?\b/gi, replacement: 'cut, or describe the actual integration' },
  { pattern: /\bcutting-edge\b/gi, replacement: 'cut — or name the version/year' },
  { pattern: /\bunlock(?:s|ed|ing)?\b/gi, replacement: '"enable", "expose", or describe the actual capability' },
  { pattern: /\bfoster(?:s|ed|ing)?\b/gi, replacement: '"encourage", "build", or "support"' },
  { pattern: /\bholistic(?:ally)?\b/gi, replacement: 'cut — name the specific approach' },
  { pattern: /\bparadigm(?:s)?\b/gi, replacement: 'cut, or use "approach" / "model"' },
  { pattern: /\bsynerg(?:y|ies|istic|ize)\b/gi, replacement: 'cut — describe the actual interaction' },

  // Banned phrases
  { pattern: /\bin today'?s (?:fast-paced )?world\b/gi, replacement: 'cut entirely' },
  { pattern: /\bit'?s important to note\b/gi, replacement: 'cut — just say the thing' },
  { pattern: /\bit is important to note\b/gi, replacement: 'cut — just say the thing' },
  { pattern: /\bit'?s worth (?:noting|mentioning)\b/gi, replacement: 'cut — just say the thing' },
  { pattern: /\bit is worth (?:noting|mentioning)\b/gi, replacement: 'cut — just say the thing' },
  { pattern: /\blet'?s dive in\b/gi, replacement: 'cut — start with the actual content' },
  { pattern: /\blet'?s explore\b/gi, replacement: 'cut — start with the actual content' },
  { pattern: /\bhave you ever wondered\b/gi, replacement: 'cut — start with the actual question or moment' },
  { pattern: /\bimagine a world where\b/gi, replacement: 'cut — describe the actual scenario' },
  { pattern: /\bin this (?:article|post|piece)\b/gi, replacement: 'cut — the reader is reading it, you don\'t need to say so' },
  { pattern: /\bwe will explore\b/gi, replacement: 'cut — start exploring' },
  { pattern: /\bbuckle up\b/gi, replacement: 'cut — too try-hard' },
  { pattern: /\bat the end of the day\b/gi, replacement: 'cut — say the thing directly' },
  { pattern: /\bwhen it comes to\b/gi, replacement: 'cut — start with the topic' },
  { pattern: /\bnavigate the complexities\b/gi, replacement: 'cut — describe the actual challenge' },
  { pattern: /\bin the realm of\b/gi, replacement: 'cut — name the area directly' },
  { pattern: /\bin the world of\b/gi, replacement: 'cut — name the area directly' },
  { pattern: /\ba testament to\b/gi, replacement: 'cut — describe the actual evidence' },
  { pattern: /\ba paradigm shift\b/gi, replacement: 'cut — name the actual change' },
];

const TIER_2 = [
  { pattern: /\bbasically\b/gi, replacement: 'cut' },
  { pattern: /\bliterally\b/gi, replacement: 'cut (unless literally literal)' },
  { pattern: /\bhonestly\b/gi, replacement: 'cut (or move to "honestly, this surprised me" if genuinely surprising)' },
  { pattern: /\breally\b/gi, replacement: 'cut — use a stronger verb' },
  { pattern: /\bvery\b/gi, replacement: 'cut — use a stronger adjective or stronger verb' },
  { pattern: /\bquite\b/gi, replacement: 'cut' },
  { pattern: /\bextremely\b/gi, replacement: 'cut' },
  { pattern: /\bincredibly\b/gi, replacement: 'cut' },
  { pattern: /\bobviously\b/gi, replacement: 'cut' },
  { pattern: /\bclearly\b/gi, replacement: 'cut (often a weasel word — if it\'s clear, no need to say so)' },
  { pattern: /\bessentially\b/gi, replacement: 'cut — say the actual thing' },
  { pattern: /\bfundamentally\b/gi, replacement: 'cut — say the actual thing' },
  { pattern: /\bcomprehensive(?:ly)?\b/gi, replacement: '"complete" or name what it covers' },
  { pattern: /\binnovative\b/gi, replacement: 'cut — name the actual innovation' },
  { pattern: /\brevolutionary\b/gi, replacement: 'cut' },
  { pattern: /\bgame-changing\b/gi, replacement: 'cut' },
  { pattern: /\bworld-class\b/gi, replacement: 'cut — name the actual capability' },
  { pattern: /\bbest-in-class\b/gi, replacement: 'cut' },
  { pattern: /\bnext-generation\b/gi, replacement: 'cut' },
  { pattern: /\bstate-of-the-art\b/gi, replacement: 'cut' },
  { pattern: /\bpowerful\b/gi, replacement: 'cut — name what it does' },
];

const TIER_3 = [
  { pattern: /\bhowever\b/gi, replacement: 'often replaced with a period and a new sentence' },
  { pattern: /\bfurthermore\b/gi, replacement: 'cut 90% of the time' },
  { pattern: /\bmoreover\b/gi, replacement: 'cut 90% of the time' },
  { pattern: /\badditionally\b/gi, replacement: 'cut 90% of the time' },
  { pattern: /\btherefore\b/gi, replacement: 'often replaced with a colon and a new sentence' },
  { pattern: /\bthat said\b/gi, replacement: 'often cut' },
  { pattern: /\bin conclusion\b/gi, replacement: 'cut — you\'re not writing an essay' },
];

const VAGUE_QUANTIFIERS = [
  { pattern: /\bmany\b/gi, replacement: 'replace with the actual count, or "several"' },
  { pattern: /\bseveral\b/gi, replacement: 'replace with the actual count' },
  { pattern: /\bvarious\b/gi, replacement: 'name them' },
  { pattern: /\ba number of\b/gi, replacement: 'the actual number' },
  { pattern: /\bcountless\b/gi, replacement: 'the actual count' },
  { pattern: /\bnumerous\b/gi, replacement: 'the actual count' },
];

const GENERIC_OPENERS = [
  /^In this (?:article|post|piece|tutorial|guide)/i,
  /^Have you ever (?:wondered|asked|thought)/i,
  /^Imagine a (?:world|scenario|future)/i,
  /^It'?s (?:no secret|important|crucial|essential)/i,
  /^Let'?s (?:dive|explore|examine|look)/i,
  /^When it comes to/i,
  /^In (?:today'?s|the) (?:world|landscape|era)/i,
  /^As we (?:all )?know/i,
];

const GENERIC_CLOSERS = [
  /I hope (?:this (?:helps|was helpful|was useful)|you found this useful)/i,
  /Thanks? for reading/i,
  /In (?:conclusion|summary)/i,
  /To (?:conclude|wrap (?:up|it up))/i,
  /That'?s (?:it|all) for (?:today|now)/i,
  /Until next time/i,
  /Stay tuned/i,
];

// ---------- Detection ----------

const SENTENCE_SPLIT = /(?<=[.!?])\s+(?=[A-Z"\(])/g;
const SENTENCE_SPLIT_FALLBACK = /(?<=[.?])\s+(?=[A-Z])/g;
const SENTENCE_SPLIT_QUESTION = /(?<=\?)\s+(?=[A-Z])/g;

function stripCodeBlocks(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`\n]+`/g, '')
    // Strip FAQ blocks FIRST (before the generic heading strip removes the
    // ## FAQ marker). FAQ Q+As are checked separately for length.
    .replace(/^##\s+(?:FAQ|Frequently asked)[^\n]*\n[\s\S]*$/im, '')
    // Strip markdown table rows (lines with leading |)
    .replace(/^\|.*$/gm, '')
    // Strip remaining headings (everything starting with # or **)
    .replace(/^#+\s+.*$/gm, '')
    .replace(/^\*\*[^*]+\*\*:?$/gm, '');
}

function splitSentences(text) {
  // First pass: split on standard sentence terminators
  let parts = text.split(SENTENCE_SPLIT).map(s => s.trim()).filter(Boolean);
  // Second pass: any "sentence" still over 60 words is probably 2+ sentences
  // joined by something the first regex didn't catch (colons in lists, etc.).
  // Split those on question marks and capital letters.
  const expanded = [];
  for (const p of parts) {
    if (p.split(/\s+/).filter(Boolean).length > 60) {
      const subParts = p.split(SENTENCE_SPLIT_QUESTION).map(s => s.trim()).filter(Boolean);
      expanded.push(...subParts);
    } else {
      expanded.push(p);
    }
  }
  return expanded;
}

function wordCount(sentence) {
  return sentence.split(/\s+/).filter(Boolean).length;
}

function isPassive(sentence) {
  // Heuristic: "be" verb + past participle (-ed or irregular)
  // Looks for: was/were/been/being/is/are/been + word ending in -ed or -en
  // Skips code-like content.
  return /\b(?:is|are|was|were|been|being|be)\s+[a-z]+ed\b/i.test(sentence)
      || /\b(?:is|are|was|were|been|being|be)\s+(?:done|made|seen|found|written|taken|given|chosen|broken|fixed|sent|set|run|gone|put|built|caught|brought|bought|held|kept|left|lost|met|paid|read|said|sold|stood|taught|told|thought|understood|won|worn)\b/i.test(sentence);
}

function findHits(text, items, label, severity) {
  const hits = [];
  const lines = text.split('\n');
  for (let lineNo = 0; lineNo < lines.length; lineNo++) {
    const line = lines[lineNo];
    for (const { pattern, replacement } of items) {
      const matches = line.matchAll(new RegExp(pattern.source, pattern.flags));
      for (const m of matches) {
        hits.push({
          severity,
          label,
          line: lineNo + 1,
          column: m.index + 1,
          match: m[0],
          replacement,
          context: line.trim().slice(0, 120),
        });
      }
    }
  }
  return hits;
}

function findLongSentences(text) {
  const stripped = stripCodeBlocks(text);
  const sentences = splitSentences(stripped);
  const hits = [];
  for (const s of sentences) {
    if (wordCount(s) > 28) {
      const idx = stripped.indexOf(s);
      // Approximate line number
      const before = stripped.slice(0, idx);
      const line = before.split('\n').length;
      hits.push({
        severity: 'LONG',
        label: 'over-28-words',
        line,
        column: 1,
        match: s,
        replacement: `split this ${wordCount(s)}-word sentence into 2`,
        context: s.slice(0, 120),
      });
    }
  }
  return hits;
}

function findPassiveVoice(text) {
  const stripped = stripCodeBlocks(text);
  const sentences = splitSentences(stripped);
  const passive = sentences.filter(isPassive);
  const total = sentences.length;
  if (total === 0) return [];
  const density = passive.length / total;
  const hits = [];
  if (density > 0.25) {
    hits.push({
      severity: 'VOICE',
      label: 'passive-voice-density',
      line: 1,
      column: 1,
      match: `${passive.length}/${total} sentences (${(density * 100).toFixed(0)}%)`,
      replacement: 'rewrite in active voice — target < 25% passive',
      context: 'whole document',
    });
  }
  return hits;
}

function findGenericOpeners(text) {
  const lines = text.split('\n');
  const hits = [];
  for (let i = 0; i < Math.min(lines.length, 50); i++) {
    const line = lines[i].trim();
    if (line.length === 0) continue;
    // Skip headings
    if (line.startsWith('#')) continue;
    for (const re of GENERIC_OPENERS) {
      if (re.test(line)) {
        hits.push({
          severity: 'OPENER',
          label: 'generic-opener',
          line: i + 1,
          column: 1,
          match: line.slice(0, 80),
          replacement: 'rewrite to start with time/number/contradiction',
          context: line.slice(0, 120),
        });
        break;
      }
    }
  }
  return hits;
}

function findGenericClosers(text) {
  const lines = text.split('\n');
  const hits = [];
  // Check last 20 lines
  const start = Math.max(0, lines.length - 20);
  for (let i = start; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.length === 0) continue;
    for (const re of GENERIC_CLOSERS) {
      if (re.test(line)) {
        hits.push({
          severity: 'CLOSER',
          label: 'generic-closer',
          line: i + 1,
          column: 1,
          match: line.slice(0, 80),
          replacement: 'end with question, link, or hand-extended CTA',
          context: line.slice(0, 120),
        });
        break;
      }
    }
  }
  return hits;
}

// ---------- Main ----------

function main() {
  let input;
  if (process.argv.length > 2) {
    const path = resolve(process.argv[2]);
    try {
      input = readFileSync(path, 'utf8');
    } catch (err) {
      console.error(`flag-slop: cannot read ${path}: ${err.message}`);
      process.exit(2);
    }
  } else {
    // Read from stdin
    try {
      input = readFileSync(0, 'utf8');
    } catch (err) {
      console.error(`flag-slop: cannot read stdin: ${err.message}`);
      process.exit(2);
    }
  }

  if (input.trim().length === 0) {
    console.error('flag-slop: empty input');
    process.exit(2);
  }

  const hits = [
    ...findHits(input, TIER_1, 'tier-1-banned', 'TIER-1'),
    ...findHits(input, TIER_2, 'tier-2-banned', 'TIER-2'),
    ...findHits(input, TIER_3, 'tier-3-soft', 'TIER-3'),
    ...findHits(input, VAGUE_QUANTIFIERS, 'vague-quantifier', 'QUANT'),
    ...findLongSentences(input),
    ...findPassiveVoice(input),
    ...findGenericOpeners(input),
    ...findGenericClosers(input),
  ];

  // Sort by line number
  hits.sort((a, b) => a.line - b.line || a.column - b.column);

  const counts = { 'TIER-1': 0, 'TIER-2': 0, 'TIER-3': 0, 'LONG': 0, 'VOICE': 0, 'OPENER': 0, 'CLOSER': 0, 'QUANT': 0 };
  for (const h of hits) counts[h.severity] = (counts[h.severity] || 0) + 1;

  console.log('\n========== AI-Slop Report ==========\n');

  if (hits.length === 0) {
    console.log('Clean. Zero hits. Ready to publish.\n');
    process.exit(0);
  }

  for (const h of hits) {
    const tag = h.severity.padEnd(7);
    console.log(`[${tag}] L${h.line}:${h.column}  ${h.label}`);
    console.log(`  match:     ${h.match}`);
    console.log(`  context:   ${h.context}`);
    console.log(`  fix:       ${h.replacement}`);
    console.log('');
  }

  console.log('---------- Summary ----------');
  for (const [k, v] of Object.entries(counts)) {
    if (v > 0) console.log(`  ${k.padEnd(7)} ${v}`);
  }
  console.log('');

  const fatal = counts['TIER-1'] + counts['TIER-2'] + counts['LONG'] + counts['OPENER'] + counts['CLOSER'];
  if (fatal > 0) {
    console.log(`FAIL: ${fatal} fatal issues. Rewrite, then re-run.`);
    process.exit(1);
  } else {
    console.log('PASS: only soft (Tier 3) flags. Review for taste, then publish.');
    process.exit(0);
  }
}

main();
