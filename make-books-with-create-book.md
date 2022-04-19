---
layout: page
title: Let's self-publish with Create Book!

toc: true
---


{% capture lead %}
[Create Book](https://github.com/vivliostyle/create-book) makes it possible for you to convert your manuscript written in markdown format to a PDF file with CSS typesetting. No HTML or CSS expertise is required. You can include ruby, images, tables, and footnotes, and you can even bundle multiple manuscripts together. See our [tutorial guide](https://docs.vivliostyle.org/#/create-book) for more information. This article is **a quick guide to what you can do with Create Book**. Now you can make your own book with Create Book!
{% endcapture %}


{% capture content %}
## To use Create Book

1. Install [Node.js (v.12 or higher)<i class="fas fa-external-link-alt"></i>](https://nodejs.org/en/) first.
2. Create Book installation commands are as follows. The `<directory>` is the project folder name of the book to be made.

    ```
    npm create book <directory>
    ```

3. When you install it, specify one of the following theme packages, depending on the purpose of the book you want to create:
    - `@vivliostyle/theme-techbook`......Technical books.
    - `@vivliostyle/theme-academic`......Academic articles.
    - `@vivliostyle/theme-bunko`......Japanese novel style (vertical text).
    - `@vivliostyle/theme-slide`......Slide documents.
4. When you install the software, a folder like the one shown below (in this case, `mybook`) is made. You can proceed to create a book by editing files ❶ to ❸ .


{% include figure.html
  src="/assets/misc/make_books_with_create_book/mybook.png"
  caption="fig-1 The contents of the `mybook` folder made by the installation. Note that gray files/folders are invisible."
%}


## Let's write a manuscript with VFM

By editing the `manuscript.md` (Figure 1①) in the folder made by the installation as a template, you can create a manuscript for book production. This file is in markdown format. It is a format that can be easily converted from plain text to HTML by writing in a certain notation (rule).

Originally, markdown is a format designed for writing blog posts. As you can see from this, its two main attractions are that it can be written as a manuscript and that it can be converted to HTML. There are a minority of people who write manuscripts in HTML from the beginning. But if it's in markdown format, you can do it. Markdown is a format that attempts to combine the ease of writing plain text with the convenience of HTML.

There are various dialects of markdown, the most powerful of which is [GFM (GitHub Flavored Markdown)<i class="fas fa-external-link-alt"></i>](https://github.github.com/gfm/).  However, this notation is designed for technical documentation, so [VFM (Vivliostyle Flavored Markdown)](https://github.com/vivliostyle/vfm) is an additional notation for Japanese books.

In other words, VFM is upward compatible with GFM. The headings and other commonly used notations remain the same as in GFM, so those who are familiar with it should be able to start using it with little difficulty.  In this section, "What can I write using VFM?" We will answer the question.

### GFM notation

Here are the main basic GFM notations. There are many more notations to choose from. For more information, see the tutorial guide or [the GitHub documentation page<i class="fas fa-external-link-alt"></i>](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax).

#### Heading

##### Written by VFM

```
# Heading text(1段階の見出し)
## Heading text(2段階の見出し)
### Heading text(3段階の見出し)
#### Heading text(4段階の見出し)
#### Heading text(4段階の見出し)
### Heading text(3段階の見出し)
### Heading text(3段階の見出し)
## Heading text(2段階の見出し)
# Heading text(1段階の見出し)
```

##### Convert to HTML

{% highlight html %}
<section id="heading-text1段階の見出し">
  <h1>Heading text(1段階の見出し)</h1>
  <section id="heading-text2段階の見出し">
    <h2>Heading text(2段階の見出し)</h2>
    <section id="heading-text3段階の見出し">
      <h3>Heading text(3段階の見出し)</h3>
      <section id="heading-text4段階の見出し">
        <h4>Heading text(4段階の見出し)</h4>
      </section>
      <section id="heading-text4段階の見出し-1">
        <h4>Heading text(4段階の見出し)</h4>
      </section>
    </section>
    <section id="heading-text3段階の見出し-1">
      <h3>Heading text(3段階の見出し)</h3>
    </section>
    <section id="heading-text3段階の見出し-2">
      <h3>Heading text(3段階の見出し)</h3>
    </section>
  </section>
  <section id="heading-text2段階の見出し-1">
    <h2>Heading text(2段階の見出し)</h2>
  </section>
</section>
<section id="heading-text1段階の見出し-1">
  <h1>Heading text(1段階の見出し)</h1>
</section>
{% endhighlight %}

##### Output PDF File

![](/assets/misc/make_books_with_create_book/sample_headings.png)


#### Unordered list

##### Written by VFM

```
- 親リスト1
    - 子リスト1-1
        - 子リスト1-1-1
        - 子リスト1-1-2
    - 子リスト1-2
- 親リスト2
- 親リスト3
```

##### Convert to HTML

{% highlight html %}
<ul>
  <li>親リスト1
    <ul>
      <li>子リスト1-1
        <ul>
          <li>子リスト1-1-1</li>
          <li>子リスト1-1-2</li>
        </ul>
      </li>
      <li>子リスト1-2</li>
    </ul>
  </li>
  <li>親リスト2</li>
  <li>親リスト3</li>
</ul>
{% endhighlight %}

##### Output PDF File

![](/assets/misc/make_books_with_create_book/sample_list1.png)


#### Ordered list

##### Written by VFM

```
1. 親リスト1
    1. 子リスト1-1
        1. 子リスト1-1-1
        2. 子リスト1-1-2
    2. 子リスト1-2
2. 親リスト2
3. 親リスト3
```

##### Convert to HTML

{% highlight html %}
<ol>
  <li>親リスト1
    <ol>
      <li>子リスト1-1
        <ol>
          <li>子リスト1-1-1</li>
          <li>子リスト1-1-2</li>
        </ol>
      </li>
      <li>子リスト1-2</li>
    </ol>
  </li>
  <li>親リスト2</li>
  <li>親リスト3</li>
</ol>
{% endhighlight %}


##### Output PDF File

![](/assets/misc/make_books_with_create_book/sample_list2.png)


#### Link

##### Notation

`[text](url)`

##### Written by VFM

```
[Vivliostyle](https://vivliostyle.org)
```

##### Convert to HTML

{% highlight html %}
<a href="https://vivliostyle.org">Vivliostyle</a>
{% endhighlight %}

##### Output PDF File

{% include figure.html
  src="/assets/misc/make_books_with_create_book/sample_anchor.png"
  caption="We cannot recognize the link from this screenshot, but there is a clickable link."
%}


#### Strong

##### Notation

`**text**`

##### Written by VFM

```
**なんて太い強調だ**
```

##### Convert to HTML

{% highlight html %}
<strong>なんて太い強調だ</strong>
{% endhighlight %}

##### Output PDF File

![](/assets/misc/make_books_with_create_book/sample_strong.png)


### Notation to extend GFM

Here is an extended notation for VFM that cannot be expressed in GFM. All of these expressions are essential for Japanese books, even if not required for technical documentation.

#### Ruby

##### Notation

`{漢字|ルビ}`

##### Written by VFM

```
{振|ふ}り{仮名|がな}が使えます。
```

##### Convert to HTML

{% highlight html %}
<ruby>振
  <rt>ふ</rt>
</ruby>
り
<ruby>仮名
  <rt>がな</rt>
</ruby>
が使えます。
{% endhighlight %}

##### Output PDF File

![](/assets/misc/make_books_with_create_book/sample_ruby.png)


#### Image size and caption

##### Notation

`![text](./image.png){width=nnn}`

Image files can be specified as relative paths in parentheses, where “nnn” is a number, unit is px, but this is omitted. You can use height as well as width.

##### Written by VFM

```
![VFMならキャプションも書けます。画像のサイズは幅1500pxです。](./fig-1.jpeg){width=1500}
```

##### Convert to HTML

{% highlight html %}
<figure>
  <img src="./fig-1.jpeg" alt="VFMならキャプションも書けます。画像のサイズは幅1500pxです。" width="1500">
  <figcaption>VFMならキャプションも書けます。画像のサイズは幅1500pxです。</figcaption>
</figure>
{% endhighlight %}

##### Output PDF File


![](/assets/misc/make_books_with_create_book/sample_img.jpg)


#### Endnotes

##### Notation

```
text[^n]text^[text]

[^n]: text
```

##### Written by VFM

```
朝、食堂でスウプを一さじ[^1]、すっと吸ってお母さまが、「あ」と幽かな叫び声^[本文の中に書いた注記を後注にすることもできます]をお挙げになった。

[^1]:このように後注が使えます。
```

##### Convert to HTML

{% highlight html %}
<section>
  <p>朝、食堂でスウプを一さじ
    <sup id="fnref-1">
      <a href="#fn-1" class="footnote-ref">1</a>
    </sup>
    、すっと吸ってお母さまが、「あ」と幽かな叫び声
    <sup id="fnref-2">
      <a href="#fn-2" class="footnote-ref">2</a>
    </sup>
    をお挙げになった。
  </p>
</section>
<div class="footnotes">
  <hr>
  <ol>
    <li id="fn-1">このように後注が使えます。
      <a href="#fnref-1" class="footnote-backref">↩</a>
    </li>
    <li id="fn-2">本文の中に書いた注記を後注にすることもできます
      <a href="#fnref-2" class="footnote-backref">↩</a>
    </li>
  </ol>
</div>
{% endhighlight %}


##### Output PDF File

{% include figure.html
  src="/assets/misc/make_books_with_create_book/sample_endnote.png"
  caption='Source: ["Shayo"<i class="fas fa-external-link-alt"></i>](https://www.aozora.gr.jp/cards/000035/files/1565_8559.html), DAZAI Osamu, 1947'
%}


#### Footnotes

If you selected the theme package `@vivliostyle/theme-techbook` during installation, you can use footnotes in the following notation.

##### Notation

```
<span class="footnote">footnote text</span>
```

##### Written by VFM

```
「さよなら。」って、その子は花<span class="footnote">この部分が脚注になります。</span>に言った。
　でも花はなにも返さなかった。
「さよなら。」って、もういちど言った。
　花はえへんとやったけど、病気のせいではなかった。
「あたし、バカね。」と、なんとか花がいった。「ゆるしてね。お幸せに。」
　つっかかってこなかったので、その子はびっくりした。ガラスの覆いを持ったまま、おろおろと、その場に立ちつくした。どうして穏やかでやさしいのか、分からなかった。
「ううん、好きなの。」と花は言った。「きみがそのこと分かんないのは、あたしのせい。どうでもいいか。でも、きみもあたしと同じで、バカ<span class="footnote">これが2番目の脚注です</span>。お幸せに。……覆いはそのままにしといて。もう、それだけでいい。
```

##### Convert to HTML

{% highlight html %}
「さよなら。」って、その子は花
<span class="footnote">この部分が脚注になります。</span>に言った。
<br>でも花はなにも返さなかった。
<br>「さよなら。」って、もういちど言った。
<br>花はえへんとやったけど、病気のせいではなかった。
<br>「あたし、バカね。」と、なんとか花がいった。「ゆるしてね。お幸せに。」
<br>つっかかってこなかったので、その子はびっくりした。ガラスの覆いを持ったまま、おろおろと、その場に立ちつくした。どうして穏やかでやさしいのか、分からなかった。
<br>「ううん、好きなの。」と花は言った。「きみがそのこと分かんないのは、あたしのせい。どうでもいいか。でも、きみもあたしと同じで、バカ
<span class="footnote">これが2番目の脚注です</span>。お幸せに。……覆いはそのままにしといて。もう、それだけでいい。」
{% endhighlight %}

##### Output PDF File


{% include figure.html
  src="/assets/misc/make_books_with_create_book/sample_footnote.png"
  caption='Source: [“Le Petit Prince”<i class="fas fa-external-link-alt"></i>](https://www.aozora.gr.jp/cards/001265/files/46817_24670.html) by Antoine de Saint-Exupery, translated by OKUBO Yu, 1943 (some kana are changed to kanji) / [CC BY 2.1 JP<i class="fas fa-external-link-alt"></i>](https://creativecommons.org/licenses/by/2.1/jp/)'
%}


You can also use citations, code, tables, and many other expressions. Please refer to the tutorial guide and [GitHub's documentation page<i class="fas fa-external-link-alt"></i>](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax) for more information.


#### Tate-chu-yoko (Horizontal-in-Vertical)

When installing the Creat Book, select the theme package `@vivliostyle/theme-bunko`, and it will be vertical writing. In this case, you can specify Tate-chu-yoko using HTML as follows.

##### Notation

```
text<span class="tcy">nn</span>text
```

##### Written by VFM

```
ええと<span class="tcy">4</span>×<span class="tcy">5</span>＝<span class="tcy">12</span>、<span class="tcy">4</span>×<span class="tcy">6</span>＝<span class="tcy">13</span>、<span class="tcy">4</span>×<span class="tcy">7</span>——ああ、もう！　そんな調子じゃいつまでも<span class="tcy">20</span>にならなくてよ！
```

##### Convert to HTML

{% highlight html %}
<p>ええと
  <span class="tcy">4</span>×
  <span class="tcy">5</span>＝
  <span class="tcy">12</span>、
  <span class="tcy">4</span>×
  <span class="tcy">6</span>＝
  <span class="tcy">13</span>、
  <span class="tcy">4</span>×
  <span class="tcy">7</span>——ああ、もう！　そんな調子じゃいつまでも
  <span class="tcy">20</span>にならなくてよ！
</p>
{% endhighlight %}

##### Output PDF File

{% include figure.html
  src="/assets/misc/make_books_with_create_book/sample_tcy.png"
  caption='Source: [“Alice in Wonderland”<i class="fas fa-external-link-alt"></i>](https://www.aozora.gr.jp/cards/001393/files/57320_57183.html) by Lewis Carroll, translated by OKUBO Yu, 1865/[CC BY 2.1 JP<i class="fas fa-external-link-alt"></i>](https://creativecommons.org/licenses/by/2.1/jp/)'
%}



## Output PDF files with Create Book


### The book Customization

Once your manuscript is complete, you can make your book. Create Book will automatically output a PDF file after CSS typesetting in the following steps.

1. Convert markdown files to HTML.
2. Vivliostyle CLI will typeset it according to the settings in `vivliostyle.config.js` (Fig-1❷).
3. Then, according to the settings of `package.json` (fig-1❸ ), output to a PDF file.

A general purpose of the book has been determined by selecting the theme package at the time of installation, but can be further refined by editing the `Vivliostyle.config.js` and the `package.json` files. You can also bundle multiple manuscripts into one book and add a table of contents and a colophon here.

#### Editing vivliostyle.config.js (fig-1❷)


![](/assets/misc/make_books_with_create_book/config.png)


- 🅐[Specify a title of book](https://docs.vivliostyle.org/#/create-book#specify-a-title-of-a-book)
- 🅑[Specify a author name and e-mail address](https://docs.vivliostyle.org/#/create-book#specify-a-author-name-and-e-mail-address)
- 🅒[Specify a language to use](https://docs.vivliostyle.org/#/create-book#specify-a-language-to-use)
- 🅓[Specifying a format](https://docs.vivliostyle.org/#/create-book#specifying-a-format)
- 🅔[Specify a theme package](https://docs.vivliostyle.org/#/create-book#specify-a-theme-package)
- 🅕[Add a table of contents](https://docs.vivliostyle.org/#/create-book#add-a-table-of-contents)
- 🅖[Publication of multiple manuscripts](https://docs.vivliostyle.org/#/create-book#publication-of-multiple-manuscripts)
- 🅗[Add a colophon](https://docs.vivliostyle.org/#/create-book#add-a-colophon)

#### Editing package.json(fig-1❸)


![](/assets/misc/make_books_with_create_book/package_json.png)

- 🅘[Generation of PDF files for four-color printing](https://docs.vivliostyle.org/#/create-book#generation-of-pdf-files-for-four-color-printing)

### Output to PDF file

The following command will cause  Vivliostyle CLI to read the above configuration files and automatically output a PDF file. That completes it!

```
npm run build
```

For more information, please see below.


- [Generation of a book](https://docs.vivliostyle.org/#/create-book#generation-of-a-book)

-----------------------------------------------------------------

That's a run-on introduction to Create Book. The information on this page is only part of the story, please read [the tutorial guide](https://docs.vivliostyle.org/#/create-book) for more information. Finally, Create Book is still in development. Is this a bug? I want these features! If you feel like that, please let us know below!


- [Community [Vivliostyle]](/community/)
{% endcapture %}


{% include page/make_books_with_create_book.html
  title="Let's self-publish with Create Book!"
  lead=lead

  content=content
%}
