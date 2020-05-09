---
layout: page
title: About Us
---


{% capture foundation %}
## About Vivliostyle Foundation

Our goal is to develop, publish and disseminate "Vivliostyle", an open source typesetting software that unites the web and the publishing and printing worlds with open standard technology. In doing so, we will strive to inherit and advance the typesetting technology that has been cultivated along with the history of printing in web and digital publishing. At the same time, with the aim of contributing to the digitization and accessibility of academic, literary, and publishing around the world, the following activities will be undertaken.

- Maintenance and management of Vivliostyle open source project and community
- Research and development of Vivliostyle and related technologies
- Promotion and education of Vivliostyle and CSS typesetting
- Promote standardization in cooperation with groups related to standard technologies such as Web, publishing, and accessibility
- Cooperation with external projects working with Vivliostyle
{% endcapture %}


{% capture foundation_frame %}
### Vivliostyle Foundation

- Representative: Shinyu Murakami
- Founded: August 2018
- Location: 1941-84 Daitakubo, Minami-ku, Saitama-shi, Saitama 336-0015, Japan
- Phone: +81-90-3688-2212

### Directors
{% endcapture %}


{% capture devteam %}
## Contributors

Here are some of our past contributors with gratitude.

<ul class="list--small" id="contributors-list"></ul>
{% include fetch-contributors-about-us.html id="contributors-list" %}

<ol class="list--medium">
  {% include button/slack.html text="Join our Slack" %}
</ol>
{% endcapture %}


{% capture sponsor %}
## Become a sponsor of Vivliostyle

Vivliostyle open source development relies on volunteer staff. To continue development, we need your support.

<ol class="list--medium">
  {% include button/primary.html url=site.data.account.github_sponsor.url text="Become a sponsor via Github" %}
  <!-- {% include button/primary.html url=site.data.account.congrant.url text="Donate by credit card payment (to congrant)" %} -->
</ol>

{% include sponsors.html %}
{% endcapture %}


{% include page/about_us.html
  title="About Us"
  lead="If you'd like to see Vivliostyle in action, this is the place to go."

  foundation=foundation
  foundation_frame=foundation_frame
  devteam=devteam
  sponsor=sponsor
%}
