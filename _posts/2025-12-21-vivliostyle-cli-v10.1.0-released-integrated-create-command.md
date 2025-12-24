---
title: Vivliostyle CLI v10 Released! Integrated create Command Makes Book Creation Smoother
date: 2025-12-21
lang: en
image: /assets/posts/2025-12-21-vivliostyle-cli-v10.1.0-released-integrated-create-command/vivliostyle-cli_v10.png
author: ogwata
tags:
  - Release
---

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2025-12-21-vivliostyle-cli-v10.1.0-released-integrated-create-command/vivliostyle-cli_v10.png" alt="Vivliostyle CLI v10" style="width: 500px;" /></div>



**Vivliostyle CLI**, the command-line tool that powers the CSS typesetting ecosystem, has officially released its latest major version: **v10**!

This update focuses on integrating [create-book](https://github.com/vivliostyle/create-book), which was previously provided as a peripheral tool, into the main CLI to create a more seamless user experience, while also enabling fine-grained control for professional use cases.

In this article, we'll introduce the major changes in v10 and explain how they will transform your book-making workflow.

---

## 1. `create-book` Integrated into CLI: Start Projects Instantly with the `create` Command

Until now, many users have been using `create-book`, a separate scaffolding tool, when starting a new book (project) with Vivliostyle.

In v10, **the functionality of `create-book` has been fully integrated into Vivliostyle CLI itself.**

This means you can now create projects interactively as a standard feature of Vivliostyle CLI, without having to think about external tools.

### An Interactive Interface That Gets You Started Without Confusion

Usage is simpler than ever. Just enter the following command in your terminal to launch the familiar setup wizard.

```bash
# First, install Vivliostyle CLI (administrator privileges may be required)
npm install -g @vivliostyle/cli

# Then run the create command
vivliostyle create
```

Alternatively, you can run the `create` command without installing Vivliostyle CLI:

```
npm create book@latest
```

When you run the command, an interactive prompt will display several questions in English. Answer them, and a directory with all the necessary files will be automatically generated.

By consolidating what was previously an independent feature into `vivliostyle create`, the workflow from installation to project creation has been streamlined. This provides a clearer, more intuitive experience for those just getting started with Vivliostyle.


## 2. Major Evolution in PDF Output Engine Options

PDF output is the core functionality of Vivliostyle CLI.
This is achieved by running a browser (Headless Browser) in the background and printing the rendered result. With this update, the browser control functionality has been completely revamped.

### Specify Not Just Browser Type, but Also Version

With this update, you can now switch between Chrome, Chromium, and Firefox as the browser to use. But that's not all—**you can now specify the browser "version" as well.**

This is an extremely important feature for users who automate document generation in their workflows.

Browser typesetting engines are constantly evolving, but occasionally "the layout breaks with the latest browser version when it worked fine before." With this update, you can now strictly specify the version in your configuration file (`vivliostyle.config.js`) or command options.

```javascript
// Example vivliostyle.config.js
module.exports = {
  // ...
  browser: 'chrome@143.0.7499.42', // Lock to a specific version
  // ...
};
```

## 3. Other Improvements in v10

After the v10.0 release, the development team has been making minor bug fixes and feature improvements based on user feedback. The newly released **v10.1** is the "Stable" version that includes all these fixes.

In particular, the following important updates related to typesetting quality and development environment are included:

* **Automatic Hyphenation Now Available on All Operating Systems**
`hyphens: auto` (CSS automatic hyphenation), which previously didn't work on some OS environments, now functions correctly on Windows, Mac, and Linux. This allows for more beautiful line break positions to be automatically calculated in text containing Western languages.
* **Updated Node.js Support Versions**
Supported Node.js versions have been changed to 20 or 22 and above. Optimizations have been made to align with the latest JavaScript runtime environment.

These changes were implemented after discussions in numerous Issues and Pull Requests on GitHub. We would like to express our deep gratitude to the community members who contributed to development and those who reported issues.


## Experience the New Vivliostyle CLI Today

The `create` command, now even easier to use thanks to feature integration, and robust browser control functionality that meets professional demands.
Please make use of the evolved Vivliostyle CLI in your book-making projects.

### How to Update

If you're using npm, you can update to the latest version with the following command:

```bash
npm install -g @vivliostyle/cli
```

(If you have it installed locally in a project, please update the `package.json` in each project)

### Related Links

For detailed changes and technical background, please also refer to the following links:

* **Release Notes:** [GitHub Releases](https://github.com/vivliostyle/vivliostyle-cli/releases)
* **README:** [vivliostyle-cli/README.md](https://github.com/vivliostyle/vivliostyle-cli/blob/main/README.md)
* **Changelog:** [vivliostyle-cli/CHANGELOG.md](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CHANGELOG.md)

Vivliostyle will continue to evolve to bring "writing" and "publishing" closer together.
We look forward to seeing what wonderful books you create with v10.

Happy Typesetting!
