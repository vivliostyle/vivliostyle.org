---
title: Giga-EpubViewerにVivliostyle.jsが採用されました
lang: ja
image: /assets/posts/2024-04-16-giga-epubviewer-adopts-vivliostyle-js/fig-2a.jpg
author: ogwata
tags:
  - リリース
---


[株式会社はてな](https://hatena.co.jp/)は今年3月29日、自社のマンガビューワ[「GigaViewer」](https://hatena.co.jp/solutions/gigaviewer)が、[「少年ジャンプ＋」（株式会社集英社）](https://shonenjumpplus.com/)のアプリ版に採用されたことを発表しました。

- [はてなのアプリ専用マンガビューワを集英社が採用。2,700万ダウンロードを超える「少年ジャンプ＋」に提供開始（2024-03-29）](https://hatena.co.jp/press/release/entry/2024/03/29/120000)

これにともない、GigaViewerに組み込まれた小説用ビューワ「Giga-EpubViewer」のレイアウトエンジンとして、Vivliostyle.jsが採用されたことをお知らせします。

もしかしたら、「なぜマンガアプリにVivliostyleが？」と不思議に思われる方もいるかもしれません。じつは「少年ジャンプ＋」はマンガ作品のノベライズにも力を入れており、たくさんの小説を掲載しています。アプリをお持ちの方は、ぜひトップページから「ノベル」で検索してみてください。

そうした小説を読みやすく組版するために選ばれたのが、Vivliostyle.jsというわけです。開発にあたって株式会社はてなは、まず[Bronze Sponsor](http://127.0.0.1:4000/ja/sponsors/#%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B5%E3%83%BC%E4%B8%80%E8%A6%A7)として私達をサポートすることを決めました。

<figure style="float: right; margin: 0 0 1em 1em;">
  <img src="/assets/posts/2024-04-16-giga-epubviewer-adopts-vivliostyle-js/fig-2a.jpg" alt="「NARUTO—ナルト—暁秘伝 咲き乱れる悪の華」" style="width: 360px; box-shadow: 1px 1px 2px 1px grey;" />
  <figcaption>「NARUTO—ナルト—暁秘伝 咲き乱れる悪の華」</figcaption>
</figure>

その上で小説用ビューワ、Giga-EpubViewerのために、Vivliostyle.jsのモジュールであるVivliostyle Coreを文字組版用のレイアウトエンジンとして組み込みました。その開発にあたっては、同社からの技術的な質問に答える形で、なんどか私達もサポートさせていただいています。

Giga-EpubViewerは[AGPLライセンス](https://www.gnu.org/licenses/agpl-3.0.html)に従ってVivliostyle.jsを利用しています。たとえばソースコードの入手方法は、下記の手順により確認できる「オープンソース」の項目をご覧ください。

- アプリ起動＞マイページ＞ギアマークをタップ＞著作権について＞オープンソース

今回のはてな株式会社との提携によって、Vivliostyle.jsが「少年ジャンプ＋」という偉大な舞台を支える役割をいただいたことを、私達はとても栄誉に感じています。これから「Giga-EpubViewer」が、たくさんのアプリで使われるようになることを願ってやみません。