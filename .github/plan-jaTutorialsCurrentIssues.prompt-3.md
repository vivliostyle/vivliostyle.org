# Plan: チュートリアル② 全面整合修正（確定版）

## TL;DR

「銀河鉄道の夜」をサンプル原稿として復活させつつ、**Minimalテンプレートは空の `manuscript.md` を生成する**という実際の動作に合わせた正しいフローに書き直す。全てのターミナル出力例をCLIソースコードと突き合わせて修正し、スクリーンショット再撮影用のコマンドを提供する。

## 背景

`.github/plan-jaTutorialsCurrentIssues.prompt-2.md` に基づく開発と改修を進めてきたが、実際のターミナル出力で再現しながら検証したところ間違いが頻発した。最初のページだけで4つのコミットが必要になった。ツギハギ修正の結果、テキストとコードブロック、スクリーンショットの間に大きな矛盾が生じている。

ここでモデルを変えて、実際のVivliostyle CLIソースコード（`src/core/create.ts`, `src/interactive.ts`, `src/core/build.ts`, `src/const.ts`）と突き合わせた総合的な見直しを行う。

## 発見した問題一覧

### A. ファクトエラー（ターミナル出力との不一致）

| # | 箇所 | 現在の記述 | 実際のCLI動作 |
|---|------|-----------|-------------|
| A1 | テーマ選択プロンプト | `Which theme do you want to use?` | `What's the project theme?`（create.ts L443） |
| A2 | ビルド出力ファイル名 | `mybook.pdf` | `Mybook.pdf`（config.titleベース。resolve.tsの `config.title ? \`${config.title}.pdf\``） |
| A3 | ビルド完了メッセージ | `🎉 Built successfully.` | `📗 Built successfully!`（📕📗📘📙からランダム + 感嘆符） |
| A4 | PDF作成メッセージ | `mybook.pdf has been created.` | この行は存在しない。実際は `✔ Finished building Mybook.pdf` |
| A5 | スピナー表示 | `◡ Processing PDF` | スピナーは `▁▁╱` 等の独自フレーム。一瞬で消えるため固定テキストとしては不正確 |
| A6 | ブラウザ名 | `Rendering browser (Chromium)` | 現在のデフォルトブラウザは **Chrome**（`browser: "chrome@..."` が生成される） |
| A7 | ビルド手順説明 | `3. package.json …に従い、PDF を作成` | package.jsonはPDF作成に直接関与しない。`vivliostyle build` が全てを行う |

### B. 一貫性の問題（ツギハギの副作用）

| # | 箇所 | 問題 |
|---|------|------|
| B1 | スクリーンショット3枚 | `build.png`, `preview1.png`, `preview2.png` は全て旧コンテンツ（銀河鉄道の夜）で撮影済み。テキストは「はじめての本」を記述しており、**画面とテキストが完全に矛盾** |
| B2 | 「サンプル原稿」の表現 | Minimalテンプレートは空ファイルを生成するため「サンプル原稿の編集」ではなく「原稿を書く」のが正しい流れ。しかし5箇所以上で「サンプル原稿」が残存 |
| B3 | まとめ欄 | 「サンプル原稿を編集し、PDF を作成できるようになりました」— 実際にやったことと不一致 |

### C. チュートリアルとしての質の問題

| # | 箇所 | 問題 |
|---|------|------|
| C1 | 原稿執筆の導入 | 「以下のような内容を書き込んでみましょう」→ 何の脈絡もなく「はじめての本」を書かせる。VFM記法（`<div class="author">`や`##`見出し）の説明がない |
| C2 | プレビュー編集例 | 「はじめての本」→「はじめての本（改訂版）」は変化が小さすぎ、プレビュー機能の威力を伝えられない |
| C3 | 生成された設定ファイル | `npm create book` で生成されるvivliostyle.config.jsの中身を一切見せていない。次のチュートリアル③で突然configの全プロパティを説明するのは飛躍が大きい |

## 修正計画

### Step 1: テーマ選択プロンプトメッセージの修正

