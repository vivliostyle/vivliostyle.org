---
title: 最近のvivliostyle.jsの進化について
lang: ja
image: /assets/posts/2021-10-12-recent-vivliostyle-js-updates/fig-1.png
author:
 - ogwata
tags:
 - リリース
 - Vivliostyle Core
 - Vivliostyle Viewer
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2021-10-12-recent-vivliostyle-js-updates/fig-1.png" alt="最近のvivliostyle.jsの進化について" style="width: 700px;" /></div>

この1ヵ月、vivliostyle.jsは大幅なアップデートを重ねてきました。9月初頭までv2.8.1でしたが、本稿執筆時点のバージョンはv2.11.1になっています。その概要は[Change Log](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md)で一覧できます。この記事では追加された便利な機能、そしてバグ修正にともなう組版結果への影響について説明し、最後に近日中に実装予定の機能について予告します。

## CSSの機能追加

 - [v2.9.0](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#290-2021-09-03)
    - [@supports](https://developer.mozilla.org/ja/docs/Web/CSS/@supports)……CSSの特定のプロパティやプロパティと値の組み合わせがサポートされているかどうかでスタイルを切り替えることができる
- [v2.10.0](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#2100-2021-09-17)
    - [line-break: anywhere](https://developer.mozilla.org/ja/docs/Web/CSS/line-break)……句読点やスペースを含め、全ての文字間での改行を許容する
    - [overflow-wrap: anywhere](https://developer.mozilla.org/ja/docs/Web/CSS/overflow-wrap)……インライン要素に対してテキストが行ボックスからあふれないよう、通常改行しない箇所でも改行する
    - [white-space: break-spaces](https://developer.mozilla.org/ja/docs/Web/CSS/white-space)……要素内の文字列に含まれるホワイトスペースの扱いを規定。`white-space: pre-wrap` と似ているが、重複するホワイトスペースの間も改行する
    - [font-variant-caps](https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-caps)……OpenTypeの欧文フォントにおける大文字関係の制御
    - [font-variant-ligatures](https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-ligatures)……OpenTypeの欧文フォントにおける合字の制御
    - [font-variant-numeric](https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-numeric)……OpenTypeフォントの数字、分数、序数記号におけるグリフを制御
    - [min-content](https://developer.mozilla.org/en-US/docs/Web/CSS/min-content)……ボックス内で自動改行される場合において、そのボックスの幅が最小になるよう、最も語長が長い単語に合わせてボックスを生成する
    - [max-content](https://developer.mozilla.org/en-US/docs/Web/CSS/max-content)……コンテンツが最大幅になるよう、単語の途中で改行せずにボックスを生成する
    - [fit-content](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content)……利用可能領域が可変の場合において、まずmax-contentを使ってボックスを生成し、利用可能領域がmax-contentの幅を下回るとmin-contentに切り替えてボックスを生成する
    - [unicode-range](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/unicode-range)…… `@font-face`で定義されたフォントのうち、特定の符号位置を指定する

中でも注目したいのが、最後の`unicode-range`です。これにより、たとえば欧文と和文で異なるフォントを指定したり、あるいは特定の文字や約物だけ別のフォントを指定したりすることが可能になります。また、中国語や日本語のWebフォントを指定する際、この機能を使ってグリフのサブセットを作成することで、容量を抑え表示速度を向上させることが期待できます。

## Vivliostyle ViewerのUIにテキスト検索機能を追加

本ページ一番上のVivliostyle Viewerスクリーンショットをご覧ください。画面左上に虫眼鏡のアイコンが確認できるでしょう。これが新設されたテキスト検索アイコンです。以下のページから、実際に最新バージョンのVivliostyle  Viewerが使えますので、ぜひお試しください。

- [Vivliostyle で本を作ろう Vol.5](https://vivliostyle.org/viewer/#src=https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol5/content/&bookMode=true)

## バグ修正にともなう組版結果への影響

###  デフォルトスタイルシートにおける、`body`の`margin`の値を8pxから0に変更

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2021-10-12-recent-vivliostyle-js-updates/fig-2.png" alt="body`における`margin`のデフォルト値を8から0に変更" style="width: 900px; " /></div>

vivliostyle.jsでは、当初から[ユーザーエージェントのデフォルトスタイルシート](https://github.com/vivliostyle/vivliostyle.js/blob/v2.9.1/packages/core/src/vivliostyle/assets.ts#L1064)のなかで、`body`（本文）の`margin`の値を8pxに設定してきました。この設定はWebブラウザのデフォルト値を踏襲したものです。

ところが、[CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/)では、本文の`margin`の値を`@page {...}`の`margin`プロパティによって指定することになっています。これにもとづき、VivliostyleをふくむほとんどのCSS Paged Media実装は、デフォルトスタイルシートで`@page { margin: 10% }`を設定しています。そうした中、vivliostyle.jsだけが加えて`body { margin: 8px; }`を設定するのは意味がありません。さらに言えば、vivliostyle.jsのユーザはページ領域内の余分な余白を避けるため、常に`body { margin: 0 }`を指定なければなりませんでした。

つまり、今までvivliostyle.jsが設定してきたデフォルトスタイルシートの`body { margin: 8px; }`は、CSS Paged Mediaの実装には適していないと言えます。この状況を修正するため、v2.10.0でデフォルトスタイルシートの設定を`body { margin: 0px; }`に変更しました。

スクリーンショットをご覧ください。左側のVivliostyle Viewerはv2.9.1、そして右側はバグを修正したv2.10.0です。左の旧バージョンの緑色枠の外側には8pxの間隔が確保されているのに対し、右側のv2.10.0では間隔はゼロであることが分かります（HTMLとCSSのコードは [Issue #776](https://github.com/vivliostyle/vivliostyle.js/issues/776)を参照）。

この修正により、v2.10.0の前後で組版結果が異なる可能性があります。vivliostyle.jsを組み込んだ Vivliostyle Viewer、Vivliostyle CLI、Create Bookを、以前からお使いのユーザは、お手元のデータに影響がないか、一度ご確認ください。詳細は下記のIssueを参照してください。

- [ Default body margin should be 0 in paged media #776 ](https://github.com/vivliostyle/vivliostyle.js/issues/776)

### ルート要素で指定された継承プロパティを、`@page`の内容に継承できるよう修正

これもスクリーンショットで比較してみましょう。まず、ルート要素の中で以下のように記述したHTMLを用意します（コード全体は[こちら](https://github.com/ogwata/testbed-20211012/blob/main/test-2.html)）。`root`セレクタにより、文字に関するスタイル（色、フォント名、バリアント、サイズ等）を指定しています。これらは[継承プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/inheritance#inherited_properties)ですので、続く`@page`で指定されたヘッダとフッタに継承されるはずです。

```css
:root {
  color: maroon;
  font-family: "Georgia", serif;
  font-variant: small-caps;
  font-style: italic;
  font-size: 200%;
}
@page {
      @top-center {
          content: "Here is the Page Header";
        }
      @bottom-center {
          content: counter(page);
        }
}
```

これを修正前後のVivliostyle Viewerに読み込ませたスクリーンショットをご覧ください。左側は修正前のv2.9.1、右側は修正したv2.10.0です。

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2021-10-12-recent-vivliostyle-js-updates/fig-3.png" alt="body`における`margin`のデフォルト値を8から0に変更" style="width: 1200px; " /></div>

画面の上端のヘッダと下端のフッタを左右で比べてください。左側の旧バージョンでは本来継承されるはずの文字に関するスタイルが有効にならず、ただヘッダとフッタの内容、位置だけが表示されてしまっています。これはぜひ直したいバグです。そこで右側の新バージョンをみると、ヘッダとフッタは指定通り、適切に表示されていることが分かります。

この修正によって、前項と同じくv2.10.0の前後で組版結果が異なる可能性があります。以前からVivliostyle Viewer、Vivliostyle CLI、Create Bookをお使いのユーザは、お手元のデータに影響がないか、一度ご確認ください。詳細は下記のIssueを参照してください。

- [Root element styles are not inherited to page context #568](https://github.com/vivliostyle/vivliostyle.js/issues/568)

## 直近のアップデート予定

最後に、 2021年10月中に予定されている機能追加について、簡単にご紹介しましょう。

- [CSS Text Level 4: text-spacing](https://drafts.csswg.org/css-text-4/#text-spacing-property)……日本語フォントにおける重複約物の詰めや、和欧文間のアキの調整
- [CSS Grid Layout](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout)……画面を複数のグリッドに分割することで、要素を列と行に整列させられる
- WebフォントにおけるJavaScript 埋め込みコードをサポート……容量が大きくなりがちな東アジアフォントに多い、JavaScript 埋め込みコードによるWebフォントの指定をサポートする予定です（なお、現在でも`@import`埋め込みコードや、`link`要素による指定はサポートされています）

以上、駆け足で紹介しましたが、来月11月13日（土曜）に開催予定の「Vivliostyle ユーザーと開発者の集い 2021秋」では、村上代表がvivliostyle.jsのアップデートについて、デモを交えながら詳しく説明する予定です。近日中にイベント告知を開始しますので、どうかお楽しみに！