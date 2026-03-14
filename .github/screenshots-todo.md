# スクリーンショット撮影リスト（再作成）

作成日: 2026-03-14
対象: ja/tutorials 現在原稿（チュートリアル②,④,⑤,⑥,⑦）

このリストは、現在のHTML本文と画像参照位置を突き合わせて作成した。

## 判定ルール

- 必須再撮影: 現在参照されているが、ファイルが未作成または内容不一致が確定している
- 再撮影推奨: ファイルは存在するが、本文改訂の影響で整合確認が必要
- 流用可: 直近の本文変更がなく、既存画像を使える可能性が高い

## 1. チュートリアル② PDFの作成（5件）

対象ファイル: ja/tutorials/create-publications.html

1. build-cover.png
- 参照: ja/tutorials/create-publications.html:174
- パス: assets/tutorials/ja/create-publications/build-cover.png
- 本文の対応箇所: 「Mybook.pdf ... 表紙・目次・9つの章からなる技術書」
- 撮影内容: Mybook.pdf の表紙ページ（Vivliostyle出版物テンプレートの表紙）
- 判定: 必須再撮影

2. build-toc.png
- 参照: ja/tutorials/create-publications.html:175
- パス: assets/tutorials/ja/create-publications/build-toc.png
- 本文の対応箇所: 同上（表紙・目次・本文の3枚表示）
- 撮影内容: Mybook.pdf の目次ページ（9章が見える）
- 判定: 必須再撮影

3. build-body.png
- 参照: ja/tutorials/create-publications.html:176
- パス: assets/tutorials/ja/create-publications/build-body.png
- 本文の対応箇所: 同上
- 撮影内容: Mybook.pdf の本文ページ（見出し・コード等が確認できるページ）
- 判定: 必須再撮影

4. preview1.png
- 参照: ja/tutorials/create-publications.html:191
- パス: assets/tutorials/ja/create-publications/preview1.png
- 本文の対応箇所: 「ブラウザが起動し、表紙・目次・全9章のプレビューが表示」
- 撮影内容: npm run preview 起動直後の画面（表紙/目次/本文のいずれか）
- 判定: 必須再撮影

5. preview2.png
- 参照: ja/tutorials/create-publications.html:207
- パス: assets/tutorials/ja/create-publications/preview2.png
- 本文の対応箇所: 「draft/02_introduction.md の冒頭段落に一文追加」
- 撮影内容: 追加文が反映されたプレビュー画面
- 判定: 必須再撮影

## 2. チュートリアル④ 用紙と文字のスタイル（9件）

対象ファイル: ja/tutorials/configure-page-text.html

1. preview-reset1.png
- 参照: ja/tutorials/configure-page-text.html:53
- パス: assets/tutorials/ja/configure-page-text/preview-reset1.png
- 対応本文: スタイル初期化直後のプレビュー
- 判定: 再撮影推奨

2. preview-reset2.png
- 参照: ja/tutorials/configure-page-text.html:54
- パス: assets/tutorials/ja/configure-page-text/preview-reset2.png
- 対応本文: 同上（2枚目）
- 判定: 再撮影推奨

3. preview-reset3.png
- 参照: ja/tutorials/configure-page-text.html:55
- パス: assets/tutorials/ja/configure-page-text/preview-reset3.png
- 対応本文: 同上（3枚目）
- 判定: 再撮影推奨

4. preview-margin.png
- 参照: ja/tutorials/configure-page-text.html:84
- パス: assets/tutorials/ja/configure-page-text/preview-margin.png
- 対応本文: @page margin の説明直後
- 判定: 再撮影推奨

5. preview-inside-margin.png
- 参照: ja/tutorials/configure-page-text.html:98
- パス: assets/tutorials/ja/configure-page-text/preview-inside-margin.png
- 対応本文: :left / :right の内側余白説明直後
- 判定: 再撮影推奨

6. preview-break-before.png
- 参照: ja/tutorials/configure-page-text.html:118
- パス: assets/tutorials/ja/configure-page-text/preview-break-before.png
- 対応本文: break-before による開始ページ制御説明直後
- 判定: 再撮影推奨

7. preview-writing-mode.png
- 参照: ja/tutorials/configure-page-text.html:148
- パス: assets/tutorials/ja/configure-page-text/preview-writing-mode.png
- 対応本文: writing-mode の説明直後
- 判定: 再撮影推奨

8. preview-text-indent.png
- 参照: ja/tutorials/configure-page-text.html:211
- パス: assets/tutorials/ja/configure-page-text/preview-text-indent.png
- 対応本文: text-indent の説明直後
- 判定: 再撮影推奨

9. preview-text-align.png
- 参照: ja/tutorials/configure-page-text.html:224
- パス: assets/tutorials/ja/configure-page-text/preview-text-align.png
- 対応本文: text-align の説明直後
- 判定: 再撮影推奨

## 3. チュートリアル⑤ カウンタと柱のスタイル（6件）

