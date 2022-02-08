---
title: 行末処理が進化、そしてPDF出力ではページ進行方向をサポート
lang: ja
image: /assets/posts/2022-02-08-Improved-of-line-end-handling-and-support-for-page-progression-direction-in-PDF/fig-1.png
author:  ogwata
tags:
  - リリース
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2022-02-08-Improved-of-line-end-handling-and-support-for-page-progression-direction-in-PDF/fig-1.png" alt="Improved of line end handling adn support for page progression direction in PDF output" style="width: 800px;  box-shadow: 1px 2px 2.5px 1.5px grey;" /><figcaption>図1 Vivliostyle Viewerの旧版 v.2.13.0（左）と新版 v2.14.0（右）</figcaption></div>

## はじめに

Vivliostyle.jsは2月4日にv2.14.0を、Vivliostyle CLIは同月6日にv4.7.0を、それぞれリリースしました。詳細は下記のファイルをご参照ください。

- [Vivliostyle.js v2.14.0](https://github-com.translate.goog/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md?_x_tr_sl=auto&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=op#2140-2022-02-04)
- [Vivliostyle CLI v4.7.0](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CHANGELOG.md#470-2022-02-06)

今回の新バージョンは、前回ご紹介したJavaScript対応のような派手さは無いものの、日本語をはじめとする東アジア言語の組版における行末処理の選択肢を増やし、加えて出力するPDFファイルの品質を高めるものです。この記事ではその内容をかいつまんで説明します。

## 行末処理の進化

Vivliostyle.jsは、[v2.12.1 (2021-11-19)](https://github-com.translate.goog/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md?_x_tr_sl=auto&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=op#2121-2021-11-19)において、初めて[CSS Text Module Level 4](https://www-w3-org.translate.goog/TR/css-text-4/?_x_tr_sl=auto&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=op#text-spacing-property)の`text-spacing`プロパティと、[CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/#hanging-punctuation-property)の`hanging-punctuation`プロパティを実装しました。どのブラウザもまだこれらを実装していないことを考えると、意欲的な取り組みと言えます。

とはいえ、この時点の実装はプロパティがもつ値のうち、ごく一部を実装したにすぎませんでした。今回の新バージョンでは、それぞれ値`allow-end`のサポートを追加するものです。では、これらのプロパティはどんな機能を持つものなのでしょう？

図1は今回のアップデート直前の Vivliostyle.js v.2.13.0と、アップデート後のv.14.0でテストページを表示させたものです。それぞれ以下のリンクから、実際に表示させて確かめることができます。

- [Vivliostyle.js v.2.13.0 - `text-spacing`と`hanging-punctuation`テスト](https://vivliostyle.github.io/viewer/v2.13.0/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/text-spacing/ts-hp-allow-force-end.html)
- [Vivliostyle.js v.2.14.0 - `text-spacing`と`hanging-punctuation`テスト](https://vivliostyle.org/viewer/#src=https://raw.githack.com/vivliostyle/vivliostyle.js/master/packages/core/test/files/text-spacing/ts-hp-allow-force-end.html)

水色の縦線は、分かりやすくするために文字サイズと同じ16pxの等間隔で引いた基準線です。最上段のサンプル文字列の字間に揃っていることに注意してください。この文字列は`text-spacing: none; hanging-punctuation: none`、つまり`text-spacing`も`hanging-punctuation`も無効にする指定がされています。ということは、基準線にぴったり揃った場合はツメ処理もアキ処理もしていない一方、基準線より前に文字があればツメ処理、逆に後ろにあればアキ処理がされていることになります。



