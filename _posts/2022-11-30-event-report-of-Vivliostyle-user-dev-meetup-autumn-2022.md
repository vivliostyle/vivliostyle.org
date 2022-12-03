---
title: Event report of “Vivliostyle User/Dev Meetup Autumn 2022”
lang: en
image: /assets/posts/2022-11-30-event-report-of-Vivliostyle-user-dev-meetup-autumn-2022/fig-1.png
author:  ogwata
tags:
  - event
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2022-11-30-event-report-of-Vivliostyle-user-dev-meetup-autumn-2022/fig-1.png" alt="Event report of “Vivliostyle User/Dev Meetup Autumn 2022”" style="width: 500px;" /></div>

(The original article is [「Vivliostyle ユーザーと開発者の集い 2022秋」開催報告](https://vivliostyle.org/ja/blog/2022/11/30/event-report-of-Vivliostyle-user-dev-meetup-autumn-2022/) in Japanese)

## “Vivliostyle User/Dev Meetup Autumn 2022” was held

The annual fall user event was held online on November 20.

- [Vivliostyle User/Dev Meetup Autumn 2022](https://connpass.com/event/264332/)

The program for the day and links to the respective slides and archived videos are below.

- **Part 1**
    - 13:00-13:10（10 min.）**Explanation of the purpose of today's meeting**（[Katsuhiro Ogata](https://twitter.com/ogwata)）（[movie](https://youtu.be/g41n3xi86uQ)）
        - Here is a brief overview of the abstracts scheduled for presentation on this day.
    - 13:10-13:40（30 min.）**CSS text-spacing property from the perspective of the preceding implementation of Vivliostyle.js**（[Suzuki Takeru, FONT WORKS](https://twitter.com/terkel)）（[slide](https://speakerdeck.com/terkel/vivliostyle-dot-js-noxian-xing-shi-zhuang-karakao-erucss-text-spacing-puropatei), [movie](https://youtu.be/vfb-FBTyAUU)）
        - We will review the prior implementation of Vivliostyle.js (spacing between Japanese and Western words, spacing of consecutive punctuation, and spacing at the beginning and end of lines), which has not yet been implemented in the browser, from the user's perspective. From the last 10 minutes, Representative Murakami, the implementer, will answer questions.
    - 13:40-14:10（30分）**Great improvements in web standards and CSS support in Vivliostyle.js**（[Shinyu Murakami](https://twitter.com/MurakamiShinyu)）（[slide](https://murakamishinyu.github.io/vivliostyle-dev2022autumn/), [movie](https://youtu.be/p7YKTuBC68Q)）
        - The newly available CSS Grid Layout, CSS Variables (Custom Properties), CSS Selectors level 4 (such as `:has()` pseudo-classes), etc. will be explained in detail. We will also discuss some of the remaining unimplemented CSS features that remain to be addressed.
    - 14:10-14:15（5 min.）Break
- **Part 2.　Vivliostyle Development Report**
    - 14:15-14:25（10 min.）**The Vivliostyle Project: Past and Future**（[Shinyu Murakami](https://twitter.com/MurakamiShinyu)）（[slide](https://murakamishinyu.github.io/vivliostyle-proj2022autumn/), [movie](https://youtu.be/9c5ueJcYKeE)）
        - This section describes planned enhancements to the Vivliostyle project, including incompatible changes. For example, the sectioning specification changes in VFM v2 (Markdown Extensions Specification), planned enhancements in Vivliostyle CLI v6, and the theme stylesheet revamp.
    - 14:25-14:45（20 min.）**Vivliostyle CLI update - 2022 Autumn**（[spring_raining](https://twitter.com/spring_raining)）（[slide](https://paper.dropbox.com/doc/Vivliostyle-CLI-update-2022-Autumn--BtWcfC5r~eWo7mcxlTy~XLm8AQ-PShS2Bb2KLXRTWoqdN36J), [movie](https://youtu.be/Le_Zea-mCCs)）
        - The first half of the presentation will cover updates to the Vivliostyle CLI over the past six months, such as changing the browser library from Puppeteer to Playwrite, adding the `--css` option, adding options related to bleed-off, etc. The second half of the presentation will detail the theme enhancements he is currently working on.
    - 14:45-15:05（20 min.）**Rethinking VFM Specification Design**（[@nosuke23](https://twitter.com/nosuke23)）（[slide](https://vivliostyle-20221120-nosuke23.vercel.app/1), [movie](https://youtu.be/etP3E3XLXMc)）
        - Here are some considerations for how to extend Markdown. Semantic markup inevitably leads to a higher likelihood of name collisions. To prevent this, we will explain that “declarative markup,” in which CSS is modularized and components are assigned in a declarative manner, may be effective. In the latter half of the session, based on the presentation, Representative Murakami and a VFM maintainer, akabeko-san, will join the three of us for a discussion.
    - 15:05-15:10（5 min.）Break
- **Part 3.　Vivliostyle Spreading**
    - 15:10-15:30（20 min.）**Release of vivliostyle-cli-helper and commercial publication “Introduction to Viviliostyle CSS Typography (tentative)”**（[Yuichiro Otsu,　LibroWorks Inc.](https://twitter.com/arinoth)）（[slide](https://onedrive.live.com/view.aspx?resid=FD4E1B19C4E7DE29!45691&ithint=file%2cpptx&authkey=!AO3fsykPK085SGQ), [movie](https://youtu.be/u2DDCgHfQpQ)）
        - The author will give a detailed explanation of the contents of “Introduction to Vivliostyle CSS Typography (tentative),” which is scheduled for publication next spring, as well as the tool vivliostyle cli helper, which will be used as a teaching tool in the book.
    - 15:30-15:50（20 min.）**Vivliostyle, Another Blue Ocean**（[Katsuhiro Ogata](https://twitter.com/ogwata)）（[slide](https://vivliostyle.org/viewer/#src=https://ogwata.github.io/slide-2022-11-20/myslide.html), [movie](https://youtu.be/zdfskfdUd-8)）
        - Vivliostyle's strength is not limited to pagination. Recent examples of Vivliostyle users show that they all make full use of the collaborative editing feature. This collaborative editing capability may be another blue ocean for Vivliostyle. If so, then pagination should be optional.
    - 15:50-15:55（5 min.）Break
- **Part 4.　November Dev Meeting**
    - 15:55-16:25（40 min.）（[movie](https://youtu.be/WGZZQIJHna0)）
        - Using the issues raised on the day as material, the speakers and maintainers discussed future issues for Vivliostyle.
    - 16:25-16:35（10 min.）**Closing**（[Shinyu Murakami](https://twitter.com/MurakamiShinyu)）（[movie](https://youtu.be/Qiu0i-J8ATI)）
        - Closing remarks by Representative Murakami.

This year's event was many amazing topics discussed. Let us briefly introduce some of them below.

## Evaluation of implementation by Takeru Suzuki-san ([FONT PLUS](https://fontplus.jp/))

In Suzuki-san's session [CSS text-spacing property from the perspective of the preceding implementation of Vivliostyle.js](https://youtu.be/vfb-FBTyAUU), among the specifications that browsers have not implemented yet, [CSS Text level 4](https://www.w3.org/TR/css-text-4/) property `text-spacing` Focusing on, we verified and evaluated the implementation in Vivliostyle.js. The content was generally affirmative of the current implementation, and I was reassured that what we had done so far was not wrong. In addition, the comments by Representative Murakami from the 22nd minute of the second half onward, in which he answered Suzuki-san's questions and explained the algorithm of implementation, were also worth listening to, and I think we heard a worthwhile dialogue.

## “Gyou-dori” will become easy with Vivliostyle.js in the near future

In Representative Murakami's session [Great improvements in web standards and CSS support in Vivliostyle.js](https://youtu.be/p7YKTuBC68Q), many improvements were explained, including the `:has()` pseudo-class, which will be described later, and future updates were also announced.

The most significant of these is that, while some of the latest CSS features implemented by browsers were previously unavailable, v2.16.0 (2022-07-19) and v2.17.0 (2022-07-29) allow the use of basically all of them. This means that CSS features implemented by future browsers can be used directly in Vivliostyle.js.

Among such CSS features, I am focusing on [`lh and rlh units`](https://drafts.csswg.org/css-values-4/#lh) (16:12). If implemented, it will be very easy to specify the size of headings, images, etc. in the way of “n lines of text”(Gyou-dori). This may be especially good news for users who have been confused by the difference between traditional Japanese typesetting and CSS typesetting.

## Incompatibility Changes in VFM v2

In [The Vivliostyle Project: Past and Future](https://youtu.be/9c5ueJcYKeE) by Representative Murakami, it was announced that VFM, the Markdown dialect of Vivliostyle, will be updated to v2 in the near future (2:41). This will include incompatible changes, so users who currently have data written in VFM will need to take action.

Specifically, in the current v1, heading attributes were essentially copied to the `section` element, and the `id` attribute was also moved to the `section` element. However, starting with v2, these behaviors will be eliminated. These behaviors were useful features that allowed some flexibility in range specification within the limitations of Markdown, such as the ability to specify styles for entire sections, including headings.

But recently We implemented a `:has()` pseudo-class that specifies child elements and any elements that follow them in the Vivliostyle.js. This allows for more precise specifie. Thus, we decided that abolishing the traditional behavior would be more beneficial for users.

In v2, only the `id` attribute of the heading will be copied to the `aria-labelledby` attribute of the `section` element. However, other attributes will not be copied or moved. Please take note of this.

## Theme enhancements in the Vivliostyle CLI

Notable in spring_raining-san's [Vivliostyle CLI update - 2022 Autumn](https://youtu.be/Le_Zea-mCCs) is the enhancement of theme functionality planned for the next version (10:20). This is an attempt to make full use of CSS Variables (Custom Properties) implemented in Vivliostyle.js.

Specifically, a basic theme, `@vivliostyle/theme-base`, is prepared that can be used commonly within the Vivliostyle theme, and is referenced by other themes. This allows you to share variables that are used throughout the theme. For example, font name, font size and color, number of columns, and various other CSS features can be set as if you were turning a switch on and off. On this day, we were able to actually see a demonstration of a feature under development (14:35). We could feel how useful it is. Looking forward to it very much.

Also, after this enhancement of the theme feature, he will at last be working on support for EPUB output. Next year is going to be a great year.

## Introductory book on Vivliostyle to be published commercially

The [C&R Kenkyujo](https://www.c-r.com/) is publishing a long-awaited book on an introduction to Vivliostyle!　This is explained in detail in Yuichiro Otsu-san's [Publication of vivliostyle-cli-helper and commercial publication “Introduction to Viviliostyle CSS typesetting (tentative)”](https://youtu.be/u2DDCgHfQpQ). The book will mainly target people who have some knowledge of HTML and CSS, and will explain Vivliostyle with a minimum of typographical knowledge. The proposed structure is as follows

1. Vivliostyle and CSS typesetting
2. Hands-on CSS typesetting
3. Introduction to VFM Markdown
4. Utilizing the Vivliostyle CLI
5. Design Tips for CSS typesetting
6. Sending and Printing
7. Vivliostyle Pub

In addition, the VSCode extension [vivliostyle-cli-helper](https://marketplace.visualstudio.com/items?itemName=Libroworks.vivliostyle-cli-helper), which was demonstrated (15:21). With it, you can easily display a preview screen while writing a manuscript in VSCode. How convenient!

The book is scheduled to be released next year, March-April 2023. We look forward to seeing it.

## Conclusion

I have picked up the topics of the day so far, but there were many more presentations that were worth listening to. Please take a look at the list above and see for yourself. The next meetup will be held in April 2023. Please keep your eyes on Vivliostyle next year to see how far the development of Vivliostyle progresses until then.