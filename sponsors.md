---
layout: page
title: Why don't you support Vivliostyle?
indexing: false
---


{% capture github_sponsor %}
## Support with GitHub Sponsor

If you already have a GitHub account, you can support with a certain amount of dollar-denominated credit card payments “every month” by [GitHub sponsors](https://github.com/sponsors).

[Become a sponsor to vivliostyle](https://github.com/sponsors/vivliostyle)
{% endcapture %}


{% capture creditcard_sponsor %}
## Support with Robot Payment service

With [Robot Payment's service](https://www.robotpayment.co.jp/service/), we support a certain amount of money “monthly” or on a “only once” basis. Both plans require a yen-denominated credit card payment and do not require an account. When you click the “Support” button for each tier, you will be transferred to the Robot Payment screen.

Please note that the “monthly” deduction date will automatically be on the same day as the first payment date. If you want to stop your support, you can stop it at any time. Use the ID and password provided in the initial payment email to stop using the URL provided in it.

{% include creditcard-sponsor-plans.html
  purchase_text_suffix="Support"
  purchase_text_prefix="per month"
  lang="en"
%}

If you have any questions about support, please contact us at the email address below.

[sponsors@vivliostyle.org](mailto:sponsors@vivliostyle.org)
{% endcapture %}


{% capture sponsors %}
## Sponsors of Vivliostyle

Vivliostyle open source development relies on volunteer staff. To continue development, we need your support.

{% include sponsors.html %}
{% endcapture %}


{% include page/sponsors.html
  title="Why don't you support Vivliostyle?"
  lead="Vivliostyle is an open source project. It is developed by volunteers and we need your support to continue. We have a detailed course selection for each of the two payment systems. We hope you'll consider it! "

  github_sponsor=github_sponsor
  creditcard_sponsor=creditcard_sponsor
  sponsors=sponsors
%}
