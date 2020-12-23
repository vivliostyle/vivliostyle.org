---
layout: page
title: コミュニティ
lang: ja
---

{% capture slack %}
## Slack

最もアクティブ。Vivliostyle についての質問にも素早い反応が期待できます。

<ol class="list--medium">
  {% include button/slack.html %}
  {% include button/secondary.html url=site.data.account.slack_log.url text="Slack のログを見る" %}
</ol>
{% endcapture %}


{% capture sns %}
## SNS

効率よく Vivliostyle についての情報を集めたい方はこちら。

<ol class="list--medium">
  {% include button/facebook.html url=site.data.account.facebook_group.url text=site.data.account.facebook_group.name %}
  {% include button/facebook.html url=site.data.account.facebook.url text="Facebook ページ" %}
  {% include button/twitter.html %}
  {% include button/youtube.html url=site.data.account.youtube.url text="YouTube チャンネル" %}
</ol>
{% endcapture %}


{% capture github %}
## GitHub

Vivliostyle の開発現場を見たいならこちら。

<ol class="list--medium">
  {% include button/github.html %}
</ol>
{% endcapture %}


{% include page/community.html
  title="コミュニティ"
  lead="Vivliostyleはオープンソース開発。当然コミュニティも各種そろってます。あなたの目的に応じて、ぜひご参加ください！"

  slack=slack
  sns=sns
  github=github
%}