`create-publications.html` のテーマ選択プロンプト部分（現在「`Which theme do you want to use?`」）を、実際のCLI出力（create.ts L443）に合わせて `What's the project theme?` に修正。

### Step 2: 原稿サンプルを「銀河鉄道の夜」に戻す

現在の汎用サンプル（「はじめての本」）を「銀河鉄道の夜」に差し替え。ただし旧版と異なり、**空ファイル `manuscript.md` にユーザーが書き込む**流れに合わせた導入文にする：

- 「Minimal テンプレートでは `mybook/manuscript.md` という空の原稿ファイルが作成されています。テキストエディタでこのファイルを開き、以下の内容を書き込んでみましょう。これは宮沢賢治の『銀河鉄道の夜』冒頭部分を VFM（Vivliostyle Flavored Markdown）記法で書いたものです。」
- VFMの `#` 見出し、`##` 小見出し、`{漢字|ルビ}` 記法について簡単に触れる（C1対応）

### Step 3: プレビュー編集例の改善

現在の微小な変更（「はじめての本（改訂版）」）を、もっと変化が見える例に変更（C2対応）：

- タイトルを「銀河鉄道の夜」→「銀河鉄道の朝」に変え、さらに1〜2行の本文を追加する
  - 旧版の「夜→朝」の例がわかりやすく、変化が一目でわかるのでこれを踏襲
  - 加えて章の追加（`## 二、…` など）を含め「ページが増える」ことも伝える

### Step 4: ビルド出力ブロックの全面修正

`create-publications.html` のビルド出力コードブロックを、実際のCLI出力に合わせて書き直す：

```
$ npm run build

> mybook@0.0.0 build
> vivliostyle build

ℹ Rendering browser (Chrome) is not installed yet. Downloading now...
✔ Successfully downloaded browser
✔ manuscript.md 銀河鉄道の夜
✔ Finished building Mybook.pdf
📗 Built successfully!
```

修正点：

- `(Chromium)` → `(Chrome)`（A6）
- `◡ Processing PDF` 行を削除（A5: スピナーは一瞬表示されるだけ）
- `mybook.pdf has been created.` → `✔ Finished building Mybook.pdf`（A4）
- `🎉 Built successfully.` → `📗 Built successfully!`（A3: 📕📗📘📙からランダム、感嘆符）
- ファイル名 `mybook.pdf` → `Mybook.pdf`（A2: config titleベース）

### Step 5: ビルド成功後のテキスト修正

- `mybook.pdf という名前の PDF` → `Mybook.pdf という名前の PDF`
- 「サンプル原稿に書かれた内容が PDF になっており」→「原稿に書いた内容が PDF になっており」

### Step 6: ビルド手順説明の修正

現在の3ステップ説明を正確に書き直す（A7）：

1. Markdown 形式で書かれた原稿を HTML に変換
2. vivliostyle.config.js の設定に従い、テーマのスタイルを適用して組版
3. PDF ファイルを生成

（「package.json という設定ファイルに従い」を削除 — package.jsonは `npm run build` = `vivliostyle build` のコマンド定義のみ）

### Step 7: 「サンプル原稿」表現の統一

全ファイルを通じて、以下の方針で統一（B2）:

- 初回記述: 「原稿ファイル（manuscript.md）」
- 以降: 「原稿」
- 「サンプル原稿」は全て置き換え

### Step 8: まとめの修正

「サンプル原稿を編集し、PDF を作成できるようになりました」→「原稿を作成し、PDF を出力できるようになりました」（B3）

### Step 9: 生成されたvivliostyle.config.jsの紹介を追加

`cd mybook` の直後に、生成されたconfigファイルの簡単な紹介を追加する（C3）：

> なお、雛形には `vivliostyle.config.js` という設定ファイルも自動生成されています。このファイルは、出版物のタイトルや著者、テーマ、原稿ファイルの指定などを管理しています。詳しくは次のチュートリアルで解説します。

### Step 10: スクリーンショット再撮影用コマンドの提供

テキスト修正完了後に、以下の手順を提示する（実行はユーザー）:

