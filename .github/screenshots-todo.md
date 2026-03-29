# スクリーンショット撮影ガイド

作成日: 2026-03-14 / 改訂: 2026-03-28
対象: ja/tutorials（チュートリアル②④⑤⑥⑦）

## 凡例

| 記号 | 意味 |
|------|------|
| 🔴 必須再撮影 | ファイル未作成 or 内容不一致が確定 |
| 🟡 再撮影推奨 | 本文改訂の影響で整合確認が必要 |
| 🟢 流用可 | 目視確認のみ（問題があれば再撮影） |

## サマリー

| 優先度 | 件数 |
|--------|------|
| 🔴 必須再撮影 | 5 件 |
| 🟡 再撮影推奨 | 12 件 |
| 🟢 流用可 | 11 件 |
| **合計** | **28 件** |

---

// ...existing code...

## 共通: 事前準備

```bash
# vivliostyle-cli をローカルビルド（PR #763 が npm 未リリースのため）
cd /Users/ogwata/dev/vivliostyle/vivliostyle-cli
pnpm build

# 作業用ディレクトリで雛形を作成
mkdir -p /tmp/vivliostyle-ss && cd /tmp/vivliostyle-ss
node /Users/ogwata/dev/vivliostyle/vivliostyle-cli/dist/cli.js create mybook
# 対話入力:
#   Title     : Mybook
#   Author    : 山田太郎
#   Language  : Japanese
#   Template  : Basic (Japanese)
#   Theme     : @vivliostyle/theme-techbook
#   Install   : Yes

cd mybook
```

> **注意**: PR #763 が npm にリリースされたら、`npx create-book@latest mybook` に戻すこと。

// ...existing code...
---

## チュートリアル② PDFの作成

HTML: `ja/tutorials/create-publications.html`
配置先: `assets/tutorials/ja/create-publications/`

---

### SS-0201 🔴 build-cover.png

- **配置パス**: `assets/tutorials/ja/create-publications/build-cover.png`
- **HTML参照行**: `create-publications.html:174`
- **撮影内容**: Mybook.pdf の **表紙ページ**（Vivliostyle出版物テンプレートの表紙）
- **対応する本文**: 「Mybook.pdf … 表紙・目次・9つの章からなる技術書」

**操作手順**:

```bash
# PDF を生成
npm run build

# 生成された PDF を開く
open mybook.pdf
```

→ PDFビューアで **1ページ目（表紙）** を表示し、スクリーンショットを撮影。

---

### SS-0202 🔴 build-toc.png

- **配置パス**: `assets/tutorials/ja/create-publications/build-toc.png`
- **HTML参照行**: `create-publications.html:175`
- **撮影内容**: Mybook.pdf の **目次ページ**（9章が見える）
- **対応する本文**: 同上（表紙・目次・本文の3枚表示）

**操作手順**:

```bash
# SS-0201 で開いた PDF をそのまま使用
```

→ PDFビューアで **目次ページ** を表示し、スクリーンショットを撮影。

---

### SS-0203 🔴 build-body.png

- **配置パス**: `assets/tutorials/ja/create-publications/build-body.png`
- **HTML参照行**: `create-publications.html:176`
- **撮影内容**: Mybook.pdf の **本文ページ**（見出し・コード等が確認できるページ）
- **対応する本文**: 同上

**操作手順**:

```bash
# SS-0201 で開いた PDF をそのまま使用
```

→ PDFビューアで **本文（見出しやコードブロックが見える章）** を表示し、スクリーンショットを撮影。

---

### SS-0204 🔴 preview1.png

- **配置パス**: `assets/tutorials/ja/create-publications/preview1.png`
- **HTML参照行**: `create-publications.html:191`
- **撮影内容**: `npm run preview` 起動直後の画面（表紙/目次/本文のいずれかが表示）
- **対応する本文**: 「ブラウザが起動し、表紙・目次・全9章のプレビューが表示」

**操作手順**:

```bash
# プレビューを起動
npm run preview
```

→ ブラウザが自動で開く。表示された画面をそのままスクリーンショットで撮影。

---

### SS-0205 🔴 preview2.png

