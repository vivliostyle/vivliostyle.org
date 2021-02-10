---
title: Vivliostyle CLI has been majorly upgraded to v3
lang: en
image: /assets/posts/2021-02-08-Vivliostyle-CLI-is-Major-Upgrade-to-v.3/vivliostyle-v3-instruction-720p.png
author:
  - ogwata
tags:
  - リリース
  - Vivliostyle CLI
  - Vivliostyle Pub
  - VFM
  - Vivliostyle Themes
---
<div style="float: right; margin: 0 0 1em 1em;"><video src="/assets/posts/2021-02-08-Vivliostyle-CLI-is-Major-Upgrade-to-v.3/vivliostyle-v3-instruction-720p.mp4"  controls alt="New release of Vivliostyle CLI v.3" style="width: 400px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></div>


In our first entry of the year, [“New Year's Greetings and Updates on Vivliostyle”](https://vivliostyle.org/blog/2021/01/06/new-years-greetings-and-updates-on-vivliostyle/), we wrote that Vivliostyle CLI v3 was being prepared, and we are happy to announce that v3.0.0 was officially released on February 7!


- [vivliostyle/vivliostyle-cli/release/v3.0.0](https://github.com/vivliostyle/vivliostyle-cli/releases/tag/v3.0.0)

As a major upgrade,  includes many changes. Let's list just some of a major new features:

- Publications can now be customized using a `vivliostyle.config.js` configuration file
- [Vivliostyle Themes](https://github.com/vivliostyle/themes) can now be specified as a style.
- The following input formats are now also accepted:
    - [“VFM”](https://vivliostyle.org/make-books-with-create-book/#lets-write-a-manuscript-with-vfm)......Markdown enhanced for books.
    - “EPUB”......De facto format in e-books.
- We support the following output format:
    - [webpub](https://github.com/vivliostyle/community/wiki/Rapid-publishing-for-public-health-books-against-COVID-19#%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%81%AA%E5%87%BA%E7%89%88%E3%81%AE%E6%A8%99%E6%BA%96%E3%81%A8%E3%81%97%E3%81%A6webbook)......HTML exchange format (Same as “webbook” in [the entry of 2021/01/06.](https://vivliostyle.org/blog/2021/01/06/new-years-greetings-and-updates-on-vivliostyle/#vivliostyle-cli-v30-and-output-to-webbook) Same as “webbook”. The reason for the change is [here](https://github.com/vivliostyle/vivliostyle-cli/pull/116))

Of the above, [@spring_raining<i class="fas fa-external-link-alt"></i>](https://twitter.com/spring_raining), a contributor, made a short video about the configuration file, Vivliostyle Themes, and the build process using VFM. The video is shown at the beginning of this entry. Here is a detailed timeline of the video:

1. Overview of the work. (to 0.01 sec.)
2. Generate configuration files using a terminal. (to 0.02 sec.)
3. Load the configuration file `Vivliostyle.config.js`. (to 0.12 sec.)
4. Customize by overwriting the configuration files. (to 0.21 sec.)
5. Using a terminal to load the style file.  ([Bunko Theme](https://github.com/vivliostyle/themes#bunko)). (to 0.27 sec.)
6. Use a terminal to read Markdown file, then build and output PDF file. (to 0.47 sec.)
7. Using [Chromium<i class="fas fa-external-link-alt"></i>](https://www.chromium.org/Home) to Preview Typesetting Results.(to 1.05 sec.)
8. Export PDF file from Chromium. (to 1.15 sec.)

With the above mentioned upgrade to , the utility of the Vivliostyle CLI has been greatly improved. The CLI is a key component at the heart of [Vivliostyle Pub](https://github.com/vivliostyle/vivliostyle-pub), which we hope to release this year. Please stay tuned for Vivliostyle's next step!
