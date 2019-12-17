## Vivliostyle.org

This is the source for the [vivliostyle.org](https://vivliostyle.org/) web site.

**Note:** This site was made using a Jekyll theme [Alembic](https://github.com/daviddarnes/alembic/)

### Install on local environment

```
$ git clone https://github.com/vivliostyle/vivliostyle.org.git
$ cd vivliostyle.org
$ bundle install
```

### Test on local server

```
$ bundle exec jekyll serve
```

and open http://127.0.0.1:4000/

### How to write a blog post

For example, the blog post "On Vivliostyle-print" (Date: 2018-10-03)
https://vivliostyle.org/blog/2018/10/03/vivliostyle-print/
and its Japanese version "Vivliostyle-print について"
https://vivliostyle.org/ja/blog/2018/10/03/vivliostyle-print/
are made with the following steps:

#### English blog post

Create the markdown file `2018-10-03-vivliostyle-print.md` in the `_posts` directory.

The markdown file begins with:

```
---
title: On Vivliostyle-print
author: johannes
---
```

The `author` value must be defined in the `_data/people.yml` file. e.g.:

```
johannes:
  en: Johannes Wilm
  ja: ヨハネス・ウィルム
  email: johannes@fiduswriter.org
  role_en: Director, W3C Editing Taskforce Invited Expert
  role_ja: 理事、W3C Editing Taskforce Invited Expert
```

#### Japanese blog post

Create the markdown file `2018-10-03-vivliostyle-print.md` (same file name as the English version) in the `_posts/ja` directory.

The markdown file begins with:

```
---
title: Vivliostyle-print について
lang: ja
author: johannes
---
```

#### Images

To include images in the blog post, put the image files in the directory with same name of the blog post file name in the `/assets/posts/` directory. For example, image files in the blog post `2018-11-12-interview-by-fiduswriter` are placed in the directory `/assets/posts/2018-11-12-interview-by-fiduswriter/`.
