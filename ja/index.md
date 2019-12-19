---
title: The Vivliostyle Project
aside: true
lang: ja
aside-type: blog-entries
# feature_text: |
#   ## Vivliostyle
#   CSS Typesetting
feature_image: "/assets/header-image.png"
excerpt: "open source, web browser based CSS typesetting engine project"
---

Vivliostyle は、電子出版＝ Web 出版の時代にマッチする新しい組版エンジンを、Web 標準技術で作るオープンソース・プロジェクトです。

- Web ブラウザの組版をもっと良くして Web・電子出版と印刷出版の共通の組版エンジンに
- CSS 組版機能を JavaScript で実装
- CSS 組版関連仕様の W3C 標準化と連携して実装を推進

☞ Check the latest [**Vivliostyle Viewer**](https://vivliostyle.org/viewer/)

## Vivliostyle Foundation について

私たちは、オープンな標準技術で Web と出版・印刷の世界をひとつにするオープンソースの組版ソフトウェア Vivliostyle の開発、公開、普及を促進することにより、これまで印刷の歴史とともに培われてきた組版の技術を Web と電子出版において継承・進化させて、これからの世界の学術・文芸・情報コミュニケーションの発展に欠かせない出版の電子化とアクセシビリティの向上に寄与することを目指し、次のような活動を行います。

- Vivliostyle オープンソース・プロジェクトとコミュニティの維持管理
- Vivliostyle と関連技術の研究開発
- Vivliostyle と CSS 組版の普及啓発・教育
- Web・出版・アクセシビリティ等の標準技術に関する諸団体と連携して標準化推進
- Vivliostyle と連携する外部のプロジェクトとの協力

<div style="margin: 2em 0 1em; text-align: right">
<div><strong><ruby>Vivliostyle Foundation<rt style="font-size: 75%">一般社団法人ビブリオスタイル</rt></ruby></strong></div>
<div>2018年8月&ensp;設立</div>
<br>
{% assign people = "murakami, florian, johannes" | split: ", " %}
{% for a in people %}
<div><strong><a href="mailto:{{ site.data.people[a].email }}">{{ site.data.people[a].ja }}</a></strong>&ensp;({{ site.data.people[a].role_ja }})</div>
{% endfor %}
</div>
<br>

{% include nav-share.html %}
