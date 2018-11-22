---
title: Introduction of Viola — Online editor for printing and publishing
author:
  - spring_raining
---

Hello! I'm <a href="https://github.com/spring-raining">spring-raining</a>, a Vivliostyle project collaborator. In this entry, I'll introduce **Viola**, which is an online editor using Vivliostyle.

<div><a href="https://viola.pub"><img src="/assets/posts/2018-11-22-introduction-of-viola/viola-top.png" alt="https://viola.pub" /></a></div>

## Development history

In 2016, I was looking for a typesetting software to write a self-published technical book: an introduction to software development. Back then the de-facto standard for such typesetting was LaTeX (still the case today). My problem was that I did not have enough knowledge about LaTeX to write a technical manual on my own and to edit the layout as desired. Therefore I was looking for an alternative solution. When I found Vivliostyle, its proposal of doing typesetting by using web technology appeared very attractive to me as a web application engineer.

Since then, I have produced five self-published books using Vivliostyle consistently, and I am convinced of the vision about doing typesetting with web technology. On the other hand, Vivliostyle.js is unfortunately just a JavaScript library, so you need a knowledge of JavaScript to use this library. That is why I decided to develop a new text editor incorporating Vivliostyle so that more people can get experience with CSS typesetting.

## About Viola

The primary advantage of Viola is the functionality of the editor. In comparison to other text editors for browsers, Viola has a focus on providing editing functions for programmers and web designers. It can handle multiple HTML, CSS, images and even font files so it allows you to lay out pages as if you were making web pages in a text editor.

In the future, I'm planning to add templates so that even people not familiar with HTML and CSS can write drafts. Please check [https://viola.pub](https://viola.pub)!

## About viola-savepdf

In connection with the development of Viola, I also released a tool named viola-savepdf. This is a tool for professional engineers and designers who have already established a workflow for editing HTML and CSS. Viola-savepdf is a commandline interface (CLI) that uses Vivliostyle.js in the background to generate a PDF without the need to open a browser.

To install `viola-savepdf`, setup Node.js and execute the following command:

```
npm install -g viola-savepdf
```

After the installation, you can generate the PDF by executing this command:

```
savepdf -o output.pdf --size A4 input/index.html
```

You can also check the preview by setting the `--preview` option:

```
savepdf --preview input/index.html
```

## Pros & Cons

Similar to Viola, [**Fidus Writer**](https://www.fiduswriter.org) is a powerful choice of a text editing tools that uses Vivliostyle to achieve web-based typesetting. Differently from Fidus Writer, Viola is not only as a manuscript editing tool but also a text editor for HTML and CSS, so you can edit the manuscript more freely. The live preview function of the output result by Vivliostyle is also a strong advantage of Viola. As of now, Fidus Writer---which has been developed for many years---exceeds it in terms of lightness and comfort on writing. Please try using both editors and find out which one you prefer.

**vivliostyle-print** has a function similar to viola-savepdf, but its usage is slightly different. vivliostyle-print is provided as a **JavaScript library** and provides an API that is easy to use the conversion function of Vivliostyle. On the other hand, viola-savepdf is provided as a **command line application**. From HTML and CSS files in a local directory, it allows you to save the result of conversion by Vivliostyle.

For the future I hope that both Vivliostyle and Viola will be favored by many more and that it will make their text editing experience more pleasant!
