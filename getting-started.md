---
layout: page
title: Getting Started
---


<!-- viewer -->
{% capture viewer_frame1_description %}
### Page view to fit window size

![]({{ site.data.project.viewer.screenshot.responsive }})
{% endcapture %}


{% capture viewer_frame2_description %}
### Page view by fixed size

![]({{ site.data.project.viewer.screenshot.fixed }})
{% endcapture %}


{% include assign/array.html
  description1=viewer_frame1_description
  description2=viewer_frame2_description
%}{% assign viewer_frames = array %}


{% capture viewer %}
## Vivliostyle Viewer <span class="tip">{{ site.data.project.viewer.version }}</span>

- A browser-based formatting engine that reads HTML and displays the results of the typesetting in the browser.
- In order to typeset and display local files, you need to start the web server (see FAQ for details).

<ol class="list--medium">
  {% include button/primary.html url=site.data.project.viewer.url text="Use Vivliostyle Viewer" %}
  {% include button/github.html url=site.data.project.viewer.github text="README" %}
</ol>

{% include frame-list.html frames=viewer_frames %}

There is also a [downloadable version](https://github.com/vivliostyle/vivliostyle.js/releases) that can be used on private networks, so you can do what you want with it without going through us.
{% endcapture %}


<!-- cli -->
{% capture cli_frame1_description %}
### How to install

- You need to install Node.js prior to using it.
- It can be installed from the npm package.

Vivliostyle CLI will be released as an npm package. Also, Node.js must be installed.

```shell
$ npm install -g @vivliostyle/cli
```
{% endcapture %}


{% capture cli_frame2_description %}
### Create PDF from HTML

- On the command line you can use the build command to specify an HTML file to convert into a PDF file typeset with CSS.

In the Terminal command line, run it with your HTML file to output PDF file with CSS typesetting. There is also a preview option.

```shell
$ vivliostyle build index.html
```
{% endcapture %}


{% capture cli_frame3_description %}
### Preview

- With the preview command, you can check what the results would look like.
- Use `-h` to see details of the usage. Also check the help `help [cmd]` for each command.

```shell
$ vivliostyle preview index.html
```

![]({{ site.data.project.cli.screenshot }})
{% endcapture %}


{% include assign/array.html
  description1=cli_frame1_description
  description2=cli_frame2_description
  description3=cli_frame3_description
%}{% assign cli_frames = array %}


{% capture cli %}
## Vivliostyle CLI <span class="tip">{{ site.data.project.cli.version }}</span>

- CSS typesetting on the command line with output to PDF.
- PDF/X-1a output supported by merging PRESS-READY in v2. [Ghostscript](https://www.ghostscript.com/) and [Xpdf](http://www.xpdfreader.com/) are required for this feature. See [PRESS-READY](https://github.com/vibranthq/press-ready/blob/master/README.md) for more information.

<ol class="list--medium">
  {% include button/github.html url=site.data.project.cli.github text="README" %}
</ol>

{% include frame-list.html frames=cli_frames %}
{% endcapture %}


<!-- pub -->
{% capture pub %}
## Vivliostyle Pub <small>(Initial version will be released later this year)</small> <span class="tip">{{ site.data.project.pub.version }}</span>

Edit text/Markdown/HTML in the left pane and preview the formatted results in the right pane.

![]({{ site.data.project.pub.screenshot }})

<!-- <ol class="list--medium"> -->
  <!-- {% include button/primary.html url=site.data.project.pub.url text="Use Vivliostyle Pub" %} -->
  <!-- {% include button/github.html url=site.data.project.pub.github text="README" %} -->
<!-- </ol> -->
{% endcapture %}


{% include page/getting_started.html
  title="Getting Started"
  lead="Vivliostyle currently consists of two products. This page will show you how to use it. It also explains the new services we're releasing this year."

  viewer=viewer
  cli=cli
  pub=pub
%}
