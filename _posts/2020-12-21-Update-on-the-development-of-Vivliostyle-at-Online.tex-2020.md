---
title: Update on the development of Vivliostyle at Online.tex 2020
lang: en
image: /assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-1.png
author:
  - ogwata
tags:
  - event
---

### Introduction

I'm sorry for the delay in reporting, but on November 21, I reported on the development of Vivliostyle Pub at the [Online.tex 2020<i class="mdi mdi-open-in-new"></i>](https://connpass.com/event/188075/) conference. This was the first time we actually demonstrated Vivliostyle Pub in a public forum.

- [あしたのVivliostyle<i class="mdi mdi-open-in-new"></i>](https://www2.slideshare.net/ogwata_1959/vivliostyle-239370581)

As a forum hosted by a proven Tex community, the feedback was very encouraging. Thank you again.

However, I am sorry that I could not give a precise answer in a moment, as it was a live performance. So, I will give a new answer after discussing it with Shinyu Murakami, the representative. The feedback from that day was as follows.

- [1. Line indentation is missing](#1-line-indentation-is-missing)
- [2. Ruby text size is too large](#2-ruby-text-size-is-too-large)
- [3. How to use ruby for text in a table](#3-how-to-use-ruby-for-text-in-a-table)
- [4. The cursor focus returns to the first page](#4-the-cursor-focus-returns-to-the-first-page)
- [5. The cursor position in the editor should also be displayed in the preview screen](#5-the-cursor-position-in-the-editor-should-also-be-displayed-in-the-preview-screen)

### 1. Line indentation is missing

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-1.png" alt="A text document created with a double return code to separate paragraphs" style="width: 500px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></div>

I am embarrassed to say that this is a careless mistake on my part. Originally, VFM requires two returns for paragraph breaks (hard line breaks). However, in the manuscript I used for the demo, there was only one. In this case, GFM ignores it, but VFM interprets it as a soft line break that is not a paragraph break, and converts it to `<br>` in HTML (Right figure, upper).

This caused a line break, but not a paragraph break, so the beginning of the line was not indented. See the screenshot of the modified paragraph break with two returns (Right figure, bottom).

### 2. Ruby text size is too large

In fact, this problem has been pointed out before. So Murakami decided to take this opportunity to register it as an Issue.

- [ルビの文字サイズ問題: Minimum font size setting in Chrome causes ruby font size problem #673 <i class="mdi mdi-open-in-new"></i>](https://github.com/vivliostyle/vivliostyle.js/issues/673)

Let me explain briefly. Originally, Vivliostyle was a kind of polyfill intended to complement the browser. In other words, it leaves a lot of the functionality to the browser and implements its own features that are not implemented in the browser, such as pagination.

The same is true for this ruby typography, which is the result of Chrome's rendering, not Vivliostyle's. In the Chrome browser, the default value for the minimum font size is 10px. However, depending on the CSS specification, the size of the rubi text may exceed the minimum font size in Chrome, resulting in the rubi text in Vivliostyle being rendered larger (Right figure, upper).

<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2020-12-21-Update-on-the-development-of-Vivliostyle-at-Online.tex-2020/fig-2.png" alt="Typesetting results with the default minimum font size (10px) in Chrome" style="width: 300px; box-shadow: 1px 2px 2.5px 1.5px grey;" /></div>

As a workaround, if you set the minimum font size to 0px in the Chrome preferences, it will be rendered as specified in the CSS (Right figure, bottom).

Here is a side note. If you look closely, you can see that the ruby typesetting in this screenshot does not follow [JLReq 3.3.8's rule  <i class="mdi mdi-open-in-new"></i>](https://www.w3.org/TR/jlreq/#adjustments_of_ruby_with_length_longer_than_that_of_the_base_characters) that if a ruby extends beyond its parent character, it should be hung on the parent character. In fact, Vivliostyle cannot even fully implement the W3C specification for pagination, and as a result, it often fails to follow the rules in the details. This Ruby typography may be an example of how Vivliostyle is being developed.

### 3. How to use ruby for text in a table

When I actually specified the rubi in the table, the pipe character `|` used to specify the rubi was interpreted as a cell break. VFM bug. I registered this issue (there is currently a lot of discussion going on, so if you are interested, please take a look).

- [テーブルでルビを指定するとパイプ文字がセルの区切りにパースされる](https://github.com/vivliostyle/vfm/issues/44)

However, there are ways to work around this behavior. VFM parses raw HTML as it is, so you just have to specify ruby in HTML. Originally, Markdown is a simple html note. Therefore, it can be said that it is an implementation which came from the thought that it only has to write by an original writing that it is not possible to write by simple writing.

On the day of this, I explained that I could not nest another element in one element because it was the same problem as the previously registered Issue [no other note in the image caption #35](https://github.com/vivliostyle/vfm/issues/35), which was another problem and a mistake. I apologize and cancel it.

### 4. The cursor focus returns to the first page

Yes, the current situation is certainly unfavorable behavior and is already registered as an issue.

- [エディターで更新のたびにプレビューが１ページ目に戻らないようにすること #53](https://github.com/vivliostyle/vivliostyle-pub/issues/53)

### 5. The cursor position in the editor should also be displayed in the preview screen

Certainly. This is also already included in the [Vivliostyle Pub v1 Requirements Specification (WIP)](https://github.com/vivliostyle/community/wiki/Vivliostyle-Pub-v1-Req#%E5%8E%9F%E7%A8%BF%E7%B7%A8%E9%9B%86%E7%94%BB%E9%9D%A2%E3%81%A8%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC), which establishes the implementation requirements for ver.1, and will be implemented.

As a result, we can see that vivliostyle Pub is still in its infancy. In particular, there are many insufficient implementations for typesetting. Of course, we are not happy with this situation. By participating Online.tex 2020, we were able to recognize this situation once again. At the same time as we appreciate it, we renew our determination to overcome these challenges.
