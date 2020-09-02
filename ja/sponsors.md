---
layout: page
title: あなたも Vivliostyle のスポンサーになりませんか
lang: ja
indexing: false
---


{% capture github_sponsor %}
## GitHub スポンサーから支援する

すでにGitHubアカウントをもっているなら、[GitHubスポンサー](https://github.com/sponsors)によって「毎月」一定額をドル建てクレジットカード決済で支援できます。以下のページからお好みのコース (tier) を選択してください。

[Become a sponsor to vivliostyle](https://github.com/sponsors/vivliostyle)

上記は英語ページですが、以下に和訳があります。ご参照ください。

[GitHub Sponsors で Vivliostyle を支援しませんか](/ja/blog/2020/04/29/become-a-sponsor-to-vivliostyle-via-github-sponsors/)
{% endcapture %}


{% capture creditcard_sponsor %}
## ROBOT PAYMENTから支援する

[ROBOT PAYMENTの決済サービス](https://www.robotpayment.co.jp/service/)を利用すれば、「毎月」一定額を支援する他に、「単発」で支援することができます。いずれも円建てクレジットカード決済で、特別なアカウントは不要です。下記プランの中から、それぞれの「支援する」ボタンを押すと、ROBOT PAYMENTの決済画面に遷移します。

なお、「毎月」での引き落とし日は、自動的に第1回の決済日と同日になります。支援をやめたくなったら、いつでも停止できます。初回決済メールに記載されたIDとパスワードを使って、そこに記載されているURLから停止手続きをしてください。

{% include creditcard-sponsor-plans.html
  purchase_text_suffix=""
  purchase_text_prefix="で支援する"
%}

支援について不明点があれば、下記メールアドレスにご質問ください。

[sponsors@vivliostyle.org](mailto:sponsors@vivliostyle.org)
{% endcapture %}


{% capture sponsors %}
## スポンサー一覧

Vivliostyle はボランティア・スタッフに支えられたオープンソース開発。開発を継続するために、できる範囲で援助をご検討ください。

{% include sponsors.html %}
{% endcapture %}


{% include page/sponsors.html
  title="あなたも Vivliostyle のスポンサーになりませんか"
  lead="Vivliostyle はオープンソース・プロジェクト。ボランティアによって開発されており、継続には皆様の支援が必要です。2つの決済システムごとに、細かくコースを取りそろえました。ぜひご検討ください！"

  github_sponsor=github_sponsor
  creditcard_sponsor=creditcard_sponsor
  sponsors=sponsors
%}
