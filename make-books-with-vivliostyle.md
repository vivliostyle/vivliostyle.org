---
layout: page
title: Make Books with Vivliostyle
---


<script>
  window.location.href = window.location.origin + '/ja/make-books-with-vivliostyle';
</script>

{% capture description %}
TODO: translate

<i class="mdi mdi-alpha-a-circle toc__type"></i>……TODO: translate、
<i class="mdi mdi-alpha-b-circle toc__type"></i>……TODO: translate、
<i class="mdi mdi-alpha-c-circle toc__type"></i>……TODO: translate、
<i class="mdi mdi-alpha-d-circle toc__type"></i>……TODO: translate、
<i class="mdi mdi-alpha-e-circle toc__type"></i>……TODO: translate
{% endcapture %}


{% capture vol3_description %}
## TODO: translate

TODO: translate
{% endcapture %}


{% capture vol2_description %}
## TODO: translate

TODO: translate
{% endcapture %}


{% capture vol1_description %}
## TODO: translate

TODO: translate
{% endcapture %}


{% include assign/hash.html
  description=vol3_description
  thumbnail=site.data.book.vol3.img
  toc=site.data.book.vol3.toc
  web_url=site.data.book.vol3.url.web
  viewer_url=site.data.book.vol3.url.viewer
  print_url=site.data.book.vol3.url.print
  source_url=site.data.book.vol3.url.source
%}{% assign vol3 = hash %}


{% include assign/hash.html
  description=vol2_description
  thumbnail=site.data.book.vol2.img
  toc=site.data.book.vol2.toc
  web_url=site.data.book.vol2.url.web
  viewer_url=site.data.book.vol2.url.viewer
  print_url=site.data.book.vol2.url.print
  source_url=site.data.book.vol2.url.source
%}{% assign vol2 = hash %}


{% include assign/hash.html
  description=vol1_description
  thumbnail=site.data.book.vol1.img
  toc=site.data.book.vol1.toc
  web_url=site.data.book.vol1.url.web
  viewer_url=site.data.book.vol1.url.viewer
  print_url=site.data.book.vol1.url.print
  source_url=site.data.book.vol1.url.source
%}{% assign vol1 = hash %}


{% include assign/array.html
  vol3=vol3
  vol2=vol2
  vol1=vol1
%}{% assign books = array %}


{% include page/make_books_with_vivliostyle.html
  title="TODO: translate"

  description=description
  books=books

  web_buttontext="TODO: translate"
  viewer_buttontext="TODO: translate"
  print_buttontext="TODO: translate"
  source_buttontext="TODO: translate"
%}
