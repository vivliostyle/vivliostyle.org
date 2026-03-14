# スクリーンショット撮影リスト

Vivliostyle CLI 和訳 PR マージ後、チュートリアル用に撮影が必要なスクリーンショットの一覧です。

## 前提条件

- Vivliostyle CLI の最新版（和訳マージ済み）がインストールされていること
- 一時ディレクトリで `npm create book mybook` を実行し、以下を選択すること：
  - Title: `Mybook`
  - Author: `山田太郎`
  - Language: `Japanese`
  - Template: `Basic (Japanese)`
  - Theme: `@vivliostyle/theme-techbook`
  - Install dependencies: `Yes`

---

## チュートリアル② PDFの作成（5枚）

保存先: `assets/tutorials/ja/create-publications/`

### 1. build-cover.png （新規）

- **内容**: ビルドした PDF の**表紙**ページ
- **手順**: `cd mybook && npm run build` → 生成された `Mybook.pdf` を PDF ビューアで開く → 表紙ページのスクリーンショット
- **ポイント**: 表紙画像（cover-image.webp）とタイトルが見える状態
- **HTMLでの参照**: `![作成された PDF（表紙）](/assets/tutorials/ja/create-publications/build-cover.png)`

### 2. build-toc.png （新規）

- **内容**: ビルドした PDF の**目次**ページ
- **手順**: 同じ PDF の目次ページに移動 → スクリーンショット
- **ポイント**: 自動生成された目次（9つの章タイトルとページ番号）が見える状態
- **HTMLでの参照**: `![作成された PDF（目次）](/assets/tutorials/ja/create-publications/build-toc.png)`

### 3. build-body.png （新規）

- **内容**: ビルドした PDF の**本文**ページ
- **手順**: 同じ PDF の本文ページ（コードブロックや VFM 解説が含まれるページが望ましい）に移動 → スクリーンショット
- **ポイント**: theme-techbook のスタイル（見出し番号、コードハイライト等）が確認できるページ。`03_vfm-guide.md` や `05_examples.md` あたりが見栄えが良い
- **HTMLでの参照**: `![作成された PDF（本文）](/assets/tutorials/ja/create-publications/build-body.png)`

### 4. preview1.png （差し替え）

- **内容**: `npm run preview` 起動直後のプレビュー画面
- **手順**: `npm run preview` → ブラウザが起動 → プレビュー画面のスクリーンショット
- **ポイント**: 目次または本文が見えている状態。Vivliostyle Viewer の UI（ページ送りボタン等）も含める
- **既存ファイル**: `preview1.png` が存在するが、旧コンテンツ（Minimal テンプレート / 銀河鉄道の夜）で撮影されたものなので差し替えが必要
- **HTMLでの参照**: `![プレビュー画面](/assets/tutorials/ja/create-publications/preview1.png)`

### 5. preview2.png （差し替え）

- **内容**: `draft/02_introduction.md` を編集した後のプレビュー画面
- **手順**:
  1. プレビューを起動したまま `draft/02_introduction.md` を開く
  2. 冒頭の段落に一文を追加（チュートリアルの記述通り: 「Vivliostyle CLIは、HTMLやMarkdownドキュメントを高品質な出版物に組版するための強力なコマンドラインツールです。」の後に「このツールを使えば、誰でも簡単にプロフェッショナルな本を作ることができます。」を追加）
  3. 保存 → プレビューが自動更新されるのを待つ → スクリーンショット
- **ポイント**: 編集箇所（追加した文）がプレビュー上で確認できる状態
- **既存ファイル**: `preview2.png` が存在するが、旧コンテンツで撮影されたものなので差し替えが必要
- **HTMLでの参照**: `![サンプル原稿編集後のプレビュー画面](/assets/tutorials/ja/create-publications/preview2.png)`

---

## チュートリアル③ 原稿とテーマのカスタマイズ（0枚 → 今後追加の可能性あり）

現在の `customize.html` にはスクリーンショットの参照がありません。Plan-4 では以下の 2 枚を想定していますが、テキスト改修の確定後に追加判断します。

### （候補A）preview-before.png

- **内容**: custom.css 変更前のプレビュー
- **手順**: `npm run preview` → デフォルト状態のプレビュー画面をキャプチャ
- **ポイント**: セクション番号なし、デフォルトフォントの状態

### （候補B）preview-after.png

- **内容**: custom.css 変更後のプレビュー
- **手順**: `custom.css` に CSS Custom Properties を追加（例: セクション番号の有効化 `--vs-section--marker-display: inline;`）→ 保存 → プレビュー更新後にキャプチャ
- **ポイント**: 変更が視覚的にわかるページ（セクション番号が表示されている等）

---

## 削除対象の既存スクリーンショット

以下のファイルは旧コンテンツ（Create Book / theme-bunko / 銀河鉄道の夜）で撮影されたもので、チュートリアル改修完了後に削除が必要です。

| ファイル | 理由 |
|---------|------|
| `assets/tutorials/ja/create-publications/build.png` | `build-cover.png` / `build-toc.png` / `build-body.png` の3枚に分割して差し替え |
| `assets/tutorials/ja/customize/preview3.png` | ③の旧スクリーンショット。新版では不使用 |
| `assets/tutorials/ja/customize/preview4.png` | 同上 |
| `assets/tutorials/ja/customize/preview5.png` | 同上 |
| `assets/tutorials/ja/customize/preview6.png` | 同上 |

---

## 撮影上の注意

- ブラウザのウィンドウ幅は統一する（推奨: 1280px 程度）
- PDF ビューアのスクリーンショットでは、ツールバー等の不要な UI を極力排除する
- 画像は PNG 形式で、ファイルサイズが大きすぎる場合は適宜圧縮する
- alt テキストはチュートリアル HTML 側で設定済み

---

## 撮影手順まとめ

```bash
# 1. 一時ディレクトリで雛形を作成
cd /tmp
npm create book mybook
# → Title: Mybook / Author: 山田太郎 / Language: Japanese
# → Template: Basic (Japanese) / Theme: @vivliostyle/theme-techbook / Install: Yes

# 2. ビルドして PDF を作成
cd mybook
npm run build
# → Mybook.pdf が生成される

# 3. PDF を開いてスクリーンショット撮影（3枚）
#   - build-cover.png  : 表紙ページ
#   - build-toc.png    : 目次ページ
#   - build-body.png   : 本文ページ

# 4. プレビューを起動してスクリーンショット撮影（1枚）
npm run preview
#   - preview1.png     : プレビュー画面

# 5. draft/02_introduction.md に一文追加して保存、スクリーンショット撮影（1枚）
#   「Vivliostyle CLIは、…強力なコマンドラインツールです。」の後に
#   「このツールを使えば、誰でも簡単にプロフェッショナルな本を作ることができます。」を追加
#   - preview2.png     : 編集後のプレビュー画面

# 6. 撮影した画像を配置
cp build-cover.png build-toc.png build-body.png preview1.png preview2.png \
   /Users/ogwata/dev/vivliostyle/vivliostyle.org/assets/tutorials/ja/create-publications/
```
