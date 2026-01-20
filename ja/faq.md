---
layout: page
title: FAQ
lang: ja
---

<style>
.url {
  word-break: break-all;
}
</style>

{% capture license %}
## Vivliostyle Viewer についての FAQ

ユーザーガイド: [Vivliostyle Viewer ユーザーガイド](https://docs.vivliostyle.org/ja/viewer/vivliostyle-viewer/)

### ローカル環境で Vivliostyle Viewer を使うには？

Vivliostyle Viewer をローカル環境で利用するには、Vivliostyle CLI の preview コマンドを使うのが便利です。Vivliostyle CLI のインストール方法と使い方については、[Vivliostyle CLI ドキュメント](https://docs.vivliostyle.org/ja/cli/)、preview コマンドについては [組版結果のプレビュー](https://docs.vivliostyle.org/ja/cli/#preview-command) をご覧ください。

👉[Vivliostyle Viewer ユーザーガイド](https://docs.vivliostyle.org/ja/viewer/vivliostyle-viewer/)

### オンラインの Vivliostyle Viewer でローカルの文書を表示するには？

まず、ローカルWebサーバーを起動して、ローカルのHTML文書にブラウザからアクセスできるようにします。ここでは、ローカルWebサーバーとして Node.js の http-server を使う方法を説明します。

Node.js がインストールされていない場合はまずそのインストールをします。👉<span class="url"><https://nodejs.org></span>

ターミナル（Windows ではコマンドプロンプト）で、次のコマンドにより http-server をインストールします：

```
npm install -g http-server
```

組版表示したいHTMLやCSSファイルが含まれるディレクトリ上で http-server を次のように起動します：

```
http-server . --cors -o -c-1
```

これで、ローカルWebサーバーのURL <http://localhost:8080> が開き、ブラウザでローカルにあるファイルの一覧を見ることができます。そこで表示したいHTMLファイルを見つけてそのURLをコピーし、別に開いたオンラインの Vivliostyle Viewer <span class="url"><https://vivliostyle.org/viewer/></span> にそのURLを指定して組版表示することができます。
（http-server コマンドの `--cors` オプションは、別のドメインでのスクリプトからこのローカルサーバーの文書をアクセスできるようにする指定、`-o` オプションはブラウザを起動する指定、`-c-1` はキャッシュを無効にする指定です。）

### GitHubやGistにある文書を Vivliostyle Viewer で表示するには？

[GitHub](https://github.com/) や [Gist](https://gist.github.com/) 上にあるHTML文書を [Vivliostyle Viewer](https://vivliostyle.org/viewer/) で表示することができます。

例1: GitHubリポジトリ内のHTMLファイル <span class="url"><https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span> を Vivliostyle Viewer で開く:
<span class="url"><https://vivliostyle.org/viewer/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span>

- GitHub上のファイルのURLをそのまま Vivliostyle Viewer に指定できます。

例2: Gist に置かれた HTML ファイル <span class="url"><https://gist.github.com/MurakamiShinyu/4f0423fd3578a277c7d29f56a31912b7#file-index-html></span> を Vivliostyle Viewer で開く:
<span class="url"><https://vivliostyle.org/viewer/#src=https://gist.github.com/MurakamiShinyu/4f0423fd3578a277c7d29f56a31912b7/raw/af7fea921d57d6601d153101850bf95850262ece/index.html&bookMode=true></span>

- Gist上のファイルの `Raw` コンテンツへのリンクのURLを Vivliostyle Viewer に指定できます。
- この例では URL にパラメータとして `&bookMode=true` を指定することにより、この HTML ファイル内の目次からリンクされる複数のHTMLファイルをロードします。

### EPUBを閲覧するには？

Vivliostyle Viewer では ZIP 解凍済みの EPUB ファイルを表示することができます。この場合、次のようにパラメータを指定します:

```
#src=⟨表示する解凍済みEPUBフォルダのURL⟩&bookMode=true
```

GitHub上に公開されているZIP解凍済みのEPUBファイルを表示する例:

- [IDPF/epub3-samples](https://github.com/IDPF/epub3-samples/)の 『[Accessible EPUB 3](https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/)』

  <span class="url"><https://vivliostyle.org/viewer/#src=https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/&bookMode=true></span>

👉[Vivliostyle Viewer ユーザーガイド](https://docs.vivliostyle.org/ja/viewer/vivliostyle-viewer/)

ローカル環境で EPUB を閲覧または PDF に変換をするには Vivliostyle CLI が便利です。[Vivliostyle CLI ドキュメント](https://docs.vivliostyle.org/ja/cli/) の [他の形式から PDF を生成](https://docs.vivliostyle.org/ja/cli/getting-started/#%E4%BB%96%E3%81%AE%E5%BD%A2%E5%BC%8F%E3%81%8B%E3%82%89-pdf-%E3%82%92%E7%94%9F%E6%88%90) および [組版結果のプレビュー](https://docs.vivliostyle.org/ja/cli/getting-started/#%E7%B5%84%E7%89%88%E7%B5%90%E6%9E%9C%E3%81%AE%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC) をご覧ください。

### Webサイトに Vivliostyle Viewer を組み込むには？

[Vivliostyle Viewer の配布パッケージをダウンロード](https://vivliostyle.org/ja/download/)して解凍した内容をWebサーバー上の公開ディレクトリにコピーします。パッケージ内容の `viewer/` ディレクトリに Vivliostyle Viewer があります。例えば `https://example.com/example/` として公開されるディレクトリにパッケージ内容をコピーした場合、`https://example.com/example/viewer/` が Vivliostyle Viewer のURLになります。

### 目次パネルを有効にするには？

HTMLファイル内に次のような目次要素がある場合、Vivliostyle Viewer で [**Book Mode**](#book-mode-とは) を指定することで、目次パネルが有効になります。

```html
<nav role="doc-toc">
  <h2>Table of Contents</h2>
    <ol>
      <li><a href="#section1">First Section</a></li>
      <li><a href="#section2">Second Section</a></li>
      <li><a href="#section3">Third Section</a></li>
    </ol>
</nav>
```

👉[Vivliostyle Viewer ユーザーガイド: 目次パネル](https://docs.vivliostyle.org/ja/viewer/vivliostyle-viewer/#%E7%9B%AE%E6%AC%A1%E3%83%91%E3%83%8D%E3%83%AB)

👉次も参照: [目次を作るには？](#目次を作るには)

### 複数のHTMLファイルを連結して組版表示するには？

Vivliostyle Viewer で [**Book Mode**](#book-mode-とは) を指定した場合、次のように別のHTMLファイルへのリンクからなる目次要素を含むHTMLファイルをロードすると、目次要素内からリンクされているHTMLファイルも連続してロードされて、それらが連結された組版表示となります：

```html
<nav role="doc-toc">
  <h2>Table of Contents</h2>
    <ol>
      <li><a href="chapter1.html">First Chapter</a>
        <ol>
          <li><a href="chapter1.html#section1">First Section</a></li>
          <li><a href="chapter1.html#section2">Second Section</a></li>
        </ol>
      </li>
      <li><a href="chapter2.html">Second Chapter</a></li>
    </ol>
</nav>
```

👉[Vivliostyle Viewer ユーザーガイド: Web出版物（複数HTML文書）](https://docs.vivliostyle.org/ja/viewer/vivliostyle-viewer/#web%E5%87%BA%E7%89%88%E7%89%A9%EF%BC%88%E8%A4%87%E6%95%B0html%E6%96%87%E6%9B%B8%EF%BC%89)

👉次も参照: [目次を作るには？](#目次を作るには)

### Book Mode とは？

[Vivliostyle Viewer](https://vivliostyle.org/viewer/) のUIの **Book Mode** チェックボックスをチェック、あるいはURLパラメータに `&bookMode=true` を追加することにより Book Mode が有効になります。このモードでは、次の機能が有効になります：

- [目次パネルからのナビゲーションが有効](#目次パネルを有効にするには)
- [複数の HTML ファイルを連結して組版表示](#複数のhtmlファイルを連結して組版表示するには)
- [EPUB（ZIP解凍済み）の組版表示](#epubを閲覧するには)

### 文字サイズを可変にするには？

Vivliostyle Viewer のUIには `A⁻` (Text: Smaller), `A⁺` (Text: Larger), `A⁼` (Text: Default Size) のボタンがあり、表示する文字のサイズを変えることができます。しかし、文書に指定されているスタイルシートに固定の文字サイズが指定されていると、UI から文字サイズを変更できません。

UI から文字サイズを変更できるようにうするには、font-size の指定に相対的な長さの単位（`%`, `em`, `rem`）を使うことです。Vivliostyle Viewer では、font-size のデフォルトは、ブラウザと同様に 12pt (= 16px) です。ルート要素で font-size を設定していない場合、`rem` (root em) 単位を使うと、そのデフォルトの font-size を 1rem として、相対的な文字サイズの指定ができます。そうすると、Vivliostyle Viewer UI からの文字サイズ変更が有効になります。

スタイルシートでルートの font-size を相対的に指定するには、12pt (= 16px) を 100% とした `%` 単位を使えます。例：

```css
:root {
  font-size: 87.5%; /* set 1rem = 10.5pt (87.5% of 12pt) */
}
```

### ページサイズを可変にするには？

Vivliostyle Viewer は、スタイルシートによるページサイズの指定がない（あるいは `auto` が指定されている）場合、ブラウザのウインドウの表示領域をページサイズとします。これにより、画面の大きさに応じた可変のページサイズでの表示が可能です。

また、Vivliostyle Viewer の設定メニューの **User Style Preferences** → **Page Size** でページサイズを指定することも可能です。ここで指定するページサイズはスタイルシートで次のようにページサイズを指定するのと同じことになります：

```css
@page { size: A4; }
```

## Vivliostyle CLI についての FAQ

ユーザーガイド: [Vivliostyle CLI ドキュメント](https://docs.vivliostyle.org/ja/cli/)

### PDFの「しおり」(Bookmarks)を有効にするには？

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) では、組版する文書の目次データを使ってPDFの「しおり」(Bookmarks) を自動生成することができます。PDF の「しおり」は、Adobe Acrobat のような PDF 閲覧ソフトで目次ナビゲーションに利用できるものです。

👉[Vivliostyle CLI ドキュメント: PDF の「しおり」(Bookmarks) の生成](https://docs.vivliostyle.org/ja/cli/special-output-settings/#pdf-%E3%81%AE%E3%81%97%E3%81%8A%E3%82%8Abookmarks-%E3%81%AE%E7%94%9F%E6%88%90)

### EPUBをPDFに変換するには？

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) では EPUB ファイルあるいは解凍(unzip)された EPUB から PDF を生成することができます。

👉[Vivliostyle CLI ドキュメント: 他の形式から PDF を生成](https://docs.vivliostyle.org/ja/cli/getting-started/#%E4%BB%96%E3%81%AE%E5%BD%A2%E5%BC%8F%E3%81%8B%E3%82%89-pdf-%E3%82%92%E7%94%9F%E6%88%90)

### 印刷用のPDF（PDF/X-1a 形式）を生成するには？

`vivliostyle build` コマンドの `--press-ready` オプションにより印刷入稿に適した PDF/X-1a 形式で出力することができます。

👉[Vivliostyle CLI ドキュメント: 印刷用 PDF（PDF/X-1a 形式）の生成](https://docs.vivliostyle.org/ja/cli/special-output-settings/#%E5%8D%B0%E5%88%B7%E7%94%A8-pdfpdfx-1a-%E5%BD%A2%E5%BC%8F%E3%81%AE%E7%94%9F%E6%88%90)

## Create Book についての FAQ

### Create Book とは？

[Create Book](https://www.npmjs.com/package/create-book) は、簡単に本を作れる環境を構築します。

👉[Create Book ユーザーガイド](https://docs.vivliostyle.org/ja/create-book/)

### テーマをカスタマイズするには？

👉[Vivliostyle CLI ドキュメント: テーマと CSS](https://docs.vivliostyle.org/ja/cli/themes-and-css/) および [Vivliostyle CLI ドキュメント: 構成ファイル](https://docs.vivliostyle.org/ja/cli/using-config-file/) をご覧ください。

👉次も参照:

- [新しい Vivliostyle Themes のご紹介](https://vivliostyle.org/ja/blog/2023/04/23/intro-new-themes/)
- [Vivliostyle Themes ドキュメント](https://docs.vivliostyle.org/ja/themes/)
- [Vivliostyle Themes ギャラリー](https://docs.vivliostyle.org/ja/themes/gallery/)


## CSS組版のテクニックについてのFAQ

### 複数のHTMLファイルから本を作るには？

👉[Vivliostyle Viewer ユーザーガイド: Web出版物（複数HTML文書）](https://docs.vivliostyle.org/ja/viewer/vivliostyle-viewer/#web%E5%87%BA%E7%89%88%E7%89%A9%EF%BC%88%E8%A4%87%E6%95%B0html%E6%96%87%E6%9B%B8%EF%BC%89) をご覧ください。

👉[Vivliostyle CLI ドキュメント: 構成ファイル](https://docs.vivliostyle.org/ja/cli/using-config-file/) をご覧ください。

### 目次を作るには？

[Vivliostyle CLI](https://www.npmjs.com/package/@vivliostyle/cli) で目次の自動生成が可能です。

👉[Vivliostyle CLI ドキュメント: 目次の作成](https://docs.vivliostyle.org/ja/cli/toc-page/) をご覧ください。

HTMLのマークアップで目次を作るには、`<nav role="doc-toc">` … `</nav>` で囲むブロック内に目次項目（本文中の各見出しへのリンク）のリストを入れます。

参考：[W3CのPublication Manifest](https://www.w3.org/TR/pub-manifest/)仕様の付録の [Machine-Processable Table of Contents](https://www.w3.org/TR/pub-manifest/#app-toc-structure)

ページ番号入りの目次のスタイルは、次のようなスタイルシートによって実現できます：

```css
nav li a::after {
  content: leader("…") target-counter(attr(href url), page);
}
```

実例については、Vivliostyleのサンプル紹介ページ <span class="url"><https://vivliostyle.org/ja/samples/></span> の「目次」タグが付いたサンプルをご覧ください。

👉以下も参照:
- [目次パネルを有効にするには？](#目次パネルを有効にするには)
- [複数のHTMLファイルを連結して組版表示するには？](#複数のhtmlファイルを連結して組版表示するには)

### 数式（MathML、TeX、AsciiMath）を埋め込むには？

Vivliostyle Viewer では [MathJax](https://www.mathjax.org/) により数式を組版表示することができます。

次の形式の数式をHTML文書内に埋め込むことができます：
- MathML
- TeX 数式
- AsciiMath

MathML の要素 `<math>` … `</math>` は、HTML文書内に直接書くことができます。

TeX または AsciiMath の数式を利用するには、その数式を含むHTML要素に属性 `data-math-typeset="true"` を指定し、テキスト内に以下の方法で数式を記述します：
- TeX 数式は `\(` … `\)` または `$$`…`$$` で囲む
- AsciiMath は \` … \` で囲む

数式のテストのHTMLソース: <span class="url"><https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span>

Vivliostyle Viewer で組版表示: <span class="url"><https://vivliostyle.org/viewer/#src=https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/test/files/math-sample.html></span>

👉[vivliostyle.js issue#523: ASCIIMATH and MathJAX](https://github.com/vivliostyle/vivliostyle.js/issues/523)

### 本の途中でページ・カウンターをリセットするには？

複数のHTML文書からなる本の中のひとつの文書の先頭でページ・カウンターをリセットするには次のようにします：

```css
@page :nth(1) {
  counter-reset: page;
}
```

👉[vivliostyle.js issue#522: "reset-counter: page;" doesn't work properly with web publications](https://github.com/vivliostyle/vivliostyle.js/issues/522) をご覧ください。

### 先頭ページ番号を変えるには？

最初のページ番号は通常は1ですが、これを変えるには次のようにします。

例：最初のページ番号を 2 にする場合

```css
@page :first {
  counter-reset: page 1;
}
```

各ページの最初にpageカウンターは自動的にインクリメントされるので、1にリセットした場合の最初のページ番号は2となります。

## Vivliostyle のライセンスについての FAQ

### Vivliostyle のオープンソース・ライセンスの種類は？

Vivliostyle はオープンソース・ライセンスとして AGPLv3 (GNU Affero General Public License, version 3) を採用しています。

AGPL は、GPL (GNU General Public License) と同様の互恵的なライセンス（派生物にも同じライセンスが適用される）であり、ソフトウェアの改変や商用利用が許可されています。GPL と異なる点は、ネットワーク経由の利用者にもソースコードにアクセスする権利が保証されることです。

参照:
- [GNU Affero General Public License (AGPLv3)](https://www.gnu.org/licenses/agpl-3.0.en.html)
  - [GNU Affero 一般公衆利用許諾書　日本語訳](http://gpl.mhatta.org/agpl.ja.html)
- [Frequently Asked Questions about the GNU Licenses](https://www.gnu.org/licenses/gpl-faq.en.html)
  - [GNUライセンスに関してよく聞かれる質問（GNUライセンスFAQ）日本語版](https://www.gnu.org/licenses/gpl-faq.ja.html)


### Vivliostyle ソースコードのコピーライトの帰属先は？

Vivliostyle のソースコードには、次のようなコピーライト表記があります:
（[epub.ts](https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/src/vivliostyle/epub.ts) の例）

> * Copyright 2013 Google, Inc.
> * Copyright 2015 Daishinsha Inc.
> * Copyright 2018 Vivliostyle Foundation

「Copyright 2013 Google, Inc.」とあるのは、Vivliostyle がもともと、Google に所属する Peter Sorotokin 氏によって開発された [EPUB Adaptive Layout JavaScript-based implementation ("Adapt")](https://github.com/sorotokin/adaptive-layout) をベースとして開発されたためです。この元プロジェクト由来のソースコードの権利は Google にあります。

「Copyright 2015 Daishinsha Inc.」とあるのは、2024年に株式会社大伸社（Daishinsha Inc.）がTrim-marks社から権利を取得したためです。

Trim-marks 社（旧社名は Vivliostyle Inc.）は、2015年から2018年3月までのあいだ、Vivliostyle の開発の主体でした。この期間に書かれた Vivliostyle ソースコードの権利は Trim-marks 社にあります。また、Vivliostyle のライセンスは当初、元プロジェクトの "Adapt" を継承して Apache License 2.0 でしたが、2017年2月から AGPLv3 に変更されました。

Vivliostyle Foundation は、2018年3月に Trim-marks 社がオープンソース版の Vivliostyle の取り扱いをやめてから、そのオープンソース管理を引き継ぎました。それ以降に書かれた Vivliostyle のソースコードの権利は Vivliostyle Foundation にあります。


### Vivliostyle を利用して作られた出版物にオープンソース・ライセンスによる制約はありますか？

いいえ。Vivliostyle のライセンスが AGPL であることは、Vivliostyle を利用して作られた出版物には影響しません。出版物のソースデータ（HTML や CSS）を公開する義務はとくにありません。


### 会社内で Vivliostyle を制限なく利用できますか？

はい。Vivliostyle を会社・組織内でコピーして利用するのは自由であり、ソースコードを改変しても公開する義務はありません。

参照（GNUライセンスFAQ）:
- [GPLは、改変された版のソースコードを公に発表することを要求しますか?](https://www.gnu.org/licenses/gpl-faq.html#GPLRequireSourcePostedPublic)
- [一つの組織あるいは会社で複数のコピーを作成して使うことは「配布」となりますか?](https://www.gnu.org/licenses/gpl-faq.html#InternalDistribution)


### Vivliostyle Viewer または Vivliostyle Print を商用の Web アプリケーションから呼び出して利用することはできますか？

はい。[Vivliostyle Viewer](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/viewer) および [Vivliostyle Print](https://github.com/vivliostyle/vivliostyle-print) は、クライアントサイドのブラウザ上で独立したプログラムとして動作するものなので、サーバーサイドのプログラムやクライアントサイドの別のプログラムがプロプライエタリであっても、それらと組み合わせて利用することが可能です。

Vivliostyle (Viewer/Print) を改変して利用することも、改変したソースコードを公開するならば可能です。ただし、AGPL である Vivliostyle のプログラムと、それを呼び出すプロプライエタリなプログラムとがそれぞれ独立を保った形でコミュニケートする必要があります。

参照（GNUライセンスFAQ）:
- [GPLの及ぶプラグインをロードするように設計された不自由なプログラムをリリースすることはできるでしょうか?](https://www.gnu.org/licenses/gpl-faq.html#NFUseGPLPlugins)
- [わたしのプロプライエタリ・システムに、GPLの及ぶソフトウェアを組み入れたいのです。わたしには、このソフトウェアを使う許可はGPLが与えてくれるもの以外にはなにもありません。わたしはできますか?](https://www.gnu.org/licenses/gpl-faq.html#GPLInProprietarySystem)


### Vivliostyle Viewer が独立したプログラムとして動作する条件は？

[Vivliostyle Viewer](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/viewer) は、そのメインの HTML ファイルと、そこからリンクされている JavaScript ライブラリで構成されます。それが商用の Web アプリケーションと同じ Web サーバー上に置かれて使用される場合でも、それはエンドユーザーの Web ブラウザ上にロードされて実行されるものなので、サーバー側で動作する Web アプリケーションのプログラムとは明確に分離されています。

Vivliostyle Viewer で表示する対象の文書の URL や表示設定などのデータは Vivliostyle Viewer のメインの HTML ファイルの URL に付加される URL のフラグメント・パラメータで指定されます。商用の Web アプリケーションのフロントエンド側のプログラム（JavaScript など）と Vivliostyle プログラムとの間でのデータのやりとりに、この URL パラメータを使うのであれば、ふたつのプログラムを結合する必要がないので、Vivliostyle Viewer を独立したプログラムとして扱うことができます。


### Vivliostyle Print が独立したプログラムとして動作する条件は？

[Vivliostyle Print](https://github.com/vivliostyle/vivliostyle-print) は、Web ページに Vivliostyle での組版処理をともなった印刷機能を付加する JavaScript プログラムです。これを、商用 Web アプリケーションのフロントエンド側など別プログラムから使用する場合、パラメータを指定して Vivliostyle Print プログラムのメインの関数を呼び出して、その処理の終了を待つことになります。終了コードや処理したページ数など単純な戻り値を返すかもしれません。このような使われ方であれば、ふたつのプログラムどうしで複雑なデータ構造を共有したり相互的なデータのやりとりをするわけではないため、Vivliostyle Print を独立したプログラムとして扱うことができます。


### Vivliostyle CLI をサーバーサイドで利用することはできますか？

はい。[Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli) は、サーバーサイドの別のプログラムから呼び出されても、それぞれが独立したプログラムとして動作するかぎりは、呼び出す側のプログラムがプロプライエタリであっても問題ありません。


### Vivliostyle を商用利用する上で気を付けるべき制限事項は？

Vivliostyle を AGPL ライセンスに従いながら商用利用する上で、以下のことに気を付ける必要があります:

- Vivliostyle を改変して配布する場合（注意：Webサイトでの利用も含まれます）、改変した Vivliostyle のソースコードを公開する必要があります。
- Vivliostyle を組み込んで単一の結合したプログラムとして動作するものを作成して配布する場合は、その全体のソースコードを AGPL ライセンスで公開する必要があります。
- Vivliostyle のソースコードを改変する場合は、ソースファイルのヘッダーコメントにあるコピーライトの記述を保持してください。「Copyright 2013 Google, Inc.」の記述があるソースファイルには元プロジェクトである "Adapt" 由来のソースコードが含まれており、その元ソースコードは Apache License 2.0 の適用を受けます。[README](https://github.com/vivliostyle/vivliostyle.js/blob/master/README.md) や [LICENSE](https://github.com/vivliostyle/vivliostyle.js/blob/master/scripts/package-artifacts/LICENSE.md) ファイルの次の記述を保持してください:
    > Vivliostyle Core is implemented based on [Peter Sorotokin's EPUB Adaptive Layout implementation](https://github.com/sorotokin/adaptive-layout), which is licensed under [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).



### Vivliostyle Pub のオープンソース・ライセンスの種類は？

Vivliostyle Pub のライセンスは [Apache License 2.0](https://github.com/vivliostyle/vivliostyle-pub/blob/master/LICENSE) です。


- 👉[Apache License 2.0（原文）<i class="fas fa-external-link-alt"></i>](https://opensource.org/licenses/Apache-2.0)
- 👉[Apache License 2.0（日本語参考訳）<i class="fas fa-external-link-alt"></i>](https://licenses.opensource.jp/Apache-2.0/Apache-2.0.html)


他方、Vivliostyle 組版エンジンの中心である Vivliostyle Core と、それを組み込んでいる Vivliostyle Viewer や Vivliostyle CLI はAGPL v3 です。これらはVivliostyle の主要プロダクトであることから、**Vivliostyle のライセンスは、基本的にAGPL v3** であると言えます。

それでも、これらを直接使っていないプログラム（たとえば [VFM](https://github.com/vivliostyle/vfm/blob/master/LICENSE)）、あるいはVivliostyle Viewer や Vivliostyle CLI を独立したプログラムとして呼び出しているプログラム（たとえば [Vivliostyle Pub](https://github.com/vivliostyle/vivliostyle-pub/blob/master/LICENSE)）は、必ずしも AGPL v3 である必要はありません。そこでユーザが利用しやすいように、より制限のゆるい Apache License 2.0 にしています。

ただし、 より詳細に見ると、Vivliostyle Pub は Vivliostyle Viewer や Vivliostyle CLI を呼び出していることから、Vivliostyle Pub のシステムは AGPL v3 の部分（Vivliostyle Viewer等を使った部分）と、Apache License 2.0の部分（Vivliostyle Pub 独自部分）から構成されていることが分かります。つまり、Vivliostyle Pub システム全体では、2種類のライセンスがあるとも言えます。

すこし詳しく説明しましょう。たとえば現在の Vivliostyle Pubでは、エディター画面の右側に、プレビュー画面としてVivliostyle Viewerが埋め込まれています。これはHTMLの iframe 要素を使って別のWebページとして埋め込んでいるものです。つまり、Vivliostyle Pubのエディター画面（左半分）は独自部分なのでApache License 2.0、一方プレビュー画面（右半分）はVivliostyle Viewer そのものなので、AGPL v3 ということになります。


![画面右のプレビューウィンドウは、iframe 要素によりVivliostyle Viewer を埋め込んでいる](/assets/faq/fig-1.png)


このとき注意すべきことがあります。それはVivliostyle Pub がまだ開発途上であり、将来実装方法が変わる可能性があることです。前に述べたように Vivliostyle Pub の独自部分がApache License 2.0である要件は、「Vivliostyle Viewer等を独立したプログラムとして呼び出していること」でした。


- 👉[Vivliostyle Viewer または Vivliostyle Print を商用の Web アプリケーションから呼び出して利用することはできますか？](https://vivliostyle.org/ja/faq/#vivliostyle-viewer-%E3%81%BE%E3%81%9F%E3%81%AF-vivliostyle-print-%E3%82%92%E5%95%86%E7%94%A8%E3%81%AE-web-%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%8B%E3%82%89%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B)
- 👉[Vivliostyle Viewer が独立したプログラムとして動作する条件は？](https://vivliostyle.org/ja/faq/#vivliostyle-viewer-%E3%81%8C%E7%8B%AC%E7%AB%8B%E3%81%97%E3%81%9F%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%A8%E3%81%97%E3%81%A6%E5%8B%95%E4%BD%9C%E3%81%99%E3%82%8B%E6%9D%A1%E4%BB%B6%E3%81%AF)

逆に言えば、将来の Vivliostyle Pub が、より密接に Vivliostyle Viewer や Vivliostyle CLI を組み込む方向に開発がすすめば、AGPL v3 にライセンスを変更する必要があります。

前述のように、現在のバージョンの Vivliostyle Pubは右半分のプレビュー画面で HTML の iframe 要素を使っていることから、左半分のエディター画面から独立して動作していると解釈できます。したがって AGPL v3 に抵触しません。

それに対して、将来のバージョンアップでメインのWebページにJavaScriptライブラリをロードしてプレビュー画面を構成する実装も考えられるでしょう（[React Vivliostyle](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/react) は、そのような使い方を想定したJavaScriptライブラリです）。その場合は JavaScriptライブラリや、Vivliostyle のライブラリ、そして Vivliostyle Pub 独自のプログラムが混在することになります。これは「密接に組み込む」状態と言え、AGPL v3 へのライセンス変更が必要になります。

これはあくまで将来の可能性の一つであり、必ずしもVivliostyle Pubがそうなるという意味ではありません。しかし今からその選択肢を排除できません。ライセンスを変更した場合は、必ずその旨お知らせします。今はそのようなこともあり得ることだけ、お含み置きください。

{% endcapture %}

{% include page/faq.html
  title="FAQ"
  lead="よくある質問とその回答をまとめました。これからも拡充していきます。質問があれば[こちら](/ja/community)まで！"

  license=license
%}
