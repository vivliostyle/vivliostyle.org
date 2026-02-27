# Plan-4: Basicテンプレート日本語版を軸としたチュートリアル②③の全面改修

## TL;DR

Vivliostyle CLI v10の目玉機能であるBasicテンプレートの**日本語版**（`templates/basic-ja/`）をvivliostyle-cliリポジトリに新設し、これをチュートリアル②（PDF作成）と③（カスタマイズ）の中心に据える。テーマは `@vivliostyle/theme-techbook` を使用。Basicテンプレートは9章構成のスターターコンテンツ（VFM解説・機能紹介・スタイリングガイド等）、表紙、自動目次、`custom.css`（CSS Custom Propertiesリファレンス）を含み、雛形を作った時点で「すぐ読める日本語の技術書」が手に入る。「作る→見る→改造する」という自然な学習フローを構成し、③では `custom.css` 直接編集方式によるカスタマイズを教える。

## Decisions（確定事項）

| 項目 | 決定 | 理由 |
|------|------|------|
| Plan-3 | 破棄 | Minimal + 銀河鉄道の夜アプローチは不採用 |
| テンプレート | Basic日本語版（`templates/basic-ja/`） | vivliostyle-cliリポジトリに別途新設（英語版に影響しない） |
| テーマ | `@vivliostyle/theme-techbook` | 技術同人誌向け。Basicの技術解説コンテンツと最適な整合性 |
| 原稿書き込み手順 | 不要 | Basicにスターターコンテンツが含まれるため |
| テーマカスタマイズ | `custom.css` 直接編集方式 | theme-bunkoコピー方式を廃止 |
| ダウンロードボタン | ③から削除 | maegaki.md / honbun.md / atogaki.md のダウンロードは不要に |
| 改修範囲 | ②と③をセットで改修 | Basicテンプレート前提に統一 |

## 前提条件（vivliostyle-cliリポジトリ側の作業）

本チュートリアル改修に先立ち、vivliostyle-cliリポジトリで以下を別PRとして実施する必要がある。

1. `templates/basic/` をコピーして `templates/basic-ja/` を作成
2. `draft/` 内の9つのMDファイル（01_cover.md 〜 09_distribution.md）の本文を日本語に翻訳
3. `custom.css` のコメント内説明文を日本語化（任意）
4. `src/const.ts` の `TEMPLATE_SETTINGS` 配列に以下を追加：
   ```ts
   {
     value: 'basic-ja',
     label: 'Basic (Japanese)',
     hint: '日本語スターターコンテンツ付きの雛形',
     template: 'gh:vivliostyle/vivliostyle-cli/templates/basic-ja',
   },
   ```
5. テンプレート選択画面が `Minimal / Basic / Basic (Japanese)` の3択になることを確認

### 参考: Basicテンプレートの現在の構造（英語版）

```
templates/basic/
├── .gitignore
├── README.md
├── cover.css              （表紙専用スタイル）
├── custom.css             （CSS Custom Propertiesリファレンス、全コメントアウト）
├── vivliostyle.config.js  （Handlebarsテンプレート）
├── cover-image.webp       （表紙画像）
└── draft/
    ├── 01_cover.md         （表紙ページ、doc-cover role）
    ├── 02_introduction.md  （CLI紹介、はじめに）
    ├── 03_vfm-guide.md     （VFM構文ガイド: 見出し、ルビ、数式、frontmatter）
    ├── 04_features.md      （テーマ、出力形式、config、プレビュー）
    ├── 05_examples.md      （6つの実践例: 技術文書、学術、多言語、クリエイティブ等）
    ├── 06_styling-guide.md （CSS Custom Properties、カスタムクラス、ページレイアウト）
    ├── 07_advanced-features.md （マルチファイル、目次、表紙、相互参照、国際化）
    ├── 08_page-design.md   （ページメディア、マージン、ヘッダー/フッター、段組）
    └── 09_distribution.md  （PDF/EPUB/WebPub出力、配布）
```

### 参考: Basicテンプレートの vivliostyle.config.js（Handlebarsレンダリング後の想定）

```js
// @ts-check
import { defineConfig } from '@vivliostyle/cli';

export default defineConfig({
  title: "Mybook",
  author: "山田太郎",
  language: "ja",
  size: "A4",
  theme: [
    "@vivliostyle/theme-techbook",
    "./custom.css",
  ],
  image: "ghcr.io/vivliostyle/cli:10.3.1",
  entryContext: "draft",
  entry: [
    {
      rel: "cover",
      path: "01_cover.md",
      output: "cover.html",
      theme: "./cover.css",
    },
    { rel: "contents" },
    "02_introduction.md",
    "03_vfm-guide.md",
    "04_features.md",
    "05_examples.md",
    "06_styling-guide.md",
    "07_advanced-features.md",
    "08_page-design.md",
    "09_distribution.md",
  ],
  toc: {
    sectionDepth: 1,
  },
  cover: {
    src: 'cover-image.webp',
  },
});
```

