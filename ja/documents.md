---
layout: page
title: ドキュメント
lang: ja
---


{% capture guide %}
## 📖 ユーザーガイド
{% include fetch-guide-urls.html %}

### Vivliostyle Viewer
<ul id="vivliostyle-viewer-list"></ul>
{% include fetch-guide-url.html
  id="vivliostyle-viewer-list"
  url="https://docs.vivliostyle.org/#/ja/vivliostyle-viewer"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/ja/vivliostyle-viewer.md"
%}

### Vivliostyle CLI
<ul id="vivliostyle-cli-list"></ul>
{% include fetch-guide-url.html
  id="vivliostyle-cli-list"
  url="https://docs.vivliostyle.org/#/ja/vivliostyle-cli"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/ja/vivliostyle-cli.md"
%}

### Create Book
<ul id="create-book-list"></ul>
{% include fetch-guide-url.html
  id="create-book-list"
  url="https://docs.vivliostyle.org/#/ja/create-book"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/ja/create-book.md"
%}

## 🛠 コントリビューションガイド

### Vivliostyle.js
<ul id="contribution-guide-list"></ul>
{% include fetch-guide-url.html
  id="contribution-guide-list"
  url="https://docs.vivliostyle.org/#/ja/contribution-guide"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/ja/contribution-guide.md"
%}

### Vivliostyle CLI
- [CONTRIBUTING.md](https://github.com/vivliostyle/vivliostyle-cli/blob/main/CONTRIBUTING.md)

### Vivliostyle Themes
- [CONTRIBUTING.md](https://github.com/vivliostyle/themes/blob/master/CONTRIBUTING.md)

### VFM
- [CONTRIBUTING.md](https://github.com/vivliostyle/vfm/blob/master/CONTRIBUTING.md)
{% endcapture %}


{% capture reference %}
## 📚 リファレンス

- [サポートする CSS 機能](https://docs.vivliostyle.org/#/ja/supported-css-features)
- [Core API リファレンス](https://docs.vivliostyle.org/#/ja/api)
{% endcapture %}


{% capture plan %}
## 今後の開発予定

プロジェクトごとに、注目の issue をまとめました。あなたもコントリビュートしてみませんか？

- Vivliostyle.js
  - [開発優先度の高い issue](https://github.com/vivliostyle/vivliostyle.js/issues?q=is%3Aissue+is%3Aopen+label%3AP1)
  - [はじめてコントリビュートする人にもおすすめの issue](https://github.com/vivliostyle/vivliostyle.js/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- Vivliostyle CLI
  - [はじめてコントリビュートする人にもおすすめの issue](https://github.com/vivliostyle/vivliostyle-cli/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- VFM
  - [vfm v1.0.0 をリリースするための issue](https://github.com/vivliostyle/vfm/milestone/2)
- Create Book
  - [create-book v1.0.0 をリリースするための issue](https://github.com/vivliostyle/create-book/milestone/1)
- Themes
  - [はじめてコントリビュートする人にもおすすめの issue](https://github.com/vivliostyle/themes/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
{% endcapture %}


{% capture community %}
<ol class="list--medium">
  {% include button/slack.html text="Slackに参加" %}
</ol>

Vivliostyle プロジェクトでは、開発方針などをSlack上で話し合っています。
{% endcapture %}


{% include page/documents.html
  title="ドキュメント"
  lead="開発者が困ったとき、迷ったとき頼りになる、さまざまな文書をまとめました。「今後の開発予定」では GitHub の当該 Issue にジャンプします。"

  guide=guide
  reference=reference
  plan=plan
  community=community
%}
