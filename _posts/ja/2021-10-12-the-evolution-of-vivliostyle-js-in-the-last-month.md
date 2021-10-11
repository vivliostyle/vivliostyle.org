---
title: この1ヵ月のvivliostyle.jsの進化について
lang: ja
image: /assets/posts/2021-10-12-the-evolution-of-vivliostyle-js-in-the-last-month/2021-10-12-the-evolution-of-vivliostyle-js-in-the-last-month.png
author:
 - ogwata
tags:
 - リリース
 - Vivliostyle Core
 - Vivliostyle Viewer
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2021-10-12-the-evolution-of-vivliostyle-js-in-the-last-month/2021-10-12-the-evolution-of-vivliostyle-js-in-the-last-month.png" alt="この1ヵ月のvivliostyle.jsの進化について" style="width: 700px;" /></div>

この1ヵ月、vivliostyle.jsは大幅なアップデートを重ねてきました。9月初頭までv2.8.1でしたが、本稿執筆時点のバージョンはv2.11.1になっています。その概要は[Change Log](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md)で一覧できますが、ここでは追加された便利な機能、そしてバグの修正にともなうデフォルト値の変更について説明し、あわせて今月中に実装予定のセレクターについて予告します。

## セレクターの追加

- [line-break: anywhere](https://developer.mozilla.org/ja/docs/Web/CSS/line-break)……句読点やスペースを含め、全ての文字間での改行を許容する
- [font-variant-alternates](https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-alternates)……OpenTypeフォントの代替グリフ機能を制御
- [font-variant-caps](https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-caps)……OpenTypeの欧文フォントの大文字関係の制御
- [font-variant-east-asian](https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-east-asian)……OpenTypeの日本語を含む東アジアフォントのグリフ置換機能を制御
- [font-variant-ligatures](https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-ligatures)……OpenTypeの欧文フォントの合字を制御
- [font-variant-numeric](https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-numeric)……OpenTypeフォントの数字、分数、序数記号の表記を制御
- [width: min-content](https://developer.mozilla.org/ja/docs/Web/CSS/width)……対象の要素が取り得る最小の幅にセットする
- [width: max-content](https://developer.mozilla.org/ja/docs/Web/CSS/width)……対象の要素が取り得る最大の幅にセットする
- [unicode-range](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/unicode-range)…… `@font-face`で定義されたフォントのうち、特定の符号位置を指定できる

中でも注目したいのが、最後の`unicode-range`です。これにより、たとえば欧文と和文で異なるフォントを指定したり、あるいは特定の文字や約物だけ別のフォントを指定したりすることが可能になります。また、Webフォントを指定する際、このセレクタにより容量を押さえるためのサブセットを指定することが可能になります。

## バグ修正にともなうデフォルト値の変更

## Vivliostyle ViewerのUIにテキスト検索機能を追加

本ページに掲載したVivliostyle Viewerのスクリーンショットをご覧ください。画面左上に虫眼鏡のアイコンがあります。これが新設されたテキスト検索アイコンです。以下のページから、実際に最新バージョンのVivliostyle  Viewerを使えますので、ぜひお試しください。

- [Vivliostyle で本を作ろう Vol.5](https://vivliostyle.org/viewer/#src=https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol5/content/&bookMode=true)

## 直近のアップデート予定

最後に、 2021年10月中に予定されている機能追加について、簡単にご紹介しましょう。

- [CSS Text Level 4: text-spacing](https://drafts.csswg.org/css-text-4/#text-spacing-property)……日本語フォントにおける重複約物の詰めや、和欧文間のアキの調整
- [CSS Grid Layout](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout)……画面を複数のグリッドに分割することで、要素を列と行に整列させられる
- WebフォントにおけるJavaScript 埋め込みコードをサポート……容量が大きくなりがちな東アジアフォントに多い、JavaScript 埋め込みコードによるWebフォントの指定をサポートする予定です（なお、現在でも`@import`埋め込みコードや、`link`要素による指定はサポートされています）


なお、来月11月13日（土曜）に開催予定の「Vivliostyle ユーザーと開発者の集い 2021秋」では、村上代表がvivliostyle.jsのアップデートについて、より詳しく説明する予定です。近日中に告知を開始しますので、どうかお楽しみに！