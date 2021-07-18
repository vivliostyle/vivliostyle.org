---
layout: page
title: Documents
---


{% capture guide %}
## 📖 User Guides
{% include fetch-guide-urls.html %}

### Vivliostyle Viewer
<ul id="vivliostyle-viewer-list"></ul>
{% include fetch-guide-url.html
  id="vivliostyle-viewer-list"
  url="https://docs.vivliostyle.org/#/vivliostyle-viewer"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/vivliostyle-viewer.md"
%}

### Vivliostyle CLI
<ul id="vivliostyle-cli-list"></ul>
{% include fetch-guide-url.html
  id="vivliostyle-cli-list"
  url="https://docs.vivliostyle.org/#/vivliostyle-cli"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/vivliostyle-cli.md"
%}

### Create Book
<ul id="create-book-list"></ul>
{% include fetch-guide-url.html
  id="create-book-list"
  url="https://docs.vivliostyle.org/#/create-book"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/create-book.md"
%}

## 🛠 Contribution Guides

### Vivliostyle.js
<ul id="contribution-guide-list"></ul>
{% include fetch-guide-url.html
  id="contribution-guide-list"
  url="https://docs.vivliostyle.org/#/contribution-guide"
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

- [Supported CSS Features](https://docs.vivliostyle.org/#/supported-css-features)
- [Core API Reference](https://docs.vivliostyle.org/#/api)
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
  - [Issues to release vfm v1.0.0](https://github.com/vivliostyle/vfm/milestone/2)
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
  plan=plan
  community=community
%}
