---
title: 新年のご挨拶とVivliostyleのアップデートについて
lang: ja
image: /assets/posts/
author:
  - ogwata
tags:
  - リリース
  - Vivliostyle Core
  - Vivliostyle Pub
  - Vivliostyle CLI
---
<div style="float: right; margin: 0 0 1em 1em;"><a href="https://vivliostyle.org/ja/sponsors/"><img src="/assets/posts/2021-01-06-new-years-greetings-and-updates-on-vivliostyle/fig1.png" alt="Implementation of named strings in Vivliostyle Viewer" style="width: 400px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></a></div>


## はじめに

新年あけましておめでとうございます。今年もVivliostyleをよろしくお願い申し上げます。

Vivliostyleにとって昨年は、開発体制を整えたり、新プロジェクトを立ち上げたり、いわば大きな飛躍をするための「準備の年」だったと思います。今年は積み重ねてきた成果を生かし、大空へ飛び立てるよう微力を尽くすつもりです。

そんな「準備の年」にあって、Vivliostyleは着実にアップデートを重ね、機能を追加してきました。本来このブログでリリースをお知らせすべきなのですが、去年はそれができませんでした。そこで現在のVivliostyleの開発状況について、この記事で概略をお伝えしたいと思います。

## vivliostyle.jsの機能追加

まずプロジェクト全体の基盤となる、[vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js) のアップデート履歴については、[GitHub のリリース履歴のページ](https://github.com/vivliostyle/vivliostyle.js/releases)にまとまっています。見逃せない機能追加は以下の2点でしょう。

- [v2.2.0 (2020-11-26)](https://github.com/vivliostyle/vivliostyle.js/releases/tag/v2.2.0)……Vivliostyle Viewer のUIにページスライドバーを追加
- [v2.4.0 (2020-12-28)](https://github.com/vivliostyle/vivliostyle.js/releases/tag/v2.4.0)……[named strings（名前付き文字列）<i class="fas fa-external-link-alt"></i>](https://www.w3.org/TR/css-gcpm-3/#named-strings)のサポート

中でも可能性を感じるのが named strings です。以下のテストページで、このプロパティがどのように使えるのか確かめることができます。

- [Test cases / Named Strings](https://raw.githack.com/vivliostyle/vivliostyle.js/master/packages/core/test/files/#Named_Strings)

上記ページの “canary” をクリックすると named strings を実装したカナリア・バージョンの Vivliostyle Viewer （図上）が、“2019.11” か “2018.2” をクリックするとまだ実装してない過去バージョンのVivliostyle Viewer（図下）が起動し、両者を比較することができます。

これを見れば、出版に詳しい方なら「ああ、天柱やノンブルね」とうなずかれるかもしれません。もちろんそれは正しいのですが、named strings の可能性はそれに留まるものではありません。たとえばbody要素の中で使えます。これにより本文や見出しの中でnamed stringsとして指定した任意の文字列、たとえば本のタイトルや著者名等を代入することができるのです。

なお、これらのバージョンの開発には、株式会社日本ビジネスプレスより支援をいただいていることを記して感謝いたします。

## Vivliostyle CLI  v3.0 と webbook への出力

次に Vivliostyle CLI について。現在のバージョンはv2.1.2で、アップデート履歴は同じく[GitHub のリリース履歴のページ](https://github.com/vivliostyle/vivliostyle-cli/releases)にまとまっています。これをみると、一番上に Release 3.0.0-pre.5 があることに気付かれるでしょう。じつは現在、メジャーアップデートに向けて作業中なのです。その v3.0 の仕様は下記にまとまっています。

- [Vivliostyle CLI v3.0 new spec](https://github.com/vivliostyle/community/wiki/Vivliostyle-CLI-v3.0-new-spec)

目玉となるのは、`--generate-webbook`オプションの追加です。これによりMarkdown（VFM）ファイルを読み込んで、webbook（本を作ることができるHTMLファイル群とCSS、画像、フォントなどの関連ファイルをフォルダにまとめるファイル形式）に出力できるようになります。webbookについては、2020年秋の開発者イベントにおける村上代表の発表をご参照下さい。

- [これからのオープンな出版標準としての「WebBook」](https://github.com/vivliostyle/community/wiki/Rapid-publishing-for-public-health-books-against-COVID-19#%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AE%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%81%AA%E5%87%BA%E7%89%88%E3%81%AE%E6%A8%99%E6%BA%96%E3%81%A8%E3%81%97%E3%81%A6webbook)

このwebbookを中間ファイルとして出力することで、そこからEPUB、Webページ、PDFなどへ容易に変換することができるようになります。夢が広がりますね。

## そしてVivliostyle Pub について

最後に、私たちの最大の目標である Vivliostyle Pub についてです。ここまで述べてきた vivliostyle.jsも、Vivliostyle CLI 3.0も、すべてはVivliostyle Pubの要素技術にすぎません。その要件仕様は下記にまとまっています。

- [Vivliostyle Pub v1 要件仕様 (WIP)](https://github.com/vivliostyle/community/wiki/Vivliostyle-Pub-v1-Req)

この中で、生成可能なコンテンツフォーマットの一つとして webbook が挙げられていることからも分かるとおり、前述 Vivliostyle CLI 3.0 はVivliostyle Pubの重要なコンポーネントなのです。

私たちはこれらの開発を着実にすすめることで、今年大きく羽ばたくことを願っています。どうかご支援いただければ幸いです。
