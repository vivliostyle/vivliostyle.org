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
- **💡Vivliostyle をローカル環境で使うには Vivliostyle CLI がお勧めです。Vivliostyle CLI には Vivliostyle Viewer が統合されています。👉[Vivliostyle CLI ユーザーガイド](https://docs.vivliostyle.org/#/ja/vivliostyle-cli)**

<ol class="list--medium">
  {% include button/primary.html url=site.data.project.viewer.url text="Vivliostyle Viewer を使う" %}
  {% include button/github.html url=site.data.project.viewer.github text="README" %}
</ol>

{% include frame-list.html frames=viewer_frames %}

Vivliostyle Viewer について詳しくは [Vivliostyle Viewer ユーザーガイド](https://docs.vivliostyle.org/#/ja/vivliostyle-viewer) を参照してください。

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

Vivliostyle CLI について詳しくは [Vivliostyle CLI ユーザーガイド](https://docs.vivliostyle.org/#/ja/vivliostyle-cli) を参照してください。

{% endcapture %}


<!-- pub -->
{% capture pub %}
<h2 id="vivliostyle-pub">Vivliostyle Pub <span class="tip">{{ site.data.project.pub.version }}</span></h2>

- インストール不要でVivliostyleが使えるWebアプリです。
- 左ペインでテキスト / Markdown / HTML を入力・編集すると、右ペインで組版結果がプレビューできます。
- 2025年から[新しいVivliostyle Pub](https://github.com/vivliostyle/vivliostyle.pub)の開発が進められています。次のURLで新しいAlpha版を試すことができます。
  - <https://alpha.vivliostyle.pub/>
- 旧アルファ版については、[Vivliostyle Pub α版ユーザーガイド](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/)を参照してください。

![]({{ site.data.project.pub.screenshot }})

<!-- <ol class="list--medium"> -->
  <!-- {% include button/primary.html url=site.data.project.pub.url text="Vivliostyle Pub を使う" %} -->
  <!-- {% include button/github.html url=site.data.project.pub.github text="README" %} -->
<!-- </ol> -->
{% endcapture %}


{% include page/getting_started.html
  title="使ってみる"
  lead="Vivliostyle には現在2つのプロダクトがあります。ここではそれぞれの使い方をご紹介。加えてアルファ版を公開中の新サービスもご案内します。"

  viewer=viewer
  cli=cli
  pub=pub
%}