## Steps

### Step 1: チュートリアル② — 対話プロンプトの修正

**対象ファイル:** `ja/tutorials/create-publications.html`

**変更内容:**

- テンプレート選択の説明文を更新：
  > Basic (Japanese) は表紙・目次・9章の日本語スターターコンテンツ付きの雛形で、VFMの書き方やスタイリングのガイドが含まれています。このチュートリアルでは Basic (Japanese) を選択しましょう。

- テンプレート選択画面のコードブロック：
  ```
  ◆  What's the project template?
  │  ○ Minimal  ○ Basic  ● Basic (Japanese)
  ```

- テーマ選択で `@vivliostyle/theme-techbook` を選択するよう変更：
  > テーマはキーで選択します。このチュートリアルでは、技術書向けのテーマ @vivliostyle/theme-techbook を選択してみましょう。ソースコードの表示や目次にも対応しています。

  ```
  ◆  Which theme do you want to use?
  │  @vivliostyle/theme-techbook
  ```

- 依存パッケージインストール確認まで、すべてのプロンプト累積表示を上記に合わせて修正

### Step 2: チュートリアル② — 雛形構造の紹介セクションを新設

**位置:** `cd mybook` の直後、「PDF の作成」セクションの前

**新設内容:**

```markdown
### 雛形の構造

作成された雛形のディレクトリ構造を確認してみましょう。

mybook/
├── package.json           …出版物を作成するためのコマンドや依存パッケージの設定
├── vivliostyle.config.js  …出版物に関する設定ファイル
├── custom.css             …スタイルをカスタマイズするためのファイル
├── cover.css              …表紙専用のスタイルファイル
├── cover-image.webp       …表紙画像
└── draft/                 …原稿ファイルのディレクトリ
    ├── 01_cover.md         …表紙ページ
    ├── 02_introduction.md  …はじめに
    ├── 03_vfm-guide.md     …VFM構文ガイド
    ├── 04_features.md      …Vivliostyleの機能紹介
    ├── 05_examples.md      …実践例
    ├── 06_styling-guide.md …スタイリングガイド
    ├── 07_advanced-features.md …高度な機能
    ├── 08_page-design.md   …ページデザイン
    └── 09_distribution.md  …出力形式と配布
```

- `draft/` ディレクトリに9つの日本語原稿ファイルが含まれている旨を説明
- 「これらはVivliostyleの使い方を解説したスターターコンテンツです。このまますぐにPDFを作成できます」
- `vivliostyle.config.js` の概要を紹介（詳細は③で解説する旨を予告）

### Step 3: チュートリアル② — PDF作成セクションの改修

**現在の内容（削除対象）:**
- 「Minimal テンプレートでは、`mybook/manuscript.md` という空の原稿ファイルが作成されています。テキストエディタでこのファイルを開き、以下のような内容を書き込んでみましょう。」＋ 「はじめての本」サンプル

**新しい内容:**
- 「Basic (Japanese) テンプレートにはスターターコンテンツが最初から含まれています。では早速、このスターターコンテンツからPDFを作成してみましょう。」として `npm run build` に直行

**ビルド出力ブロック（正確なCLI出力に合わせる）:**
```
$ npm run build

> mybook@0.0.0 build
> vivliostyle build

✔ draft/01_cover.md 表紙
✔ draft/02_introduction.md はじめに
✔ draft/03_vfm-guide.md VFM: Vivliostyle Flavored Markdown
✔ draft/04_features.md Vivliostyleの機能
✔ draft/05_examples.md 実践例
✔ draft/06_styling-guide.md スタイリングとカスタマイズ
✔ draft/07_advanced-features.md 高度な機能とテクニック
✔ draft/08_page-design.md ページデザインとレイアウト
✔ draft/09_distribution.md 出力形式と配布
✔ Finished building Mybook.pdf
📗 Built successfully!
```

※ 上記の章タイトルは日本語版テンプレートの実際の見出しに合わせること

- 出力ファイル名は `Mybook.pdf`（config.titleの値）
- 「PDFを開くと、表紙・目次・9つの章からなる技術書が出来上がっています」
- **スクリーンショット撮影箇所（3枚）**: (1) PDFの表紙ページ、(2) 目次ページ、(3) 本文ページ（コード表示等が見えるもの）

**ビルド手順の説明（修正）:**
1. Markdown形式で書かれた原稿ファイルをHTMLに変換
2. vivliostyle.config.js の設定に従い、テーマを適用して組版
3. PDFを出力

### Step 4: チュートリアル② — プレビューセクションの改修

