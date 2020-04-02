---
layout: page
title: Community
---


{% capture slack %}
## Slack

If you want to know what’s going on at Vivliostyle now, You can expect a quick answer to your question.

<ol class="list--medium">
  {% include button/slack.html %}
  {% include button/secondary.html url=site.data.account.slack_log.url text="See Slack’s log." %}
</ol>
{% endcapture %}


{% capture sns %}
## SNS

If you want to efficiently gather information about Vivliostyle, this is the place to go.

<ol class="list--medium">
  {% include button/facebook.html url=site.data.account.facebook_group.url text=site.data.account.facebook_group.name %}
  {% include button/facebook.html url=site.data.account.facebook.url text="Facebook Page" %}
  {% include button/twitter.html %}
  {% include button/secondary.html url=site.data.account.youtube.url text="YouTube Channel" %}
</ol>
{% endcapture %}


{% capture github %}
## GitHub

If you’d like to see Vivliostyle in action, this is the place to go.

<ol class="list--medium">
  {% include button/github.html %}
</ol>
{% endcapture %}


{% include page/community.html
  title="Community"
  lead="Vivliostyle is an open source project. So we have a variety of community channels. Whatever your purpose, please join us!"

  slack=slack
  sns=sns
  github=github
%}
