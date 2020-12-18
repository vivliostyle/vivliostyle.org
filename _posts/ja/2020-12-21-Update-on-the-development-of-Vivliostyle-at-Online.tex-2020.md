---
title: Vivliostyleの開発状況をOnline.tex 2020で報告
lang: ja
image: /assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-1.png
author:
  - ogwata
tags:
  - イベント
---
## はじめに

だいぶ報告が遅れてしまいましたが、去る11月21日、オンラインで開催された[「Online.tex 2020」<i class="mdi mdi-open-in-new"></i>](https://connpass.com/event/188075/)で、Vivliostyle Pubの開発状況について報告しました。この日のスライドを下記で公開しています。Vivliostyle Pubのデモを実際に公開の場でおこなったのは、この時が初めてだったと思います。

- [あしたのVivliostyle<i class="mdi mdi-open-in-new"></i>](https://www2.slideshare.net/ogwata_1959/vivliostyle-239370581)

実績あるTexコミュニティの主催だけあって、大変歯ごたえのあるフィードバックがいただけました。あらためて感謝いたします。

とはいえ、ライブと言うこともあって、的確なお答えができず申し訳なかったと思っています。そこで、あらためて代表の村上と協議した上で回答することにします。この日のフィードバックは、下記のようなものでした。

1. 行頭インデントが消えてしまっている
2. ルビ文字のサイズが大きすぎる
3. テーブル中のテキストにルビが使えないか
4. フォーカスが最初のページに戻ってしまう
5. エディタのカーソル位置が、プレビュー画面で表示されるとよい

## 1. 行頭インデントが消えてしまっている

お恥ずかしいことに、これは私のケアレスミスです。本来、VFMでは段落区切り（ハード改行）はリターン2つです。なのに当日私がデモで使った原稿は、1つしか入っていませんでした。この場合GFMなどでは無視するのですが、VFMの場合は段落区切りではないソフト改行と解釈され、HTMLでは｀<br />｀に変換されます（上図）。

そのために改行はされたものの、段落の区切りではないので行頭もインデントはされませんでした。下記の段落区切りをリターン2つに修正したスクリーンショットをご覧ください。

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-2.png" alt="A text document created with a double return code to separate paragraphs" style="width: 300px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></a></div>

## 2. ルビ文字のサイズが大きすぎる

この問題、じつは以前から指摘されていましたが、この機会にIssueとして登録しました。

- [ルビの文字サイズ問題: Minimum font size setting in Chrome causes ruby font size problem #673 <i class="mdi mdi-open-in-new"></i>](https://github.github.com/gfm/#hard-line-breaks)](https://github.com/vivliostyle/vivliostyle.js/issues/673)

簡単に説明すると、元来 Vivliostyle はブラウザの補完を目的とするpolyfill（ポリフィル）の一種です。つまり、多くの機能はブラウザにまかせ、そこで実装されていない、たとえばページネーション等の機能を自前で実装しているわけです。

このルビ文字の組版も同様で、Vivliostyleではなくブラウザ（Chrome）のレンダリング結果になります。もともとChromeでは最小文字サイズのデフォルト値は10pxです。ところが、CSSの指定によってはルビ文字のサイズがChromeの最小文字サイズを上回ってしまうため、結果としてルビが大きくレンダリングされてしまう訳です。

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-3.png" alt="Typesetting results with the default minimum font size (10px) in Chrome" style="width: 300px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></a></div>

対処法として、Chromeの設定で最小文字サイズを0pxにすると、CSSの指定どおりにレンダリングされます。

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-4.png" alt="Typesetting results with the minimum font size set to "0" in Chrome" style="width: 300px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></a></div>

ちょっと脇道に逸れますが、よくみるとこのスクリーンショットのルビ組版は、ルビが親文字よりはみ出した場合、親文字に掛けるよう処理する[JLReq 3.3.8  <i class="mdi mdi-open-in-new"></i>](https://www.w3.org/TR/jlreq/#adjustments_of_ruby_with_length_longer_than_that_of_the_base_characters)ではないことに気付きでしょうか。じつは、Vivliostyle はページネーションのためのW3C仕様の実装も十分にはできておらず、組版まで届いていないのが実情なのです。図らずもこのルビ組版は、そんなVivliostyleの開発状況をあぶり出した例とも言えるかもしれません。

## 3. テーブル中のテキストにルビが使えないか

使えません。これについてIssue登録しました。

- [テーブルでルビを指定するとパイプ文字がセルの区切りにパースされる](https://github.com/vivliostyle/vfm/issues/44)

つまり、ルビの指定に使うパイプ文字 `|` が、セルの区切りとして解釈されてしまいます。

なお、これについて当日私は、以前から登録されているIssue [図表キャプション内で他の記法が使えない #35](https://github.com/vivliostyle/vfm/issues/35)と同様の問題で、ある要素の中で別の要素をネストできないという説明をしてしまいましたが、これは別の問題です。お詫びして取り消します。

## 4. フォーカスが最初のページに戻ってしまう

はい、確かにこれは好ましくない動作です。既に Issue として登録されています。

- [エディターで更新のたびにプレビューが１ページ目に戻らないようにすること #53](https://github.com/vivliostyle/vivliostyle-pub/issues/53)

## 5. エディタのカーソル位置が、プレビュー画面で表示されるとよい

確かにそうですね。これも既に ver. 1 の実装要件を定めた[「Vivliostyle Pubv1 要件仕様 (WIP)」](https://github.com/vivliostyle/community/wiki/Vivliostyle-Pub-v1-Req#%E5%8E%9F%E7%A8%BF%E7%B7%A8%E9%9B%86%E7%94%BB%E9%9D%A2%E3%81%A8%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC)に盛り込まれ、実装する予定です。

こうしてまとめると、図らずも Vivliostyle Pub の開発がまだまだ初期段階であることがよく分かるような事例ばかりです。
