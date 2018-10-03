---
title: New package - An interview with myself about Vivliostyle-print 
author: johanneswilm
---

**[Vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js) has been with us for a few years already. It can both show paged media in the browser as well as print HTML with extra CSS targeted paged media. What need is there for a [Vivliostyle-print](https://github.com/vivliostyle/vivliostyle-print) then?**

It is true that  Vivliostyle.js already has existed a few years and Vivliostyle-print adds nothing new in terms of CSS. For end users who only know HTML and CSS and no JavaScript, using Vivliostyle Viewer (Vivliostyle.js + Vivliostyle-ui) continues to be the way to go.

A problem with Vivliostyle.js that I have found though has been that it’s a really complex program when it comes to trying to include it in other software and until recently the documentation was not that extensive. Even now in the process of creating this package, I had to spend more than a day with a lot of chatting and trial and error to get it to work. 

Vivliostyle-print should take a lot of the pain away for JavaScript developers with projects that just need the printing features of Vivliostyle.js and nothing else.

**Why did you decide to start Vivliostyle-print?**

I myself have been working on getting it to work with Fidus Writer, the academic text editor I have spent the last few years on. Back in 2012, we had pagination in the editor itself while the user was writing the document, but that was based on the experimental technology “CSS Regions” and when the Chromium team decided to remove those, we have just had a pagination solution that is invoked when the print dialog is invoked. That solution (paginate-for-print) is something I quickly threw together a few years as a replacement. Even though I have been going around promoting Vivliostyle.js, the complexity of it meant that I never had the time to sit down and create a connector for Vivliostyle.js. Now that I did finally find the time, I thought it would be best to share this so others don’t have to spend as much time on doing this.

**What kinds of projects would you think could benefit from this?**

Other text editor apps would be one obvious beneficiary. But really any webpage that wants to provide a more high quality print version of their online content: With a little bit of JavaScript they simply intercept the user hitting CTRL+P and then run Vivliostyle-print instead using their original content with some extra CSS for pagination. Online newspapers or blogs would come to mind. But even webbased email applications could benefit from Vivliostyle-print. I really hope this helps popularize Vivliostyle.js usage.

**If you run Vivliostyle.js, doesn’t that mess up the DOM of the page? Will users need to reload the page after printing it?**

Vivliostyle-print works slightly differently. It runs Vivliostyle.js in the background (in a hidden iframe) which is removed again once the print dialog has disappeared. That way the original DOM is exactly the same before and after Vivliostyle-print is run.
