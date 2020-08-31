---
layout: page
title: FAQ
---

<style>
a {
  word-break: break-all;
}
</style>

{% capture license %}
## Vivliostyle Viewer FAQ

### How to use Vivliostyle Viewer in a local environment?

👉See [Vivliostyle Viewer's README: To use the distribution package `vivliostyle-viewer-*.zip`](https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/viewer/README.md#to-use-the-distribution-package-vivliostyle-viewer-zip).

### How to view my local documents with the online Vivliostyle Viewer?

First, you need to start a local web server so that your local HTML documents can be accessed in the browser. Here explains how to use Node.js's http-server as the local web server.

If Node.js is not installed, install Node.js first. 👉 <https://nodejs.org>

In your Terminal (or Command Prompt on Windows), install http-server with the following command:

```
npm install -g http-server
```

Start http-server in the directory containing the HTML and CSS files you want to typeset and view, as follows:

```
http-server . --cors -o -c-1
```

This will open the URL <http://localhost:8080> of your local web server and allow you to view a list of local files in your browser. You can then find the HTML file you want to typeset and view, copy the URL, and specify it in the online Vivliostyle Viewer <https://vivliostyle.org/viewer/>.

(Here, the `--cors` option of the http-server command allows scripts in another domain to access this local server's documents, the `-o` option is to start your browser, and `-c-1` disables the cache.)

### How to view documents on GitHub or Gist with Vivliostyle Viewer?

You can view HTML documents on [GitHub](https://github.com/) or [Gist](https://gist.github.com/) with [Vivliostyle Viewer](https://vivliostyle.org/viewer/).

Example 1: To open an HTML file in GitHub <https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html> with Vivliostyle Viewer:
<https://vivliostyle.org/viewer/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html>

- You can specify the URL of a file on GitHub to Vivliostyle Viewer.

Example 2: To open an HTML file in Gist <https://gist.github.com/MurakamiShinyu/4f0423fd3578a277c7d29f56a31912b7#file-index-html> with Vivliostyle Viewer:
<https://vivliostyle.org/viewer/#src=https://gist.github.com/MurakamiShinyu/4f0423fd3578a277c7d29f56a31912b7/raw/af7fea921d57d6601d153101850bf95850262ece/index.html&bookMode=true>

- You can specify the URL of the link to the `Raw` content of a file on Gist to Vivliostyle Viewer.
- In this example, with the parameter `&bookMode=true` added to the URL, multiple HTML files linked from the table of contents in this HTML file will be loaded.

### How to view EPUB?

You can view unzipped EPUB files with Vivliostyle Viewer, with the following parameter:

```
#src=⟨URL of the unzipped EPUB folder⟩&bookMode=true
```

An example of displaying unzipped EPUB on GitHub:

- [Accessible EPUB 3](https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/) on [IDPF/epub3-samples](https://github.com/IDPF/epub3-samples/)

  <https://vivliostyle.org/viewer/#src=https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/&bookMode=true>

👉User Guide: [EPUB](https://docs.vivliostyle.org/#/user-guide#epub)

### How to integrate Vivliostyle Viewer into my website?

[Download the Vivliostyle Viewer distribution package](https://vivliostyle.org/download/) and unzip and copy it to a public directory on your web server. The Vivliostyle Viewer is in the `viewer/` directory in the package contents. For example, if you copy the contents of the package to the directory published as `https://example.com/example/`, then `https://example.com/example/viewer/` is the URL of the Vivliostyle Viewer.

### How to enable the TOC panel?

The TOC (Table of Contents) panel is enabled by setting [**Book Mode**](#What%20is%20Book%20Mode%3F) in Vivliostyle Viewer and the HTML file contains a TOC element, e.g.:

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

👉User Guide: [TOC panel](https://docs.vivliostyle.org/#/user-guide#toc-panel)

👉See also: [How to make a TOC?](#How%20to%20make%20a%20TOC%3f)

### How to typeset and view multiple HTML files concatenated?

When you enable [**Book Mode**](#What%20is%20Book%20Mode%3F) with Vivliostyle Viewer, and load an HTML file containing a table of contents element with links to other HTML file as shown below, the HTML files linked from the table of contents element are also loaded and typeset in succession:

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

👉User Guide: [Web publications (multi-HTML documents)](https://docs.vivliostyle.org/#/user-guide#web-publications-multi-html-documents)

👉See also: [How to make a TOC?](#How%20to%20make%20a%20TOC%3f)

### What is Book Mode?

Book Mode is enabled by checking the **Book Mode** checkbox in the [Vivliostyle Viewer](https://vivliostyle.org/viewer/) UI or by adding `&bookMode=true` to the URL parameter. In this mode, the following features are enabled:

- [Navigation from the TOC panel](#How%20to%20enable%20the%20TOC%20panel%3F)
- [Typeset and view multiple HTML files concatenated](#How%20to%20typeset%20and%20view%20multiple%20HTML%20files%20concatenated%3F)
- [Typeset and view unzipped EPUB](#How%20to%20view%20EPUB%3F)

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

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) v2.1 and later allow you to automatically generate PDF Bookmarks with the table of contents data in your document.

To enable PDF bookmarks, use `vivliostyle build` command the `--book` option.

Example:
```
vivliostyle build --book --size A4 --output example.pdf example.html
```

### How to convert EPUB to PDF?

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) can generate PDF files from unzipped EPUB files. To do so, give the `vivliostyle build` command with the --book option and the directory of the unzipped EPUB as input.

For example, to convert an EPUB file `example.epub` to PDF `example.pdf`, first unzip the EPUB file and run vivliostyle, as follows:

```
unzip example.epub -d example/
vivliostyle build --book --size A4 --output example.pdf example/
```

### How to generate PDF for print (PDF/X-1a format)?

You can use `vivliostyle build` command with the `--press-ready` option to output in PDF/X-1a format suitable for printing.

To use this feature, you need [Ghostscript](https://www.ghostscript.com) and [Xpdf](https://www.xpdfreader.com/) (or [Poppler](https://poppler.freedesktop.org)) installed. Here's how to install them on major operating systems:

macOS (with [Homebrew](https://brew.sh)):
```
brew install poppler ghostscript
```

Ubuntu:
```
apt-get install poppler-utils ghostscript
```

Windows:
- Download and install the Ghostscript for Windows at <https://www.ghostscript.com/download/gsdnld.html>. Then, add the installed Ghostscript's bin directory (e.g., "C:\Program Files\gs\gs9.52\bin") to the `PATH` environment variable.
- Download and install the Xpdf command line tools for Windows at <http://www.xpdfreader.com/download.html>. Then, add the installed Xpdf's bin directory (e.g., "C:\xpdf-tools-win-4.02\bin64") to the `PATH` environment variable.

## Create Book FAQ

### What is Create Book?

[Create Book](https://www.npmjs.com/package/create-book) makes an environment for creating a book.

👉[Tutorial Guide: Create Book](https://docs.vivliostyle.org/#/create-book)

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
  theme: 'my-theme',
```

This will allow you to customize the style sheets in the `my-theme` folder and change the style at will.

It is also possible to create your own theme without copying an existing theme package. In that case, you need to create a `package.json` file in your theme folder, in this case the `my-theme` folder, as follows:

```
{
  "name": "my-theme",
  "main": "theme.css"
}
```

## CSS Typesetting Techniques FAQ

### How to make a book from multiple HTML files?

👉See User Guide: [Web publications (multi-HTML documents)](https://docs.vivliostyle.org/#/user-guide#web-publications-multi-html-documents).

To use this feature in [Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli), specify the `--book` option.

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
- [How to enable the TOC panel?](#How%20to%20enable%20the%20TOC%20panel%3F)
- [How to typeset and view multiple HTML files concatenated?](#How%20to%20typeset%20and%20view%20multiple%20HTML%20files%20concatenated%3F)

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

HTML source for testing formulas: <https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html>

Typeset and view with Vivliostyle Viewer: <https://vivliostyle.org/viewer/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html>

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
{% endcapture %}


{% include page/faq.html
  title="FAQ"
  lead="If you have any questions, please contact us [here](/community)."

  license=license
%}
