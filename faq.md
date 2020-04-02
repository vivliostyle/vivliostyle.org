---
layout: page
title: FAQ
---


{% capture license %}
## Vivliostyle Viewer FAQ <small>(Under construction)</small>
## Vivliostyle CLI FAQ <small>(Under construction)</small>
## CSS Typesetting Techniques FAQ <small>(Under construction)</small>

## Vivliostyle License FAQ

### What open source license does Vivliostyle use?

Viviostyle uses AGPLv3 (GNU Affero General Public License, version 3) as its open source license.

AGPL is a reciprocal license (the same license applies to derivative works) similar to the GPL (GNU General Public License), which permits modification and commercial use of the software. Unlike the GPL, users over the network are guaranteed access to the source code.

References:
- [GNU Affero General Public License (AGPLv3)](https://www.gnu.org/licenses/agpl-3.0.en.html)
- [Frequently Asked Questions about the GNU Licenses](https://www.gnu.org/licenses/gpl-faq.en.html)


### Where does the copyright of the Vivliostyle source code belong?

The Vivliostyle source code has the following copyright notation: (e.g., in [epub.ts](https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/core/src/vivliostyle/epub.ts))
 
> * Copyright 2013 Google, Inc.
> * Copyright 2015 Trim-marks Inc.
> * Copyright 2018 Vivliostyle Foundation

"Copyright 2013 Google, Inc." is because Vivliostyle was originally developed based on [EPUB Adaptive Layout JavaScript-based implementation ("Adapt")](https://github.com/sorotokin/adaptive-layout), which was developed by Peter Sorotokin of Google. Google owns the rights to the source code from this original project.

Trim-marks Inc. (formerly Vivliostyle Inc.) developed Vivliostyle from 2015 to March 2018. The rights to Vivliostyle source code written during this period belong to Trim-marks Inc. In addition, the license of Vivliostyle was originally Apache License 2.0, inheriting "Adapt" of the original project, but changed to AGPLv3 from February 2017.

Vivliostyle Foundation took over the open source management of Vivliostyle after Trim-marks Inc. dropped the open source Vivliostyle in March 2018. The rights to the source code for Vivliostyle written after that belong to Vivliostyle Foundation.


### Are there open source license restrictions on publications made with Viviostyle?

No. The fact that the Viviostyle license is AGPL does not affect publications made using Viviostyle. There is no obligation to publish the source data (HTML or CSS) of the publication.


### Can I use Viviostyle in my company without restrictions?

Yes. You are free to copy and use Viviostyle within a company or organization, and you are not required to publish it even if you modify the source code.

See (GNU License FAQ):
- [Does the GPL require that source code of modified versions be posted to the public?](https://www.gnu.org/licenses/gpl-faq.en.html#GPLRequireSourcePostedPublic)
- [Is making and using multiple copies within one organization or company “distribution”?](https://www.gnu.org/licenses/gpl-faq.en.html#InternalDistribution)


### Can I use Vivliostyle Viewer or Vivliostyle Print by calling it from a commercial Web application?

Yes. [Vivliostyle Viewer](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/viewer) and [Vivliostyle Print](https://github.com/vivliostyle/vivliostyle-print) run as an independent program on the client-side browser, and so can be used in combination with server-side programs or other client-side programs even if they are proprietary.

It is also possible to modify Viviostyle (Viewer/Print) if the modified source code is published. However, the AGPL Viviostyle program and the proprietary program that calls it must not share complex data structures.

See (GNU License FAQ):
- [Can I release a nonfree program that's designed to load a GPL-covered plug-in?](https://www.gnu.org/licenses/gpl-faq.en.html#NFUseGPLPlugins)
- [I'd like to incorporate GPL-covered software in my proprietary system. I have no permission to use that software except what the GPL gives me. Can I do this?](https://www.gnu.org/licenses/gpl-faq.en.html#GPLInProprietarySystem)


### How does Viviostyle Viewer run as an independent program?

[Vivliostyle Viewer](https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/viewer) consists of its main HTML file and JavaScript libraries linked from it. Even if the Vivliostyle Viewer is used in a commercial Web application and is placed on the same Web server as that Web application, it is loaded and runs on the end user's Web browser, so it is clearly separate from the Web application's server-side programs.

Data such as the URL of the document to be displayed in Vivliostyle Viewer and the display settings are specified as the URL fragment parameters added to the URL of the main HTML file of Vivliostyle Viewer. In case that the URL parameters are used to pass data between the Viviostyle program and the front-end program (JavaScript etc.) for a commercial Web application, the two programs need not to be combined, so the Viviostyle Viewer can be treated as an independent program.


### How does Viviostyle Print run as an independent program?

[Vivliostyle Print](https://github.com/vivliostyle/vivliostyle-print) is a JavaScript program that adds a printing feature to Web pages with formatting by Vivliostyle. In case that Vivliostyle Print is used from another program such as the front-end side of a commercial Web application, it invokes the main function of the Vivliostyle Print program with parameters and waits for termination. A simple return value such as an exit code or number of pages processed may be returned. In this way, the two programs do not share a complex data structure or exchange data with each other, so the Vivliostyle Print can be treated as an independent program.


### Can I use Vivliostyle CLI on the server side?

Yes. [Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli) can be called by another server-side program, and the calling program can be proprietary, as long as each runs as an independent program.


### What restrictions should I be aware of when using Vivliostyle for commercial use?

In commercial use of Vivliostyle under the AGPL license, you need to be aware of the following:

- If you modify and distribute Vivliostyle (Note: use on website is also considered to be distributed), you need to publish the modified Vivliostyle source code.
- When you create and distribute a program that runs as a single combined program incorporating Vivliostyle, you need to publish the source code of the program under the AGPL license.
- If you modify Viviostyle source code, retain the copyright notice in the header comments of the source files. The source files marked "Copyright 2013 Google, Inc." contain the source code from the original project "Adapt" which is licensed under Apache License 2.0. Retain the following description in the [README](https://github.com/vivliostyle/vivliostyle.js/blob/master/README.md) and [LICENSE](https://github.com/vivliostyle/vivliostyle.js/blob/master/scripts/package-artifacts/LICENSE.md) files:
    > Vivliostyle Core is implemented based on [Peter Sorotokin's EPUB Adaptive Layout implementation](https://github.com/sorotokin/adaptive-layout), which is licensed under [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
{% endcapture %}


{% include page/faq.html
  title="FAQ"
  lead="If you have any questions, please contact us [here](/community)."

  license=license
%}
