#!/usr/bin/env node
/**
 * emit-schema-ld.mjs — generate Schema.org JSON-LD for a case study.
 *
 * Produces three blocks (TechArticle, FAQPage, Person) wrapped in
 * <script type="application/ld+json"> tags. Output goes to stdout;
 * redirect to a file or paste at the bottom of the post.
 *
 * Usage (with overrides):
 *   node emit-schema-ld.mjs \
 *     --title "How a 3-line filter fixed a 21x data divergence bug" \
 *     --date 2026-08-31 \
 *     --tags cloudflare,d1,sqljs,postmortem,debugging \
 *     --faq "What is the bug?:A 3-line filter was missing in the local snapshot writer." \
 *     --faq "Why did the meta lie?:completed_count was set to the input count, not the inserted count." \
 *     --canonical "https://medium.com/@your-handle/3-line-filter-21x-divergence" \
 *     --author-name "Your Full Name" \
 *     --author-url "https://your-portfolio.com" \
 *     --author-github "https://github.com/yourhandle" \
 *     --author-medium "https://medium.com/@yourhandle" \
 *     --author-job-title "Software Engineer" \
 *     --author-knows "Cloudflare Workers,Electron,Node.js"
 *
 *   # Or pipe the post body for auto-extraction of the title (first H1):
 *   Get-Content post.md | node emit-schema-ld.mjs --auto --date 2026-08-31
 *
 * The author defaults below are placeholders. Override every field for your
 * own posts. See PERSONALIZATION.md for the recommended author profile.
 */

import { readFileSync } from 'node:fs';

const DEFAULT_AUTHOR = {
  '@type': 'Person',
  name: '{{USER_NAME}}',
  url: '{{PORTFOLIO_URL}}',
  sameAs: [
    '{{GITHUB_URL}}',
    '{{MEDIUM_URL}}',
  ],
  jobTitle: 'Software Engineer',
  knowsAbout: ['Cloudflare Workers', 'Electron', 'Node.js'],
  worksFor: { '@type': 'Organization', name: '{{PROJECT_NAME}}' },
};

function parseArgs(argv) {
  const args = {
    title: null,
    subtitle: null,
    date: null,
    tags: [],
    faqs: [],
    canonical: null,
    coverImage: null,
    auto: false,
    author: { ...DEFAULT_AUTHOR },
  };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    const next = argv[i + 1];
    switch (arg) {
      case '--title': args.title = next; i++; break;
      case '--subtitle': args.subtitle = next; i++; break;
      case '--date': args.date = next; i++; break;
      case '--tags': args.tags = next.split(',').map(t => t.trim()).filter(Boolean); i++; break;
      case '--faq': args.faqs.push(next); i++; break;
      case '--canonical': args.canonical = next; i++; break;
      case '--cover': args.coverImage = next; i++; break;
      case '--auto': args.auto = true; break;
      case '--author-name': args.author.name = next; i++; break;
      case '--author-url': args.author.url = next; i++; break;
      case '--author-github': args.author.sameAs = [next, args.author.sameAs[1]].filter(Boolean); i++; break;
      case '--author-medium': args.author.sameAs = [args.author.sameAs[0], next].filter(Boolean); i++; break;
      case '--author-job-title': args.author.jobTitle = next; i++; break;
      case '--author-knows': args.author.knowsAbout = next.split(',').map(t => t.trim()).filter(Boolean); i++; break;
      case '--author-works-for': args.author.worksFor = { '@type': 'Organization', name: next }; i++; break;
      default: console.error(`unknown arg: ${arg}`); process.exit(2);
    }
  }
  return args;
}

function extractTitleFromMarkdown(md) {
  const m = md.match(/^#\s+(.+?)$/m);
  return m ? m[1].trim() : null;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function buildTechArticle(args) {
  const today = args.date || todayIso();
  const block = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: args.title,
    description: args.subtitle || args.title,
    datePublished: today,
    dateModified: today,
    lastReviewed: today,
    inLanguage: 'en',
    author: args.author,
    publisher: {
      '@type': 'Organization',
      name: 'Medium',
      url: 'https://medium.com',
    },
    mainEntityOfPage: args.canonical ? { '@type': 'WebPage', '@id': args.canonical } : undefined,
    image: args.coverImage || undefined,
    about: args.tags.map(t => ({ '@type': 'Thing', name: t })),
    keywords: args.tags.join(', '),
    proficiencyLevel: 'Intermediate',
    articleSection: 'Software Engineering',
  };
  return JSON.parse(JSON.stringify(block));
}

function buildFAQPage(args) {
  const entities = args.faqs.map(faq => {
    const colonIdx = faq.indexOf(':');
    if (colonIdx < 0) return null;
    const question = faq.slice(0, colonIdx).trim().replace(/\?$/, '') + '?';
    const answer = faq.slice(colonIdx + 1).trim();
    return {
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    };
  }).filter(Boolean);

  if (entities.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entities,
  };
}

function render(block) {
  return `<script type="application/ld+json">\n${JSON.stringify(block, null, 2)}\n</script>`;
}

function main() {
  const args = parseArgs(process.argv);

  if (args.auto) {
    let input = '';
    try {
      input = readFileSync(0, 'utf8');
    } catch (err) {
      console.error(`emit-schema-ld: cannot read stdin: ${err.message}`);
      process.exit(2);
    }
    const extracted = extractTitleFromMarkdown(input);
    if (extracted && !args.title) args.title = extracted;
  }

  if (!args.title) {
    console.error('emit-schema-ld: --title is required (or pass --auto with a post body on stdin)');
    process.exit(2);
  }

  if (args.tags.length === 0) {
    console.error('emit-schema-ld: --tags is required (comma-separated)');
    process.exit(2);
  }

  if (args.author.name === '{{USER_NAME}}' || args.author.name.includes('{{')) {
    console.error('');
    console.error('====================================================================');
    console.error('WARNING: you are using the default author placeholders.');
    console.error('Override with --author-name, --author-url, etc. for real posts.');
    console.error('See PERSONALIZATION.md for the full list.');
    console.error('====================================================================');
    console.error('');
  }

  const tech = buildTechArticle(args);
  const faq = buildFAQPage(args);
  const person = { '@context': 'https://schema.org', ...args.author };

  console.log(render(tech));
  console.log('');
  if (faq) {
    console.log(render(faq));
    console.log('');
  }
  console.log(render(person));
}

main();
