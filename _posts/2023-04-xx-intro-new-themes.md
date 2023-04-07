---
title: Introduction of the new Vivliostyle Themes
lang: en
author: spring_raining
tags:
  - Vivliostyle Themes
---

We're delighted to announce that the new Vivliostyle Theme is now available in Beta version! It's more than just a CSS file for Vivliostyle. It's an ambitious library that is a new form of CSS framework, so let me introduce it to you.

## How to use Vivliostyle Theme

Vivliostyle Theme can be used by setting the following in `vivliostyle.config.js`. (Vivliostyle CLI newer than v6.0.0 automatically installs the theme files, so `npm install` is not required)

```js
module.exports = {
  theme: '@vivliostyle/theme-base@beta',
};
```

Please refer to [the README of Vivliostyle Themes](https://github.com/vivliostyle/themes) for available themes. Note that the theme name should end with `@beta`, as it is currently in Beta version.

## CSS framework based on CSS variables

The new Vivliostyle Themes are built on our CSS framework [`@vivliostyle/theme-base`](https://github.com/vivliostyle/themes/tree/main/packages/%40vivliostyle/theme-base). Popular CSS frameworks, like Bootstrap and Tailwind CSS, have a different structure from Vivliostyle Theme. In short, `@vivliostyle/theme-base` is "a customizable CSS framework with CSS variables, designed for documents like Markdown."

When viewing a document with `@vivliostyle/theme-base`, it looks almost the same as the browser's default User agent stylesheet. However, you can observe various CSS variables set for the properties of each element selector.

[![Screenshot of web page with theme-base applied](/assets/posts/2023-04-xx-new-themes/fig-1.webp)](/assets/posts/2023-04-xx-new-themes/fig-1.webp)

This is exactly what is accomplished by `@vivliostyle/theme-base`.

In traditional CSS, you start by selecting the element you want to style, and then write the style to be applied. If the same style is repeated, the style that should be overridden is determined by the specificity of the selector. This makes CSS flexible and manageable. 

However, this only works when you have control over all the CSS. It can be difficult for someone else to override your CSS. To make inherited CSS override the original CSS, you need to use selectors with a higher specificity than the original CSS, or add `!important` to increase the specificity. This depends on the content of the original CSS, making it hard to read and understand. If the source CSS is updated and the specificity changes, the dependent CSS will also become invalid. Until now, this has been a problem for CSS themes.

Vivliostyle Themes use "CSS variables" instead of selectors to indicate where styles should be applied.

```css
/* General method for specifying CSS */
h1 {
  font-size: 2.5rem;
  line-height: 1.5;
}
p {
  margin: 0.5rem 1.5rem;
}

/* Specifying method in Vivliostyle Themes */
:root {
  --vs--h1-font-size: 2.5rem;
  --vs--h1-line-height: 1.5;
  --vs--p-margin-block: 0.5rem;
  --vs--p-margin-inline: 1.5rem;
}
```

The Vivliostyle Theme defines CSS variables, all beginning with `--vs`, which are set to the `:root` selector. This means you don't have to worry about the level of detail of the inherited style.

Let's examine the CSS variables that can be set.

## Systematized CSS variables

In the above example, CSS variables were named for specific tags such as `h1` and `p`. Vivliostyle Themes offers a system of names for CSS variables to make it easier to achieve the text layout targeted by Vivliostyle.

### `meta-properties.css`

[`meta-properties.css`](https://github.com/vivliostyle/themes/blob/6b516234280c1eb8e5fbce1a63ba9688cc02e72f/packages/%40vivliostyle/theme-base/css/common/meta-properties.css) defines the most fundamental CSS variables that apply to the entire document, such as font type and size.

```css
:root {
  --vs-font-family: serif; /* Set font to serif */
  --vs-spacing-rlh: 2rem; /* Set basic margins for each element */
}
```

### `basic.css`

CSS variables for common elements like `<h1>` and `<p>` tags are defined in [`basic.css`](https://github.com/vivliostyle/themes/blob/6b516234280c1eb8e5fbce1a63ba9688cc02e72f/packages/%40vivliostyle/theme-base/css/common/basic.css). All variables in `basic.css` have names that start with `--vs--`.

```css
:root {
  --vs--blockquote-font-size: 120%; /* Set font size of blockquote tag to 120%. */
  --vs--figure-margin-inline: 2rem; /* Specify the margin of the figure tag in the inline direction */ 
}
```

Some HTML elements also have CSS variables for batch setting.

* `--vs--heading-*`: Batch setting for the Heading element (h1, h2, h3, h4, h5, h6)
* `--vs--monospace-*`: Specifies monospace font elements (code, kbd, pre, samp) at once.
* `--vs--lists-*`: Batch specification for list elements (ul, ol, dl)

For table tags, you can also control the width of the border more precisely. For example, you can use CSS variables.

* `--vs--table-border-width-outer`: specifies the width of the outer border of the table
* `--vs--table-border-width-row`: Specifies the width of the inner horizontal border of the table

### Other CSS Variables

Vivliostyle offers many features for page layout, cross-references, table of contents, and more. You can customize these features with CSS variables. For detailed instructions, check out the [@vivliostyle/theme-baseのREADME](https://github.com/vivliostyle/themes/tree/main/packages/%40vivliostyle/theme-base).

## Examples of Actual Application

To see how CSS variables are used, take a look at the theme file in [`@vivliostyle/theme-techbook/theme.css`](https://github.com/vivliostyle/themes/blob/main/packages/%40vivliostyle/theme-techbook/theme.css). A simplified version of the contents looks like this.


```css
@import url(../theme-base/theme-all.css);
@import url(../theme-base/css/lib/prism/base.css);
@import url(../theme-base/css/lib/prism/theme-okaidia.css);

/**
 * Theme variables
*/
:root {
  --vs-theme--anchor-color-body: #3498db;
  --vs-theme--blockquote-color-bg: #ecf0f1;
  --vs-theme--blockquote-color-body: #34495e;
  ...
}

:root {
  --vs-font-family: 'Neue Frutiger World', 'Verdana', 'Hiragino Sans', sans-serif;
  --vs-font-size-on-print: 75%;
  --vs-line-height: 1.7;
  --vs-widows-orphans: 3;
  --vs--heading-line-height: 1.2;
  ...
}
```

This theme file changes its style by customizing the contents of the `theme-base` CSS variable. You can override this content by providing your own CSS. Vivliostyle also provides theme-specific CSS variables starting with `--vs-theme--`, which you can customize as needed.

## Create your own theme

The [create-vivliostyle-theme](https://github.com/vivliostyle/themes/tree/main/packages/create-vivliostyle-theme) template generator is now compatible with the new Vivliostyle Theme. To generate a template, run the following command.

```
npm create vivliostyle-theme@beta <your-theme-name>
```

The template does not include a SASS file, but has a simple structure with only `theme.css`. When you've finished your Vivliostyle Theme, consider publishing it as an npm package!

## Conclusion

The new Vivliostyle Theme, powered by CSS variables, has been introduced. We will release it as an official version after we receive feedback. If you have any suggestions, [please submit an issue at vivliostyle/themes.](https://github.com/vivliostyle/themes/issues/new)
