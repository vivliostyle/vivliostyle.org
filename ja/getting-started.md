---
layout: page
title: 使ってみる
lang: ja
---


<!-- viewer -->
{% capture viewer_frame1_description %}
### ウィンドウサイズに合わせたページ表示

![]({{ site.data.project.viewer.screenshot.responsive }})
{% endcapture %}


{% capture viewer_frame2_description %}
### 固定サイズによるページ表示

![]({{ site.data.project.viewer.screenshot.fixed }})
{% endcapture %}


{% include assign/array.html
  description1=viewer_frame1_description
  description2=viewer_frame2_description
%}{% assign viewer_frames = array %}


{% capture viewer %}
<h2 id="vivliostyle-viewer">Vivliostyle Viewer <span class="tip">{{ site.data.project.viewer.version }}</span></h2>

- ブラウザで動作する組版エンジン。HTML を読み込んで組版結果をブラウザに表示します。
- ローカルのファイルを組版・表示するには、webサーバー起動が必要です（くわしくはFAQをご覧ください）。

<ol class="list--medium">
  {% include button/primary.html url=site.data.project.viewer.url text="Vivliostyle Viewer を使う" %}
  {% include button/github.html url=site.data.project.viewer.github text="README" %}
</ol>

{% include frame-list.html frames=viewer_frames %}

他にプライベートネットワークで使える[ダウンロード版](https://github.com/vivliostyle/vivliostyle.js/releases)もあります。用途に合わせてお使いいただけます。
{% endcapture %}


<!-- cli -->
{% capture cli_frame1_description %}
### インストール方法

- 事前に [Node.js](https://nodejs.org/ja/) のインストールが必要です。
- [npm](https://www.npmjs.com/) パッケージからインストールできます。

```shell
$ npm install -g @vivliostyle/cli
```
{% endcapture %}


{% capture cli_frame2_description %}
### HTMLからPDFを作成する

- ターミナルのコマンドラインから、`build` コマンドで HTML ファイルを指定すると、CSS 組版した PDFファイルを出力できます。

```shell
$ vivliostyle build index.html
```
{% endcapture %}


{% capture cli_frame3_description %}
### プレビューの表示

- preview コマンドを指定すると、閲覧ができます。
- 操作の詳細は `-h` で。各コマンドのヘルプ `help [cmd]` も要チェック。

```shell
$ vivliostyle preview index.html
```

![]({{ site.data.project.cli.screenshot }})
{% endcapture %}


{% include assign/array.html
  description1=cli_frame1_description
  description2=cli_frame2_description
  description3=cli_frame3_description
%}{% assign cli_frames = array %}


{% capture cli %}
<h2 id="vivliostyle-cli">Vivliostyle CLI <span class="tip">{{ site.data.project.cli.version }}</span></h2>

- コマンドラインから CSS 組版をして表示します。PDF に出力できます。
- v2において press-ready をマージしたことにより、PDF/X-1a 出力がサポートされました（本機能には [Ghostscript](https://www.ghostscript.com/) と [Xpdf](http://www.xpdfreader.com/) が必要です。詳細は [press-ready](https://github.com/vibranthq/press-ready/blob/master/README.md) をご参照ください）。

<ol class="list--medium">
  {% include button/github.html url=site.data.project.cli.github text="README" %}
</ol>

{% include frame-list.html frames=cli_frames %}
{% endcapture %}


<!-- pub -->
{% capture pub %}
<h2 id="vivliostyle-pub">Vivliostyle Pub <small>(初期版を今年中に公開予定)</small> <span class="tip">{{ site.data.project.pub.version }}</span></h2>

左ペインでテキスト / Markdown / HTML を入力・編集すると、右ペインで組版結果がプレビューできます。

![]({{ site.data.project.pub.screenshot }})

<!-- <ol class="list--medium"> -->
  <!-- {% include button/primary.html url=site.data.project.pub.url text="Vivliostyle Pub を使う" %} -->
  <!-- {% include button/github.html url=site.data.project.pub.github text="README" %} -->
<!-- </ol> -->
{% endcapture %}


{% include page/getting_started.html
  title="使ってみる"
  lead="Vivliostyle には現在2つのプロダクトがあります。ここではそれぞれの使い方をご紹介。加えて年内リリース予定の新サービスもいち早くご案内します。"

  viewer=viewer
  cli=cli
  pub=pub
%}
