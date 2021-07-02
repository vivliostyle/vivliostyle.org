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


{% capture reports %}
### [FY2020 Activity Report](https://github.com/vivliostyle/vivliostyle_doc/tree/gh-pages/en/reports/vivliostyle-report-2020)
- [HTML](https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2020/vf2020report.html)
- [View with Vivliostyle Viewer (Flexible page size)](https://vivliostyle.org/viewer/#src=https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2020/vf2020report.html&bookMode=true)
- [View with Vivliostyle Viewer (A4 page size)](https://vivliostyle.org/viewer/#src=https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2020/vf2020report.html&bookMode=true&userStyle=data:,/*%3Cviewer%3E*/%0A@page%20%7B%20size:%20A4;%20%7D%0A/*%3C/viewer%3E*/)
- [PDF](https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2020/vf2020report-en.pdf)
- [Japanese version: 一般社団法人ビブリオスタイル 2020年度事業報告書](https://github.com/vivliostyle/vivliostyle_doc/tree/gh-pages/ja/reports/vivliostyle-report-2020/)

### [FY2019 Activity Report](https://github.com/vivliostyle/vivliostyle_doc/tree/gh-pages/en/reports/vivliostyle-report-2019)
- [HTML](https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2019/vf2019report.html)
- [View with Vivliostyle Viewer (Flexible page size)](https://vivliostyle.org/viewer/#src=https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2019/vf2019report.html&bookMode=true)
- [View with Vivliostyle Viewer (A4 page size)](https://vivliostyle.org/viewer/#src=https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2019/vf2019report.html&bookMode=true&userStyle=data:,/*%3Cviewer%3E*/%0A@page%20%7B%20size:%20A4;%20%7D%0A/*%3C/viewer%3E*/)
- [PDF](https://vivliostyle.github.io/vivliostyle_doc/en/reports/vivliostyle-report-2019/vf2019report-en.pdf)
- [Japanese version: 一般社団法人ビブリオスタイル 2019年度事業報告書](https://github.com/vivliostyle/vivliostyle_doc/tree/gh-pages/ja/reports/vivliostyle-report-2019/)
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
  {% include button/primary.html url="/sponsors" text="Donate by credit card payment" %}
</ol>

{% include sponsors.html %}
{% endcapture %}


{% include page/about_us.html
  title="About Us"
  lead="If you'd like to see Vivliostyle in action, this is the place to go."

  foundation=foundation
  foundation_frame=foundation_frame
  reports=reports
  devteam=devteam
  sponsor=sponsor
%}