対象ファイル: ja/tutorials/configure-counters-running-heads.html

1. preview-counter1.png
- 参照: ja/tutorials/configure-counters-running-heads.html:51
- パス: assets/tutorials/ja/configure-counters-running-heads/preview-counter1.png
- 対応本文: h1カウンタ設定の説明直後
- 判定: 流用可

2. preview-counter2.png
- 参照: ja/tutorials/configure-counters-running-heads.html:52
- パス: assets/tutorials/ja/configure-counters-running-heads/preview-counter2.png
- 対応本文: 同上（2枚目）
- 判定: 流用可

3. preview-counter3.png
- 参照: ja/tutorials/configure-counters-running-heads.html:53
- パス: assets/tutorials/ja/configure-counters-running-heads/preview-counter3.png
- 対応本文: 同上（3枚目）
- 判定: 流用可

4. page-margin-box.png
- 参照: ja/tutorials/configure-counters-running-heads.html:72
- パス: assets/tutorials/ja/configure-counters-running-heads/page-margin-box.png
- 対応本文: ページマージンボックス16種類の説明直後
- 判定: 流用可

5. preview-page-number.png
- 参照: ja/tutorials/configure-counters-running-heads.html:89
- パス: assets/tutorials/ja/configure-counters-running-heads/preview-page-number.png
- 対応本文: ノンブル設定の説明直後
- 判定: 流用可

6. preview-running-heads.png
- 参照: ja/tutorials/configure-counters-running-heads.html:106
- パス: assets/tutorials/ja/configure-counters-running-heads/preview-running-heads.png
- 対応本文: 柱（running heads）設定の説明直後
- 判定: 流用可

## 4. チュートリアル⑥ 基本的な要素のスタイル（6件）

対象ファイル: ja/tutorials/configure-basic-elements.html

1. preview-headings.png
- 参照: ja/tutorials/configure-basic-elements.html:75
- パス: assets/tutorials/ja/configure-basic-elements/preview-headings.png
- 対応本文: 見出しスタイルの説明直後
- 判定: 流用可

2. preview-code.png
- 参照: ja/tutorials/configure-basic-elements.html:103
- パス: assets/tutorials/ja/configure-basic-elements/preview-code.png
- 対応本文: Prism.js + codeスタイル説明直後
- 判定: 再撮影推奨

3. preview-figure1.png
- 参照: ja/tutorials/configure-basic-elements.html:132
- パス: assets/tutorials/ja/configure-basic-elements/preview-figure1.png
- 対応本文: 図番号スタイル説明直後
- 判定: 流用可

4. preview-figure2.png
- 参照: ja/tutorials/configure-basic-elements.html:133
- パス: assets/tutorials/ja/configure-basic-elements/preview-figure2.png
- 対応本文: 図番号スタイル説明直後（2枚目）
- 判定: 流用可

5. preview-footnote1.png
- 参照: ja/tutorials/configure-basic-elements.html:154
- パス: assets/tutorials/ja/configure-basic-elements/preview-footnote1.png
- 対応本文: 後注スタイル説明直後
- 判定: 流用可

6. preview-footnote2.png
- 参照: ja/tutorials/configure-basic-elements.html:155
- パス: assets/tutorials/ja/configure-basic-elements/preview-footnote2.png
- 対応本文: 後注スタイル説明直後（2枚目）
- 判定: 流用可

## 5. チュートリアル⑦ 目次の作成（2件）

対象ファイル: ja/tutorials/create-table-of-contents.html

1. preview-table-of-contents1.png
- 参照: ja/tutorials/create-table-of-contents.html:44
- パス: assets/tutorials/ja/create-table-of-contents/preview-table-of-contents1.png
- 対応本文: toc.title を指定した自動目次の説明直後
- 判定: 再撮影推奨

2. preview-table-of-contents2.png
- 参照: ja/tutorials/create-table-of-contents.html:144
- パス: assets/tutorials/ja/create-table-of-contents/preview-table-of-contents2.png
- 対応本文: 手動目次(nav role='doc-toc' + CSS)の説明直後
- 判定: 再撮影推奨

## 6. 旧ファイルの扱い（本文未参照）

以下は現在のHTMLから参照されていないため、再撮影対象ではない。

- assets/tutorials/ja/create-publications/build.png
- assets/tutorials/ja/customize/preview3.png
- assets/tutorials/ja/customize/preview4.png
- assets/tutorials/ja/customize/preview5.png
- assets/tutorials/ja/customize/preview6.png

## 7. 実行順（推奨）

1. 必須再撮影（チュートリアル②の5件）を先に撮影
2. 再撮影推奨（④の9件、⑥のpreview-code、⑦の2件）を撮影
3. 流用可（⑤の6件、⑥の5件）は目視確認のみ

## 8. 今回の結論

- 参照画像総数: 28件
- 必須再撮影: 5件
- 再撮影推奨: 12件
- 流用可: 11件

まずはチュートリアル②の5件を撮れば、現在もっとも大きい不整合は解消できる。
