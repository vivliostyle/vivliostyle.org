---
layout: page
title: Blog
---


{% assign posts = site.posts | where: "lang", page.lang %}

{% include page/blog.html
  title="Blog posts"
  posts=posts
%}
