#!/usr/bin/env node
/**
 * build-frontmatter.mjs — generate per-platform frontmatter for a case study.
 *
 * Outputs three YAML frontmatter blocks (Dev.to, Hashnode, Medium meta
 * suggestions). Copy-paste into each platform's editor.
 *
 * Usage:
 *   node build-frontmatter.mjs \
 *     --title "How a 3-line filter fixed a 21x data divergence bug" \
 *     --description "A 3-line filter, 5,622 polluted rows, and a 6-week silent data divergence." \
 *     --tags "cloudflare,d1,sqljs,postmortem,debugging" \
 *     --canonical "{{MEDIUM_URL}}/3-line-filter-21x-divergence" \
 *     --cover "{{PORTFOLIO_URL}}/og/3-line-filter.png" \
 *     --series "{{PROJECT_NAME}} postmortems"
 */

function parseArgs(argv) {
  const args = {
    title: null,
    description: null,
    tags: [],
    canonical: null,
    cover: null,
    series: null,
    domain: null,
    published: true,
  };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    const next = argv[i + 1];
    switch (arg) {
      case '--title': args.title = next; i++; break;
      case '--description': args.description = next; i++; break;
      case '--tags': args.tags = next.split(',').map(t => t.trim()).filter(Boolean); i++; break;
      case '--canonical': args.canonical = next; i++; break;
      case '--cover': args.cover = next; i++; break;
      case '--series': args.series = next; i++; break;
      case '--domain': args.domain = next; i++; break;
      case '--draft': args.published = false; break;
      default: console.error(`unknown arg: ${arg}`); process.exit(2);
    }
  }
  return args;
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
}

function devtoFrontmatter(args) {
  const tags = args.tags.slice(0, 4); // Dev.to max 4
  const lines = [
    '---',
    `title: "${args.title.replace(/"/g, '\\"')}"`,
    `published: ${args.published}`,
    `description: "${(args.description || '').replace(/"/g, '\\"')}"`,
    `tags: ${tags.join(', ')}`,
  ];
  if (args.series) lines.push(`series: "${args.series}"`);
  if (args.canonical) lines.push(`canonical_url: ${args.canonical}`);
  if (args.cover) lines.push(`cover_image: ${args.cover}`);
  lines.push('---');
  return lines.join('\n');
}

function hashnodeFrontmatter(args) {
  const slug = slugify(args.title);
  const tags = args.tags.slice(0, 5); // Hashnode max 5
  const lines = [
    '---',
    `title: ${args.title.replace(/"/g, '\\"')}`,
    `subtitle: "${(args.description || '').replace(/"/g, '\\"')}"`,
    `slug: ${slug}`,
    `tags: ${tags.map(t => t.toLowerCase()).join(', ')}`,
  ];
  if (args.domain) lines.push(`domain: ${args.domain}`);
  if (args.canonical) lines.push(`canonical: ${args.canonical}`);
  if (args.cover) lines.push(`coverImage: ${args.cover}`);
  if (args.series) lines.push(`# series: ${args.series}`);
  lines.push('---');
  return lines.join('\n');
}

function mediumMeta(args) {
  // Medium has no frontmatter — just print the UI fields to set
  return [
    '# Medium publish fields (set in the editor UI, not in markdown)',
    `# Title:    ${args.title}`,
    `# Subtitle: ${args.description || '(none — set the TL;DR as the subtitle)'}`,
    `# Tags (5 max): ${args.tags.slice(0, 5).join(', ')}`,
    `# Cover image: ${args.cover || '(upload a 1400x788 image)'}`,
    `# Canonical URL: ${args.canonical || '(after publish, set in story settings to the published Medium URL)'}`,
    '',
    '# Recommended publish time: Tue/Wed/Thu 9-11 AM US Eastern (5-7 PM Dubai time)',
    '# Cross-post to Dev.to + Hashnode 1-2 days AFTER Medium publish.',
  ].join('\n');
}

function hackernoonPitch(args) {
  return [
    '# HackerNoon submission',
    '',
    '**Headline options** (pick the one HackerNoon editors will bite on):',
    ...[args.title, args.title.split(':')[0], args.title.split('?')[0]]
      .filter((v, i, a) => v && a.indexOf(v) === i)
      .slice(0, 3)
      .map(t => `- ${t}`),
    '',
    '**Pitch (3 sentences max):**',
    args.description,
    '',
    '**Tags (1-3):**',
    args.tags.slice(0, 3).map(t => `- ${t}`).join('\n'),
    '',
    '**Submission URL:** https://hackernoon.com/submit-a-story',
    '**Alternative:** email the Medium post URL + this pitch to submission@hackernoon.com',
    '',
    '**Note:** HackerNoon prefers 800-1500 word posts. If your case study is longer,',
    'condense it for HackerNoon — cut the Background section, tighten the code blocks,',
    'keep the lesson and the FAQ.',
  ].join('\n');
}

function main() {
  const args = parseArgs(process.argv);

  if (!args.title) {
    console.error('build-frontmatter: --title is required');
    process.exit(2);
  }
  if (args.tags.length === 0) {
    console.error('build-frontmatter: --tags is required (comma-separated)');
    process.exit(2);
  }

  console.log('========== Dev.to frontmatter ==========\n');
  console.log(devtoFrontmatter(args));
  console.log('\n\n========== Hashnode frontmatter ==========\n');
  console.log(hashnodeFrontmatter(args));
  console.log('\n\n========== Medium meta ==========\n');
  console.log(mediumMeta(args));
  console.log('\n\n========== HackerNoon pitch ==========\n');
  console.log(hackernoonPitch(args));
}

main();
