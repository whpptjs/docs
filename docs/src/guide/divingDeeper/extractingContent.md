# Extracting Content

Whppt has a way of monitoring where you use links and or images. However, due to the nature of Whppt and how it manages
content it does require you to inform Whppt of where you will be expecting images and links.

## Introduction

Extracting content allows you to know where any dependencies live. This is then used to prevent or warn the editors
of the content that an action might have consequences. For example, deleting an image from the Gallery might cause a
broken image on a number of pages.

To help you do so you are able to provide functions to Whppt in specific locations. Below is a list of all functions and
their locations to help you extract "dependencies" from your content.

## Nav/Footer Level Extraction

To extract content from the site navigation or footer, you can provide certain functions to the Whppt API module. Below
is an example of how this can be done.

```js
// ~/server/index.js
// initialise whppt and tell express to use it
Whppt({
  extractFooterImages(footer) {
    const footerImageId = footer.image && footer.image.imageId;

    return [footerImageId];
  },
  extractFooterLinks(footer) {
    const footerLink = footer.link && footer.link.href;

    return [footerLink];
  },
  extractNavImages(nav) {
    return [];
  },
  extractNavLinks(nav) {
    return [];
  },
}).then((whppt) => app.use(whppt));
```

Ok, lets breakdown the code above.

First off, lets take a look at extracting images. Inside `extractFooterImages` we strip out the imageId from where ever it may live. and simply return each imageId in an Array. The returned Array should be an Array of strings, where each string will be an imageId.

The `extractNavImages` function works in the same way with the exception of the argument passed through is `nav` rather than `footer`.

Next lets take a look at extracting links. In the `extractFooterLinks` function we can do something very similar to extracting images, however the returned Array within the function expects and Array of string where the strings with be the value of the link. In most cases a link in Whppt will looks something like `{ href: '/hello', type: 'page' }`. The value of `href` is what we're interested in.

Again, the `extractNavLinks` works in the same way with `nav` as an argument.

## Page Level Extraction

## Component Level Extraction

## Metadata Level Extraction
