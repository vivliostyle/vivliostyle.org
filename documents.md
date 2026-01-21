---
layout: page
title: Documents
---


{% capture guide %}
## 📖 User Guides
{% include fetch-guide-urls.html %}

### [Vivliostyle Viewer](https://docs.vivliostyle.org/en/viewer)
<ul id="vivliostyle-viewer-list"></ul>
{% include fetch-guide-url.html
  id="vivliostyle-viewer-list"
  url="https://docs.vivliostyle.org/en/viewer"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/vivliostyle-viewer.md"
%}

### [Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/index.md)
<ul>
  <li>
    <a href="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/getting-started.md">Getting Started</a>
    <ul id="vivliostyle-cli-getting-started-list"></ul>
  </li>
  <li>
    <a href="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/themes-and-css.md">Themes and CSS</a>
    <ul id="vivliostyle-cli-themes-and-css-list"></ul>
  </li>
  <li>
    <a href="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/using-config-file.md">Using Config File</a>
    <ul id="vivliostyle-cli-using-config-file-list"></ul>
  </li>
  <li>
    <a href="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/toc-page.md">Creating Table of Contents Page</a>
    <ul id="vivliostyle-cli-toc-page-list"></ul>
  </li>
  <li>
    <a href="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/cover-page.md">Creating Cover Page</a>
    <ul id="vivliostyle-cli-cover-page-list"></ul>
  </li>
  <li>
    <a href="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/special-output-settings.md">Special Output Settings</a>
    <ul id="vivliostyle-cli-special-output-settings-list"></ul>
  </li>
</ul>
{% include fetch-guide-url.html
  id="vivliostyle-cli-getting-started-list"
  url="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/getting-started.md"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/getting-started.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-themes-and-css-list"
  url="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/themes-and-css.md"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/themes-and-css.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-using-config-file-list"
  url="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/using-config-file.md"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/using-config-file.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-toc-page-list"
  url="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/toc-page.md"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/toc-page.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-cover-page-list"
  url="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/cover-page.md"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/cover-page.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-special-output-settings-list"
  url="https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/special-output-settings.md"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/special-output-settings.md"
%}

### [Vivliostyle Themes](https://github.com/vivliostyle/themes/blob/main/docs/index.md)
<ul>
  <li><a href="https://github.com/vivliostyle/themes/blob/main/docs/spec.md">Spec</a></li>
  <li><strong>Operational Guidelines</strong>
    <ul>
      <li><a href="https://github.com/vivliostyle/themes/blob/main/docs/official.md">Adoption of the Official Theme</a></li>
      <li><a href="https://github.com/vivliostyle/themes/blob/main/docs/gallery.md">Vivliostyle Themes Gallery</a></li>
    </ul>
  </li>
</ul>

### [Vivliostyle Flavored Markdown (VFM)](https://docs.vivliostyle.org/en/vfm/)
<ul id="vfm-list"></ul>
{% include fetch-guide-url.html
  id="vfm-list"
  url="https://docs.vivliostyle.org/en/vfm/"
  get_url="https://api.github.com/repos/vivliostyle/vfm/contents/docs/vfm.md"
%}
{% endcapture %}


{% capture contribution %}
## 🛠 Contribution Guides

### Vivliostyle.js
<ul id="contribution-guide-list"></ul>
{% include fetch-guide-url.html
  id="contribution-guide-list"
  url="https://docs.vivliostyle.org/en/reference/contribution-guide/"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/contribution-guide.md"
%}

### Vivliostyle CLI
- [CONTRIBUTING.md](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CONTRIBUTING.md)

### Vivliostyle Themes
- [CONTRIBUTING.md](https://github.com/vivliostyle/themes/blob/master/CONTRIBUTING.md)

### VFM
- [CONTRIBUTING.md](https://github.com/vivliostyle/vfm/blob/master/CONTRIBUTING.md)
{% endcapture %}


{% capture reference %}
## References

- [Supported CSS Features](https://docs.vivliostyle.org/en/reference/supported-css-features/)
- [Core API Reference](https://docs.vivliostyle.org/en/reference/api/)
- Vivliostyle CLI API Reference
  - [Config Reference](https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/config.md)
  - [JavaScript API](https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/api-javascript.md)
{% endcapture %}


{% capture plan %}
## Development Plan

The following list is a summary of the hot issues for each project. Would you like to contribute?

- Vivliostyle.js
  - [High priority issues](https://github.com/vivliostyle/vivliostyle.js/issues?q=is%3Aissue+is%3Aopen+label%3AP1)
  - [Good issues for first time contributors](https://github.com/vivliostyle/vivliostyle.js/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- Vivliostyle CLI
  - [Good issues for first time contributors](https://github.com/vivliostyle/vivliostyle-cli/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- VFM
  - [Issues to release vfm v2.0.0](https://github.com/vivliostyle/vfm/milestone/1)
- Create Book
  - [Issues to release create-book v1.0.0](https://github.com/vivliostyle/create-book/milestone/1)
- Themes
  - [Good issue for first time contributors](https://github.com/vivliostyle/themes/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
{% endcapture %}


{% capture community %}
<ol class="list--medium">
  {% include button/slack.html text="Join our Slack" %}
</ol>

Vivliostyle project discusses development matters on Slack.
{% endcapture %}


{% include page/documents.html
  title="Documents"
  lead="We have arranged a variety of documents that developers can rely on when in trouble. In “Development Plan”, each item links to the corresponding GitHub issue."

  guide=guide
  reference=reference
  contribution=contribution
  plan=plan
  community=community
%}