- **配置パス**: `assets/tutorials/ja/create-publications/preview2.png`
- **HTML参照行**: `create-publications.html:207`
- **撮影内容**: `draft/02_introduction.md` を編集し、追加文が反映されたプレビュー画面
- **対応する本文**: 「draft/02_introduction.md の冒頭段落に一文追加」

**操作手順**:

```bash
# preview は起動したまま、別ターミナルで編集
# draft/02_introduction.md を開き、冒頭段落を以下のように変更する
```

変更前:

```
Vivliostyle CLIは、HTMLやMarkdownドキュメントを高品質な出版物に組版するための強力なコマンドラインツールです。
```

変更後:

```
Vivliostyle CLIは、HTMLやMarkdownドキュメントを高品質な出版物に組版するための強力なコマンドラインツールです。このツールを使えば、誰でも簡単にプロフェッショナルな本を作ることができます。
```

→ プレビューが自動リロードされたら、変更が反映された箇所をスクリーンショットで撮影。

**チュートリアル② 撮影後の配置**:

```bash
cp build-cover.png build-toc.png build-body.png preview1.png preview2.png \
  /Users/ogwata/dev/vivliostyle/vivliostyle.org/assets/tutorials/ja/create-publications/
```

---

## チュートリアル④ 用紙と文字のスタイル

HTML: `ja/tutorials/configure-page-text.html`
配置先: `assets/tutorials/ja/configure-page-text/`

> **前提**: チュートリアル②で作成した mybook プロジェクトを引き続き使用し、本文の指示に従ってスタイルを段階的に変更しながら撮影する。

---

### SS-0401 🟡 preview-reset1.png

- **配置パス**: `assets/tutorials/ja/configure-page-text/preview-reset1.png`
- **HTML参照行**: `configure-page-text.html:53`
- **撮影内容**: スタイル初期化直後のプレビュー（1枚目）
- **対応する本文**: スタイル初期化直後のプレビュー

**操作手順**:

```bash
# 本文の指示に従い themes/theme.css をスタイル初期化状態にする
# プレビューを起動（まだなら）
npm run preview
```

→ プレビュー画面をスクリーンショットで撮影。

---

### SS-0402 🟡 preview-reset2.png

- **配置パス**: `assets/tutorials/ja/configure-page-text/preview-reset2.png`
- **HTML参照行**: `configure-page-text.html:54`
- **撮影内容**: スタイル初期化直後のプレビュー（2枚目）
- **対応する本文**: 同上

**操作手順**:

→ SS-0401 と同じ状態で、別のページを表示してスクリーンショットを撮影。

---

### SS-0403 🟡 preview-reset3.png

- **配置パス**: `assets/tutorials/ja/configure-page-text/preview-reset3.png`
- **HTML参照行**: `configure-page-text.html:55`
- **撮影内容**: スタイル初期化直後のプレビュー（3枚目）
- **対応する本文**: 同上

**操作手順**:

→ SS-0401 と同じ状態で、さらに別のページを表示してスクリーンショットを撮影。

---

### SS-0404 🟡 preview-margin.png

- **配置パス**: `assets/tutorials/ja/configure-page-text/preview-margin.png`
- **HTML参照行**: `configure-page-text.html:84`
- **撮影内容**: `@page` の margin 設定を反映したプレビュー
- **対応する本文**: @page margin の説明直後

**操作手順**:

```bash
# 本文の指示に従い @page { margin: ... } を追記
```

→ プレビューが自動リロードされたら、余白の変化が分かるページをスクリーンショットで撮影。

---

### SS-0405 🟡 preview-inside-margin.png

- **配置パス**: `assets/tutorials/ja/configure-page-text/preview-inside-margin.png`
- **HTML参照行**: `configure-page-text.html:98`
- **撮影内容**: `:left` / `:right` の内側余白設定を反映したプレビュー
- **対応する本文**: :left / :right の内側余白説明直後

**操作手順**:

```bash
# 本文の指示に従い @page :left / @page :right を追記
```

→ 見開きで左右の余白の違いが分かるページをスクリーンショットで撮影。

---

### SS-0406 🟡 preview-break-before.png

