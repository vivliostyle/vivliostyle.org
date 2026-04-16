# TODO: チュートリアル④ ダウンロード用アセットの更新

## 背景

`assets/tutorials/ja/configure-page-text/` にあるダウンロード用ファイルは、2022年4月（yamasy1549 さんによる初回作成、commit 7059c7e）のまま更新されていない。今回のチュートリアル改訂の目的の一つは **SCSS への依存を除去し、プレーンCSS（CSS変数）ベースに移行すること** であり、これらのアセットも合わせて更新が必要。

## 更新が必要なファイル

| ファイル | 問題点 |
|---------|--------|
| `mytheme.zip` | 中身が SCSS ファイル（`theme_common.scss` 等）。プレーンCSS のみの構成に変更する |
| `vivliostyle.config.js` | CommonJS 形式（`module.exports`）。ES module 形式（`import/export`）に変更する |
| `manuscripts.zip` | 内容の確認が必要（チュートリアル本文との整合性） |

## 対応方針

- スクリーンショット撮影作業の完了後に着手する
- チュートリアル本文の指示内容に合わせてアセットを再作成する
- `mytheme.zip` は SCSS を含めず、`theme.css`（プレーンCSS）のみにする
