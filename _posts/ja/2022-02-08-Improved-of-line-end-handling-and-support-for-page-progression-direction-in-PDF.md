---
title: 行末処理が進化して多様な組版ができるように
lang: ja
image: /assets/posts/2022-02-08-Improved-of-line-end-handling-and-support-for-page-progression-direction-in-PDF/fig-1.png
author:  ogwata
tags:
  - リリース
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2022-02-08-Improved-of-line-end-handling-and-support-for-page-progression-direction-in-PDF/fig-1.png" alt="Improved of line end handling" style="width: 850px;  box-shadow: 1px 2px 2.5px 1.5px grey;" /><figcaption>図1 Vivliostyle Viewerの旧版 v.2.13.0（左）と新版 v2.14.0（右）</figcaption></div>

## はじめに

2022年2月4日、Vivliostyle.jsはv2.14.0にアップデートされました。詳細は下記をご参照ください。

- [Vivliostyle.js v2.14.0](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#2140-2022-02-04)

新バージョンは、[前回ご紹介した](https://vivliostyle.org/ja/blog/2022/01/24/JavaScript-can-now-be-used-in-typesetting-by-Vivliostyle/)JavaScript対応のように目立つものではないものの、東アジア言語、とくに日本語組版における選択肢を増やすものです。この記事ではその内容をかいつまんで説明します。

## 行末処理の進化

Vivliostyle.jsは、[v2.12.0 (2021-11-13)](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md#2120-2021-11-13)において、[CSS Text Module Level 4](https://web.archive.org/web/20220127113120/https://drafts.csswg.org/css-text-4/#text-spacing-property)の`text-spacing`プロパティと、[CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/#hanging-punctuation-property)の`hanging-punctuation`プロパティを実装しました。これにより、日本語／中国語と欧語における単語間の間隔や、連続する全角句読点類の間隔を調整できるようになりました。`text-spacing` はまだどのブラウザも実装しておらず、`hanging-punctuation` はSafariだけが実装しているという状況を考えると、きわめて意欲的な取り組みと言えます。

とはいえ、この時点の実装は一部の機能が未実装でした。図1は前バージョン v.2.13.0（左、以下旧版）と、アップデート後のv2.14.0（右側、以下新版）で、同一のテストページを表示させたものです。あなたのブラウザでも、以下のリンクから同じように表示できます。

- [Vivliostyle.js v.2.13.0 - `text-spacing`と`hanging-punctuation`のテストページ](https://vivliostyle.github.io/viewer/v2.13.0/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/text-spacing/ts-hp-allow-force-end.html)
- [Vivliostyle.js v.2.14.0 - `text-spacing`と`hanging-punctuation`のテストページ](https://vivliostyle.org/viewer/#src=https://raw.githack.com/vivliostyle/vivliostyle.js/master/packages/core/test/files/text-spacing/ts-hp-allow-force-end.html)

テストページの見出しは適用しているプロパティとその値です。サンプル文はすべて共通で、1行目は行末である10字目に読点（U+3001）、2行目は11字目に句点（U+3002）、3行目は10字目と11字目に半角の感嘆符（U+0021）と読点（U+3001）を配置しています。分かりやすくするために、文字サイズと同じ16pxずつ等間隔で水色の基準線を引いています。

その基準線が、1番目のサンプル文1行目の字間にピタリと揃っていることに注意してください。組版用語でいうと、字間はベタ（文字サイズと同一）で揃っています。この見出しに`text-spacing: none; hanging-punctuation: none`とあるように、このブロックはプロパティ`text-spacing`と`hanging-punctuation`を無効（`none`）にする指定がされています（だから旧版も新版も組版結果は同一）。ということは、字間と基準線が揃っていればツメ処理もアキ処理もしておらず、基準線よりも前に文字があれば何らかのツメ処理が、逆に後ろにあればアキ処理をしていることになります。そして、左右の組版結果を比較することで、新版の変更点が確認できるわけです。

## 多様な日本語組版が可能になった

では実際に図1を見てみましょう。見出しごとに加えた赤い分数に注目してください。これは、全部で3行あるサンプル文のうち、見出しのプロパティを適用することで字間と基準線が揃ったものがいくつあったかを示したものです。左の旧版の方は、プロパティを無効にした1番目を除けば、1/3が1つ、0/3が4つと、全体に基準線に揃ってない組版ばかりと言えます。

それに対して右側の新版はどうでしょう。1番目を除けば、0/3が2つ、2/3が2つ、3/3が1つあります。つまり、まったく基準線に揃ってない（0/3）ものと、揃っているものが多い（2/3、3/3）ものの両極に分かれています。これこそが新版の進化内容で、言い換えれば2つの異なった考え方の組版が選択可能になったと言えるのです。

一般に「日本語組版の基本はベタ組み」などと言われます。それは漢字と仮名を文字サイズと同じ字間（ベタ／全角）で組むことを指す言い方ですが、すべてを言い当ててはいません。なぜなら句読点類や括弧類の見た目の幅はベタではないからです。別の言い方をすると、これらをどのように組むかをめぐって、同じ日本語組版の中で異なる考え方があり得るのです。大雑把に以下の2つにまとめて捉えられるでしょう。

1. 行頭行末を揃えることを優先する
2. 字間をベタに揃えることを優先する

もちろん、両者の違いは正否でも優劣でもありません。どちらを読みやすく感じるかという好みの違いです。赤い分数に戻れば、基準線に揃ってないもの、つまり3番目の `text-spacing: none; hanging-punctuation: force-end`（右側0/3）と6番目の `text-spacing: allow-end; hanging-punctuation: allow-end`（右側0/3） が上記1に当たります。ここで、この2つに共通する値が`hanging-punctuation: force-end`であることは偶然ではありません。

そもそも`hanging-punctuation:`というプロパティは、いわゆる「ぶらさがり」（hanging punctuation）を実現するものです。そして、値 `force-end`は行末前後に句読点があれば、アキ処理かツメ処理をして強制的にぶら下げます。DTPアプリInDesignをご存知の方は「ぶら下がり方法→強制」をイメージしてください。結果として行末が揃うことになる反面、行中に調整が発生するので字間はベタになりづらくなります。

一方、2番目の `text-spacing: none; hanging-punctuation: allow-end`（右側2/3）と 4番目の`text-spacing: allow-end; hanging-punctuation: none`（右側2/3）、そして5番目の `text-spacing: allow-end; hanging-punctuation: allow-end`（右側3/3）は、上記2に当たります。これらに共通するのは`allow-end`ですが、もちろん偶然ではありません。

`hanging-punctuation:`の方の `allow-end`は、一定の条件を満たした場合だけぶら下げます。これもInDesignで例えれば「ぶら下がり方法→標準」に近いものです。`force-end` に比べれば調整がより少なくなるため、ベタは維持されやすくなります。そしてもう一つのプロパティ `text-spacing`にも `allow-end`があり、こちらは行末の句読点類や括弧類を基本的には全角どり、場合によって半角どりにします。これも結果としてベタは維持されやすくなります。その反面、右側2番目、4番目、5番目の1行目のように、行末に半角分のアキが残り、行末は揃いません。前述したように、これを良しとするかどうかは「好み」です。

最後に左側の旧版の組版を見てみましょう。全体に行中で調整をするものが多い結果、行末は揃っています。つまり、上記1の考え方の組版は実現できているものの、上記2の組版が実現できていません。逆に言えば旧版では字間を均等に揃えることを優先する組版を選択できなかったところ、これも選べるようにしたのが新版のアップデートという訳です。

今回はとくに行末処理に特化して説明しましたが、以下のテストページからVivliostyle.jsの組版を、プロパティごとに確認できます。ぜひ一度お試しください。

- [Test cases](https://raw.githack.com/vivliostyle/vivliostyle.js/master/packages/core/test/files/)