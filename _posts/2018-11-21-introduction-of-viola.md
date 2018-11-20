---
title: Introduction of Viola — Online editor for printing and publishing
author:
  - spring_raining
---

XXX

<div><a href="https://viola.pub"><img src="/assets/posts/2018-11-21-introduction-of-viola/viola-top.png" alt="https://viola.pub" /></a></div>

## Development history

In 2016, I was looking for typesetting software to write a self-published technical book introducing about software development. At that time (and even now) of the typesetting software for such use, the de facto standard was LaTeX. However, It is difficult to say that my information on LaTeX is enough to write a technical manual on my own and edit the layout as desired, therefore I was looking for an alternative plan. When I found Vivliostyle and the solution to realize typesetting by using web technology, it appeared to be very attractive to me as a web application engineer.

Since then, I have consistently produced five self-published books using Vivliostyle, and I convince of the foresight of the vision about the typesetting by web technology. On the other hand, Vivliostyle.js is unfortunately just a JavaScript library, so it is true that you need a knowledge of JavaScript to use this library. That is why I decided to develop a new text editor incorporating Vivliostyle so that more people can get experience CSS typesetting.

## About Viola

The primary advantage of Viola is the functionality of the editor. Among text editors for browsers in the world, Viola quite focuses to provide editor functions for programmers and web designers. It can handle multiple HTML, CSS, images and even font files so it allows you to lay out pages as if you were making web pages on a text editor.

In the future, I'm planning to add templates so that even people not familiar with HTML and CSS can write drafts. Please check [https://viola.pub](https://viola.pub)!

## About viola-savepdf

In connection with the development of Viola, I also released a tool named viola-savepdf. This is a tool for professional engineers and designers who have already established a workflow for editing HTML and CSS, which is a function of Vivliostyle.js conversion function for CLI from the core function of Viola.

In relation to the development of Viola, I also released a tool named `viola-savepdf`. This is a tool for professional engineers and designers who have already established a workflow for editing HTML and CSS, which is the CLI application that allows using conversion function of Vivliostyle.js same as Viola.

To install `viola-savepdf`, set up Node.js and execute the following command,

```
npm install -g viola-savepdf
```

After the installation, you can generate the PDF by executing such the following command,

```
savepdf -o output.pdf --size A4 input/index.html
```

And you can also check the preview by setting the `--preview` option.

```
savepdf --preview input/index.html
```

## Pros & Cons

As well as Viola is too, [**Fidus Writer**](https://www.fiduswriter.org) is a powerful choice for editing tools that use Vivliostyle to achieve web-based typesetting. Viola is not only as a manuscript editing tool but also a text editor for HTML and CSS, so you can edit the manuscript more freely. The live preview function of the output result by Vivliostyle is also a strong advantage of Viola. Meanwhile, in the current status, Fidus Writer which has been developing for many years exceeds it in terms of lightness and comfort on writing. Please try using both editors and find out your preferable usage.

**vivliostyle-print** has a function similar to viola-savepdf, but its usage is slightly different. vivliostyle-print is provided as a **JavaScript library** and provides an API that is easy to use the conversion function of Vivliostyle. On the other hand, viola-savepdf is provided as a **command line application**. From HTML and CSS files in a local directory, it allows you to save the result of conversion by Vivliostyle. Also, it is not necessary to manually set up the server like Vivliostyle-ui.

Along with Vivliostyle, I hope that Viola will be used favorably by many people with pleasure!