**変更内容:**
- 「では、スターターコンテンツを編集しながらプレビュー機能を使ってみましょう」
- `npm run preview` → Chrome起動、表紙＋目次＋全9章のプレビュー表示
- **スクリーンショット撮影箇所（1枚）**: プレビュー画面（目次または本文が見えている状態）

**原稿編集例:**
- `draft/02_introduction.md` を開き、本文の一部を変更するデモ
- 変更前・変更後のコードブロックを提示（具体的な内容は日本語版テンプレートの実際の内容に合わせる）
- 保存するとプレビューが自動更新されることを確認
- **スクリーンショット撮影箇所（1枚）**: 編集後のプレビュー画面

### Step 5: チュートリアル② — まとめの修正

手順リストを更新：

1. 雛形の作成
   - ターミナルで `npm create book mybook` を実行
   - テンプレートは「Basic (Japanese)」、テーマは「@vivliostyle/theme-techbook」を選択
2. 生成されたファイル構造の確認
3. PDFの作成
   - ターミナルで `npm run build` を実行
4. プレビューの起動
   - ターミナルで `npm run preview` を実行
5. 原稿の編集
   - 原稿を編集すると、自動的にプレビュー画面が更新

結びの文：
> Basic (Japanese) テンプレートにはスターターコンテンツが含まれているため、すぐにPDFを作成できます。次のチュートリアルでは、このスターターコンテンツを自分の原稿に置き換え、スタイルをカスタマイズする方法を学びます。

### Step 6: チュートリアル③ — 「PDF作成に必要なファイル」セクションの改修

**対象ファイル:** `ja/tutorials/customize.html`

**「設定ファイル」の修正:**

- `vivliostyle.config.js` のコード例を**Basicテンプレートで実際に生成される内容**に差し替え
- プロパティ一覧テーブルに以下を追加：
  - `entryContext`: 原稿ファイルがあるディレクトリ
  - `cover`: 表紙画像の設定
  - `toc`: 目次の設定（`sectionDepth` で見出し深さを制御）
  - `image`: Docker用コンテナイメージ

**「原稿ファイル」の修正:**

- `entryContext: "draft"` により `draft/` ディレクトリが原稿のルートである旨を説明
- VFM記法の紹介：「スターターコンテンツの `03_vfm-guide.md` にVFM記法の詳しいガイドが含まれています。見出し、ルビ、数式、frontmatterなどの書き方を確認できます。」
- Markdown（`.md`）だけでなくHTMLファイルも原稿として使える旨を維持

**「スタイルファイル」の修正:**

- `custom.css` の紹介：
  > Basic (Japanese) テンプレートには `custom.css` が含まれています。このファイルにはCSS Custom Propertiesがコメントアウトされた状態で一覧記載されており、コメントを外して値を変更するだけでスタイルをカスタマイズできます。
- `cover.css` の紹介：表紙ページ専用のスタイル
- テーマの説明：`@vivliostyle/theme-techbook` がベーステーマとして適用され、`custom.css` で上書きカスタマイズする仕組み

### Step 7: チュートリアル③ — 原稿カスタマイズの改修

**削除対象:**
- 「maegaki.md / honbun.md / atogaki.md」のダウンロードボタンとダウンロード手順
- `manuscripts.zip` のダウンロードボタン
- `vivliostyle.config.js` のダウンロードボタン
- maegaki / honbun / atogaki を使った例示のディレクトリツリー

**新しい内容:**

entry配列の説明をBasic configの実例で行う：

- 現在のentry配列（01_cover.md 〜 09_distribution.md）の構造を図示
- cover entry（`rel: "cover"`）と自動目次（`{ rel: "contents" }`）の特殊エントリを説明
- 通常の章エントリ（"02_introduction.md" 〜 "09_distribution.md"）はファイル名の文字列だけで指定可能

**原稿を増やす例:**
```js
entry: [
  // ...既存エントリ...
  "09_distribution.md",
  "10_my-new-chapter.md",  // ← 追加
],
```
→ `draft/10_my-new-chapter.md` を新規作成し、entryに追記

**原稿を減らす例:**
```js
entry: [
  { rel: "cover", path: "01_cover.md", output: "cover.html", theme: "./cover.css" },
  { rel: "contents" },
  "02_introduction.md",
  // "03_vfm-guide.md",     // ← コメントアウトまたは削除
  // "04_features.md",
  // ...
],
```
→ 「不要な章をentryから削除すれば、必要な章だけの出版物を作成できます」

### Step 8: チュートリアル③ — テーマカスタマイズの改修

**削除対象:**
- 「node_modules/@vivliostyle/theme-bunko をコピーして themes/mytheme に置く」フロー全体
- themes/mytheme ディレクトリツリーの図示
- theme を `./themes/mytheme` に書き換える手順

**新しい内容:**

`custom.css` を直接編集するフローに変更：

