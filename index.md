---
layout: page
title: Vivliostyle — Enjoy CSS Typesetting!
jumbotron_image: true
excerpt: "open source, web browser based CSS typesetting engine project"
---


{% capture sample1 %}
## Want to make a book with CSS typesetting?

Vivliostyle Viewer loads HTML files from your browser, and Vivliostyle CLI loads HTML files from the command line, typesets them with CSS, and exports them to PDF.

<ol class="list--large">
  {% include thumbnail/viewer.html url=site.data.project.viewer.url %}
  {% include thumbnail/cli.html url=site.data.project.cli.github %}
</ol>

<ol class="list--medium">
  {% include button/primary.html url=site.data.project.viewer.url text="Open Vivliostyle Viewer" %}
  {% include button/primary.html url=site.data.project.cli.github text="Check out Vivliostyle CLI" %}
  {% include button/simple.html text="or" %}
  {% include button/secondary.html url=site.data.project.pub.sample.en text="View samples" %}
</ol>

　

With Vivliostyle Pub, you can create printable PDF from your browser.

<ol class="list--large">
  {% include thumbnail/pub.html url=site.data.project.pub.github %}
</ol>

<ol class="list--medium">
  {% include button/disabled.html url=site.data.project.pub.url text="Try Vivliostyle Pub (launched during 2020)" %}
</ol>
{% endcapture %}


{% capture sample2 %}
## Want to read EPUB or Web documents in your favorite style?

You can read EPUB, HTML or Web publications in Vivliostyle Viewer and use CSS to present it in your preferred style.

<ol class="list--large">
  {% include thumbnail/viewer.html url=site.data.project.viewer.sample.en %}
</ol>

<ol class="list--medium">
  {% include button/primary.html url=site.data.project.viewer.sample.en text="Open Vivliostyle Viewer" %}
</ol>
{% endcapture %}


{% capture project %}
## What is the Vivliostyle project?

Vivliostyle is developing the following products.

{% include projects.html
  project1_src="/assets/projects/project1.svg"
  project1_name=site.data.project.project.name.en
  project1_link=site.data.project.project.github
  project2_src="/assets/projects/project2.svg"
  project2_name=site.data.project.viewer.name
  project2_link=site.data.project.viewer.github
  project2_description="Load HTML and display the typesetting results on the browser."
  project3_src="/assets/projects/project3.svg"
  project3_name=site.data.project.cli.name
  project3_link=site.data.project.cli.github
  project3_description="Typesetting from command line and generate PDF."
  project4_src="/assets/projects/project4.svg"
  project4_name=site.data.project.pub.name
  project4_link=site.data.project.pub.github
  project4_description="Enter markdown and you can see the typesetting results immediately."
%}

Other libraries for developers include ["Vivliostyle Core"]({{ site.data.project.core.github }}), the core of the typography engine, and ["Vivliostyle Print"]({{ site.data.project.print.github }}), which embeds printing functionality into websites.
{% endcapture %}


{% capture blog %}
## Recent blogs

{% assign posts = site.posts | where: "lang", page.lang | slice: 0, 3 %}
{% include post-list.html posts=posts %}
{% endcapture %}


{% capture dev %}
## Help improve Vivliostyle

The Vivliostyle project discusses development matters on Slack. Please take a look. Click the button below for the development guide and documentation.

<ol class="list--medium">
  {% include button/slack.html text="Join our Slack" %}
  {% include button/github.html text="Join development" %}
  {% include button/secondary.html url="/documents" text="See Documents" %}
</ol>
{% endcapture %}


{% include page/index.html
  sample1=sample1
  sample2=sample2
  project=project
  blog=blog
  dev=dev
%}
