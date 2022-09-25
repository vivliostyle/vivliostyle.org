---
layout: page
title: Vivliostyle で本を作ろう
lang: ja
---


{% capture description %}
「Vivliostyle で本を作ろう」はユーザ会編集による同人誌。Vivliostyleを使うノウハウや、開発に参加するための情報がギッシリ詰まってます。毎回の[技術書典](https://techbookfest.org/)にあわせて刊行していますが、同時に Web 上でバックナンバーも公開することにしました。これを読んで、Vivliostyle で本を作ろう！

- <i class="toc__type">A</i> **入門・使用レポート**……組版に関する tips を含む
- <i class="toc__type">B</i> **業務での活用事例**……周辺ツールとの連携や、特殊な要求にこたえるための工夫など
- <i class="toc__type">C</i> **開発について**……今後の予定や現状の課題など
- <i class="toc__type">D</i> **Vivliostyle について**……開発以外の総合的な話題
{% endcapture %}



{% capture vol6_description %}
## Vivliostyle で本を作ろう Vol.6<small>（2022年9月11日）</small>

Vivliostyle.js v2.16.0 と v2.17.0 で機能が追加された、新しい CSS プロパティ対応の件を中心に、より実践的な CSS の活用方法について多く紹介されました。
{% endcapture %}


{% capture vol5_description %}
## Vivliostyle で本を作ろう Vol.5<small>（2021年7月11日）</small>

特にアクティブに開発されている VFM や、CSS 組版の基本的な標準仕様で、2021年春ごろに Vivliostyle への実装が進んだ CSS Paged Media Level 3 について紹介されています。
{% endcapture %}


{% capture vol4_description %}
## Vivliostyle で本を作ろう Vol.4<small>（2020年9月12日）</small>

Vivliostyle.js v2.0.0 以降に登場したプロジェクトについての原稿が集まりました。CSS 組版の知見や FAQ は役立つこと間違いなし。
{% endcapture %}


{% capture vol3_description %}
## Vivliostyle で本を作ろう Vol.3<small>（2020年3月7日）</small>

「Vivliostyleの過去と未来」が分かる原稿が集まりました。また、村上ファウンダーの論考は、なぜ Vivliostyle が生まれたのかを考えるためにも必読！
{% endcapture %}


{% capture vol2_description %}
## Vivliostyle で本を作ろう Vol.2<small>（2019年9月22日）</small>

一歩踏み込んだ活用事例が集まりました。とくに「Vivliostyle で縦組シナリオを組版する」では今までなかった縦組組版についても説明しています。

関連記事：[技術書典7に出展『Vivliostyleで本を作ろう Vol.2』公開！](/ja/blog/2019/09/25/make-books-with-vivliostyle-vol2/)
{% endcapture %}


{% capture vol1_description %}
## Vivliostyle で本を作ろう Vol.1<small>（2019年4月14日）</small>

創刊号らしく体験記事がたくさん集まりました。とくに村上ファウンダーの「Vivliostyle Viewer でCSS組版ちょっと入門」は今のところ数少ない Vivliostyle の入門記事です。

関連記事：[技術書典6に出展『Vivliostyleで本を作ろう Vol.1』公開！](/ja/blog/2019/05/06/make-books-with-vivliostyle-vol1/)
{% endcapture %}


{% include assign/hash.html
  description=vol6_description
  thumbnail=site.data.book.vol6.img
  toc=site.data.book.vol6.toc
  web_url=site.data.book.vol6.url.web
  viewer_url=site.data.book.vol6.url.viewer
  print_url=site.data.book.vol6.url.print
  source_url=site.data.book.vol6.url.source
%}{% assign vol6 = hash %}


{% include assign/hash.html
  description=vol5_description
  thumbnail=site.data.book.vol5.img
  toc=site.data.book.vol5.toc
  web_url=site.data.book.vol5.url.web
  viewer_url=site.data.book.vol5.url.viewer
  print_url=site.data.book.vol5.url.print
  source_url=site.data.book.vol5.url.source
%}{% assign vol5 = hash %}


{% include assign/hash.html
  description=vol4_description
  thumbnail=site.data.book.vol4.img
  toc=site.data.book.vol4.toc
  web_url=site.data.book.vol4.url.web
  viewer_url=site.data.book.vol4.url.viewer
  print_url=site.data.book.vol4.url.print
  source_url=site.data.book.vol4.url.source
%}{% assign vol4 = hash %}


{% include assign/hash.html
  description=vol3_description
  thumbnail=site.data.book.vol3.img
  toc=site.data.book.vol3.toc
  web_url=site.data.book.vol3.url.web
  viewer_url=site.data.book.vol3.url.viewer
  print_url=site.data.book.vol3.url.print
  source_url=site.data.book.vol3.url.source
%}{% assign vol3 = hash %}


{% include assign/hash.html
  description=vol2_description
  thumbnail=site.data.book.vol2.img
  toc=site.data.book.vol2.toc
  web_url=site.data.book.vol2.url.web
  viewer_url=site.data.book.vol2.url.viewer
  print_url=site.data.book.vol2.url.print
  source_url=site.data.book.vol2.url.source
%}{% assign vol2 = hash %}


{% include assign/hash.html
  description=vol1_description
  thumbnail=site.data.book.vol1.img
  toc=site.data.book.vol1.toc
  web_url=site.data.book.vol1.url.web
  viewer_url=site.data.book.vol1.url.viewer
  print_url=site.data.book.vol1.url.print
  source_url=site.data.book.vol1.url.source
%}{% assign vol1 = hash %}


{% include assign/array.html
  vol6=vol6
  vol5=vol5
  vol4=vol4
  vol3=vol3
  vol2=vol2
  vol1=vol1
%}{% assign books = array %}


{% include page/make_books_with_vivliostyle.html
  title="特集企画：Vivliostyle で本を作ろう"

  description=description
  books=books

  web_buttontext="Webページで読む"
  viewer_buttontext="Vivliostyle Viewer で読む"
  print_buttontext="印刷用"
  source_buttontext="ソース"
%}
