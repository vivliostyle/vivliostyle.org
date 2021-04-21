---
title: Updates on Vivliostyle—Improved CLI and CSS Paged Media support
lang: en
author:
  - murakami
tags:
  - Release
  - Vivliostyle Core
  - Vivliostyle Viewer
  - Vivliostyle CLI
---

Vivliostyle's recent significant updates include improved preview functionality in the Vivliostyle CLI and enhanced support for the CSS Paged Media specifications.

## Vivliostyle CLI's preview improved: Vivliostyle Viewer integration

Starting with Vivliostyle CLI v3.2, the preview feature has been replaced with a full-featured Vivliostyle Viewer instead of the classic simple previewer. The main improvements and benefits of this change are as follows:

- Improved usability, including spread view mode, page slider, and navigation through the table of contents panel
- The displayed location is now retained without returning to the first page when reloading by updating the manuscript file.
- User style sheets can now be specified to change the page layout when typesetting existing Web or EPUB content.
- No need to install Vivliostyle Viewer separately, or set up a local web server to use it

For information on how to install and use the Vivliostyle CLI, see the [Vivliostyle CLI User Guide](https://docs.vivliostyle.org/#/vivliostyle-cli).

For detailed updates, see [Vivliostyle CLI changelog](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CHANGELOG.md).


## Improved support for the CSS Paged Media specification

With the recent [Vivliostyle.js (Core)](https://github.com/vivliostyle/vivliostyle.js) upgrades (v2.4–v2.8), support for [CSS Paged Media](https://www.w3.org/TR/css-page-3/), the basic standard for CSS typesetting, and related CSS specifications has been improved:

- [Named strings](https://www.w3.org/TR/css-gcpm-3/#named-strings) / [v2.4 (2020-12-28)](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#240-2020-12-28)
  - for running headers and footers, retrieving text from elements such as headings in the document body.
- [:nth() page selector](https://www.w3.org/TR/css-gcpm-3/#document-page-selectors) / [v2.5 (2021-02-26)](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#250-2021-02-26)
  - for styling the Nth page in a document
- [Named pages](https://www.w3.org/TR/css-page-3/#using-named-pages) / [v2.7 (2021-04-07)](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#270-2021-04-07)
  - for styling pages by defining named page rule for each page type.
- [:blank page selector](https://www.w3.org/TR/css-page-3/#blank-pseudo) / [v2.8 (2021-04-16)](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#280-2021-04-16)
  - for styling blank pages caused by spread breaks (forced page break with left or right specified).

For detailed updates, see [Vivliostyle.js changelog](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md).


### "CSS Paged Media implementation in Vivliostyle.js"

"CSS Paged Media implementation in Vivliostyle.js" was presented at the online event [Vivliostyle User/Dev Meetup 2021 Spring (Japanese)](https://vivliostyle.connpass.com/event/208401/) on April 10, 2021. Please see the slides:

- [CSS Paged Media implementation in Vivliostyle.js (View with Vivliostyle Viewer)](https://bit.ly/vivliostyle202104en)
  - [HTML](https://vivliostyle.github.io/vivliostyle_doc/en/events/vivliostyle-css-paged-media-20210410/slide.html)
  - [Source (GitHub)](https://github.com/vivliostyle/vivliostyle_doc/tree/gh-pages/en/events/vivliostyle-css-paged-media-20210410)
