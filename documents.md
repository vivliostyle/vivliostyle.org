---
layout: page
title: Documents
---


{% capture guide %}
## 📖 User Guide
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

## 🛠 Contribution Guide
<ul id="contribution-guide-list"></ul>
{% include fetch-guide-url.html
  id="contribution-guide-list"
  url="https://docs.vivliostyle.org/#/contribution-guide"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/contribution-guide.md"
%}
{% endcapture %}


{% capture reference %}
## Reference

- [Core API Reference](https://docs.vivliostyle.org/#/api)
- [Supported CSS Features](https://docs.vivliostyle.org/#/supported-css-features)
{% endcapture %}


{% capture plan %}
## Development Plan

Would you like to contribute?
{% endcapture %}


{% capture community %}
<ol class="list--medium">
  {% include button/slack.html text="Join our Slack" %}
</ol>

Vivliostyle project discusses development matters on Slack.
{% endcapture %}


{% capture plan_core_description %}
- [Support the font-variant-\* longhands #592](https://github.com/vivliostyle/vivliostyle.js/issues/592)
- [add support for user-select #587](https://github.com/vivliostyle/vivliostyle.js/issues/587)
- [Support non-unzipped EPUB loading #541](https://github.com/vivliostyle/vivliostyle.js/issues/541)
{% endcapture %}


{% capture plan_pub_description %}
{% endcapture %}


{% capture plan_cli_description %}
- [Add --grayscale option #44](https://github.com/vivliostyle/vivliostyle-cli/issues/44)
- [Need to post-fix PDF for Japanese/Chinese text accessibility #40](https://github.com/vivliostyle/vivliostyle-cli/issues/40)
{% endcapture %}


{% capture plan_viewer_description %}
- [UI tests need to be updated #618](https://github.com/vivliostyle/vivliostyle.js/issues/618)
- [Localization of Vivliostyle Viewer UI #617](https://github.com/vivliostyle/vivliostyle.js/issues/617)
{% endcapture %}


{% capture plan_others_description %}
{% endcapture %}


{% include assign/hash.html
  title=site.data.project.core.name
  url=site.data.project.core.github
  description=plan_core_description
  thumbnail=site.data.project.core.thumbnail
%}{% assign core = hash %}


{% include assign/hash.html
  title=site.data.project.pub.name
  url=site.data.project.pub.github
  description=plan_pub_description
  thumbnail=site.data.project.pub.thumbnail
%}{% assign pub = hash %}


{% include assign/hash.html
  title=site.data.project.cli.name
  url=site.data.project.cli.github
  description=plan_cli_description
  thumbnail=site.data.project.cli.thumbnail
%}{% assign cli = hash %}


{% include assign/hash.html
  title=site.data.project.viewer.name
  url=site.data.project.viewer.github
  description=plan_viewer_description
  thumbnail=site.data.project.viewer.thumbnail
%}{% assign viewer = hash %}


{% include assign/hash.html
  title="Others"
  description=plan_others_description
%}{% assign others = hash %}


{% assign plans = "" | split: "" | push: core | push: pub | push: cli | push: viewer | push: others %}


{% include page/documents.html
  title="Documents"
  lead="We have arranged a variety of documents that developers can rely on when in trouble. In “Development Plan”, each item links to the corresponding GitHub issue."

  guide=guide
  reference=reference
  plan=plan
  plans=plans
  community=community
%}
