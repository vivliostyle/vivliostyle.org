---
layout: page
title: FAQ
---

<style>
.url {
  word-break: break-all;
}
</style>

{% capture license %}
## Vivliostyle Viewer FAQ

### How to use Vivliostyle Viewer in a local environment?

👉See [Vivliostyle Viewer's README: To use the distribution package `vivliostyle-viewer-*.zip`](https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/viewer/README.md#to-use-the-distribution-package-vivliostyle-viewer-zip).

### How to view my local documents with the online Vivliostyle Viewer?

First, you need to start a local web server so that your local HTML documents can be accessed in the browser. Here explains how to use Node.js's http-server as the local web server.

If Node.js is not installed, install Node.js first. 👉<span class="url"><https://nodejs.org></span>

In your Terminal (or Command Prompt on Windows), install http-server with the following command:

```
npm install -g http-server
```

Start http-server in the directory containing the HTML and CSS files you want to typeset and view, as follows:

```
http-server . --cors -o -c-1
```

This will open the URL <http://localhost:8080> of your local web server and allow you to view a list of local files in your browser. You can then find the HTML file you want to typeset and view, copy the URL, and specify it in the online Vivliostyle Viewer <span class="url"><https://vivliostyle.org/viewer/></span>.

(Here, the `--cors` option of the http-server command allows scripts in another domain to access this local server's documents, the `-o` option is to start your browser, and `-c-1` disables the cache.)

### How to view documents on GitHub or Gist with Vivliostyle Viewer?

You can view HTML documents on [GitHub](https://github.com/) or [Gist](https://gist.github.com/) with [Vivliostyle Viewer](https://vivliostyle.org/viewer/).

Example 1: To open an HTML file in GitHub <span class="url"><https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span> with Vivliostyle Viewer:
<span class="url"><https://vivliostyle.org/viewer/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span>

- You can specify the URL of a file on GitHub to Vivliostyle Viewer.

Example 2: To open an HTML file in Gist <span class="url"><https://gist.github.com/MurakamiShinyu/4f0423fd3578a277c7d29f56a31912b7#file-index-html></span> with Vivliostyle Viewer:
<span class="url"><https://vivliostyle.org/viewer/#src=https://gist.github.com/MurakamiShinyu/4f0423fd3578a277c7d29f56a31912b7/raw/af7fea921d57d6601d153101850bf95850262ece/index.html&bookMode=true></span>

- You can specify the URL of the link to the `Raw` content of a file on Gist to Vivliostyle Viewer.
- In this example, with the parameter `&bookMode=true` added to the URL, multiple HTML files linked from the table of contents in this HTML file will be loaded.

### How to view EPUB?

You can view unzipped EPUB files with Vivliostyle Viewer, with the following parameter:

```
#src=⟨URL of the unzipped EPUB folder⟩&bookMode=true
```

An example of displaying unzipped EPUB on GitHub:

- [Accessible EPUB 3](https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/) on [IDPF/epub3-samples](https://github.com/IDPF/epub3-samples/)

  <span class="url"><https://vivliostyle.org/viewer/#src=https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/&bookMode=true></span>

👉[Vivliostyle Viewer User Guide: EPUB](https://docs.vivliostyle.org/#/vivliostyle-viewer#epub)

### How to integrate Vivliostyle Viewer into my website?

[Download the Vivliostyle Viewer distribution package](https://vivliostyle.org/download/) and unzip and copy it to a public directory on your web server. The Vivliostyle Viewer is in the `viewer/` directory in the package contents. For example, if you copy the contents of the package to the directory published as `https://example.com/example/`, then `https://example.com/example/viewer/` is the URL of the Vivliostyle Viewer.

### How to enable the TOC panel?

The TOC (Table of Contents) panel is enabled by setting [**Book Mode**](#what-is-book-mode) in Vivliostyle Viewer and the HTML file contains a TOC element, e.g.:

```html
<nav role="doc-toc">
  <h2>Table of Contents</h2>
    <ol>
      <li><a href="#section1">First Section</a></li>
      <li><a href="#section2">Second Section</a></li>
      <li><a href="#section3">Third Section</a></li>
    </ol>
</nav>
```

👉[Vivliostyle Viewer User Guide: TOC panel](https://docs.vivliostyle.org/#/vivliostyle-viewer#toc-panel)

👉See also: [How to make a TOC?](#how-to-make-a-toc)

### How to typeset and view multiple HTML files concatenated?

When you enable [**Book Mode**](#what-is-book-mode) with Vivliostyle Viewer, and load an HTML file containing a table of contents element with links to other HTML file as shown below, the HTML files linked from the table of contents element are also loaded and typeset in succession:

```html
<nav role="doc-toc">
  <h2>Table of Contents</h2>
    <ol>
      <li><a href="chapter1.html">First Chapter</a>
        <ol>
          <li><a href="chapter1.html#section1">First Section</a></li>
          <li><a href="chapter1.html#section2">Second Section</a></li>
        </ol>
      </li>
      <li><a href="chapter2.html">Second Chapter</a></li>
    </ol>
</nav>
```

👉[Vivliostyle Viewer User Guide: Web publications (multi-HTML documents)](https://docs.vivliostyle.org/#/vivliostyle-viewer#web-publications-multi-html-documents)

👉See also: [How to make a TOC?](#how-to-make-a-toc)

### What is Book Mode?

Book Mode is enabled by checking the **Book Mode** checkbox in the [Vivliostyle Viewer](https://vivliostyle.org/viewer/) UI or by adding `&bookMode=true` to the URL parameter. In this mode, the following features are enabled:

- [Navigation from the TOC panel](#how-to-enable-the-toc-panel)
- [Typeset and view multiple HTML files concatenated](#how-to-typeset-and-view-multiple-html-files-concatenated)
- [Typeset and view unzipped EPUB](#how-to-view-epub)

### How to make the text size variable?

Vivliostyle Viewer's UI has the `A⁻` (Text: Smaller), `A⁺` (Text: Larger) and `A⁼` (Text: Default Size) buttons that allow you to change the size of the displayed text. However, if the style sheet specified in your document has a fixed font size, you can't change the font size from the UI.

To make the font size changeable from the UI, you must use relative length units (`%`, `em` or `rem`) for font-size. In Vivliostyle Viewer, the default font-size is 12pt (= 16px), as in the browser. If you don't set the font-size on the root element, you can use the `rem` (root em) unit to specify relative font-size (default font-size is 1rem). Doing so will enable the text size changeable from the Vivliostyle Viewer UI.

To set the root font-size in the style sheet as a relative value, you can use the `%` unit (100% = 12pt = 16px). For example:

```css
:root {
  font-size: 87.5%; /* set 1rem = 10.5pt (87.5% of 12pt) */
}
```

### How to make the page size variable?

Vivliostyle Viewer uses the content area of the browser window for the page size, unless the page size is specified in a style sheet. This allows Vivliostyle Viewer to display the page with variable size fit in the screen size.

You can also specify the page size by **User Style Preferences** → **Page Size** in Vivliostyle Viewer's settings menu. Specifying the Page Size here is equivalent to specifying the page size in a style sheet as follows:

```css
@page { size: A4; }
```

## Vivliostyle CLI FAQ

### How to enable PDF Bookmarks?

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) can automatically generate PDF Bookmarks with the table of contents data in your document. PDF Bookmarks are available for table-of-contents navigation in PDF viewing software such as Adobe Acrobat.

👉[Vivliostyle CLI User Guide: Generate PDF Bookmarks](https://docs.vivliostyle.org/#/vivliostyle-cli#generate-pdf-bookmarks)

### How to convert EPUB to PDF?

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) can generate PDF files from EPUB or unzipped EPUB files.

👉[Vivliostyle CLI User Guide: Generate PDF from EPUB](https://docs.vivliostyle.org/#/vivliostyle-cli#generate-pdf-from-epub)

### How to generate PDF for print (PDF/X-1a format)?

You can use `vivliostyle build` command with the `--press-ready` option to output in PDF/X-1a format suitable for printing.

👉[Vivliostyle CLI User Guide: Generate PDF for print (PDF/X-1a format)](https://docs.vivliostyle.org/#/vivliostyle-cli#generate-pdf-for-print-pdfx-1a-format)

## Create Book FAQ

### What is Create Book?

[Create Book](https://www.npmjs.com/package/create-book) makes an environment for creating a book.

👉[Create Book User Guide](https://docs.vivliostyle.org/#/create-book)

### How to customize a theme?

The theme packages installed by Create Book will be installed in the `node_modules` folder in the project folder, e.g., in the case of the techbook theme, `node_modules/@vivliostyle/theme-techbook/`. You can copy it to another folder, e.g., the `my-theme/` folder,  to customize it:

```
cp -R node_modules/@vivliostyle/theme-techbook/ my-theme/
```

Then, change the value of `theme:` in `vivliostyle.config.js` as follows:

```
  theme: '@vivliostyle/theme-techbook', // .css or local dir or npm package. default to undefined.
```
↓
```
  theme: 'my-theme/theme.css',
```

This will allow you to customize the style sheet at will.

The style sheet `theme.css` is created using [Sass](https://sass-lang.com/), and its source are the `*.scss` files in the `scss/` folder. To reflect the changes in the SCSS files to the CSS file, run `npm install` in the copied theme folder (`my-theme/` in this example), and then run `npm run build` or `npm run dev`.

## CSS Typesetting Techniques FAQ

### How to make a book from multiple HTML files?

👉See [Vivliostyle Viewer User Guide: Web publications (multi-HTML documents)](https://docs.vivliostyle.org/#/vivliostyle-viewer#web-publications-multi-html-documents).

👉See [Vivliostyle CLI User Guide: Configuration file vivliostyle.config.js](https://docs.vivliostyle.org/#/vivliostyle-cli#configuration-file-vivliostyleconfigjs) and [Web Publications (webpub)](https://docs.vivliostyle.org/#/vivliostyle-cli#web-publications-webpub).

### How to make a TOC?

To make a table of contents (TOC) in HTML markup, put a list of TOC entries (links to each of the headings in the body) in the block surrounded by `<nav role="doc-toc">` ... `</nav>` tags.

See the [Machine-Processable Table of Contents](https://www.w3.org/TR/pub-manifest/#app-toc-structure), an appendix of the [W3C Publication Manifest](https://www.w3.org/TR/pub-manifest/) spec.

A TOC with page numbers can be styled with style sheet such as:

```css
nav li a {
  display: inline-flex;
  width: 100%;
  text-decoration: none;
  break-inside: avoid;
  align-items: baseline;
}
nav li a::before {
  margin-left: 3px;
  margin-right: 3px;
  border-bottom: 1px dotted;
  content: "";
  order: 1;
  flex: auto;
}
nav li a::after {
  text-align: right;
  content: target-counter(attr(href url), page);
  align-self: flex-end;
  flex: none;
  order: 2;
}
```

For real examples, see the samples with "table of contents" tag in the [Vivliostyle Samples](https://vivliostyle.org/samples/) page.

👉See also:
- [How to enable the TOC panel?](#how-to-enable-the-toc-panel)
- [How to typeset and view multiple HTML files concatenated?](#how-to-typeset-and-view-multiple-html-files-concatenated)

👉See also [Vivliostyle CLI User Guide: Creating a Table of Contents](https://docs.vivliostyle.org/#/vivliostyle-cli#creating-a-table-of-contents).

### How to embed math formulas (MathML, TeX or AsciiMath)

Vivliostyle Viewer can typeset and display math formulas using [MathJax](https://www.mathjax.org/).

You can embed math formulas in your HTML document in the following formats
- MathML
- TeX formulas
- AsciiMath

MathML elements `<math>` … `</math>` can be written directly in HTML documents.

To use TeX or AsciiMath formulas, set the attribute `data-math-typeset="true"` to the HTML element containing the formula and write the formula in the text in the following way:
- Enclose the TeX formula in `\(` … `\)` or `$$`…`$$`
- Enclose AsciiMath in \` … \`

HTML source for testing formulas: <span class="url"><https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span>

Typeset and view with Vivliostyle Viewer: <span class="url"><https://vivliostyle.org/viewer/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span>

👉[vivliostyle.js issue#523: ASCIIMATH and MathJAX](https://github.com/vivliostyle/vivliostyle.js/issues/523)

### How to reset page counter in a book?

👉See [vivliostyle.js issue#522: "reset-counter: page;" doesn't work properly with web publications](https://github.com/vivliostyle/vivliostyle.js/issues/522).


## Vivliostyle License FAQ

### What open source license does Vivliostyle use?

Viviostyle uses AGPLv3 (GNU Affero General Public License, version 3) as its open source license.

AGPL is a reciprocal license (the same license applies to derivative works) similar to the GPL (GNU General Public License), which permits modification and commercial use of the software. Unlike the GPL, users over the network are guaranteed access to the source code.

References:
- [GNU Affero General Public License (AGPLv3)](https://www.gnu.org/licenses/agpl-3.0.en.html)
- [Frequently Asked Questions about the GNU Licenses](https://www.gnu.org/licenses/gpl-faq.en.html)


### Where does the copyright of the Vivliostyle source code belong?

The Vivliostyle source code has the following copyright notation: (e.g., in [epub.ts](https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/src/vivliostyle/epub.ts))

> * Copyright 2013 Google, Inc.
> * Copyright 2015 Trim-marks Inc.
> * Copyright 2018 Vivliostyle Foundation

"Copyright 2013 Google, Inc." is because Vivliostyle was originally developed based on [EPUB Adaptive Layout JavaScript-based implementation ("Adapt")](https://github.com/sorotokin/adaptive-layout), which was developed by Peter Sorotokin of Google. Google owns the rights to the source code from this original project.

Trim-marks Inc. (formerly Vivliostyle Inc.) developed Vivliostyle from 2015 to March 2018. The rights to Vivliostyle source code written during this period belong to Trim-marks Inc. In addition, the license of Vivliostyle was originally Apache License 2.0, inheriting "Adapt" of the original project, but changed to AGPLv3 from February 2017.

Vivliostyle Foundation took over the open source management of Vivliostyle after Trim-marks Inc. dropped the open source Vivliostyle in March 2018. The rights to the source code for Vivliostyle written after that belong to Vivliostyle Foundation.


### Are there open source license restrictions on publications made with Viviostyle?

No. The fact that the Viviostyle license is AGPL does not affect publications made using Viviostyle. There is no obligation to publish the source data (HTML or CSS) of the publication.


### Can I use Viviostyle in my company without restrictions?

Yes. You are free to copy and use Viviostyle within a company or organization, and you are not required to publish it even if you modify the source code.

See (GNU License FAQ):
- [Does the GPL require that source code of modified versions be posted to the public?](https://www.gnu.org/licenses/gpl-faq.en.html#GPLRequireSourcePostedPublic)
- [Is making and using multiple copies within one organization or company “distribution”?](https://www.gnu.org/licenses/gpl-faq.en.html#InternalDistribution)


### Can I use Vivliostyle Viewer or Vivliostyle Print by calling it from a commercial Web application?

Yes. [Vivliostyle Viewer](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/viewer) and [Vivliostyle Print](https://github.com/vivliostyle/vivliostyle-print) run as an independent program on the client-side browser, and so can be used in combination with server-side programs or other client-side programs even if they are proprietary.

It is also possible to modify Viviostyle (Viewer/Print) if the modified source code is published. However, the AGPL Viviostyle program and the proprietary program that calls it must not share complex data structures.

See (GNU License FAQ):
- [Can I release a nonfree program that's designed to load a GPL-covered plug-in?](https://www.gnu.org/licenses/gpl-faq.en.html#NFUseGPLPlugins)
- [I'd like to incorporate GPL-covered software in my proprietary system. I have no permission to use that software except what the GPL gives me. Can I do this?](https://www.gnu.org/licenses/gpl-faq.en.html#GPLInProprietarySystem)


### How does Viviostyle Viewer run as an independent program?

[Vivliostyle Viewer](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/viewer) consists of its main HTML file and JavaScript libraries linked from it. Even if the Vivliostyle Viewer is used in a commercial Web application and is placed on the same Web server as that Web application, it is loaded and runs on the end user's Web browser, so it is clearly separate from the Web application's server-side programs.

Data such as the URL of the document to be displayed in Vivliostyle Viewer and the display settings are specified as the URL fragment parameters added to the URL of the main HTML file of Vivliostyle Viewer. In case that the URL parameters are used to pass data between the Viviostyle program and the front-end program (JavaScript etc.) for a commercial Web application, the two programs need not to be combined, so the Viviostyle Viewer can be treated as an independent program.


### How does Viviostyle Print run as an independent program?

[Vivliostyle Print](https://github.com/vivliostyle/vivliostyle-print) is a JavaScript program that adds a printing feature to Web pages with formatting by Vivliostyle. In case that Vivliostyle Print is used from another program such as the front-end side of a commercial Web application, it invokes the main function of the Vivliostyle Print program with parameters and waits for termination. A simple return value such as an exit code or number of pages processed may be returned. In this way, the two programs do not share a complex data structure or exchange data with each other, so the Vivliostyle Print can be treated as an independent program.


### Can I use Vivliostyle CLI on the server side?

Yes. [Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli) can be called by another server-side program, and the calling program can be proprietary, as long as each runs as an independent program.


### What restrictions should I be aware of when using Vivliostyle for commercial use?

In commercial use of Vivliostyle under the AGPL license, you need to be aware of the following:

- If you modify and distribute Vivliostyle (Note: use on website is also considered to be distributed), you need to publish the modified Vivliostyle source code.
- When you create and distribute a program that runs as a single combined program incorporating Vivliostyle, you need to publish the source code of the program under the AGPL license.
- If you modify Viviostyle source code, retain the copyright notice in the header comments of the source files. The source files marked "Copyright 2013 Google, Inc." contain the source code from the original project "Adapt" which is licensed under Apache License 2.0. Retain the following description in the [README](https://github.com/vivliostyle/vivliostyle.js/blob/master/README.md) and [LICENSE](https://github.com/vivliostyle/vivliostyle.js/blob/master/scripts/package-artifacts/LICENSE.md) files:
    > Vivliostyle Core is implemented based on [Peter Sorotokin's EPUB Adaptive Layout implementation](https://github.com/sorotokin/adaptive-layout), which is licensed under [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

### What open source license does Vivliostyle Pub use?

Vivliostyle Pub is licensed under the [Apache License 2.0](https://github.com/vivliostyle/vivliostyle-pub/blob/master/LICENSE):

- 👉[Apache License 2.0<i class="fas fa-external-link-alt"></i>](https://opensource.org/licenses/Apache-2.0)

On the other hand, Vivliostyle Core, the core of the Vivliostyle typesetting engine, and Vivliostyle Viewer and Vivliostyle CLI, which incorporate it, are AGPL v3. Since these are the main products of Vivliostyle, it can be said that **the license of Vivliostyle is essentially AGPL v3.**

However, programs that do not use them directly (e.g., [VFM](https://github.com/vivliostyle/vfm/blob/master/LICENSE)), or that call Vivliostyle Viewer or Vivliostyle CLI as independent programs (e.g.,  [Vivliostyle Pub](https://github.com/vivliostyle/vivliostyle-pub/blob/master/LICENSE)), do not necessarily need to be under the AGPL v3. Therefore, to make it easier for users to use, we have put them under the less restrictive Apache License 2.0.

In more detail, note that Vivliostyle Pub calls Vivliostyle Viewer and Vivliostyle CLI, so the Vivliostyle Pub system consists of the AGPL v3 part (the part that uses Vivliostyle Viewer, etc.) and the Apache License 2.0 part (Vivliostyle Pub's own part). In other words, the entire Vivliostyle Pub system has two different licenses.

Let's explain it in concrete terms. Take a look at the screenshot below. In the current Vivliostyle Pub, the Vivliostyle Viewer is embedded as a preview screen on the right side of the editor screen. This is embedded as a separate web page using the HTML iframe element. In other words, the editor screen (left half) of Vivliostyle Pub is a proprietary part of Vivliostyle Pub, and is therefore Apache License 2.0, while the preview screen (right half) is Vivliostyle Viewer itself, and is therefore AGPL v3.


![The preview window on the right side of the screen embeds the Vivliostyle Viewer using the iframe element.](/assets/faq/fig-1.png)


There is one thing you should be aware of. It is note that Vivliostyle Pub is still under development and the way it is implemented may change in the future. As mentioned earlier, the requirement for the original part of Vivliostyle Pub to be under the Apache License 2.0 was that it “calls Vivliostyle Viewer, etc. as an independent program”. See the following article:


- 👉[Can I use Vivliostyle Viewer or Vivliostyle Print by calling it from a commercial Web application?](http://127.0.0.1:4000/faq/#can-i-use-vivliostyle-viewer-or-vivliostyle-print-by-calling-it-from-a-commercial-web-application)
- 👉[How does Viviostyle Viewer run as an independent program?](http://127.0.0.1:4000/faq/#how-does-viviostyle-viewer-run-as-an-independent-program)

Conversely, if the future Vivliostyle Pub is developed to more closely incorporate Vivliostyle Viewer and/or Vivliostyle CLI, the license will need to be changed to AGPL v3.

As mentioned above, the current version of Vivliostyle Pub uses HTML iframe elements in the right half preview screen, which can be interpreted as working independently from the left half editor screen. Therefore, it does not violate the AGPL v3.

In contrast, a future version might choose to load a JavaScript library into the main web page to configure the preview screen ([React Vivliostyle](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/react) is a JavaScript library designed for such usage). In that case, you would have a mix of JavaScript libraries, Vivliostyle libraries, and Vivliostyle Pub's own programs. This can be called a “closely-embedded” situation, and would require a license change to AGPL v3.

This is just one of the possibilities for the future, and it doesn't necessarily mean that Vivliostyle Pub will choose it. However, we certainly can't rule out that option. If we change our license, we will certainly let you know. For now, just be aware that such a thing is possible.
{% endcapture %}


{% include page/faq.html
  title="FAQ"
  lead="If you have any questions, please contact us [here](/community)."

  license=license
%}
