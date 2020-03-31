---
layout: page
title: Logo
---


{% capture about_logo %}
## About the logo

![](/assets/logo-beforeafter.png)

The old logo (left) was designed to look like a giant book floating above the Earth. The earth symbolizes the World Wide Web, and the book symbolizes Vivliostyle as you can see from the "V" shape. The design is by Tomoyuki Ishida and the illustration is by Satoshi Ohtera.

The new logo (right) was designed in January 2020 by Yasuaki Uechi to renew the old one. The intention is to refresh the image by changing to flat and vivid colors and trimming boldly, for upgrading to Vivliostyle 2.0.
{% endcapture %}


{% capture use_logo %}
## Use of the logo

We have a media kit that you can use to introduce Vivliostyle. Please feel free to use it. The license is MIT.

<ul class="list--medium">
  {% include button/secondary.html text="Vivliostyle Media Kit" url="https://github.com/vivliostyle/vivliostyle.org/files/4387986/Vivliostyle.Press.Kit.zip" %}
</ul>

![](/assets/logo-mediakit.png)
{% endcapture %}


{% include page/logo.html
  title="Our logo"
  lead="Learn about the Vivliostyle logo and its history. Anyone can use it."

  about_logo=about_logo
  use_logo=use_logo
%}
