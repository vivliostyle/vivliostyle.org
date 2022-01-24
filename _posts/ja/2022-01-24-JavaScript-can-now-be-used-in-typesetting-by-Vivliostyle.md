---
title: Vivliostyleの組版でJavaScriptが使えるようになりました
lang: ja
image: /assets/posts/2022-01-24-JavaScript-can-now-be-used-in-typesetting-by-Vivliostyle/fig-1.png
author:  ogwata
tags:
  - リリース
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2022-01-24-JavaScript-can-now-be-used-in-typesetting-by-Vivliostyle/fig-1.png" alt="JavaScript can now be used in typesetting by Vivliostyle" style="width: 620px;" /><figcaption>現在開発中のVivliostyle Pubで、DynaFont “DF玉刻華宋 StdN W4” を表示</figcaption></div>

## はじめに

2022年1月17日にVivliostyle.jsが v2.13.0 に、同じく18日に Vivliostyle CLI が v4.6.0 にアップデートしました。改訂の詳細は下記をご覧ください。

- [vivliostyle /vivliostyle.js /CHANGELOG.md](https://github.com/vivliostyle/vivliostyle.js/blob/master/CHANGELOG.md)
- [vivliostyle /vivliostyle.js /CHANGELOG.md](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CHANGELOG.md)

今回のアップデートの目玉は、CSS組版にJavaScriptが使えるようになったことです。従来のバージョンは、HTMLにJavaScriptのコードが含まれていた場合、内部的に削除していました。しかし、JavaScriptが使えないままでは用途を狭めてしまいます。そこでこれを利用できるようにしたのが、今回のアップデートです。

## WebフォントにおけるJavaScript 対応のメリット

その最大のメリットは、JavaScriptで利用するタイプのWebフォントサービスが利用可能になったことでしょう。一般にWebフォントをロードする方法は、以下の3種類です（カッコ内は該当するサービス名）。

1. `@font-face` で自分のサーバ上にあるフォントをロードする方法
2. `@import`か`link`要素で外部スタイルシート経由でロードする方法（DynaFont、Google Fonts）
3. JavaScriptによりロードする方法（DynaFont、Adobe Fonts、TypeSquare、FONT PLUS等）

Webフォントを使う上でネックになるのは、フォントをロードする速度がどうしてもネットワークの速度に依存する点です。とくに文字セットが大規模になってしまう日本語や中国語の場合、問題がより顕著になります。しかし、上記のうち3の方法であれば、JavaScriptを使って対象となるHTMLを読み込み、必要な文字だけ抽出したサブセットを作成することで、ロードの速度を早めることができます（ダイナミックサブセット）。

つまり、日本語や中国語でWebフォントを使う場合、上記3の方法は大変有効になり得ます。ところがVivliostyleは、今までこれに対応できていませんでした。

## JavaScriptによるWebフォントをVivliostyle CLIで使うには

各社のWebフォントサービスを、実際にVivliostyle Viewerで使ってみたテストサンプルを下記で公開しています。

- [各社Webフォントサービスのテストサンプル](https://github.com/vivliostyle/vivliostyle.js/issues/735#issuecomment-1006275491)

ところでWebフォントサービスの中には、ドメイン登録を利用条件にしているものがあります。他方Vivliostyle CLIに限っては、今までfileプロトコルによりHTMLドキュメントをロードしてきました。しかしfileプロトコルではドメイン登録はできません。そこで今回のアップデートで、新しく httpプロトコルでロードするオプションを追加しました。具体的には以下のようにして利用できます。

1. あらかじめWebフォントサービスに、ドメインとして `http://localhost:13000`を登録（各社の差異は後述）
2. 実行時にオプションとして `--http` を指定
3. 実行時にURLとして`https://vivliostyle.org/` を指定

より詳しい情報は、下記を参照してください。

- [ Feat/http hosting #234 ](https://github.com/vivliostyle/vivliostyle-cli/pull/234)

ただし実際のドメイン登録にあたっては、Webフォントサービスによって細かな違いがあります。参考まで以下にまとめてみました。

### FONTPLUS

`https://`なども含める「サイトURL」を登録します。Vivliostyle CLI で `--http` オプションをつけて利用するには、`http://localhost:13000/`を登録します。

### TypeSquare

`https://` などを含めない「ドメイン名」を登録します。Vivliostyle CLI で `--http` オプションをつけて利用するには、`localhost`を登録します。

### DynaFont

ドメイン登録を利用条件にしていますが、localhost はドメイン登録なしで使えます。以下の同社FAQを参考にしてください：

- [Q：ローカル環境でWebフォントを使うことはできますか？<i class="fas fa-external-link-alt"></i>](https://www.dynacw.co.jp/support/support_faq_detail.aspx?qid=456&fcid=223)

> Answer：ローカル環境での開発のご要望に応えて、DynaFont Onlineではローカルサーバー上でWebフォントを表示することができます。ご自身のPCにローカルサーバーを構築いただき、localhostフォルダに該当のHTMLファイル及びCSSファイルを置くことで、ブラウザから `https://localhost/` にアクセスいただくと、Webフォントをご確認いただくことができます

## その他のJavaScript対応のメリット

JavaScriptに対応したメリットは、Webフォントに留まりません。現在広く流通している各種JavaScriptライブラリ、たとえば以下のようなライブラリを、Vivliostyleで利用できるようになりました。

- [楽譜を作成する “VexTab”<i class="fas fa-external-link-alt"></i>](http://vexflow.com/vextab/tutorial.html)
    - [Vivliostyle Viewerでのテスト](https://vivliostyle.vercel.app/#src=https://raw.githack.com/0xfe/vextab/master/doc/tutorial.html)
- [図表を作成する “Charts.css”<i class="fas fa-external-link-alt"></i>](https://chartscss.org)
    - [Vivliostyle Viewerでのテスト](https://vivliostyle.vercel.app/#src=https://raw.githack.com/zopyx/print-css-rocks/master/lessons/lesson-chart-js/index.html)

## おわりに

以上、今回のアップデートにおけるJavaScript対応について簡単にまとめました。より詳細な情報は、以下のIssueをご参照ください。

- [Allow JavaScript in HTML documents #733](https://github.com/vivliostyle/vivliostyle.js/issues/733)
- [Support Web fonts loaded via JavaScript #735](https://github.com/vivliostyle/vivliostyle.js/issues/735)
- [Layout problem with Web fonts #829](https://github.com/vivliostyle/vivliostyle.js/issues/829)