- **配置パス**: `assets/tutorials/ja/configure-page-text/preview-break-before.png`
- **HTML参照行**: `configure-page-text.html:118`
- **撮影内容**: `break-before` による開始ページ制御を反映したプレビュー
- **対応する本文**: break-before による開始ページ制御説明直後

**操作手順**:

```bash
# 本文の指示に従い break-before を追記
```

→ 章の先頭が新しいページで始まっている様子をスクリーンショットで撮影。

---

### SS-0407 🟡 preview-writing-mode.png

- **配置パス**: `assets/tutorials/ja/configure-page-text/preview-writing-mode.png`
- **HTML参照行**: `configure-page-text.html:148`
- **撮影内容**: `writing-mode` 変更を反映したプレビュー
- **対応する本文**: writing-mode の説明直後

**操作手順**:

```bash
# 本文の指示に従い writing-mode を追記
```

→ 縦書き/横書きの変化が確認できるページをスクリーンショットで撮影。

---

### SS-0408 🟡 preview-text-indent.png

- **配置パス**: `assets/tutorials/ja/configure-page-text/preview-text-indent.png`
- **HTML参照行**: `configure-page-text.html:211`
- **撮影内容**: `text-indent` 設定を反映したプレビュー
- **対応する本文**: text-indent の説明直後

**操作手順**:

```bash
# 本文の指示に従い text-indent を追記
```

→ 段落の字下げが確認できるページをスクリーンショットで撮影。

---

### SS-0409 🟡 preview-text-align.png

- **配置パス**: `assets/tutorials/ja/configure-page-text/preview-text-align.png`
- **HTML参照行**: `configure-page-text.html:224`
- **撮影内容**: `text-align` 設定を反映したプレビュー
- **対応する本文**: text-align の説明直後

**操作手順**:

```bash
# 本文の指示に従い text-align を追記
```

→ テキストの揃え方の変化が確認できるページをスクリーンショットで撮影。

**チュートリアル④ 撮影後の配置**:

```bash
cp preview-reset1.png preview-reset2.png preview-reset3.png \
   preview-margin.png preview-inside-margin.png preview-break-before.png \
   preview-writing-mode.png preview-text-indent.png preview-text-align.png \
  /Users/ogwata/dev/vivliostyle/vivliostyle.org/assets/tutorials/ja/configure-page-text/
```

---

## チュートリアル⑤ カウンタと柱のスタイル

HTML: `ja/tutorials/configure-counters-running-heads.html`
配置先: `assets/tutorials/ja/configure-counters-running-heads/`

> **注意**: 全6件が 🟢 流用可。目視で問題がなければ撮影不要。

---

### SS-0501 🟢 preview-counter1.png

- **配置パス**: `assets/tutorials/ja/configure-counters-running-heads/preview-counter1.png`
- **HTML参照行**: `configure-counters-running-heads.html:51`
- **撮影内容**: h1カウンタ設定の説明直後のプレビュー（1枚目）
- **対応する本文**: h1カウンタ設定の説明直後

**確認手順**:

→ 既存画像と本文を目視比較。不一致があれば、本文の指示に従いスタイルを適用して再撮影。

---

### SS-0502 🟢 preview-counter2.png

- **配置パス**: `assets/tutorials/ja/configure-counters-running-heads/preview-counter2.png`
- **HTML参照行**: `configure-counters-running-heads.html:52`
- **撮影内容**: h1カウンタ設定の説明直後のプレビュー（2枚目）
- **対応する本文**: 同上

**確認手順**:

→ SS-0501 と同様に目視確認。

---

### SS-0503 🟢 preview-counter3.png

- **配置パス**: `assets/tutorials/ja/configure-counters-running-heads/preview-counter3.png`
- **HTML参照行**: `configure-counters-running-heads.html:53`
- **撮影内容**: h1カウンタ設定の説明直後のプレビュー（3枚目）
- **対応する本文**: 同上

**確認手順**:

→ SS-0501 と同様に目視確認。

---

### SS-0504 🟢 page-margin-box.png

