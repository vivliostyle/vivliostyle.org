```prompt
## Plan: ja/tutorials 最新化改修（DRAFT）

Create Book前提の記述をVivliostyle CLI前提へ全面置換し、CSS Custom Properties中心に再構成して、現行プロダクト仕様との差分を解消する計画です。対象は [ja/tutorials](ja/tutorials) 配下の全章と教材 [assets/tutorials/ja](assets/tutorials/ja) で、特に高優先は Node要件、Create Book記述、SCSS前提、リンク不整合です。今回の方針として、互換手順の併記は行わず、最低要件のみを明記し、外部リンクは docs2.vivliostyle.org を第一優先に統一します。結果として「新規読者が2026年時点でそのまま追従できる」ことを最優先に、章構成は維持しつつ本文と手順を差し替える実装計画にします。

**Steps**
1. 改修対象の固定: 章ページ [ja/tutorials/install.html](ja/tutorials/install.html), [ja/tutorials/create-publications.html](ja/tutorials/create-publications.html), [ja/tutorials/customize.html](ja/tutorials/customize.html), [ja/tutorials/configure-page-text.html](ja/tutorials/configure-page-text.html), [ja/tutorials/configure-counters-running-heads.html](ja/tutorials/configure-counters-running-heads.html), [ja/tutorials/configure-basic-elements.html](ja/tutorials/configure-basic-elements.html), [ja/tutorials/create-table-of-contents.html](ja/tutorials/create-table-of-contents.html) と教材 [assets/tutorials/ja](assets/tutorials/ja) を改修スコープとして確定。
2. インストール章更新: [ja/tutorials/install.html](ja/tutorials/install.html#L34-L49) の Node.js要件を最低要件のみへ更新し、旧エディタ導線（Atom等）を現行推奨導線へ整理。
3. Create Book全面置換: [ja/tutorials/create-publications.html](ja/tutorials/create-publications.html#L18-L31) と [ja/tutorials/customize.html](ja/tutorials/customize.html#L22-L31) の導入文・手順を Vivliostyle CLI create前提へ置換し、Create Bookへの依存記述を除去。
4. 手順コマンド再設計: create/preview/build関連の手順をCLI v10系の構成に合わせて更新し、旧コマンドや旧設定説明（CommonJS前提など）を現行説明へ統一。
5. SCSS記述の撤去: [ja/tutorials/customize.html](ja/tutorials/customize.html#L93-L256) のSCSS前提説明を削除し、CSS Custom Propertiesのみで同等の到達点を得る手順へ置換。
6. 章間整合の再調整: ④〜⑦章（本文組版・カウンタ/柱・基本要素・目次）の前提記述をCSSベースへ寄せ、前章との差分説明を最小化して学習導線を維持。
7. リンクと教材修正: [ja/tutorials/create-table-of-contents.html](ja/tutorials/create-table-of-contents.html#L147-L149) の不整合リンクを実体に合わせて修正し、教材内のVFM旧URLを docs2.vivliostyle.org 優先へ更新（例: [assets/tutorials/ja/configure-page-text/manuscripts/honbun.md](assets/tutorials/ja/configure-page-text/manuscripts/honbun.md#L9-L40), [assets/tutorials/ja/create-table-of-contents/manuscripts/honbun.md](assets/tutorials/ja/create-table-of-contents/manuscripts/honbun.md#L9-L40)）。
8. 文体・表記統一: 最低要件表記、CLI名称、リンク形式、注記スタイルを横断統一し、章ごとの表現ゆれを解消。
9. 最終レビュー観点を明文化: 各章で「前提バージョン」「実行手順」「期待出力」「参照リンク」の4点が揃っているかをチェックリスト化して完了判定。

**Verification**
- ローカル表示確認: README準拠でサイト起動し、各チュートリアルページのリンク遷移・コードブロック・画像表示を確認（README記載の jekyll serve 手順）。
- 差分確認: Create Book, SCSS, Node 12 など旧前提語の残存を全文検索で検査。
- 目視確認: [ja/tutorials/index.html](ja/tutorials/index.html) から各章を順に辿り、手順の前提がCLI中心で一貫していることを確認。
- リンク検証: docs2.vivliostyle.org への外部リンクと assets 配下の内部リンク切れがないことを確認。

**Decisions**
- Create Book記述は全面置換（旧手順の併記なし）。
- SCSSは扱わず、CSS Custom Propertiesのみ記述。
- バージョンは最低要件のみ記載。
- 外部ドキュメントリンクは`https://docs.vivliostyle.org/ja/`を第一優先で統一。

```
