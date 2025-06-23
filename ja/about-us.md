---
layout: page
title: 私たちについて
lang: ja
---


{% capture foundation %}
## Vivliostyle Foundation の目指すもの

私達の目的は、オープンな標準技術で Web と出版・印刷の世界をひとつにするオープンソースの組版ソフトウェア “Vivliostyle” の開発、公開、普及です。
それにあたっては、これまでの印刷の歴史とともに培われてきた組版の技術を Web と電子出版において継承・進化させるよう努力します。
同時に、世界の学術・文芸・情報コミュニケーションの発展に欠かせない出版の電子化と、アクセシビリティの向上に寄与することを目指し、次のような活動を行います。

- Vivliostyle オープンソース・プロジェクトとコミュニティの維持管理
- Vivliostyle と関連技術の研究開発
- Vivliostyle と CSS 組版の普及啓発・教育
- Web・出版・アクセシビリティ等の標準技術に関する諸団体と連携して標準化推進
- Vivliostyle と連携する外部のプロジェクトとの協力
{% endcapture %}


{% capture foundation_frame %}
### 一般社団法人ビブリオスタイル (Vivliostyle Foundation)

- 代表者：村上真雄
- 設立：2018 年 8 月
- 所在地：〒336-0015 埼玉県さいたま市南区太田窪1941-84
- 電話：090-3688-2212

### 理事
{% endcapture %}


{% capture reports %}
### 活動報告書

- [2024年度 (PDF)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2024/vf2024report-ja.pdf) / [(HTML)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2024/vf2024report.html)
- [2023年度 (PDF)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2023/vf2023report-ja.pdf) / [(HTML)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2023/vf2023report.html)
- [2022年度 (PDF)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2022/vf2022report-ja.pdf) / [(HTML)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2022/vf2022report.html)
- [2021年度 (PDF)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2021/vf2021report-ja.pdf) / [(HTML)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2021/vf2021report.html)
- [2020年度 (PDF)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2020/vf2020report-ja.pdf) / [(HTML)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2020/vf2020report.html)
- [2019年度 (PDF)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2019/vf2019report-ja.pdf) / [(HTML)](https://vivliostyle.github.io/vivliostyle_doc/ja/reports/vivliostyle-report-2019/vf2019report.html)
{% endcapture %}


{% capture devteam %}
## コントリビューター一覧

これまでの貢献者を、感謝の気持ちをこめてご紹介します。

<ul class="list--small" id="contributors-list"></ul>
{% include fetch-contributors-about-us.html id="contributors-list" %}

<ol class="list--medium">
  {% include button/slack.html text="Slackに参加" %}
</ol>
{% endcapture %}


{% capture sponsor %}
## Vivliostyle のスポンサーになりませんか

Vivliostyle はボランティア・スタッフに支えられたオープンソース開発。開発を継続するために、できる範囲で援助をご検討ください。

<ol class="list--medium">
  {% include button/primary.html url=site.data.account.github_sponsor.url text="GitHub スポンサーに応募する" %}
</ol>

{% include sponsors.html %}
{% endcapture %}


{% include page/about_us.html
  title="私たちについて"
  lead="Vivliostyleを開発している私たちについてご説明します。"

  foundation=foundation
  foundation_frame=foundation_frame
  reports=reports
  devteam=devteam
  sponsor=sponsor
%}
