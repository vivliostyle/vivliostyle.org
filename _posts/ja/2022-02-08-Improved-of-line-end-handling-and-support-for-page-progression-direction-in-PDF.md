---
title: 行末処理が進化、そしてPDF出力ではページ進行方向をサポート
lang: ja
image: /assets/posts/2022-02-08-Improved-of-line-end-handling-and-support-for-page-progression-direction-in-PDF/fig-1.png
author:  ogwata
tags:
  - リリース
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2022-02-08-Improved-of-line-end-handling-and-support-for-page-progression-direction-in-PDF/fig-1.png" alt="Improved of line end handling adn support for page progression direction in PDF output" style="width: 820px;  box-shadow: 1px 2px 2.5px 1.5px grey;" /><figcaption>図1 Vivliostyle Viewerの旧版 v.2.13.0（左）と新版 v2.14.0（右）</figcaption></div>

## はじめに

Vivliostyle.jsは2月4日にv2.14.0を、Vivliostyle CLIは同月6日にv4.7.0を、それぞれリリースしました。詳細は下記をご参照ください。

- [Vivliostyle.js v2.14.0](https://github-com.translate.goog/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md?_x_tr_sl=auto&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=op#2140-2022-02-04)
- [Vivliostyle CLI v4.7.0](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CHANGELOG.md#470-2022-02-06)

新バージョンは、[前回ご紹介した](https://vivliostyle.org/ja/blog/2022/01/24/JavaScript-can-now-be-used-in-typesetting-by-Vivliostyle/)JavaScript対応のような派手さは無いものの、日本語をはじめとする東アジア言語の組版における行末処理の選択肢を増やし、加えて出力するPDFファイルの品質を高めるものです。この記事ではその内容をかいつまんで説明します。

## 行末処理の進化

Vivliostyle.jsは、[v2.12.1 (2021-11-19)](https://github-com.translate.goog/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md?_x_tr_sl=auto&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=op#2121-2021-11-19)において、[CSS Text Module Level 4](https://www-w3-org.translate.goog/TR/css-text-4/?_x_tr_sl=auto&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=op#text-spacing-property)の`text-spacing`プロパティと、[CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/#hanging-punctuation-property)の`hanging-punctuation`プロパティを実装しました。これにより、日本語／中国語と欧語における単語間の間隔や、連続する全角句読点類の間隔を調整できるようになりました。まだどのブラウザもこれらのプロパティを実装していないことを考えると、意欲的な取り組みと言えます。

とはいえ、この時点の実装は仕様に定められた値のうち、一部を実装したにすぎませんでした。今回の新バージョンでは、それぞれのプロパティに値`allow-end`のサポートを追加するものです。では、これによりどんな組版が実現できるようになったのでしょう？

図1は今回のアップデート直前の Vivliostyle.js v.2.13.0（左、以下旧版）と、アップデート後のv2.14.0（右、以下新版）で、同一のテストページを表示させたものです。あなたのブラウザでも、以下のリンクから同じように表示できます。

- [Vivliostyle.js v.2.13.0 - `text-spacing`と`hanging-punctuation`テストページ](https://vivliostyle.github.io/viewer/v2.13.0/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/text-spacing/ts-hp-allow-force-end.html)
- [Vivliostyle.js v.2.14.0 - `text-spacing`と`hanging-punctuation`テストページ](https://vivliostyle.org/viewer/#src=https://raw.githack.com/vivliostyle/vivliostyle.js/master/packages/core/test/files/text-spacing/ts-hp-allow-force-end.html)

テストページの見出しは適用しているプロパティとその値です。サンプル文はすべて共通で、1行目は行端である10字目に読点（U+3001）、2行目は11字目に句点（U+3002）、3行目は10字目と11字目に半角の感嘆符（U+0021）と読点（U+3001）があります。分かりやすくするために、文字サイズと同じ16pxの等間隔で水色の基準線を引いています。

最初の見出しのサンプル文1行目の字間に、基準線が揃っていることに注意してください。この見出しに`text-spacing: none; hanging-punctuation: none`とあるように、このブロックはプロパティ`text-spacing`と`hanging-punctuation`を無効（`none`）にする指定がされています（だから旧版も新版も組版結果は同一）。ということは、字間と基準線が揃っているいればツメ処理もアキ処理もしておらず、基準線よりも前に文字があれば何らかのツメ処理が、逆に後ろにあればアキ処理をしていることになります。そして、左右の組版結果を比較することで、新版の変更点が確認できるわけです。

上から2番目と3番目の違いは、`hanging-punctuation:`の値が`allow-end`か、それとも`force-end`かというものです。旧版の方は2番目と3番目が同じ組版結果であるのに対して、新版の方は全て異なっています。つまり、これが新版のアップデートの結果なのです。

この`hanging-punctuation:`というプロパティは、いわゆる「ぶらさがり」を実現するものです。
