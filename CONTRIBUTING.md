# Contributing

Thanks for the interest. Skills in this repo are kept small, opinionated, and personal — so the contribution bar is high on purpose.

## What makes a good PR

- **One change per PR.** Don't bundle a new skill with a fix to an existing one.
- **No drive-by rewrites.** If you want to rewrite a section, propose it in an issue first. Many style choices are deliberate (Ogilvy + Kern voice, sentence length, banned words) — surprising a maintainer with a 200-line rewrite is not the move.
- **No personal data in the public skill.** Skills ship generic. Personalization goes in `PERSONALIZATION.md`, not in the workflow. See the existing `case-study-publisher/PERSONALIZATION.md` for the pattern.
- **Tests if you touch a script.** Each script in `scripts/` should have a one-liner invocation you can paste in your PR description to prove it still works.

## Adding a new skill

1. Open an issue first. Describe the workflow, the trigger phrases, and the expected output.
2. Once the maintainer signs off, fork the repo.
3. Create `skills/<your-skill-name>/` with:
   - `SKILL.md` (YAML frontmatter + workflow)
   - `references/` (the reusable docs the skill loads)
   - `scripts/` (deterministic tools, if any)
   - `assets/` (output templates, if any)
   - `PERSONALIZATION.md` (how to customize the placeholders)
4. Add a row to the skills table in the root `README.md`.
5. Open a PR with:
   - The issue link
   - A one-line test command per script
   - A sample invocation

## Style

- Plain words. Short sentences. Ogilvy + Kern voice.
- No AI slop. Run your own draft through the `flag-slop.mjs` check before submitting.
- No filler intros in commit messages or PR descriptions.
- No "Made with love" footers in code or docs.

## License

By contributing, you agree your contributions are MIT licensed under the same terms as the rest of this repo.
