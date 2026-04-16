---
title: 本文
body:
  class: 'foo bar'
vfm:
  hardLineBreaks: false
---

この原稿は [VFM (Vivliostyle Flavored Markdown)](https://docs.vivliostyle.org/ja/vfm/) で書かれています。詳細はドキュメントを確認してください。

# ソースコード {#code}

```javascript
function main() {}
```

## キャプション付き {#code-with-caption}

```javascript:app.js
function main() {}
```

or

```javascript title=app.js
function main() {}
```

# 後注 {#footnotes}

VFM は GitHub リポジトリ[^1]で開発されています。
issue は GitHub[^issues]で管理されています。
後注はインラインで記述することもできます^[これは後注です。]。

[^1]: [VFM](https://github.com/vivliostyle/vfm)
[^issues]: [Issues](https://github.com/vivliostyle/vfm/issues)

# Frontmatter {#frontmatter}

Markdown ファイルの冒頭で、メタデータを設定することができます。詳細は [Frontmatter part in VFM document](https://docs.vivliostyle.org/ja/vfm/) を確認してください。

# 改行 {#newline}

デフォルトでは、空行を1行はさむことで改行が行われます。Frontmatter で `hardLineBreaks` を `true` にすると、空行なしで改行が行われます。

はじめまして。

Vivliostyle Flavored Markdown（略して VFM）の世界へようこそ。
VFM は出版物の執筆に適した Markdown 方言であり、Vivliostyle プロジェクトのために策定・実装されました。

# 画像 {#figure}

![](https://vivliostyle.org/assets/vivliostyle-logo.svg)

## キャプション {#figure-with-caption}

![Vivliostyle Logo](https://vivliostyle.org/assets/vivliostyle-logo.svg)

![Vivliostyle Logo](https://vivliostyle.org/assets/vivliostyle-logo.svg '公式サイトで配布されています'){id="image" data-sample="sample"}

# 数式 {#math}

インライン： $x = y$

ディスプレイ： $$1 + 1 = 2$$

# HTML {#html}

<div class="custom">
  <p>Hey</p>
</div>

## Markdown と HTML の併用 {#html-with-markdown}

<div class="custom">

- hoge
- fuga

</div>

# ルビ {#ruby}

This is {Ruby|ルビ}
