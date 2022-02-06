# Extracting Content

Whppt has a way of monitoring where you use links and or images. However, due to the nature of Whppt and how it manages
content it does require you to inform Whppt of where you will be expecting images and links.

## Introduction

Before we get started, its good to note that nearly all of the functionality below is built into the `@whppt/api-express`
package, therefore if you overwrite any functions provided by a plugin to call a custom API endpoint, its likely that
extracting content will no work unless you we're to reproduce what is built into the calls you might want to replace.

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

Page level images and links can be extracted though a slightly different way than nav/footer as a page lives within the
site level. Below is a quick example of how to extract content from a

```js
// generic/pageType.js

// we recommend using a utility like lodash/get here to ensure properties exist a little bit easier.
import { get } from "lodash";

export default {
  extractImages(page) {
    const headerImage = get(page, "header.image.imageId");
    // or without lodash/get
    // const headerImage = page && page.header && page.header.image && page.header.image.imageId;

    // its also a good idea to ensure these variables have values before the return.
    return [headerImage];
  },
  extractLinks(page) {
    return [];
  },
};
```

To break down the above, first off, the above code will live inside a whppt plugins page type (`pageType`). The functions
provided are called when the page is saved, so all we need to do is simply return an Array of strings where each value is
the `imageId` for extracting Images or the `href` of any link we're saving.

The returned value for `extractImages` might look something like:

```js
["id1", "id2", "id76"];
```

while the returned value for `extractLinks` might look like:

```js
["/about", "https://www.whppt.org/"];
```

## Component Level Extraction

Component level extraction is similar to page level and also runs at the same time that page level extractions runs
(on page save). Below is an example of what a whppt component definition would look like.

```js
export default {
  key: "example",
  name: "Example Component",
  componentType: "ExampleComponent",
  init(content) {},
  extractImages(content) {
    const imageIds = [];

    return imageIds;
  },
  extractLinks(content) {
    const links = [];

    return links;
  },
};
```

The above functions work in the same way as page level extract\* functions and should return results in the same exact way.

## Metadata Level Extraction

Whppt out of the box has the ability to upload and select an image to be used in metadata, e.g. an Open Graph tag image.
This means that we would also want to know what images and links are used within our metadata. Whppt takes care of this
for you.

For example, when adjusting site settings level metadata, Whppt will extract its internally known images and links. If
you implement a custom site setting tab where you want to extract links and images, there is currently no way to do this
however this is something we will likely consider in the future releases of Whppt.

Page level metadata is also extracted on save, considering page settings are at a page level whenever a page is saved.
The page level metadata will also be extracted.
