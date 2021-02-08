---
title: Vivliostyle CLI がメジャーバージョンアップ
lang: ja
image: /assets/posts/2021-02-08-Vivliostyle-CLI-is-Major-Upgrade-to-v.3/@@@.xxx
author:
  - ogwata
tags:
  - リリース
  - Vivliostyle CLI
  - Vivliostyle Pub
  - VFM
  - Vivliostyle Themes
---
<div style="float: right; margin: 0 0 1em 1em;"><video src="/assets/posts/2021-02-08-Vivliostyle-CLI-is-Major-Upgrade-to-v.3/@@@.xxx" alt="New release of Vivliostyle CLI v.3" style="width: 400px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></div>


今年初めてのエントリ[「新年のご挨拶とVivliostyleのアップデートについて」](https://vivliostyle.org/ja/blog/2021/01/06/new-years-greetings-and-updates-on-vivliostyle/)の中で、Vivliostyle CLI v.3を準備中であることを書きましたが、本日正式にリリースしたことをお知らせします！

- [vivliostyle/vivliostyle-cli/release/v3.0.0](https://github.com/vivliostyle/vivliostyle-cli/releases/tag/v3.0.0)

メジャーバージョンアップだけあって、v.3には多くの変更が含まれています。そのうち主要な新機能だけでも挙げてみましょう。

- 設定ファイル`vivliostyle.config.js`を使って出版物のカスタマイズが可能になった
- [Vivliostyle Themes](https://github.com/vivliostyle/themes)をスタイルに指定できるようになった
- 以下の形式を読み込めるようになった
    - [“VFM”](https://vivliostyle.org/ja/make-books-with-create-book/#vfm-%E3%81%A7%E5%8E%9F%E7%A8%BF%E3%82%92%E6%9B%B8%E3%81%84%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86)……書籍用に独自拡張したMarkdown
    - “EPUB”……電子書籍のデファクト形式
- 以下の形式で出力できるようになった
    - [webpub](https://github.com/vivliostyle/community/wiki/Rapid-publishing-for-public-health-books-against-COVID-19#%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%81%AA%E5%87%BA%E7%89%88%E3%81%AE%E6%A8%99%E6%BA%96%E3%81%A8%E3%81%97%E3%81%A6webbook)……HTMLの交換形式（[前回エントリの](https://vivliostyle.org/ja/blog/2021/01/06/new-years-greetings-and-updates-on-vivliostyle/) “webbook” と同じ。変更理由は[こちら](https://github.com/vivliostyle/vivliostyle-cli/pull/116)）

上記のうち、設定ファイルやVivliostyle Themes、VFMを使ったビルド作業について、コントリビュータの [@spring_raining<i class="fas fa-external-link-alt"></i>](https://twitter.com/spring_raining) さんが短い動画を作ってくれました。本エントリ冒頭に掲げた動画です。それを詳しいタイムシートにおこしてみたのが下記のものです。

1. 作業概要の提示 (〜0.01)
2. ターミナルで設定ファイルを生成 (〜0.02)
3. 設定ファイル `vivliostyle.config.js`の読み込み (〜0.12)
4. 設定ファイルを上書きしてカスタマイズ (〜0.21)
5. ターミナルでスタイルファイル ([Bunko Theme](https://github.com/vivliostyle/themes#bunko)) の読み込み(〜0.27)
6. ターミナルでMarkdownファイルを読み込み、ビルドしてPDFを出力(〜0.47)
7. [Chromium<i class="fas fa-external-link-alt"></i>](https://www.chromium.org/Home)により組版結果をプレビュー(〜1.05)
8. ChromiumからPDFを出力(〜1.15)

以上述べたような v.3へのバージョンアップによって、Vivliostyle CLI の実用性は格段に向上しました。言うまでもなく、CLI は来るべき Vivliostyle Pub の心臓部とも言える重要コンポーネントです。Vivliostyleの次なるステップに、どうかご注目ください。
