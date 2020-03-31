---
layout: page
title: ブログ一覧
lang: ja
---


{% assign posts = site.posts | where: "lang", page.lang %}

{% include page/blog.html
  title="ブログ一覧"
  posts=posts
%}
