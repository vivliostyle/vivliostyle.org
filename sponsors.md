---
layout: page
title: How about supporting Vivliostyle
---


{% capture github_sponsor %}
## Support with GitHub Sponsor

If you already have a GitHub account, you can support with a certain amount of dollar-denominated credit card payments _every month_ by [GitHub sponsors<i class="fas fa-external-link-alt"></i>](https://github.com/sponsors).

[Become a sponsor to vivliostyle<i class="fas fa-external-link-alt"></i>](https://github.com/sponsors/vivliostyle)
{% endcapture %}


{% capture sponsors %}
## Sponsors of Vivliostyle

Vivliostyle open source development relies on volunteer staff. To continue development, we need your support.

{% include sponsors.html %}
{% endcapture %}


{% include page/sponsors.html
  title="How about supporting Vivliostyle"
  lead="Vivliostyle is an open source project. It is developed by volunteers and we need your support to continue. We hope you'll consider it!"

  github_sponsor=github_sponsor
  sponsors=sponsors
%}
