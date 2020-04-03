---
layout: page
title: FAQ
lang: ja
---


{% capture license %}
## Vivliostyle Viewer についての FAQ <small>（準備中）</small>
## Vivliostyle CLI についての FAQ <small>（準備中）</small>
## CSS組版のテクニックについてのFAQ <small>（準備中）</small>

## Vivliostyle のライセンスについての FAQ

### Vivliostyle のオープンソース・ライセンスの種類は？

Vivliostyle はオープンソース・ライセンスとして AGPLv3 (GNU Affero General Public License, version 3) を採用しています。

AGPL は、GPL (GNU General Public License) と同様の互恵的なライセンス（派生物にも同じライセンスが適用される）であり、ソフトウェアの改変や商用利用が許可されています。GPL と異なる点は、ネットワーク経由の利用者にもソースコードにアクセスする権利が保証されることです。

参照:
- [GNU Affero General Public License (AGPLv3)](https://www.gnu.org/licenses/agpl-3.0.en.html)
  - [GNU Affero 一般公衆利用許諾書　日本語訳](http://gpl.mhatta.org/agpl.ja.html)
- [Frequently Asked Questions about the GNU Licenses](https://www.gnu.org/licenses/gpl-faq.en.html)
  - [GNUライセンスに関してよく聞かれる質問（GNUライセンスFAQ）日本語版](https://www.gnu.org/licenses/gpl-faq.ja.html)


### Vivliostyle ソースコードのコピーライトの帰属先は？

Vivliostyle のソースコードには、次のようなコピーライト表記があります:
（[epub.ts](https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/src/vivliostyle/epub.ts) の例）

> * Copyright 2013 Google, Inc.
> * Copyright 2015 Trim-marks Inc.
> * Copyright 2018 Vivliostyle Foundation

「Copyright 2013 Google, Inc.」とあるのは、Vivliostyle がもともと、Google に所属する Peter Sorotokin 氏によって開発された [EPUB Adaptive Layout JavaScript-based implementation ("Adapt")](https://github.com/sorotokin/adaptive-layout) をベースとして開発されたためです。この元プロジェクト由来のソースコードの権利は Google にあります。

Trim-marks 社（旧社名は Vivliostyle Inc.）は、2015年から2018年3月までのあいだ、Vivliostyle の開発の主体でした。この期間に書かれた Vivliostyle ソースコードの権利は Trim-marks 社にあります。また、Vivliostyle のライセンスは当初、元プロジェクトの "Adapt" を継承して Apache License 2.0 でしたが、2017年2月から AGPLv3 に変更されました。

Vivliostyle Foundation は、2018年3月に Trim-marks 社がオープンソース版の Vivliostyle の取り扱いをやめてから、そのオープンソース管理を引き継ぎました。それ以降に書かれた Vivliostyle のソースコードの権利は Vivliostyle Foundation にあります。


### Vivliostyle を利用して作られた出版物にオープンソース・ライセンスによる制約はありますか？

いいえ。Vivliostyle のライセンスが AGPL であることは、Vivliostyle を利用して作られた出版物には影響しません。出版物のソースデータ（HTML や CSS）を公開する義務はとくにありません。


### 会社内で Vivliostyle を制限なく利用できますか？

はい。Vivliostyle を会社・組織内でコピーして利用するのは自由であり、ソースコードを改変しても公開する義務はありません。

参照（GNUライセンスFAQ）:
- [GPLは、改変された版のソースコードを公に発表することを要求しますか?](https://www.gnu.org/licenses/gpl-faq.html#GPLRequireSourcePostedPublic)
- [一つの組織あるいは会社で複数のコピーを作成して使うことは「配布」となりますか?](https://www.gnu.org/licenses/gpl-faq.html#InternalDistribution)


### Vivliostyle Viewer または Vivliostyle Print を商用の Web アプリケーションから呼び出して利用することはできますか？

はい。[Vivliostyle Viewer](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/viewer) および [Vivliostyle Print](https://github.com/vivliostyle/vivliostyle-print) は、クライアントサイドのブラウザ上で独立したプログラムとして動作するものなので、サーバーサイドのプログラムやクライアントサイドの別のプログラムがプロプライエタリであっても、それらと組み合わせて利用することが可能です。

Vivliostyle (Viewer/Print) を改変して利用することも、改変したソースコードを公開するならば可能です。ただし、AGPL である Vivliostyle のプログラムと、それを呼び出すプロプライエタリなプログラムとがそれぞれ独立を保った形でコミュニケートする必要があります。

参照（GNUライセンスFAQ）:
- [GPLの及ぶプラグインをロードするように設計された不自由なプログラムをリリースすることはできるでしょうか?](https://www.gnu.org/licenses/gpl-faq.html#NFUseGPLPlugins)
- [わたしのプロプライエタリ・システムに、GPLの及ぶソフトウェアを組み入れたいのです。わたしには、このソフトウェアを使う許可はGPLが与えてくれるもの以外にはなにもありません。わたしはできますか?](https://www.gnu.org/licenses/gpl-faq.html#GPLInProprietarySystem)


### Vivliostyle Viewer が独立したプログラムとして動作する条件は？

[Vivliostyle Viewer](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/viewer) は、そのメインの HTML ファイルと、そこからリンクされている JavaScript ライブラリで構成されます。それが商用の Web アプリケーションと同じ Web サーバー上に置かれて使用される場合でも、それはエンドユーザーの Web ブラウザ上にロードされて実行されるものなので、サーバー側で動作する Web アプリケーションのプログラムとは明確に分離されています。

Vivliostyle Viewer で表示する対象の文書の URL や表示設定などのデータは Vivliostyle Viewer のメインの HTML ファイルの URL に付加される URL のフラグメント・パラメータで指定されます。商用の Web アプリケーションのフロントエンド側のプログラム（JavaScript など）と Vivliostyle プログラムとの間でのデータのやりとりに、この URL パラメータを使うのであれば、ふたつのプログラムを結合する必要がないので、Vivliostyle Viewer を独立したプログラムとして扱うことができます。


### Vivliostyle Print が独立したプログラムとして動作する条件は？

[Vivliostyle Print](https://github.com/vivliostyle/vivliostyle-print) は、Web ページに Vivliostyle での組版処理をともなった印刷機能を付加する JavaScript プログラムです。これを、商用 Web アプリケーションのフロントエンド側など別プログラムから使用する場合、パラメータを指定して Vivliostyle Print プログラムのメインの関数を呼び出して、その処理の終了を待つことになります。終了コードや処理したページ数など単純な戻り値を返すかもしれません。このような使われ方であれば、ふたつのプログラムどうしで複雑なデータ構造を共有したり相互的なデータのやりとりをするわけではないため、Vivliostyle Print を独立したプログラムとして扱うことができます。


### Vivliostyle CLI をサーバーサイドで利用することはできますか？

はい。[Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli) は、サーバーサイドの別のプログラムから呼び出されても、それぞれが独立したプログラムとして動作するかぎりは、呼び出す側のプログラムがプロプライエタリであっても問題ありません。


### Vivliostyle を商用利用する上で気を付けるべき制限事項は？

Vivliostyle を AGPL ライセンスに従いながら商用利用する上で、以下のことに気を付ける必要があります:

- Vivliostyle を改変して配布する場合（注意：Webサイトでの利用も含まれます）、改変した Vivliostyle のソースコードを公開する必要があります。
- Vivliostyle を組み込んで単一の結合したプログラムとして動作するものを作成して配布する場合は、その全体のソースコードを AGPL ライセンスで公開する必要があります。
- Vivliostyle のソースコードを改変する場合は、ソースファイルのヘッダーコメントにあるコピーライトの記述を保持してください。「Copyright 2013 Google, Inc.」の記述があるソースファイルには元プロジェクトである "Adapt" 由来のソースコードが含まれており、その元ソースコードは Apache License 2.0 の適用を受けます。[README](https://github.com/vivliostyle/vivliostyle.js/blob/master/README.md) や [LICENSE](https://github.com/vivliostyle/vivliostyle.js/blob/master/scripts/package-artifacts/LICENSE.md) ファイルの次の記述を保持してください:
    > Vivliostyle Core is implemented based on [Peter Sorotokin's EPUB Adaptive Layout implementation](https://github.com/sorotokin/adaptive-layout), which is licensed under [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
{% endcapture %}


{% include page/faq.html
  title="FAQ"
  lead="よくある質問とその回答をまとめました。これからも拡充していきます。質問があれば[こちら](/ja/community)まで！"

  license=license
%}
