---
layout: page
title: History of Vivliostyle
---


{% capture content %}
## 2014, the beginning of Vivliostyle

The Vivliostyle project concept to create open source, web browser-based CSS typesetting software was born in late 2014.

Widespread of CSS typesetting, which enables formatting of book pages with HTML + CSS similar to that of the Web, will lead to one source multi-use and improve accessibility of publications. At the time, however, CSS typesetting was only available for commercial proprietary products, which limited its use.

Prior to the Vivliostyle project, its founder Murakami was involved in developing of AH Formatter, a commercial typesetting engine for  [Antenna House](https://www.antennahouse.com/), and planned the new project and established Vivliostyle Inc. with support from AH. The company then became independent from AH but its trace can be found in [CSS Typesetting Blog (Japanese)](https://blog.antenna.co.jp/CSSPage2/) which remains in the AH site (Thanks to AH for keeping it).

The name “Vivliostyle” is a combination of the Greek word “βιβλίο” (pronounced /vivlío/, means “book”) and English “style”. This name was chosen with advice from [Lea Verou](http://lea.verou.me/), a Greek and a member of W3C CSS WG.


## Based on the EPUB Adaptive Layout implementation, making a CSS Paged Media implementation

At the start of the project (Spring 2015), we considered whether to make a JavaScript CSS typesetting engine running in the browser from scratch or from existing open source. Then we looked at [EPUB Adaptive Layout](http://idpf.org/epub/pgt/), a proposal to extend CSS for EPUB page layout, and the [JavaScript Implementation for EPUB Adaptive Layout](https://github.com/sorotokin/adaptive-layout) by [Peter Sorotokin](https://github.com/sorotokin) (former Adobe, then Google), and decided to use it as a base for implementing [CSS Paged Media](https://www.w3.org/TR/css-page-3/) and other features required for book typesetting.  Its main developer was [Toru Kawakubo](https://github.com/kwkbtr). Thanks to the developers for their significant contributions.


{% include avatar-list.html namelist=site.data.developer.old_vivliostyle_dev %}


### 2018, new open source organization, Viviostyle Foundation

In March 2018, the company that had been developing Viviostyle decided to discontinue open source and change its name and brand, and continue only commercially licensed versions (see [Trim-marks Inc.](https://trim-marks.com)). As for the maintenance of Vivliostyle open source, the founder Murakami took over, and for that purpose Vivliostyle Foundation was established.

Related articles:
- [A New Beginning for Vivliostyle](https://vivliostyle.org/blog/2018/03/26/a-new-beginning/)
- [On Vivliostyle and webbased publishing — Interview by Fidus Writer](https://vivliostyle.org/blog/2018/11/12/interview-by-fiduswriter/)
- [Vivliostyle version 2019.8.100 released! Now written in TypeScript](https://vivliostyle.org/blog/2019/08/16/vivliostyle-2019.8.100-released/)


{% include avatar-list.html namelist=site.data.developer.current_vivliostyle_dev %}
{% endcapture %}


{% include page/history.html
  title="History of Vivliostyle"

  content=content
%}