> Basicテンプレートの `custom.css` を開いてみましょう。CSS Custom Propertiesの一覧がコメントアウトされた状態で記載されています。コメントを外して値を変えるだけで、スタイルを簡単にカスタマイズできます。

**実際の例①: 見出しフォントの変更**
```css
:root {
  --vs--heading-font-family: 'Helvetica Neue', sans-serif;
}
```

**実際の例②: セクション番号の有効化**
```css
:root {
  --vs-section--marker-display: inline;
}
```

**実際の例③: ページ番号の表示**
```css
:root {
  --vs-page--mbox-content-bottom-center: counter(page);
}
```

- `npm run preview` を起動した状態でCSSを保存するとプレビューが更新される旨
- **スクリーンショット撮影箇所（2枚）:** custom.css変更前と変更後のプレビュー比較

**補足: より高度なカスタマイズ**
- 「CSS Custom Propertiesで対応できないスタイル変更が必要な場合は、`custom.css` に独自のCSSルールを追加できます」
- チュートリアル④以降への導線を設ける

### Step 9: チュートリアル③ — まとめの修正

手順まとめを更新：
1. `vivliostyle.config.js` の構造を理解する
2. 原稿ファイルの追加・削除は entry 配列で管理
3. スタイルのカスタマイズは `custom.css` のCSS Custom Propertiesを編集

結びの文：
> このチュートリアルを通して、Basicテンプレートの構造を理解し、原稿ファイルの管理方法とスタイルのカスタマイズ方法を学びました。次のチュートリアルでは、CSSを使ってより詳細な用紙と文字の設定を行います。

### Step 10: チュートリアル④〜⑦への影響確認（最小限の修正）

| チュートリアル | 修正内容 | 優先度 |
|---------------|---------|-------|
| ④用紙と文字のスタイル | `custom.css` からの自然な拡張として @page ルール等を説明。参照例の文脈をBasicテンプレート前提に軽く修正 | 低 |
| ⑤カウンタと柱 | `custom.css` に `--vs-page--mbox-content-*` プロパティがある旨を導入部で言及 | 低 |
| ⑥基本要素 | 変更は最小限 | 低 |
| ⑦目次 | Basicテンプレートが `{ rel: "contents" }` で自動目次を含んでいる旨を導入で言及追加 | 低 |

## スクリーンショット撮影一覧

チュートリアルのテキスト確定後、以下のスクリーンショットを手動で撮影する。

### チュートリアル②（計5枚）

| No. | ファイル名（案） | 内容 |
|-----|----------------|------|
| 1 | `build-cover.png` | ビルドしたPDFの表紙ページ |
| 2 | `build-toc.png` | ビルドしたPDFの目次ページ |
| 3 | `build-body.png` | ビルドしたPDFの本文ページ（コード表示やVFM解説が見えるもの） |
| 4 | `preview1.png` | プレビュー画面（初期状態） |
| 5 | `preview2.png` | 原稿編集後のプレビュー画面 |

### チュートリアル③（計2枚）

| No. | ファイル名（案） | 内容 |
|-----|----------------|------|
| 1 | `preview-before.png` | custom.css変更前のプレビュー |
| 2 | `preview-after.png` | custom.css変更後のプレビュー（セクション番号有効化等） |

## Verification（検証項目）

- [ ] vivliostyle-cli側で `templates/basic-ja/` と `TEMPLATE_SETTINGS` 追加が完了していること（前提条件）
- [ ] `npm create book mybook` → Basic (Japanese) → @vivliostyle/theme-techbook → Yes → 生成されるファイル構造がチュートリアルの記述と一致
- [ ] `npm run build` の出力（エントリ表示、完了メッセージ、出力ファイル名 `Mybook.pdf`）がチュートリアルの記述と一致
- [ ] `npm run preview` でChrome起動、プレビュー正常表示
- [ ] 原稿編集→プレビュー自動更新の動作確認
- [ ] `custom.css` のCSS Custom Properties変更→プレビュー反映の動作確認
- [ ] すべてのコードブロック・CLI出力がVivliostyle CLI v10.3.1の実際の動作と一致
- [ ] チュートリアル②→③のストーリーが自然に繋がること
- [ ] スクリーンショット7枚の撮影完了

## 補足: @vivliostyle/theme-techbook について

- 技術同人誌（技術書）向けの公式テーマ
- B5サイズベース（`182mm × 257mm`）、小口・ノドの余白調整済み
- Prism.jsによるコードブロックのシンタックスハイライト対応（デフォルト: Okaidiaテーマ）
- CSS Custom Properties による柔軟なカスタマイズ対応
- `@vivliostyle/theme-base` をベースとしており、Basic テンプレートの `custom.css` と相性が良い
- 目次・脚注・見出し番号などの基本要素に対応
- ページヘッダー: 左ページに `env(pub-title)`、右ページに `env(doc-title)`
- ページフッター: `counter(page)`
