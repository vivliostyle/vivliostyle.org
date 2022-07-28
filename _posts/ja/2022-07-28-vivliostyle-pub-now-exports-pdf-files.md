---
title: Vivliostyle PubでPDFが出力できるようになりました
lang: ja
image: /assets/posts/2022-07-28-vivliostyle-pub-now-exports-pdf -files/fig-1.png
author:
  - ogwata
---

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2022-07-28-vivliostyle-pub-now-exports-pdf -files/fig-1.png" alt="Vivliostyle PubでPDFが出力できるようになりました" style="width: 400px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></div>

4月にアルファ版を公開したVivliostyle Pubは、その後も開発が順調にすすみ、このほどPDFの書き出しができるようになりました。それに伴い、ユーザーガイドも大幅に改訂しました。

- [Vivliostyle Pub α版ユーザーガイド](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/)

今回のアップデートの結果、たとえば現在のVivliostyle Pubは下記のようなことができます。

- [Markdownで書いた原稿が、即座にプレビューできる](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/readme-first/quick-start-guide-and-required-environment#%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%EF%BC%8F%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E7%94%BB%E9%9D%A2)
- [Markdownファイルに、Vivliostyle 公式themeや自分で作成したスタイルシートを適用できる](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/functions-of-the-actions-menu/theme)
- [無償のGoogleフォントや有償Webフォントサービスが使える](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/create-and-save-documents/how-to-specify-fonts#custom-theme%EF%BC%8Fgoogle%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%81%AE%E4%BD%BF%E7%94%A8)
- [複数のMarkdownファイルを1冊の本にまとめられる](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/create-and-save-documents/document-customization.md#%E5%AF%BE%E8%B1%A1%E3%81%A8%E3%81%AA%E3%82%8B%E6%96%87%E6%9B%B8%E3%81%AE%E6%8C%87%E5%AE%9A)
- [GitHubの機能を使って複数ユーザーによる編集ができる](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/multi-user-collaborative-editing/overview)
- [PDFの書き出しができる](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/functions-of-the-actions-menu/export#pdf)

ただし、プレビューとPDF出力を担当する組版エンジンが異なることにより、場合によってプレビューで使われるフォントとPDF出力で使われるフォントが一致せず、これにより互いにページが食い違ってしまうことがあり得ます。

- [フォントを利用するしくみ](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/create-and-save-documents/how-to-specify-fonts#%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B%E3%81%97%E3%81%8F%E3%81%BF)

ユーザーガイドでは、こうしたフォントの不一致を回避する方法も書いてありますので、ぜひご覧ください。

- [Vivliostyle公式Themeで使われるフォント](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/create-and-save-documents/how-to-specify-fonts#vivliostyle%E5%85%AC%E5%BC%8Ftheme%E3%81%A7%E4%BD%BF%E3%82%8F%E3%82%8C%E3%82%8B%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88)
- [ Custom theme／プレビューとPDF出力とでフォントを一致させる](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/create-and-save-documents/how-to-specify-fonts#custom-theme%EF%BC%8F%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%81%A8pdf%E5%87%BA%E5%8A%9B%E3%81%A8%E3%81%A7%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%82%92%E4%B8%80%E8%87%B4%E3%81%95%E3%81%9B%E3%82%8B)

CSS組版のWebアプリ、Vivliostyle Pubは誰でも無料で使えます。ぜひ下記ページから試用してみてください。

- [クイックスタートガイド](https://vivliostyle.github.io/docs-vivliostyle-pub/#/ja/readme-first/quick-start-guide-and-required-environment)
