---
title: The Vivliostyle Project
aside: true
aside-type: blog-entries
# feature_text: |
#   ## Vivliostyle
#   CSS Typesetting
feature_image: "/assets/header-image.png"
excerpt: "open source, web browser based CSS typesetting engine project"
layout: page
---

Vivliostyle is an open source project for a new typesetting engine fitting for digital publishing = web publishing era based on web standard technology.

- Enhancing typography and layout capability of web browsers, to be used as typesetting engines for both web/digital and print publishing
- Implementing CSS typesetting features with JavaScript
- Cooperating with the W3C standardization of CSS typesetting specifications, and advancing implementation

☞ Check the latest [**Vivliostyle Viewer**](https://vivliostyle.org/viewer/)

## About Vivliostyle Foundation

Our purpose is to promote the development,
public release,
and adoption of the open source typesetting software Vivliostyle
which unifies the Web and publishing/printing world,
so that the typesetting technique that has been cultivated throughout the history of printing
is inherited and evolved on Web and digital publishing,
and contribute to digitization of publishing indispensable
for the advancement of academic,
literary and informational communication around the world and improve accessibility.
For this purpose, we carry out activities such as:

- Maintenance and management of Vivliostyle open source project and community
- Research and development of Vivliostyle and related technologies
- Promotion and education of Vivliostyle and CSS typesetting
- Promote standardization in cooperation with groups related to standard technologies such as Web, publishing, and accessibility
- Cooperation with external projects working with Vivliostyle

<div style="margin: 2em 0 1em; text-align: right">
<div><strong>Vivliostyle Foundation</strong></div>
<div>Established in August 2018</div>
<br>
{% assign people = "murakami, florian, johannes" | split: ", " %}
{% for a in people %}
<div><strong><a href="mailto:{{ site.data.people[a].email }}">{{ site.data.people[a].en }}</a></strong>&ensp;({{ site.data.people[a].role_en }})</div>
{% endfor %}
</div>
<br>

{% include nav-share.html %}
