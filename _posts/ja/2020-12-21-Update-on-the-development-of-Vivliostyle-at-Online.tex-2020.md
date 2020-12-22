---
title: Vivliostyleの開発状況をOnline.tex 2020で報告
lang: ja
image: /assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-1.png
author:
  - ogwata
tags:
  - イベント
---

#### はじめに

だいぶ報告が遅れてしまいましたが、去る11月21日、オンラインで開催された[「Online.tex 2020」<i class="fas fa-external-link-alt"></i>](https://connpass.com/event/188075/)で、Vivliostyle Pubの開発状況について報告しました。この日のスライドを下記で公開しています。Vivliostyle Pubのデモを実際に公開の場でおこなったのは、この時が初めてだったと思います。

- [あしたのVivliostyle<i class="fas fa-external-link-alt"></i>](https://www2.slideshare.net/ogwata_1959/vivliostyle-239370581)

実績あるTexコミュニティの主催だけあって、大変歯ごたえのあるフィードバックがいただけました。あらためて感謝いたします。

とはいえ、ライブということもあって、とっさに的確な回答ができず申し訳ありませんでした。そこで、あらためて代表の村上と協議した上で回答することにします。この日のフィードバックは、下記のようなものでした。

- [1. 行頭インデントが消えてしまっている](#1-行頭インデントが消えてしまっている)
- [2. ルビ文字のサイズが大きすぎる](#2-ルビ文字のサイズが大きすぎる)
- [3. テーブル中のテキストにルビが使えないか](#3-テーブル中のテキストにルビが使えないか)
- [4. フォーカスが最初のページに戻ってしまう](#4-フォーカスが最初のページに戻ってしまう)
- [5. エディタのカーソル位置が、プレビュー画面で表示されるとよい](#5-エディタのカーソル位置がプレビュー画面で表示されるとよい)

#### 1. 行頭インデントが消えてしまっている

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-1.png" alt="A text document created with a double return code to separate paragraphs" style="width: 500px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></div>

お恥ずかしいことに、これは私のケアレスミスです。本来、VFMでは段落区切り（ハード改行）はリターン2つです。なのに当日私がデモで使った原稿は、1つしか入っていませんでした。この場合GFMなどでは無視するのですが、VFMの場合は段落区切りではないソフト改行と解釈され、HTMLでは `<br>` に変換されます（右図上）。

そのために改行はされたものの、段落の区切りではないので行頭はインデントはされませんでした。段落区切りをリターン2つに修正したスクリーンショットをご覧ください（右図下）
。

#### 2. ルビ文字のサイズが大きすぎる

この問題、じつは以前から指摘されていましたが、この機会にIssueとして登録しました。

- [ルビの文字サイズ問題: Minimum font size setting in Chrome causes ruby font size problem #673 <i class="fas fa-external-link-alt"></i>](https://github.com/vivliostyle/vivliostyle.js/issues/673)

簡単に説明しましょう。元来 Vivliostyle はブラウザの補完を目的とするpolyfill（ポリフィル）の一種です。つまり、多くの機能はブラウザにまかせ、そこで実装されていない、たとえばページネーション等の機能を自前で実装しているわけです。

このルビ文字の組版も同様で、Vivliostyleではなくブラウザ（Chrome）のレンダリング結果になります。ここで、もともとChromeでは最小文字サイズのデフォルト値は10pxです。ところが、CSSの指定によってはルビ文字のサイズがChromeの最小文字サイズを上回ってしまうため、結果としてルビが大きくレンダリングされてしまうのです（下図上）。

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-2.png" alt="Typesetting results with the default minimum font size (10px) in Chrome" style="width: 300px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></div>

対処法として、Chromeの設定で最小文字サイズを0pxにすると、CSSの指定どおりにレンダリングされます（下図下）。

ちょっと脇道に逸れますが、よくみるとこのスクリーンショットのルビ組版は、ルビが親文字よりはみ出した場合、親文字に掛けるよう処理する[JLReq 3.3.8  <i class="fas fa-external-link-alt"></i>](https://www.w3.org/TR/jlreq/#adjustments_of_ruby_with_length_longer_than_that_of_the_base_characters)通りではないことに気付きでしょうか。じつは、Vivliostyle はページネーションのためのW3C仕様の実装も十分にできていません。その結果、細部ではしばしばルールどおりに組版できないのが実情なのです。図らずもこのルビ組版は、そんなVivliostyleの開発状況を示す一例と言えるかもしれません。

#### 3. テーブル中のテキストにルビが使えないか

実際にテーブルの中でルビを指定してみたところ、ルビの指定に使うパイプ文字 `|` が、セルの区切りとして解釈されてしまいました。VFMのバグですね。これについてIssue登録しました（現在、熱心な討論がつづいているので、興味のある方はぜひ覗いてみて下さい）。

- [テーブルでルビを指定するとパイプ文字がセルの区切りにパースされる](https://github.com/vivliostyle/vfm/issues/44)

ただし、この現象を回避する方法があります。VFMは生のHTMLをそのままパースしますので、HTMLでルビを指定すればよいのです。もともと、MarkdownはHTMLの簡易記法です。だから簡易記法で書けないことは本来の記法で書けばよいという思想からきた実装とも言えます。

なお、この件について当日私は、以前から登録されているIssue [図表キャプション内で他の記法が使えない #35](https://github.com/vivliostyle/vfm/issues/35)と同様の問題で、ある要素の中で別の要素をネストできないと説明をしましたが、これはまた別の問題であり間違いです。お詫びして取り消します。

#### 4. フォーカスが最初のページに戻ってしまう

はい、確かに現状は好ましくない動作であり、既に Issue として登録されています。

- [エディターで更新のたびにプレビューが１ページ目に戻らないようにすること #53](https://github.com/vivliostyle/vivliostyle-pub/issues/53)

#### 5. エディタのカーソル位置が、プレビュー画面で表示されるとよい

確かに。これも既に ver. 1 の実装要件を定めた[「Vivliostyle Pubv1 要件仕様 (WIP)」](https://github.com/vivliostyle/community/wiki/Vivliostyle-Pub-v1-Req#%E5%8E%9F%E7%A8%BF%E7%B7%A8%E9%9B%86%E7%94%BB%E9%9D%A2%E3%81%A8%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC)に盛り込まれており、実装する予定です。

こうしてまとめると、図らずも Vivliostyle Pub の開発がまだまだ初期段階であることを示すような事例ばかりです。とくに組版について積み残しが多いことがお分かりいただけると思います。もちろん、これで良いわけがありません。Online.tex 2020への参加により、そうした現状をあらためて認識させられました。感謝すると共に、これらの課題を克服する決意を新たにしているところです。
