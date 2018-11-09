---
title: Vivliostyle-print について
lang: ja
permalink: /ja/blog/2018/10/03/vivliostyle-print/
author: johannes
---

*（[英語元記事](/blog/2018/10/03/vivliostyle-print/) からの日本語訳）*

*新パッケージ Vivliostyle-print についてのセルフ・インタビュー*

**[Vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js) は、すでに数年間私たちとともにあります。ブラウザ内でページメディアを表示するだけでなく、ページメディアをターゲットにした追加の CSS で HTML を印刷することもできます。[Vivliostyle-print](https://github.com/vivliostyle/vivliostyle-print) にはどんな必要性がありますか?**

Vivliostyle.js がすでに数年間存在していて、Vivliostyle-print が、CSS の面では何も新しいものを追加していないことはその通りです。HTMLとCSSのみを認識し、JavaScriptを認識しないエンドユーザにとっては、Vivliostyle Viewer (Vivliostyle.js + Vivliostyle-ui) を使用することは引き続き有効です。

私が直面した Vivliostyle.js の問題は、それを他のソフトウェアに含めようとしたときに、本当に複雑なプログラムだということでした。そして、最近までドキュメンテーションはあまり広範でありませんでした。今でもこのパッケージを作成する過程で、私はこれを動くようにするために、チャットや試行錯誤の多くで一日以上を費やす必要がありました。

Vivliostyle-print は、Vivliostyle.js の印刷機能を必要とするだけで他のものは必要としないプロジェクトにおいて、JavaScript 開発者にとっての苦労を取り除くはずです。

**なぜあなたは Vivliostyle-print を作ることを決めたのですか?**

私自身、Fidus Writer でそれが動くようにするため取り組んできました。Fidus Writer は、私が過去数年間を費やした学術用テキスト・エディターです。
2012年に遡ると、当時私たちは、ユーザーがドキュメントを書いている間にページネーションが行われるしくみをエディター自体に持っていました。それは実験的な技術である “CSS Regions” に基づいていました。しかし、Chromium チームがそれを削除することを決めたときに、私たちにあるのは、印刷ダイアログが呼び出されたときに呼び出されるページネーションという解決策だけになりました。その解決策 (paginate-for-print) は、数年前に急いで寄せ集めで作った代替策でした。私は Vivliostyle.js を推進しているにもかかわらず、その複雑さのために、私が Vivliostyle.js のためのコネクターを作るために席につく時間がなかったのです。そして今やっとそれができました。私は、他の人々が同じことをするのに多くの時間を費やす必要がないように、これを分かち合うのが最善だと考えたのです。

**どのような種類のプロジェクトでこの恩恵を受けることができると思いますか?**

他のテキスト・エディターのアプリケーションは、明らかに恩恵を受けるもののひとつです。しかし実際には、オンラインコンテンツのより高品質な印刷バージョンを提供したいすべてのウェブページが該当します。JavaScript を少し使用するだけで、ユーザーが CTRL+P を押したときに、オリジナルのコンテンツにページネーション用の追加のCSSを使用して Vivliostyle-print を実行させるようにできます。オンライン新聞やブログも頭に浮かぶでしょう。さらには、ウェブベース電子メール・アプリケーションさえも、Vivliostyle-print の恩恵を受ける可能性があります。私は本当にこれが Vivliostyle.js の利用の普及を助けることを望んでいます。

**Vivliostyle.js を実行するとそのページの DOM は台無しになりませんか？ ユーザーは印刷後にページをリロードする必要がありますか？**

Vivliostyle-print はわずかに異なる動作をします。バックグラウンドで Vivliostyle.js を実行して（非表示の iframe で）、印刷ダイアログが消えた後に削除するのです。この方法では、元の DOM は Vivliostyle-print 実行の前と後にまったく同じです。
