---
title: Vivliostyle の最新アップデート — CLI 改良と CSS Paged Media サポートの充実
lang: ja
author:
  - murakami
tags:
  - リリース
  - Vivliostyle Core
  - Vivliostyle Viewer
  - Vivliostyle CLI
---

Vivliostyle の最近の重要なアップデートは、Vivliostyle CLI のプレビュー機能改良、それから CSS Paged Media 仕様サポートの充実です。

## Vivliostyle CLI のプレビュー機能改良：Vivliostyle Viewer を統合

Vivliostyle CLI v3.2 から、プレビュー機能が以前の簡易ビュワーから、フル機能の Vivliostyle Viewer に置き換わりました。それにともなう主な改善点やメリットは以下です：

- 見開き表示モード、ページスライダー、目次パネルからのナビゲーションなど、使い勝手が向上。
- 原稿ファイルの更新によるリロードで表示位置が先頭ページに戻ることなく保持されるようになりました。
- ユーザースタイルシートの指定が可能になったので、既存のWebやEPUBコンテンツからの組版でもページレイアウトを変更可能。
- Vivliostyle Viewer を別にインストールしたり、それを使うためにローカル Web サーバーを立ち上げることなどが不要に。

Vivliostyle CLI のインストール方法と使い方については、[Vivliostyle CLI ユーザーガイド](https://docs.vivliostyle.org/#/ja/vivliostyle-cli) をご覧ください。

詳しい更新内容は [Vivliostyle CLI 変更履歴](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CHANGELOG.md) をご覧ください。


## CSS Paged Media 仕様サポートの充実

[Vivliostyle.js (Core)](https://github.com/vivliostyle/vivliostyle.js) の最近の一連のバージョンアップ（v2.4–v2.8）で、CSS組版の基本的な標準仕様である [CSS Paged Media](https://www.w3.org/TR/css-page-3/) や関連CSS仕様のサポートが充実しました：

- [Named strings（名前付き文字列）](https://www.w3.org/TR/css-gcpm-3/#named-strings) / [v2.4 (2020-12-28)](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#240-2020-12-28)
  - 柱（ページヘッダー／フッター）に表示する文字列を本文中の見出しなどから得られるようにする機能
- [:nth() page selector （N番目ページセレクタ）](https://www.w3.org/TR/css-gcpm-3/#document-page-selectors) / [v2.5 (2021-02-26)](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#250-2021-02-26)
  - 文書の N 番目のページのスタイルを定義できる機能
- [Named pages （名前付きページ）](https://www.w3.org/TR/css-page-3/#using-named-pages) / [v2.7 (2021-04-07)](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#270-2021-04-07)
  - ページの種類ごとに名前をつけてページのスタイルを定義できる機能
- [:blank page selector （空白ページセレクタ）](https://www.w3.org/TR/css-page-3/#blank-pseudo) / [v2.8 (2021-04-16)](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#280-2021-04-16)
  - 改丁（見開きの左右ページを指定した改ページ）によって生じる空白ページのスタイルを定義できる機能

詳しい更新内容は [Vivliostyle.js 変更履歴](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md) をご覧ください。


### 「Vivliostyle.js における CSS Paged Media の実装」

2021年4月10日にオンライン開催したイベント「[CSS組版 Vivliostyle ユーザーと開発者の集い 2021春](https://vivliostyle.connpass.com/event/208401/)」で、Vivliostyle.js における CSS Paged Media の実装について発表を行いました。そのスライド資料をご覧ください。

- [Vivliostyle.js における CSS Paged Media の実装 (Vivliostyle Viewer で閲覧)](https://bit.ly/vivliostyle202104)
  - [HTML](https://vivliostyle.github.io/vivliostyle_doc/ja/events/vivliostyle-css-paged-media-20210410/slide.html)
  - [ソース (GitHub)](https://github.com/vivliostyle/vivliostyle_doc/tree/gh-pages/ja/events/vivliostyle-css-paged-media-20210410)
