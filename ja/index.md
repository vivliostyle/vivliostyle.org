---
layout: page
title: Vivliostyle — 楽しく CSS 組版！
lang: ja
jumbotron_image: true
excerpt: "open source, web browser based CSS typesetting engine project"
---


{% capture whatsnew %}
## 新着情報・ブログ

{% assign show_count = 3 %}
{% assign posts = site.posts | where: "lang", page.lang | slice: 0, show_count %}
{% include post-list-horizontal.html posts=posts feature=site.data.whatsnew.feature.ja %}

<ol class="list--medium">
  {% include button/primary.html url="/ja/blog" text="ブログ記事一覧" %}
</ol>
{% endcapture %}


{% capture sample1 %}
## CSS 組版で本を作りたい！

Vivliostyle Viewer はブラウザから、Vivliostyle CLI はコマンドラインから HTML ファイルを読み込み、CSS で組版後、PDF に書き出せます。

<ol class="list--large">
  {% include thumbnail/viewer.html url=site.data.project.viewer.url %}
  {% include thumbnail/cli.html url=site.data.project.cli.github %}
</ol>

<ol class="list--medium">
  {% include button/primary.html url=site.data.project.viewer.url text="Vivliostyle Viewer で開く" %}
  {% include button/primary.html url=site.data.project.cli.github text="Vivliostyle CLI をチェックする" %}
  {% include button/simple.html text="または" %}
  {% include button/secondary.html url=site.data.project.pub.sample.ja text="作成例を見る" %}
</ol>

　

Vivliostyle Pub を使えば、印刷可能なPDFをブラウザ上から作成できます。

<ol class="list--large">
  {% include thumbnail/pub.html url=site.data.project.pub.github %}
</ol>

<ol class="list--medium">
  {% include button/primary.html url=site.data.project.pub.url text="Vivliostyle Pub を試す（ただ今アルファ版を公開中）" %}
</ol>
{% endcapture %}


{% capture sample2 %}
## EPUB や Web 上の文書を、好みのスタイルで読みたい！

Vivliostyle Viewer で EPUB や HTML、複数の HTML 文書（Web出版物）を読み込み、CSS で指定すれば、自分好みのスタイルで表示できます。

<ol class="list--large">
  {% include thumbnail/viewer.html url=site.data.project.viewer.sample.ja %}
</ol>

<ol class="list--medium">
  {% include button/primary.html url=site.data.project.viewer.sample.ja text="Vivliostyle Viewer で開く" %}
</ol>
{% endcapture %}


{% capture project %}
## Vivliostyle とは？

Vivliostyle には開発中も含め、次のプロダクトがあります。

{% include projects.html
  project1_src="/assets/projects/project1.svg"
  project1_name=site.data.project.project.name.ja
  project1_link=site.data.project.project.github
  project2_src="/assets/projects/project2.svg"
  project2_name=site.data.project.viewer.name
  project2_link=site.data.project.viewer.github
  project2_description="HTML を読み込んで組版結果をブラウザに表示"
  project3_src="/assets/projects/project3.svg"
  project3_name=site.data.project.cli.name
  project3_link=site.data.project.cli.github
  project3_description="コマンドラインから組版して PDF を生成"
  project4_src="/assets/projects/project4.svg"
  project4_name=site.data.project.pub.name
  project4_link=site.data.project.pub.url
  project4_description="マークダウンを入力すると組版結果が見られる（ただ今アルファ版を公開中）"
%}

このほか開発者向けライブラリとして、組版エンジンのコア [“Vivliostyle Core”]({{ site.data.project.core.github }})、およびWebサイトに印刷機能を組み込む [“Vivliostyle Print”]({{ site.data.project.print.github }}) があります。
{% endcapture %}


{% capture dev %}
## 一緒に開発しませんか

Vivliostyleプロジェクトでは、開発方針などをSlack上で話し合っています。ぜひ見てみてください。開発ガイド、ドキュメントは下記ボタンからご覧ください。

<ol class="list--medium">
  {% include button/slack.html text="Slack に参加" %}
  {% include button/github.html text="開発に参加" %}
  {% include button/secondary.html url="/ja/documents" text="ドキュメントを見る" %}
</ol>
{% endcapture %}


{% capture sponsor %}
## スポンサー

Vivliostyleは独立したオープンソースプロジェクトです。私たちのプロジェクトは皆さんの支援がなければ開発を続けることができません。あなたもぜひ支援をご検討ください。

{% include all-sponsors.html %}

<ol class="list--medium">
  {% include button/primary.html url="/ja/sponsors" text="スポンサーに応募する" %}
</ol>
{% endcapture %}


{% include page/index.html
  whatsnew=whatsnew
  sample1=sample1
  sample2=sample2
  project=project
  dev=dev
  sponsor=sponsor
%}
