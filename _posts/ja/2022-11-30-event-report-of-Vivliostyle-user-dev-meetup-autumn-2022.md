---
title: 「Vivliostyle ユーザーと開発者の集い 2022秋」開催報告
lang: ja
image: /assets/posts/2022-11-30-event-report-of-Vivliostyle-user-dev-meetup-autumn-2022/fig-1.png
author:  ogwata
tags:
  - イベント
  - リリース
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2022-11-30-event-report-of-Vivliostyle-user-dev-meetup-autumn-2022/fig-1.png" alt="「Vivliostyle ユーザーと開発者の集い 2022秋」開催報告" style="width: 500px;" /></div>

## 「CSS組版 Vivliostyle ユーザーと開発者の集い 2022秋」の開催

11月20日に秋のユーザーイベントがオンライン開催されました。

- [CSS組版 Vivliostyle ユーザーと開発者の集い 2022秋](https://connpass.com/event/264332/)

当日のプログラムと、それぞれのスライド資料、アーカイブ動画へのリンクは下記の通りです。

- **第1部**
    - 13:00-13:10（10分）**本日の趣旨説明**（[小形克宏](https://twitter.com/ogwata)）（[movie](https://youtu.be/g41n3xi86uQ)）
        - この日発表予定の演題とその概要を簡単にご説明します。
    - 13:10-13:40（30分）**Vivliostyle.jsの先行実装から考えるCSS text-spacingプロパティ**（[鈴木丈 FONT WORKS](https://twitter.com/terkel)）（[slide](https://speakerdeck.com/terkel/vivliostyle-dot-js-noxian-xing-shi-zhuang-karakao-erucss-text-spacing-puropatei), [movie](https://youtu.be/vfb-FBTyAUU)）
        - まだブラウザで実装されていない、Vivliostyle.jsの先行実装（和欧間のアキ、連続する約物のスペーシング、行頭・行末のスペーシング）を、ユーザーの立場からレビューします。後半10分からは、実装者である村上代表が疑問に回答します。
    - 13:40-14:10（30分）**Vivliostyle.jsにおけるWeb標準、CSSサポートの大改善**（[村上真雄](https://twitter.com/MurakamiShinyu)）（[slide](https://murakamishinyu.github.io/vivliostyle-dev2022autumn/), [movie](https://youtu.be/p7YKTuBC68Q)）
        - 最近、新しく利用可能になったCSSグリッドレイアウト、CSS変数（カスタムプロパティ）CSSセレクター レベル4（`:has()`疑似クラスなど）等について詳しく説明します。あわせて課題として残っている未実装のCSSの機能などについても説明します。
    - 14:10-14:15（5分）休憩
- **第2部　Vivliostyle開発報告**
    - 14:15-14:25（10分）**Vivliostyleプロジェクトの今までとこれから**（[村上真雄](https://twitter.com/MurakamiShinyu)）（[slide](https://murakamishinyu.github.io/vivliostyle-proj2022autumn/), [movie](https://youtu.be/9c5ueJcYKeE)）
        - Vivliostyleプロジェクトで予定されている、非互換変更を含む拡張予定について説明します。たとえばVFMバージョン2（Markdown拡張仕様）でおこなうセクション分けの仕様変更、あるいはVivliostyle CLI v6における拡張予定、そしてthemeのスタイルシートの刷新などです。
    - 14:25-14:45（20分）**Vivliostyle CLI update - 2022 Autumn**（[緑豆はるさめ](https://twitter.com/spring_raining)）（[slide](https://paper.dropbox.com/doc/Vivliostyle-CLI-update-2022-Autumn--BtWcfC5r~eWo7mcxlTy~XLm8AQ-PShS2Bb2KLXRTWoqdN36J), [movie](https://youtu.be/Le_Zea-mCCs)）
        - 前半はこの半年のVivliostyle CLIのアップデート内容、例えばブラウザのライブラリをPuppeteerからPlaywriteに変更したこと、`--css`オプションの追加、裁ち落とし関連のオプション追加等について説明します。後半は現在取り組んでいるテーマ機能の強化について詳しく説明します。
    - 14:45-15:05（20分）**VFMの仕様設計の再考**（[@nosuke23](https://twitter.com/nosuke23)）（[slide](https://vivliostyle-20221120-nosuke23.vercel.app/1), [movie](https://youtu.be/etP3E3XLXMc)）
        - Markdownの拡張方法について、考慮すべき点を整理します。セマンティックなマークアップは、どうしても名前衝突をおこす可能性が高くなります。これを防ぐために、CSSをモジュール化してコンポーネントを宣言的に割り当てる「宣言的マークアップ」が有効ではないかということを説明します。後半、発表を踏まえて村上代表、及びVFMのメンテナーakabeko氏が入って3人で討論します。
    - 15:05-15:10（5分）休憩
- **第3部　広がるVivliostyle**
    - 15:10-15:30（20分）**vivliostyle-cli-helperの公開と商業出版『Viviliostyle CSS組版入門(仮)』**（[大津雄一郎](https://twitter.com/arinoth)）（[slide](https://onedrive.live.com/view.aspx?resid=FD4E1B19C4E7DE29!45691&ithint=file%2cpptx&authkey=!AO3fsykPK085SGQ), [movie](https://youtu.be/u2DDCgHfQpQ)）
        - 来年春に出版が予定されている『Viviliostyle CSS組版入門(仮)』の内容、及びそこで教材として使われるツールvivliostyle cli helperについて、著者みずからが詳しく説明します。
    - 15:30-15:50（20分）**Vivliostyle、もう一つのブルーオーシャン**（[小形克宏](https://twitter.com/ogwata)）（[slide](https://vivliostyle.org/viewer/#src=https://ogwata.github.io/slide-2022-11-20/myslide.html), [movie](https://youtu.be/zdfskfdUd-8)）
        - Vivliostyleの強みはページ組版だけではありません。最近のVivliostyleのユーザー事例を見ると、いずれも共同編集機能を駆使したものであることが分かります。この共同編集機能こそがVivliostyleにとってのもう一つのブルーオーシャンなのかもしれません。そうだとすれば、ページ組版はオプションでよいことになります。
    - 15:50-15:55（5分）休憩
- **第4部　11月開発者会議**
    - 15:55-16:25（40分）（[movie](https://youtu.be/WGZZQIJHna0)）
        - この日出された論点を材料に、今後のVivliostyleの課題について登壇者とメンテナーが議論しました。
    - 16:25-16:35（10分）**クロージング**（[村上真雄](https://twitter.com/MurakamiShinyu)）（[movie](https://youtu.be/Qiu0i-J8ATI)）
        - 村上代表による閉会のことば。

今回のイベントでも、いくつもの「へえ！」というようなトピックがありました。以下では短くそれらをご紹介しましょう。

## 鈴木丈さん（[FONT PLUS](https://fontplus.jp/)）による実装の評価

鈴木さんの[Vivliostyle.jsの先行実装から考えるCSS text-spacingプロパティ](https://youtu.be/vfb-FBTyAUU)では、ブラウザがまだ実装していない仕様のうち、[CSSテキスト レベル4](https://www.w3.org/TR/css-text-4/)のプロパティ`text-spacing`に絞って、Vivliostyle.jsにおける実装を検証、評価して下さいました。その内容は現在の実装を概ね肯定するもので、私たちとしては今までやってきたことが間違っていなかったと心強く思いました。また、後半22分以降の村上代表によるコメントも、いわば鈴木さんの疑問に答えて実装の種明かしをする内容で、聞き応えのある対話が聞けたように思います。

## 近い将来Vivliostyle.jsで行取りが簡単に

村上代表の[Vivliostyle.jsにおけるWeb標準、CSSサポートの大改善](https://youtu.be/p7YKTuBC68Q)では、後述する`:has()`疑似クラスをはじめ、多くの改善点の説明や近い将来のアップデートが予告されました。

中でも大きいのが、従来はブラウザーが実装している最新のCSSの機能が使えないことがあったところ、v2.16.0 (2022-07-19)、及びv2.17.0 (2022-07-29)において、基本的にすべて使えるようにしたことです。これにより将来ブラウザが実装するCSSの機能も、そのままVivliostyle.jsで使えるようになります。

そうしたものの中で、個人的に注目しているのが[lh and rlh units](https://drafts.csswg.org/css-values-4/#lh)です（16:12）。これは`line-height`で指定された数値を単位として扱えるようにするもので、実装されれば「本文のn行分」という方法で見出しや画像等のサイズがごく簡単に指定できるようになります。とくに伝統的な日本語組版とCSS組版の違いに戸惑ってきたユーザーには朗報かもしれません。

## VFMｖ2における非互換変更について

村上代表の[「Vivliostyleプロジェクトの今までとこれから」](https://youtu.be/9c5ueJcYKeE)では、VivliostyleのMarkdown方言、VFMが近々v2にアップデートすることが予告されました（2:41付近）。この中には非互換な変更が含まれるので、現在VFMで書いたデータを持っているユーザは対応が必要になります。

具体的には、現行v1では見出しの属性は基本的に`section`要素にコピーされ、`id`属性は同じく`section`要素に移動していましたが、v2からは廃止します。これらの振る舞いは、特定のsectionの範囲にスタイルが指定できるなど、Markdownの制限の中である程度柔軟な範囲指定を可能にする、便利な機能でした。

しかし最近、Vivliostyle.jsで子要素や後に続く任意の要素を指定する`:has()`疑似クラスを実装したことで、より精密な指定ができるようになりました。これにより従来の振る舞いは廃止する方が、ユーザーにとってメリットが大きいと判断したものです。

v2では見出しの`id`属性に限っては、`section`要素の`aria-labelledby`属性にコピーされることになりますが、これ以外の属性はコピーや移動はしないようになります。どうかご注意ください。

## Vivliostyle CLIにおけるテーマ機能の強化

緑豆はるさめさんの[Vivliostyle CLI update - 2022 Autumn](https://youtu.be/Le_Zea-mCCs)で注目したいのは、次バージョンで予定されているテーマ機能の強化です（10:20付近）。これはVivliostyle.jsで実装されたCSS変数（カスタムプロパティ）を本格的に利用しようとするものです。

具体的には、Vivliostyle themeの中で共通して使えるベーシックなテーマ、`@vivliostyle/theme-base`を用意し、それを他のテーマが参照する形にします。これにより全体で使う変数を共通化することができます。たとえばフォントの種類、文字のサイズや色、段組の数などさまざまなCSSの機能が、まるでスイッチをオン／オフするような感覚で設定することができるでしょう。この日は開発中の機能のデモを実際に見ることができ（14:35）、便利さを実感することができました。とても楽しみです。

また、このテーマ機能の強化の後、いよいよEPUB出力のサポートに取り組むとのこと。来年はすばらしい年になりそうです。

## Vivliostyle入門本が商業出版される

C&R研究所から待望のVivliostyle入門本が出版されます！　これを詳しく説明したのが、大津雄一郎さんの[vivliostyle-cli-helperの公開と商業出版『Viviliostyle CSS組版入門(仮)』](https://youtu.be/u2DDCgHfQpQ)です。この本ではHTMLやCSSの知識を多少持っている人をメインターゲットにして、必要最低限の組版の知識を取り混ぜて、Vivliostyleの解説をすすめる形にするとのことです。構成案は以下の通りです。

1. VivliostyleとCSS組版
2. CSS組版ハンズオン
3. VFM Markdown入門
4. Vivliostyle CLIの活用
5. CSS組版デザインTips
6. 入稿と印刷
7. Vivliostyle Pub

また、本書のハンズオンで使用予定のVSCodeの機能拡張[vivliostyle-cli-helper](https://marketplace.visualstudio.com/items?itemName=Libroworks.vivliostyle-cli-helper)のデモを見ることができました（15:21）。これを使うとVSCodeで原稿を書きながらプレビュー画面を簡単に表示させることができます。なんて便利！

本書の発売予定は来年、2023年3月〜4月とのこと。楽しみに見守りたいと思います。

## おわりに

ここまで、当日のトピックをピックアップしましたが、これ以外にも聞き応えのある発表が盛り沢山ありました。ぜひ上記リストからご自分の目で確かめてみてください。次回は来年、2023年4月の開催予定です。それまでVivliostyleの開発がどこまで進むのか、どうか来年もVivliostyleにご注目ください。