---
layout: page
title: あなたも Vivliostyle のスポンサーになりませんか
lang: ja
---


{% capture github_sponsor %}
## GitHub スポンサーから支援する

すでにGitHubアカウントをもっているなら、[GitHubスポンサー](https://github.com/sponsors)によって「毎月」一定額をドル建てクレジットカード決済で支援できます。以下のページからお好みのコース (tier) を選択してください。

[Become a sponsor to vivliostyle](https://github.com/sponsors/vivliostyle)

上記は英語ページですが、以下に和訳があります。ご参照ください。

[GitHub Sponsors で Vivliostyle を支援しませんか](/ja/blog/2020/04/29/become-a-sponsor-to-vivliostyle-via-github-sponsors/)
{% endcapture %}


{% capture sponsors %}
## スポンサー一覧

Vivliostyle はボランティア・スタッフに支えられたオープンソース開発。開発を継続するために、できる範囲で援助をご検討ください。

{% include sponsors.html %}
{% endcapture %}


{% include page/sponsors.html
  title="あなたも Vivliostyle のスポンサーになりませんか"
  lead="Vivliostyle はオープンソース・プロジェクト。ボランティアによって開発されており、継続には皆様の支援が必要です。ぜひご検討ください！"

  github_sponsor=github_sponsor
  sponsors=sponsors
%}
