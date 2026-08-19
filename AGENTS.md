# Vivliostyle.org AI Coding Guide

This repository is the source of the project website <https://vivliostyle.org>.

## Generative AI Policy

This project discloses its generative AI usage in [`AI_POLICY.md`](AI_POLICY.md).
The policy is shared across the Vivliostyle organization; when it changes in
`vivliostyle/vivliostyle.js`, mirror the change here.
Agents must follow that policy:

- Add an `Assisted-by:` trailer naming the agent and the exact model version to every
  commit that contains AI-generated changes, in the Linux-kernel format
  `Assisted-by: AGENT_NAME:MODEL_VERSION` (model version in lowercase, hyphen-separated
  words), e.g. `Assisted-by: Claude Code:claude-opus-5`. Do not add a
  `Co-authored-by:` trailer for the AI.
- When drafting a pull request description, include the same `Assisted-by:` line in the
  body, and describe the human/AI division of labor (what was delegated to the AI, and
  what the human contributor designed, decided, reviewed, and verified) inside a
  `<details>` block, following the example in `AI_POLICY.md`.
- Never emit content that reproduces third-party copyrighted material.

Agent guidance for this repository lives only in this file. `CLAUDE.md` is a symlink to
`AGENTS.md` so every agent reads the same source; edit `AGENTS.md` to extend the guide.
Likewise, `.claude/skills` is a symlink to `.agents/skills`.

## Site structure

A [Jekyll](https://jekyllrb.com/) site built with the `github-pages` gem.

- `_config.yml` — site settings, plugins, and the `defaults` block that assigns
  `lang: ja` to everything under `ja/` and `_posts/ja/`
- `_layouts`, `_includes`, `_sass` — templates and styles
- `_data/*.yml` — content data shared by the templates (see below)
- `_posts/` (English) and `_posts/ja/` (Japanese) — blog posts; permalinks are
  `/blog/...` and `/ja/blog/...`
- `tutorials/`, `ja/tutorials/` — tutorial pages (HTML), with images and downloadable
  samples under `assets/tutorials/en/` and `assets/tutorials/ja/`
- `assets/posts/` — images for blog posts
- `viewer/`, `downloads/` — the bundled Vivliostyle Viewer and its zip archive
- `_site/`, `vendor/` — build output and bundled gems; both are ignored by git

Repository documentation that is not part of the website (`README.md`, `LICENSE`,
`AI_POLICY.md`, `AGENTS.md`, `CLAUDE.md`, ...) is listed under `exclude:` in
`_config.yml`; add any new root-level document there, or Jekyll will copy it into the
published site.

## Bilingual layout

English pages live at the repository root (`index.md`, `getting-started.md`,
`faq.md`, ...) and their Japanese counterparts live under `ja/` with the same file
name. **A change to one language almost always needs the same change in the other**;
say so explicitly when only one side is intentionally being changed.

Some Japanese-only pages exist (`ja/privacy-policy.md`, `ja/hands-on/`), so check for
the counterpart before assuming it is missing by mistake.

Files under `_data/` are shared by both languages, in three shapes:

- top-level language keys — `global_header.yml`, `global_footer.yml`, `language.yml`,
  `toc.yml`, `404.yml` start with `en:` / `ja:`, so each language is edited separately
  inside one file.
- per-field language keys — `people.yml`, `project.yml`, `jumbotron.yml` and friends
  are keyed by entry, with `ja:` / `en:` under the individual text fields.
- language-neutral — `sponsor.yml`, `book.yml` hold data rendered identically in both
  languages.

## Sponsor data

`_data/sponsor.yml` is the single source for **all** sponsor listings: it is read by
`_includes/sponsors.html` and `_includes/all-sponsors.html`, which are used by
`index.md`, `about-us.md`, `sponsors.md` and their `ja/` counterparts — six pages in
two languages from one file.

The structure is three levels of nested `tier:` lists:

```yaml
- name: Monthly Sponsors      # section
  tier:
    - name: Basic Sponsors    # group
      tier:
        - badge: 💐           # tier badge
          users:
            - name: libroworks
```

Commented-out sections at the top of the file are placeholders for higher tiers that
currently have no sponsors; leave them in place.

Breaking the YAML breaks the build of every page, so validate after editing:

```bash
python3 -c "import yaml; yaml.safe_load(open('_data/sponsor.yml'))"
```

Sponsor tiers and badges must match the project's GitHub Sponsors settings; verify
against the GitHub Sponsors "Active sponsors", "Sponsor tiers", and "Activity feed"
screens rather than guessing from the existing list.

## Local build

```bash
bundle install                # first time only (installs into vendor/bundle)
bundle exec jekyll build      # build into _site/
bundle exec jekyll serve      # build and serve at http://localhost:4000/
```

`Gemfile.lock`, `.bundle/`, and `_site/` are gitignored — never commit them.

## Deployment

The site is served by **GitHub Pages** with the legacy (Jekyll) build, from the root of
the `master` branch, on the custom domain `vivliostyle.org` (see `CNAME`). Merging to
`master` publishes; there are no per-PR preview deployments. The only check that runs
on a pull request is the CLA check, so verify rendering with a local
`bundle exec jekyll serve` before asking for review.

## Automated commits

Commits authored by `Vivliostyle (CI) <vivliostyle@vivliostyle.org>` with the message
`Update Vivliostyle Latest release (...)` are pushed from the Vivliostyle Viewer release
pipeline. They update `viewer/`, `downloads/vivliostyle-viewer-latest.zip`, and the
version fields in `_data/project.yml`. Do not hand-edit those files; if a version looks
wrong, fix it at the source repository.

## Commit and pull request conventions

Follow [Conventional Commits](https://conventionalcommits.org):

- **Format**: `<type>[optional scope]: <description>`
- **Types**: `docs:` (most changes here), `fix:`, `feat:`, `chore:`
- **Scope**: the affected area, e.g. `fix(tutorials/en):`, `docs(tutorials):`
- **Description**: imperative mood, no period
- **Examples** from the history:
  - `docs: move y-mikou to past sponsors`
  - `fix(tutorials/en): remove incorrect "not pre-listed" claim in customize`
  - `docs(tutorials): add Vivliostyle CLI v10.5 to Prerequisites (ja/en)`

Work on a topic branch cut from `master` and open a pull request; the default branch is
`master` and the remote is named **`origin`** (in `vivliostyle/vivliostyle.js` the same
remote is called `upstream` — do not mix them up).
