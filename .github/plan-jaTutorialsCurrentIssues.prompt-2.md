## Plan: チュートリアルのCLIコードブロック・説明文をv10実動作に修正

Create Book前提の記述をVivliostyle CLI前提へ全面置換した改修（PR #171）ののち、Codexが書いたコードブロックが旧バージョン（Create Book v8以前）の動作を元にしており、現行 `create-book` v10.3.1（実体は `@vivliostyle/cli` の `create` コマンド）の実際のターミナル出力と大きく乖離していることが判明した。本計画はその差分を解消し、「2026年時点でそのまま追従できる」コードブロックと説明文に整合させることを目的とする。

**特定された差異**

| # | ファイル | 問題 |
|---|---------|------|
| 1 | create-publications.html | 対話プロンプトが旧形式（`? description`, `? author email`, `? license`）。実際は `Where should we create your project?` → `title` → `author name` → `language` → テンプレート選択 → テーマ選択 → `Install dependencies?` の順 |
| 2 | create-publications.html | `npm run build` 出力に `✔ bunko.md` が2行重複 |
| 3 | customize.html | `vivliostyle.config.js` が `module.exports = { ... }` CommonJS形式。現行は `import { defineConfig } from '@vivliostyle/cli'; export default defineConfig({...})` ESM形式 |
| 4 | customize.html | テーマディレクトリ構造が `themes/packages/@vivliostyle/` を示しているが、実際はnpmで `node_modules/` 以下にインストールされる |
| 5 | create-table-of-contents.html | `vivliostyle.config.js` 設定例が CommonJS形式 |

**Steps**

1. [ja/tutorials/create-publications.html](../ja/tutorials/create-publications.html) の対話プロンプト全面置換: 旧形式のプロンプト（`? description` / `? author email` / `? license` / `? choose theme`）を削除し、実際のプロンプト順（`◆ Where should we create your project?` → `◆ What's the title of your publication?` → `◆ What's the author name?` → `◆ What's the language?` → テーマ選択 → `◆ Install dependencies?`）に差し替える。原稿は `bunko.md + @vivliostyle/theme-bunko` を選択する前提で記述し、テンプレート選択UIの詳細説明は省略する。
2. 同ファイルの `npm run build` 出力（CB-02-09）を修正: 重複 `✔ bunko.md` 行を削除し、実際の出力（`ℹ Rendering browser (Chromium) is not installed yet. Downloading now...` → `✔ Successfully downloaded browser` → `✔ bunko.md 銀河鉄道の夜` → `🎉 Built successfully.`）に整合させる。
3. 前後の説明文（プロンプトの各項目への言及）を新しいプロンプト順・質問文に合わせて改訂する。
4. [ja/tutorials/customize.html](../ja/tutorials/customize.html) の `vivliostyle.config.js` 全コードブロック（CB-03-01, 02, 05, 07）を CommonJS → ESM形式に変換: `module.exports = { ... }` → `import { defineConfig } from '@vivliostyle/cli'; export default defineConfig({ ... })`（`// @ts-check` コメント付き）。
5. 同ファイルのテーマディレクトリ構造（CB-03-03, 06）を修正: `themes/packages/@vivliostyle/theme-bunko/` → `node_modules/@vivliostyle/theme-bunko/`。カスタムテーマのコピー先 `themes/mytheme/` はそのまま維持。
6. 前後の説明文で `module.exports` に言及している箇所を修正。
7. [ja/tutorials/create-table-of-contents.html](../ja/tutorials/create-table-of-contents.html) の config例（CB-07-01, 03, 05）を CommonJS → ESM形式に変換。前後説明文の整合を確認・修正。
8. [ja/tutorials/configure-page-text.html](../ja/tutorials/configure-page-text.html)、[configure-counters-running-heads.html](../ja/tutorials/configure-counters-running-heads.html)、[configure-basic-elements.html](../ja/tutorials/configure-basic-elements.html) に CommonJS への言及があれば修正（コードブロックはCSSのみなので軽微）。

**Verification**
- `bundle exec jekyll build` でビルドエラーなし。
- `_site/ja/tutorials/create-publications/index.html` で対話プロンプトと build出力の表示を目視確認。
- `git diff` で全変更内容を確認後コミット（pushは明示的な指示後）。

**Decisions**
- 原稿構成は `bunko.md + @vivliostyle/theme-bunko` を維持（ユーザー選択）。
- `npm run build` 出力はブラウザDL行も含めた実際の形式を再現（初回実行時の典型ログ）。
- `image:` フィールド（Docker用）は config例に含めない（初心者向けに不要）。
- `npm create book mybook` の形式は維持（プロジェクト名をコマンドライン引数で渡す）。

**参照**
- `vivliostyle/vivliostyle-cli` `src/core/create.ts`: 対話プロンプトの実装
- `vivliostyle/vivliostyle-cli` `src/const.ts`: `TEMPLATE_DEFAULT_FILES`（package.jsonとconfig.jsのテンプレート）
- `vivliostyle/vivliostyle-cli` `docs/getting-started.md`: 公式 Getting Started
