---
title: JavaScript can now be used in typesetting by Vivliostyle
lang: en
image: /assets/posts/2022-01-24-JavaScript-can-now-be-used-in-typesetting-by-Vivliostyle/fig-1.png
author:  ogwata
tags:
  - Release
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2022-01-24-JavaScript-can-now-be-used-in-typesetting-by-Vivliostyle/fig-1.png" alt="JavaScript can now be used in typesetting by Vivliostyle" style="width: 620px;" /><figcaption>DynaFont's "DF Jade Fang Song StdN W4" in Vivliostyle Pub, currently under development.</figcaption></div>

## Introduction

Vivliostyle.js was updated to v2.13.0 on January 17, 2022, and Vivliostyle CLI was updated to v4.6.0 on January 18, 2022. Please see below for details of the updates:

- [vivliostyle /vivliostyle.js /CHANGELOG.md](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md)
- [vivliostyle /vivliostyle-cli /CHANGELOG.md](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CHANGELOG.md)

The highlight of this update is that JavaScript can now be used for CSS typesetting. In the previous versions, if JavaScript code was included in the HTML, it was removed internally. However, if JavaScript was left unusable, it would limit the utility of Vivliostyle products. Therefore, we have made this available in this update.

## Benefits of JavaScript Support in Web Fonts

One of the most significant advantages is the availability of Web font services that use JavaScript. In general, there are three ways to load Web fonts (examples of the corresponding service names are in parentheses):

1. Load fonts from the internet with `@font-face`.
2. Load fonts via external style sheets with `@import` or `link` elements (DynaFont, Google Fonts, etc.).
3. Load fonts using JavaScript (DynaFont, Adobe Fonts, TypeSquare, FONTPLUS, etc.).

One of the bottlenecks in using web fonts is that the speed at which the fonts load depends on the speed of the network. This tends to slow down the display process. This problem is more pronounced with CJK (Chinese, Japanese, and Korean) fonts, which have larger character sets. However, if you use the method 3 above, you can speed up the loading process by using JavaScript to load the target HTML and create a subset that extracts only the necessary characters (dynamic subsetting).

In other words, if you want to use web fonts in Chinese, Japanese, or Korean, using JavaScript can be very effective. However, Vivliostyle has not been able to support this until now.

## How to use web fonts with JavaScript in Vivliostyle CLI

Test samples of each Web font service actually used with Vivliostyle Viewer is available below:

- [Test samples of each Web font service](https://github.com/vivliostyle/vivliostyle.js/issues/735#issuecomment-1006275491)

By the way, some web font services require domain registration (registration of the site to be used) as a condition of use. On the other hand, Vivliostyle CLI has been using the file protocol to load HTML documents. However, the file protocol does not allow for domain registration. So, in this update, we added a new option to load with http protocol. Specifically, it can be used as follows:

1. Register `http://localhost:13000` as a site to be used with web fonts to the web font service in advance (see below for the differences between each company).
2. Run Vivliostyle CLI with the option `--http`.

For more detailed information, please refer to the following:

- [ Feat/http hosting #234 ](https://github.com/vivliostyle/vivliostyle-cli/pull/234)

However, please keep in mind that there are minor differences among web font services when actually registering domains. The following is a summary for your reference.

### FONTPLUS

Register the “site URL” including `https://`, etc. To use the Vivliostyle CLI with the `--http` option, register `http://localhost:13000/`.

### TypeSquare

Register a “domain name” that does not include `https://`, etc. To use the Vivliostyle CLI with the `--http` option, register `localhost`.

### DynaFont

Domain registration is a requirement for use, but localhost can be used without domain registration. Please refer to their FAQ below (The original text is in Japanese, but we have translated it into English below):

- [Q: Can I use Web fonts in my local environment?<i class="fas fa-external-link-alt"></i>](https://www.dynacw.co.jp/support/support_faq_detail.aspx?qid=456&fcid=223)

> Answer: In response to the demand for developing in a local environment, DynaFont Online allows you to display web fonts on a local server. By setting up a local server on your PC and placing the target HTML and CSS files in the localhost folder, you can access `https://localhost/` from your browser to display the web fonts.

## Other benefits of JavaScript support

The benefits of JavaScript support are not limited to web fonts. Various JavaScript libraries that are widely available today, such as the following libraries, can now be used in Vivliostyle:

- [Make music scores “VexTab”<i class="fas fa-external-link-alt"></i>](http://vexflow.com/vextab/tutorial.html)
    - [Testing with Vivliostyle Viewer](https://vivliostyle.vercel.app/#src=https://raw.githack.com/0xfe/vextab/master/doc/tutorial.html)
- [Make charts “Charts.js”<i class="fas fa-external-link-alt"></i>](https://www.chartjs.org/)
    - [Testing with Vivliostyle Viewer](https://vivliostyle.vercel.app/#src=https://raw.githack.com/zopyx/print-css-rocks/master/lessons/lesson-chart-js/index.html)

## Conclusion

This article provides a brief summary of the JavaScript support in this update. For more detailed information, please refer to the following issues:

- [Allow JavaScript in HTML documents #733](https://github.com/vivliostyle/vivliostyle.js/issues/733)
- [Support Web fonts loaded via JavaScript #735](https://github.com/vivliostyle/vivliostyle.js/issues/735)