- **配置パス**: `assets/tutorials/ja/configure-counters-running-heads/page-margin-box.png`
- **HTML参照行**: `configure-counters-running-heads.html:72`
- **撮影内容**: ページマージンボックス16種類の図解
- **対応する本文**: ページマージンボックス16種類の説明直後

**確認手順**:

→ 既存画像と本文を目視比較。

---

### SS-0505 🟢 preview-page-number.png

- **配置パス**: `assets/tutorials/ja/configure-counters-running-heads/preview-page-number.png`
- **HTML参照行**: `configure-counters-running-heads.html:89`
- **撮影内容**: ノンブル設定を反映したプレビュー
- **対応する本文**: ノンブル設定の説明直後

**確認手順**:

→ 既存画像と本文を目視比較。

---

### SS-0506 🟢 preview-running-heads.png

- **配置パス**: `assets/tutorials/ja/configure-counters-running-heads/preview-running-heads.png`
- **HTML参照行**: `configure-counters-running-heads.html:106`
- **撮影内容**: 柱（running heads）設定を反映したプレビュー
- **対応する本文**: 柱（running heads）設定の説明直後

**確認手順**:

→ 既存画像と本文を目視比較。

---

## チュートリアル⑥ 基本的な要素のスタイル

HTML: `ja/tutorials/configure-basic-elements.html`
配置先: `assets/tutorials/ja/configure-basic-elements/`

---

### SS-0601 🟢 preview-headings.png

- **配置パス**: `assets/tutorials/ja/configure-basic-elements/preview-headings.png`
- **HTML参照行**: `configure-basic-elements.html:75`
- **撮影内容**: 見出しスタイルを反映したプレビュー
- **対応する本文**: 見出しスタイルの説明直後

**確認手順**:

→ 既存画像と本文を目視比較。

---

### SS-0602 🟡 preview-code.png

- **配置パス**: `assets/tutorials/ja/configure-basic-elements/preview-code.png`
- **HTML参照行**: `configure-basic-elements.html:103`
- **撮影内容**: Prism.js + code スタイルを反映したプレビュー
- **対応する本文**: Prism.js + codeスタイル説明直後

**操作手順**:

```bash
# 本文の指示に従いコードブロックのスタイルを適用
npm run preview
```

→ コードブロックが表示されているページをスクリーンショットで撮影。

---

### SS-0603 🟢 preview-figure1.png

- **配置パス**: `assets/tutorials/ja/configure-basic-elements/preview-figure1.png`
- **HTML参照行**: `configure-basic-elements.html:132`
- **撮影内容**: 図番号スタイルを反映したプレビュー（1枚目）
- **対応する本文**: 図番号スタイル説明直後

**確認手順**:

→ 既存画像と本文を目視比較。

---

### SS-0604 🟢 preview-figure2.png

- **配置パス**: `assets/tutorials/ja/configure-basic-elements/preview-figure2.png`
- **HTML参照行**: `configure-basic-elements.html:133`
- **撮影内容**: 図番号スタイルを反映したプレビュー（2枚目）
- **対応する本文**: 同上

**確認手順**:

→ 既存画像と本文を目視比較。

---

### SS-0605 🟢 preview-footnote1.png

- **配置パス**: `assets/tutorials/ja/configure-basic-elements/preview-footnote1.png`
- **HTML参照行**: `configure-basic-elements.html:154`
- **撮影内容**: 後注スタイルを反映したプレビュー（1枚目）
- **対応する本文**: 後注スタイル説明直後

**確認手順**:

→ 既存画像と本文を目視比較。

---

### SS-0606 🟢 preview-footnote2.png

- **配置パス**: `assets/tutorials/ja/configure-basic-elements/preview-footnote2.png`
- **HTML参照行**: `configure-basic-elements.html:155`
- **撮影内容**: 後注スタイルを反映したプレビュー（2枚目）
- **対応する本文**: 同上

**確認手順**:

→ 既存画像と本文を目視比較。

**チュートリアル⑥ 撮影後の配置**（再撮影分のみ）:

```bash
cp preview-code.png \
  /Users/ogwata/dev/vivliostyle/vivliostyle.org/assets/tutorials/ja/configure-basic-elements/
```

---

## チュートリアル⑦ 目次の作成

