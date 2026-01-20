---
layout: page
title: ドキュメント
lang: ja
---


{% capture guide %}
## 📖 ユーザーガイド
{% include fetch-guide-urls.html %}

### [Vivliostyle Viewer](https://docs.vivliostyle.org/ja/viewer)
<ul id="vivliostyle-viewer-list"></ul>
{% include fetch-guide-url.html
  id="vivliostyle-viewer-list"
  url="https://docs.vivliostyle.org/ja/viewer"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/ja/vivliostyle-viewer.md"
%}

### [Vivliostyle CLI](https://docs.vivliostyle.org/ja/cli/)
<ul>
  <li>
    <a href="https://docs.vivliostyle.org/ja/cli/getting-started/">はじめに</a>
    <ul id="vivliostyle-cli-getting-started-list"></ul>
  </li>
  <li>
    <a href="https://docs.vivliostyle.org/ja/cli/themes-and-css/">テーマと CSS</a>
    <ul id="vivliostyle-cli-themes-and-css-list"></ul>
  </li>
  <li>
    <a href="https://docs.vivliostyle.org/ja/cli/using-config-file/">構成ファイル</a>
    <ul id="vivliostyle-cli-using-config-file-list"></ul>
  </li>
  <li>
    <a href="https://docs.vivliostyle.org/ja/cli/toc-page/">目次の作成</a>
    <ul id="vivliostyle-cli-toc-page-list"></ul>
  </li>
  <li>
    <a href="https://docs.vivliostyle.org/ja/cli/cover-page/">表紙ページの作成</a>
    <ul id="vivliostyle-cli-cover-page-list"></ul>
  </li>
  <li>
    <a href="https://docs.vivliostyle.org/ja/cli/special-output-settings/">特別な出力設定</a>
    <ul id="vivliostyle-cli-special-output-settings-list"></ul>
  </li>
</ul>
{% include fetch-guide-url.html
  id="vivliostyle-cli-getting-started-list"
  url="https://docs.vivliostyle.org/ja/cli/getting-started/"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/ja/getting-started.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-themes-and-css-list"
  url="https://docs.vivliostyle.org/ja/cli/themes-and-css/"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/ja/themes-and-css.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-using-config-file-list"
  url="https://docs.vivliostyle.org/ja/cli/using-config-file/"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/ja/using-config-file.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-toc-page-list"
  url="https://docs.vivliostyle.org/ja/cli/toc-page/"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/ja/toc-page.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-cover-page-list"
  url="https://docs.vivliostyle.org/ja/cli/cover-page/"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/ja/cover-page.md"
%}
{% include fetch-guide-url.html
  id="vivliostyle-cli-special-output-settings-list"
  url="https://docs.vivliostyle.org/ja/cli/special-output-settings/"
  get_url="https://api.github.com/repos/vivliostyle/vivliostyle-cli/contents/docs/ja/special-output-settings.md"
%}

### [Create Book](https://docs.vivliostyle.org/ja/create-book/)
<ul id="create-book-list"></ul>
{% include fetch-guide-url.html
  id="create-book-list"
  url="https://docs.vivliostyle.org/ja/create-book/"
  get_url="https://api.github.com/repos/vivliostyle/docs.vivliostyle.org/contents/ja/create-book.md"
%}

### [Vivliostyle Themes](https://docs.vivliostyle.org/ja/themes/)
<ul>
  <li><a href="https://docs.vivliostyle.org/ja/themes/spec/">仕様</a></li>
  <li><strong>運用ガイドライン</strong>
    <ul>
      <li><a href="https://docs.vivliostyle.org/ja/themes/official/">公式 Theme の採用</a></li>
      <li><a href="https://docs.vivliostyle.org/ja/themes/gallery/">Vivliostyle Themes ギャラリー</a></li>
    </ul>
  </li>
</ul>

### [Vivliostyle Flavored Markdown (VFM)](https://vivliostyle.github.io/vfm/#/ja/vfm)
<ul id="vfm-list"></ul>
{% include fetch-guide-url.html
  id="vfm-list"
  url="https://vivliostyle.github.io/vfm/#/ja/vfm"
  get_url="https://api.github.com/repos/vivliostyle/vfm/contents/docs/ja/vfm.md"
%}
{% endcapture %}


{% capture contribution %}
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
- Vivliostyle CLI API リファレンス
  - [Config Reference](https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/config.md)
  - [JavaScript API](https://github.com/vivliostyle/vivliostyle-cli/blob/main/docs/api-javascript.md)
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
  - [vfm v2.0.0 をリリースするための issue](https://github.com/vivliostyle/vfm/milestone/1)
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
  contribution=contribution
  plan=plan
  community=community
%}
