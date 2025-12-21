---
title: Vivliostyle CLI v10.1.0 リリース！ createコマンド統合で本作りがよりスムーズに
date: 2025-12-21
lang: ja
image: /assets/posts/2025-12-21-vivliostyle-cli-v10.1.0-released-integrated-create-command/vivliostyle-cli_v10.png
author: ogwata
tags:
  - リリース
---

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2025-12-21-vivliostyle-cli-v10.1.0-released-integrated-create-command/vivliostyle-cli_v10.png" alt="NLnet" style="width: 500px;" /></div>



CSS組版のエコシステムを支えるコマンドラインツール、**Vivliostyle CLI**。
その最新メジャーバージョンとなる**v10**が正式にリリースされました！

今回のアップデートは、これまで周辺ツールとして提供されていた[create-book](https://github.com/vivliostyle/create-book)を本体に統合し、ユーザー体験をよりシームレスにすること、そしてプロ仕様の細かな制御を可能にすることに主眼が置かれています。

本記事では、v10で導入された主要な変更点と、それがユーザーの皆様の「本作り」をどう変えるのか、その詳細をご紹介します。

---

## 1. `create-book`がCLI本体に統合。`create`コマンドで即座にプロジェクトを開始

これまで、Vivliostyleで新しい本（プロジェクト）を作り始める際、プロジェクトの雛形作成ツールである`create-book`を別途利用されていた方も多いかと思います。

v10では、この**`create-book`の機能がVivliostyle CLI本体に完全に統合されました。**

これにより、外部ツールを意識することなく、Vivliostyle CLIの標準機能として、対話形式でのプロジェクト作成が行えるようになりました。

### 迷わずスタートできる対話型インターフェース

使い方はこれまで以上にシンプルです。ターミナルで以下のコマンドを入力するだけで、おなじみのセットアップウィザードが起動します。

```bash
# まずVivliostyle CLIをインストール（管理者権限が必要な場合があります）
npm install -g @vivliostyle/cli

# その後、createコマンドを実行
vivliostyle create

# 以下でも同様にcreateコマンドが実行可能
npm create book@latest
```

コマンドを実行すると、英語による対話形式でいくつかの質問が表示されます。それらに答えていけば、必要なファイル一式が揃ったディレクトリが自動生成されます。

これまで独立していた機能が`vivliostyle create`として一本化されたことで、インストールからプロジェクト作成までの動線が整理され、これからVivliostyleを使い始める方にとっても、より分かりやすく、迷いのない体験を提供できるようになりました。


## 2. PDF出力エンジンの選択肢が大幅に進化

Vivliostyle CLIの核心機能である「PDF出力」。
これはバックグラウンドでブラウザ（Headless Browser）を動かし、レンダリング結果を印刷することで実現していますが、今回のアップデートでこのブラウザ制御機能が刷新されました。

### ブラウザの種類だけでなく「バージョン」まで指定可能に

今回のアップデートにより、新たに使用するブラウザとしてChrome / Chromium / Firefoxを切り替えることが可能になりました。しかし、それだけではありません、**ブラウザの「バージョン」まで指定できる**ようになりました。

これは、業務でドキュメント生成を自動化しているユーザーにとって非常に重要な機能です。

ブラウザの組版エンジンンは日々進化していますが、稀に「最新版のブラウザだと、今まで通りのレイアウトが崩れてしまう」というケースが発生します。今回のアップデートにより、設定ファイル（`vivliostyle.config.js`）やコマンドオプションで厳密にバージョンを指定できるようになりました。

```javascript
// vivliostyle.config.js の例
module.exports = {
  // ...
  browser: 'chrome@114.0.5735.90', // 特定のバージョンを固定
  // ...
};
```

これにより、「いつの間にかブラウザがアップデートされて、出力されるPDFの見た目が変わってしまった」という事故を防ぎ、長期間にわたって安定した出版フローを維持することが可能になります。

もちろん、ChromeだけでなくFirefoxやEdgeなど、Playwrightがサポートするブラウザ群への対応も強化されています。レンダリング結果の違いを比較したい場合や、特定のブラウザ固有のCSS機能を使いたい場合にも、より柔軟に対応できるようになりました。


## 3. 安定版v10.1.0への道のりとその他の改善

v10.0のリリース後、開発チームはユーザーからのフィードバックを元に細かなバグ修正と機能改善を行ってきました。そして今回リリースされた**v10.1.0**は、それらの修正を含んだ「安定版（Stable）」となります。

特に、組版の品質と開発環境に関わる以下の重要なアップデートが含まれています。

* **全OSで自動ハイフネーションが利用可能に**
これまでOS環境によっては効かなかった`hyphens: auto`（CSSによる自動ハイフネーション）が、Windows、Mac、Linuxすべての環境で正しく機能するようになりました。これにより、欧文混じりのテキストにおいて、より美しい改行位置が自動的に計算されます。
* **ドロップキャップを実現する`initial-letter`のサポート**
中核となる組版エンジンン`Vivliostyle.js`がv2.38.0に更新され、CSSの`initial-letter`プロパティがサポートされました。これにより、段落の先頭文字を大きくして複数行にまたがらせる「ドロップキャップ」表現が可能になり、雑誌や書籍のようなリッチなデザインが実現できます。
* **Node.jsサポートバージョンの更新**
サポートされるNode.jsのバージョンが20または22以上に変更されました。最新のJavaScriptランタイム環境に合わせて最適化が行われています。

これらの変更は、GitHub上の多くのIssueやPull Requestでの議論を経て実装されました。開発にご協力いただいたコミュニティの皆様、Issue報告をいただいた皆様に、この場を借りて深く感謝申し上げます。


## さあ、新しいVivliostyle CLIを体験しましょう

機能統合によりさらに使いやすくなった`create`コマンド、そしてプロフェッショナルな要求に応える堅牢なブラウザ制御機能。
進化したVivliostyle CLIを、ぜひあなたの本作りにお役立てください。

### アップデート方法

npmを使用している場合、以下のコマンドで最新版にアップデートできます。

```bash
npm install -g @vivliostyle/cli
```

（プロジェクトローカルにインストールしている場合は、各プロジェクトの`package.json`を更新してください）

### 関連リンク

詳細な変更点や技術的な背景については、以下のリンクもご参照ください。

* **リリースノート:** [GitHub Releases](https://github.com/vivliostyle/vivliostyle-cli/releases)
* **README:** [vivliostyle-cli/README.md](https://github.com/vivliostyle/vivliostyle-cli/blob/main/README.md)
* **変更履歴:** [vivliostyle-cli/CHANGELOG.md](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CHANGELOG.md)

Vivliostyleは、「書く」と「出版する」の距離を近づけるために、これからも進化を続けていきます。
v10.1.0を使って、あなたがどんな素晴らしい本を作り出すのか、私たちは楽しみにしています。

Happy Typesetting!