HTML: `ja/tutorials/create-table-of-contents.html`
配置先: `assets/tutorials/ja/create-table-of-contents/`

---

### SS-0701 🟡 preview-table-of-contents1.png

- **配置パス**: `assets/tutorials/ja/create-table-of-contents/preview-table-of-contents1.png`
- **HTML参照行**: `create-table-of-contents.html:44`
- **撮影内容**: `toc.title` を指定した自動目次のプレビュー
- **対応する本文**: toc.title を指定した自動目次の説明直後

**操作手順**:

```bash
# 本文の指示に従い vivliostyle.config.js に toc 設定を追記
npm run preview
```

→ 自動生成された目次ページをスクリーンショットで撮影。

---

### SS-0702 🟡 preview-table-of-contents2.png

- **配置パス**: `assets/tutorials/ja/create-table-of-contents/preview-table-of-contents2.png`
- **HTML参照行**: `create-table-of-contents.html:144`
- **撮影内容**: 手動目次（`nav role='doc-toc'` + CSS）のプレビュー
- **対応する本文**: 手動目次の説明直後

**操作手順**:

```bash
# 本文の指示に従い手動目次の HTML と CSS を追記
```

→ 手動目次が表示されたページをスクリーンショットで撮影。

**チュートリアル⑦ 撮影後の配置**:

```bash
cp preview-table-of-contents1.png preview-table-of-contents2.png \
  /Users/ogwata/dev/vivliostyle/vivliostyle.org/assets/tutorials/ja/create-table-of-contents/
```

---

## 旧ファイル（本文未参照・対応不要）

以下は現在のHTMLから参照されていないため、再撮影対象ではない。

- `assets/tutorials/ja/create-publications/build.png`
- `assets/tutorials/ja/customize/preview3.png`
- `assets/tutorials/ja/customize/preview4.png`
- `assets/tutorials/ja/customize/preview5.png`
- `assets/tutorials/ja/customize/preview6.png`

---

## クイックリファレンス: ID一覧

| ID | ファイル名 | 優先度 | チュートリアル |
|----|-----------|--------|---------------|
| SS-0201 | build-cover.png | 🔴 | ② |
| SS-0202 | build-toc.png | 🔴 | ② |
| SS-0203 | build-body.png | 🔴 | ② |
| SS-0204 | preview1.png | 🔴 | ② |
| SS-0205 | preview2.png | 🔴 | ② |
| SS-0401 | preview-reset1.png | 🟡 | ④ |
| SS-0402 | preview-reset2.png | 🟡 | ④ |
| SS-0403 | preview-reset3.png | 🟡 | ④ |
| SS-0404 | preview-margin.png | 🟡 | ④ |
| SS-0405 | preview-inside-margin.png | 🟡 | ④ |
| SS-0406 | preview-break-before.png | 🟡 | ④ |
| SS-0407 | preview-writing-mode.png | 🟡 | ④ |
| SS-0408 | preview-text-indent.png | 🟡 | ④ |
| SS-0409 | preview-text-align.png | 🟡 | ④ |
| SS-0501 | preview-counter1.png | 🟢 | ⑤ |
| SS-0502 | preview-counter2.png | 🟢 | ⑤ |
| SS-0503 | preview-counter3.png | 🟢 | ⑤ |
| SS-0504 | page-margin-box.png | 🟢 | ⑤ |
| SS-0505 | preview-page-number.png | 🟢 | ⑤ |
| SS-0506 | preview-running-heads.png | 🟢 | ⑤ |
| SS-0601 | preview-headings.png | 🟢 | ⑥ |
| SS-0602 | preview-code.png | 🟡 | ⑥ |
| SS-0603 | preview-figure1.png | 🟢 | ⑥ |
| SS-0604 | preview-figure2.png | 🟢 | ⑥ |
| SS-0605 | preview-footnote1.png | 🟢 | ⑥ |
| SS-0606 | preview-footnote2.png | 🟢 | ⑥ |
| SS-0701 | preview-table-of-contents1.png | 🟡 | ⑦ |
| SS-0702 | preview-table-of-contents2.png | 🟡 | ⑦ |