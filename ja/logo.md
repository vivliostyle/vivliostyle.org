---
layout: page
title: ロゴ
lang: ja
---


{% capture about_logo %}
## ロゴについて

![](/assets/logo-beforeafter.png)

旧ロゴ (左) は、地球の上空を巨大な本が浮遊するイメージでデザインされました。地球は World Wide Web、本は「V」の形であることから分かるとおり Vivliostyle を象徴しています。デザインは石田智之氏、イラストは大寺聡氏によるものです。

新ロゴ (右) は2020年1月、Yasuaki Uechi 氏によって旧ロゴをリニューアルする形でデザインされました。Vivliostyle 2.0 へのバージョンアップに際し、フラットでビビットな配色へ変更し、大胆にトリミングすることで今までのイメージを刷新しようという意図です。
{% endcapture %}


{% capture use_logo %}
## ロゴの使用について

Vivliostyleを紹介する際などに使えるメディアキットを用意しました。どうか自由にお使いください。なお、ライセンスはMITです。

<ul class="list--medium">
  {% include button/secondary.html text="Vivliostyle メディアキット" url="https://github.com/vivliostyle/vivliostyle.org/files/4387986/Vivliostyle.Press.Kit.zip" %}
</ul>

![](/assets/logo-mediakit.png)
{% endcapture %}


{% include page/logo.html
  title="ロゴデザイン"
  lead="Vivliostyleのロゴと、その歴史についてご説明します。これらはどなたでも自由にお使いいただけます。"

  about_logo=about_logo
  use_logo=use_logo
%}
