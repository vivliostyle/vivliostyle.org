---
title: 印刷・出版のためのオンラインエディタ Viola のご紹介
lang: ja
permalink: /ja/blog/2018/11/21/introduction-of-viola/
author:
  - spring_raining
---

XXX

<div><a href="https://viola.pub"><img src="/assets/posts/2018-11-21-introduction-of-viola/viola-top.png" alt="https://viola.pub" /></a></div>

## 開発経緯

2016年、私はソフトウェア開発について紹介する同人誌を執筆するため、組版ソフトウェアを探していました。当時（そして今でも）そのような用途のための組版ソフトウェアのうち、デファクトスタンダードは LaTeX でした。しかし、私は自力で技術書を執筆し、レイアウトを思い通りに変更できるほど LaTeX を自在に扱えるとは言いがたく、別の選択肢を探していました。そんな時見つけた Vivliostyle は、Web アプリケーションエンジニアである私にとって、Web技術を活用して組版を実現するという解決策が非常に魅力的なものに映りました。

以降現在まで5冊の同人誌を、一貫して Vivliostyle を用いて制作しており、Web 技術による組版というビジョンの先見性を確信しました。一方で、残念ながら Vivliostyle.js は単なる JavaScript のライブラリであるため、このライブラリを使うためには少なからず JavaScript の知識を必要とすることも事実です。そこで、私はより多くの人が CSS 組版を体験できるよう、Vivliostyle を組み込んだ新しいテキストエディタを開発することを決めました。

## Violaについて

Viola の一番の利点はエディタの機能性です。世にあるブラウザ向けのテキストエディタの中でも、Viola はかなりプログラマーや Web デザイナー向けの機能を備えたエディタになっています。複数の HTML や CSS、画像、フォントファイルなどを扱うことができるので、普段エディタ上で Web ページを作っているような感覚で、ページをレイアウトすることができます。

HTML や CSS にそこまで詳しくない人でも執筆できるよう、今後はテンプレートを追加していくことを計画しています。ぜひ [https://viola.pub](https://viola.pub) をチェックしてみてください！

## viola-savepdfについて

Viola の開発に関連して、私は `viola-savepdf` というツールも公開しました。これは、Viola のコア機能から Vivliostyle.js による変換機能を CLI 向けに切り出したもので、既に HTML や CSS を編集するワークフローを確立しているプロのエンジニア・デザイナー向けのツールです。

`viola-savepdf` をインストールするには、Node.js をセットアップした上で以下のコマンドを実行します。

```
npm install -g viola-savepdf
```

インストール後、以下のようなコマンドを実行することで PDF を生成できます。

```
savepdf -o output.pdf --size A4 input/index.html
```

また、`--preview` オプションを指定するとブラウザが起動し、プレビューを見ることができます。

```
savepdf --preview input/index.html
```

## 利点・欠点

[**Fidus Writer**](https://www.fiduswriter.org)は、Viola と同様に、Vivliostyle を使って Web ベースの組版を実現する編集ツールの有力な選択肢です。Viola は文章の編集ツールであると同時に、HTML や CSS のテキストエディタでもあるので、より自由に原稿を編集することができます。Vivliostyle による出力結果のライブプレビュー機能も Viola の一押しの機能です。一方で、執筆時の軽快さや快適性といった面では、現状では長年開発を続けてきた Fidus Writer に軍配が上がります。両方のエディタを使ってみて、好みの使い方を探してみてください。

**vivliostyle-print** は viola-savepdf と似た機能を持ちますが、用途が少し違います。vivliostyle-print は **JavaScript ライブラリ**として提供され、Vivliostyle の変換機能を使いやす形で利用できるAPIを提供します。一方で、viola-savepdf は**コマンドラインアプリケーション**として提供され、ローカルのディレクトリにある HTML や CSS に対して、Vivliostyle で変換した結果を保存することができます。また、Vivliostyle-ui のように手動でサーバーを立てるといった手間は必要ありません。

Vivliostyle とともに、Viola がより多くの人に愛用されることを願っています！
