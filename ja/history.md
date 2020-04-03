---
layout: page
title: Vivliostyle のなりたち
lang: ja
---


{% capture content %}
## 2014 年、Vivliostyle のはじまり

オープンソースで Web ブラウザベースの CSS 組版ソフトウェアを作る Vivliostyle プロジェクト構想が生まれたのは 2014 年後半です。

Web と同様の HTML+CSS で本のページの組版を可能にする CSS 組版を普及させることは、ワンソース・マルチユースを実現して出版物のアクセシビリティーを高めることにつながります。しかし、当時 CSS 組版は一部で実用化されていたものの、商用プロプライエタリ製品に限られていたため普及には限界がありました。

Vivliostyle プロジェクト創設者の村上は、その前はアンテナハウス社の商用組版エンジン [AH Formatter](https://www.antenna.co.jp/AHF/) の企画・開発に携わっており、そこで新プロジェクトとして Vivliostyle を企画し、同社からの支援を受けて新会社 Vivliostyle Inc. を設立することができました。そのあとに同社から完全に独立したのですが、そのなごりは同社のサイトに残っている [CSS 組版ブログ](https://blog.antenna.co.jp/CSSPage2/) に見られます（残してくれていて感謝）。

Vivliostyle という名前は、ギリシャ語で本を表す βιβλίο（発音は /vivlío/）と英語の style を合わせた造語です。この名前にしたのは、W3C CSS WG メンバーで[『CSS シークレット』](https://www.oreilly.co.jp/editors/archives/2016/07/ann-css-secrets-typesetting-with-vivliostyle.html)の著者でギリシャ人である [Lea Verou](http://lea.verou.me/) 氏からのアドバイスによるものです。


## EPUB Adaptive Layout 実装をベースに CSS Paged Media の実装

プロジェクト開始時（2015 年春）、ブラウザ上で動く JavaScript による CSS 組版エンジンを、いちから作るか既存のオープンソースを元にするか検討しました。そして注目したのが、[Peter Sorotokin](https://github.com/sorotokin) 氏（元 Adobe、その後 Google に所属）による、EPUB のページレイアウトのために CSS を拡張する提案 [EPUB Adaptive Layout 仕様](http://idpf.org/epub/pgt/) と、[EPUB Adaptive Layout の JavaScript 実装](https://github.com/sorotokin/adaptive-layout) です。これをベースにして、[CSS Paged Media](https://www.w3.org/TR/css-page-3/) 仕様をはじめとする本の組版に必要な機能を実装していくことになりました。その開発の中心になったのは、[川久保 亮](https://github.com/kwkbtr)氏です。多大な貢献をしてくれた開発者たちに感謝します。


{% include avatar-list.html namelist=site.data.developer.old_vivliostyle_dev %}


## 2018 年、新たなオープンソース団体 Vivliostyle Foundation

2018 年 3 月、それまで Vivliostyle を開発してきた会社は、オープンソースの取り扱いをやめて、社名とブランド名を変えて商用ライセンス版のみを扱うという決定をしました（参照: [トリムマーク株式会社](https://trim-marks.com/ja/)）。そして、Vivliostyle オープンソースの維持管理については、創設者である村上が中心となって引き継ぐことになり、そのために一般社団法人ビブリオスタイル (Vivliostyle Foundation) の設立となりました。

関連記事:
- [Vivliostyle の新しい始まり](https://vivliostyle.org/ja/blog/2018/03/26/a-new-beginning/)
- [Vivliostyle と Webベース出版について——Fidus Writer 開発者によるインタビュー](https://vivliostyle.org/ja/blog/2018/11/12/interview-by-fiduswriter/)
- [Vivliostyle version 2019.8.100 リリース！ ソースコードTypeScript化](https://vivliostyle.org/ja/blog/2019/08/16/vivliostyle-2019.8.100-released/)


<ul class="list--small" id="contributors-list"></ul>
{% include fetch-contributors-history.html id="contributors-list" %}
{% endcapture %}


{% include page/history.html
  title="Vivliostyle のなりたち"

  content=content
%}
