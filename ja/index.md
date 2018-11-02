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

Vivliostyleは、電子出版＝Web出版の時代にマッチする新しい組版エンジンを、Web標準技術で作るオープンソース・プロジェクトです。

* Webブラウザの組版をもっと良くしてWeb・電子出版と印刷出版の共通の組版エンジンに
* CSS組版機能をJavaScriptで実装
* CSS組版関連仕様のW3C標準化と連携して実装を推進

## Vivliostyle Foundation について

私たちは、オープンな標準技術でWebと出版・印刷の世界をひとつにするオープンソースの組版ソフトウェアVivliostyleの開発、公開、普及を促進することにより、これまで印刷の歴史とともに培われてきた組版の技術をWebと電子出版において継承・進化させて、これからの世界の学術・文芸・情報コミュニケーションの発展に欠かせない出版の電子化とアクセシビリティの向上に寄与することを目指し、次のような活動を行います。

* Vivliostyleオープンソース・プロジェクトとコミュニティの維持管理
* Vivliostyleと関連技術の研究開発
* VivliostyleとCSS組版の普及啓発・教育
* Web・出版・アクセシビリティ等の標準技術に関する諸団体と連携して標準化推進
* Vivliostyleと連携する外部のプロジェクトとの協力

<div style="margin: 2em 0 1em; text-align: right">
<div><strong><ruby>Vivliostyle Foundation<rt style="font-size: 75%">一般社団法人ビブリオスタイル</rt></ruby></strong></div>
<div>2018年8月&ensp;設立</div>
<br>
{% assign people = "murakami, florian, johannes" | split: ", " %}
{% for a in people %}
<div><strong><a href="mailto:{{ site.data.people[a].email }}">{{ site.data.people[a].ja }}</a></strong>&ensp;({{ site.data.people[a].role_ja }})</div>
{% endfor %}
</div>
