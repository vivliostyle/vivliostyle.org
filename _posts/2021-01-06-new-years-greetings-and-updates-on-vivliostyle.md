---
title: New Year's Greetings and Updates on Vivliostyle
lang: en
image: /assets/posts/2021-01-06-new-years-greetings-and-updates-on-vivliostyle/fig1.png
author:
  - ogwata
tags:
  - Release
  - Vivliostyle Core
  - Vivliostyle Pub
  - Vivliostyle CLI
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2021-01-06-new-years-greetings-and-updates-on-vivliostyle/fig1.png" alt="Implementation of named strings in Vivliostyle Viewer" style="width: 400px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></div>


## Introduction

Happy New Year to you all! Vivliostyle would like to thank all the contributors who have collaborated with us on our projects over the last year and all the users of our products.

Last year was a year of preparation for Vivliostyle, as we set up our development system and launched new projects. This year, we would like to make the most of our achievements and make a big leap forward.

Last year Vivliostyle has been steadily updating and adding features. Originally, we should have announced the release on this blog, but we ware unable to do so last year. So we'd like to give you a brief overview of Vivliostyle's current development status in this post.

## Added features for vivliostyle.js

First, let's talk about vivliostyle.js, the foundation of the entire project. The complete changelog of [vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js) can be found on the [GitHub release history page](https://github.com/vivliostyle/vivliostyle.js/releases). The following two features are especially worth highlighting:

- [v2.2.0 (2020-11-26)](https://github.com/vivliostyle/vivliostyle.js/releases/tag/v2.2.0).......Add page slider in Vivliostyle Viewer UI.
- [v2.4.0 (2020-12-28)](https://github.com/vivliostyle/vivliostyle.js/releases/tag/v2.4.0).......Support [named strings<i class="fas fa-external-link-alt"></i>](https://www.w3.org/TR/css-gcpm-3/#named-strings)for running headers and footers.

One of the most promising ones is “named strings”. The following test page will allow you to see how this property can be used.

- [Test cases / Named Strings](https://raw.githack.com/vivliostyle/vivliostyle.js/master/packages/core/test/files/#Named_Strings)

 Click on “stable” or “canary” to launch the latest versions of Vivliostyle Viewer (shown in the figure above). Both of them contain the “named strings” feature. Clicking on “2019.11” or “2018.2” will launch an older version of Vivliostyle Viewer (shown in the figure below) without said “named strings” feature. This way you can compare versions of Vivliostyle with or without the “named strings” feature.

If you are familiar with publishing, you may recognize this feature as useful for running headers. And it does work for that, but it is not the only way to use “named strings”. For example, it can be used in the body element, which allows you to substitute any string you specify as “named strings” in the body or headings, such as the title of a book or the name of the author.

We also want to express our deepest gratitude to Japan Business Press Co.Ltd for their support in the development of these versions.

## Vivliostyle CLI v3.0 and output to webbook

Next, let's take a look at the development status of Vivliostyle CLI. The current version is v2.1.2, and the update history is also available on the [GitHub release history page](https://github.com/vivliostyle/vivliostyle-cli/releases). If you look at this page, you will notice that Release 3.0.0-pre.5 is at the top. In fact, we are currently working on a major update. The specifications for v3.0 are summarized below.

- [Vivliostyle CLI v3.0 new spec](https://github.com/vivliostyle/community/wiki/Vivliostyle-CLI-v3.0-new-spec)

The centerpiece of the specification is the addition of the WebBook generation function. This allows you to load Markdown (VFM) files and output webbooks (formats that combine HTML files for making books and related files such as CSS, images, fonts, etc. into folders). For information on what a webbook is, please refer to representative director Murakami's announcement at the developer event in autumn 2020 below.

- [これからのオープンな出版標準としての「WebBook」](https://github.com/vivliostyle/community/wiki/Rapid-publishing-for-public-health-books-against-COVID-19#%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%81%AA%E5%87%BA%E7%89%88%E3%81%AE%E6%A8%99%E6%BA%96%E3%81%A8%E3%81%97%E3%81%A6webbook)

By outputting this webbook as an intermediate file, you will be able to easily convert it to EPUB, Web pages, PDF, etc. from there. It's a dream come true!

In addition, there is an ongoing discussion about the v3.0 specification at [Issue #86](https://github.com/vivliostyle/vivliostyle-cli/issues/86), so if you are interested, please join in.

## And about Vivliostyle Pub

Finally, let's talk about our main goal, Vivliostyle Pub. vivliostyle.js and Vivliostyle CLI 3.0 that we have mentioned so far are all elemental technologies of Vivliostyle Pub. Its requirements specification is summarized below.

- [Vivliostyle Pub v1 要件仕様 (WIP)](https://github.com/vivliostyle/community/wiki/Vivliostyle-Pub-v1-Req)

The aforementioned Vivliostyle CLI 3.0 is the most important component of Vivliostyle Pub, as can be seen from the fact that webbook is one of the content formats that Vivliostyle Pub can generate.

We hope that by steadily advancing these developments, we will be able to spread our wings in a big way this year. Please support us!