1. 一時ディレクトリで `npm create book mybook` を実行（チュートリアルの入力どおりに操作）
2. `manuscript.md` にチュートリアル記載の銀河鉄道の夜サンプルを書き込む
3. `npm run build` を実行 → **build.png**: 生成されたPDFをPDFビューアで開いたスクリーンショット
4. `npm run preview` を実行 → **preview1.png**: ブラウザのプレビュー画面のスクリーンショット
5. manuscript.mdを「銀河鉄道の朝」に編集・保存 → **preview2.png**: 更新後のプレビュー画面のスクリーンショット
6. 撮影した画像を `assets/tutorials/ja/create-publications/` に配置

## Verification

- `bundle exec jekyll build` でエラーなし
- ブラウザで該当ページをプレビューし、テキストとコードブロックの文脈が一貫していることを確認
- スクリーンショット撮影時に、チュートリアルの記述どおりに操作して実際の出力と一致することを確認

## Decisions

- 原稿サンプルに「銀河鉄道の夜」を復活（宮沢賢治、著作権切れ、theme-bunko縦書きとの相性良好）
- Minimalテンプレートの空ファイルに書き込むフローは維持（旧版の「サンプルを確認」ではなく「書き込む」）
- プロンプトのUnicode記号（`◇`/`◆`/`│`）は厳密一致を求めず可読性優先
- テンプレート選択の3番目「Use templates from the community theme」は初心者向けに省略維持
- ビルド出力の📗絵文字はランダム選択だが、代表値として📗を使用

## 参考: Minimalテンプレートの実際の生成物

```
mybook/
├── .gitignore          ← テンプレートから（node_modules/ と .vivliostyle/）
├── README.md           ← テンプレートから（タイトル置換済み）
├── manuscript.md       ← テンプレートから（空ファイル）
├── package.json        ← TEMPLATE_DEFAULT_FILES から生成
└── vivliostyle.config.js ← TEMPLATE_DEFAULT_FILES から生成
```

### 生成される vivliostyle.config.js（title="Mybook", author="山田太郎", language="ja", theme="@vivliostyle/theme-bunko"の場合）

```js
// @ts-check
import { defineConfig } from '@vivliostyle/cli';

export default defineConfig({
  title: "Mybook",
  author: "山田太郎",
  language: "ja",
  theme: "@vivliostyle/theme-bunko@^x.x.x",
  browser: "chrome@xxx.x.xxxx.xx",
  image: "ghcr.io/vivliostyle/cli:x.x.x",
  entry: ["manuscript.md"],
});
```

### 生成される package.json

```json
{
  "name": "mybook",
  "description": "Mybook",
  "author": "山田太郎",
  "version": "0.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "build": "vivliostyle build",
    "preview": "vivliostyle preview"
  },
  "dependencies": {
    "@vivliostyle/cli": "x.x.x"
  }
}
```

## 参考: CLIプロンプトの実際のマーカーシンボル

（`src/interactive.ts` より）

| State | Unicode | Fallback |
|-------|---------|----------|
| initial/active | `◆` | `*` |
| submit（完了） | `◇` | `o` |
| cancel | `■` | `x` |
| error | `▲` | `x` |

ラジオボタン: `◉`（選択）/ `◯`（未選択）

## 参考: ビルド出力の実際の形式

（`src/core/build.ts` + `src/output/pdf.ts` + `src/logger.ts` より）

1. スピナー開始: `Logger.startLogging('Start building')` — 独自スピナーフレーム `['▁▁╱ ', '▁║▁ ', '╲▁▁ ', ...]`
2. 各エントリ処理: `✔ {cyan(相対パス)} {gray(title)}`（`Logger.logSuccess`）
3. PDF生成中: `Logger.logUpdate('Building PDF')` — スピナー表示
4. 完了: `✔ Finished building {cyan(相対出力パス)}`（`Logger.logSuccess`）
5. 最終: `📗 Built successfully!`（📕📗📘📙からランダム、複数出力時は📚）

出力ファイル名: `config.title ? \`${config.title}.pdf\` : 'output.pdf'`（タイトルベース）
