---
title: 新しい Vivliostyle Themes のご紹介
lang: ja
author: spring_raining
tags:
  - Vivliostyle Themes
---

以前のイベントで予告したとおり、Vivliostyle Themesは近日中に大きな変更を加えようとしていました。そして、ついに新しいVivliostyle ThemeをBetaバージョンとしてリリースできたことを嬉しく思います！ 今回リリースしたVivliostyle Themesは、単なるVivliosytleのためのCSSファイルという枠組みを超えた、CSSフレームワークの新しい形とも言える野心的なライブラリなので、この記事で少しだけ紹介させてください。

## Vivliostyle Themeの使用方法

Vivliostyle Themeは、`vivliostyle.config.js` に以下のように設定することで使用できます。（v6.0.0より新しいVivliostyle CLIは自動でテーマファイルをインストールするため `npm install` は不要です）

```js
module.exports = {
  theme: '@vivliostyle/theme-base@beta',
};
```

使用できるテーマについては[Vivliostyle ThemesのREADME](https://github.com/vivliostyle/themes)を参照してください。現時点ではBetaバージョンで提供しているため、テーマ名の末尾に `@beta` をつけることに注意してください。

## CSS変数をベースにしたCSSフレームワーク

新しいVivliostyle Themesは、すべて新たに作成したCSSフレームワーク [`@vivliostyle/theme-base`](https://github.com/vivliostyle/themes/tree/main/packages/%40vivliostyle/theme-base) をベースして作られています。
一般的なCSSフレームワークはBootstrapやTailwind CSSなどが知られていますが、Vivilostyle Themeはそのいずれとも異なる構成になっています。`@vivliostyle/theme-base` は、一言で表すと「Markdownなどの構造化されたドキュメントに適した、CSS変数でカスタマイズ可能なCSSフレームワーク」です。

`@vivliostyle/theme-base` を使用したドキュメントを見てみると、見た目はブラウザデフォルトのUser agent stylesheetとほとんど同じように見えます。
その代わりに、各要素セレクターのプロパティにさまざまなCSS変数が設定されていることを確認できます。

[![theme-baseが適用されたWebページのスクリーンショット](/assets/posts/2023-04-xx-new-themes/fig-1.webp)](/assets/posts/2023-04-xx-new-themes/fig-1.webp)

これこそが `@vivliostyle/theme-base` によって実現していることです。

一般的なCSSは、まずスタイルを適用したいセレクターを選択して、その後に実際に適用するスタイルを記述します。
CSSのスタイルが重複して設定された場合、このセレクターの詳細度に応じて上書きするスタイルを記述します。
この特徴により、CSSは正しく管理された範囲の中では柔軟に制御できます。

しかし、これはすべてのCSSを自分で管理できているときの話で、外部の人間がCSSを上書きするケースの場合困難が伴います。
継承先のCSSが継承元のCSSを上書きするためには、元のCSSよりも高い詳細度のセレクターを設定したり `!important` をつけて詳細度を上げる必要がありますが、これは継承元のCSSの内容に依存しているため、読みにくく理解の難しいCSSになってしまいます。
また、継承元のCSSがアップデートして詳細度が変わってしまうと、依存先のCSSも無効になってしまいます。
これまでのCSSによるテーマ機能は、この「詳細度の制御」が課題でした。

新しいVivliostyle Themesは、セレクターを使う代わりに「CSS変数」を使ってスタイルの適用先を指定します。

```css
/* 一般的なCSSの指定方法 */
h1 {
  font-size: 2.5rem;
  line-height: 1.5;
}
p {
  margin: 0.5rem 1.5rem;
}

/* Vivliostyle Themesの指定方法 */
:root {
  --vs--h1-font-size: 2.5rem;
  --vs--h1-line-height: 1.5;
  --vs--p-margin-block: 0.5rem;
  --vs--p-margin-inline: 1.5rem;
}
```

Vivliostyle Themeでは、`--vs` で始まる名前のCSS変数を定義しています。
4つのCSS変数はもとのセレクターとは関係ない `:root` というセレクターに設定されているため、継承元のスタイルの詳細度を気にする必要がなくなっています。

それでは、実際に設定できるCSS変数について紹介します。

## 体系化されたCSS変数

上記の例では `h1` タグや `p` タグといった特定のタグに対する指定でしたが、Vivliostyle ThemesはVivliostyleがターゲットにする文章レイアウトがかんたんに実現できるように、設定するCSS変数の名前を体系化して定義しています。

### `meta-properties.css`

ドキュメント全体に適用するもっとも基本的なCSS変数は [`meta-properties.css`](https://github.com/vivliostyle/themes/blob/6b516234280c1eb8e5fbce1a63ba9688cc02e72f/packages/%40vivliostyle/theme-base/css/common/meta-properties.css) で定義されています。
たとえば、ドキュメント全体のフォントや文字サイズ、縦書きか横書きか、などに関する情報です。

```css
:root {
  --vs-font-family: serif; /* フォントをセリフ体に設定 */
  --vs-writing-mode: vertical-lr; /* 縦書きで表示 */
  --vs-spacing-rlh: 2rem; /* 各要素の基本的なマージンを設定 */
}
```

### `basic.css`

`h1` タグや `p` タグをはじめとした一般的な要素に対するCSS変数は [`basic.css`](https://github.com/vivliostyle/themes/blob/6b516234280c1eb8e5fbce1a63ba9688cc02e72f/packages/%40vivliostyle/theme-base/css/common/basic.css) で定義されています。
`basic.css` で定義されているCSS変数は、すべて `--vs--` で始まる名前になっています。

```css
:root {
  --vs--blockquote-font-size: 120%; /* blockquoteタグのフォントサイズを120%に設定 */
  --vs--figure-margin-inline: 2rem; /* figureタグのinline方向のmarginを指定 */ 
}
```

一部のHTML要素には、一括で設定するためのCSS変数も用意されています。

* `--vs--heading-*`: Heading要素 (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`) に対して一括で指定します
* `--vs--monospace-*`: 等幅フォントが適用される要素 (`code`, `kbd`, `pre`, `samp`) に対して一括で指定します
* `--vs--lists-*`: リスト要素 (`ul`, `ol`, `dl`) に対して一括で指定します

また、`table` タグについてはより細かく罫線の幅を制御できるようになっています、たとえば以下のようなCSS変数があります。

* `--vs--table-border-width-outer`: 表の外側の罫線の幅を指定
* `--vs--table-border-width-row`: 表の内側の横方向の罫線の幅を指定

### それ以外のCSS変数

meta-propertiesやbasic以外にも、ページレイアウトに関する設定や相互参照、目次など、Vivliostyleが提供する機能の多くをCSS変数でのカスタマイズでカバーしています。
より詳しいドキュメントは、[@vivliostyle/theme-baseのREADME](https://github.com/vivliostyle/themes/tree/main/packages/%40vivliostyle/theme-base) を参照してください。

## 実際の適用例

これらのCSS変数が実際にはどのように活用されているかは、`theme-base` 以外のテーマファイルを見ることで確認できます。

たとえば、`theme-techbook` のテーマファイルは [`@vivliostyle/theme-techbook/theme.css`](https://github.com/vivliostyle/themes/blob/main/packages/%40vivliostyle/theme-techbook/theme.css) にあります。
中身を簡略化するとこのようになっています。

```css
@import url(../theme-base/theme-all.css);
@import url(../theme-base/css/lib/prism/base.css);
@import url(../theme-base/css/lib/prism/theme-okaidia.css);

/**
 * Theme variables
*/
:root {
  --vs-theme--anchor-color-body: #3498db;
  --vs-theme--blockquote-color-bg: #ecf0f1;
  --vs-theme--blockquote-color-body: #34495e;
  ...
}

:root {
  --vs-font-family: 'Neue Frutiger World', 'Verdana', 'Hiragino Sans', sans-serif;
  --vs-font-size-on-print: 75%;
  --vs-line-height: 1.7;
  --vs-widows-orphans: 3;
  --vs--heading-line-height: 1.2;
  ...
}
```

ご覧の通り、テーマファイル自身も `theme-base` のCSS変数の内容をカスタマイズすることでスタイルを変化させています。
もちろん、自分でCSSを用意することでこのテーマからさらにCSS変数の内容を上書きすることもできます。
また、Vivliostyleが提供するテーマは、`--vs-theme--` で始まる名前のテーマ固有のCSS変数も提供しています。
必要に応じてこの内容もカスタマイズしてください。

## 自分のテーマを作成する

自分のVivliostyle Themeを作成するための雛形生成ツール [create-vivliostyle-theme](https://github.com/vivliostyle/themes/tree/main/packages/create-vivliostyle-theme) も、新しいVivliostyle Themeに対応しました。雛形を生成するためには、以下のコマンドを実行します。

```
npm create vivliostyle-theme@beta <your-theme-name>
```

生成される雛形にはこれまでのようなSASSファイルは含まれておらず、`theme.css` だけがあるシンプルな構成になりました。Vivliostyle Themeが完成したら、ぜひnpm packageとして公開してみてください！

## まとめ

この記事では、CSS変数によって新しくなったVivliostyle Themeについて紹介しました。
新しいVivliostyle Themeは、フィードバックを受けたのち正式版としてリリースされます。
ご意見がありましたら、ぜひ [vivliostyle/themesのissueに登録](https://github.com/vivliostyle/themes/issues/new) してください。

