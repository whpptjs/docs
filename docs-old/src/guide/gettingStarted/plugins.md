# Plugins

One of the core concepts of WhpptJS is the ability to create plugins.

## Getting started

Below is an example of what a whppt plugin can look like. Not everything below is required and plugins can provide only
the concepts that you require e.g. If your plugin doesn't need to register a site setting then you can simply omit the
`siteSettings` object.

```js
// ~/myWhpptPlugin.js
import MyPageSettingComponent from "./MyPageSettingComponent";
import MySiteSettingComponent from "./MySiteSettingComponent";
import MyDashboardComponent from "./MyDashboardComponent";
import MyEditorComponent from "./MyEditorComponent";

export default {
  name: "Generic",
  pageSettings: {
    name: "",
    label: "",
    component: MyPageSettingComponent,
  },
  siteSettings: {
    name: "",
    label: "",
    component: MySiteSettingComponent,
  },
  dashboard: {
    name: "",
    label: "",
    component: MyDashboardComponent,
  },
  pageType: {
    name: "",
    label: "",
    collection: { name: "" },
    templates: [],
    components: [],
  },
  editors: [
    {
      name: "",
      label: "",
      component: MyEditorComponent,
    },
  ],
};
```

### Registering the plugin with Whppt

To register our plugin with whppt we can create a [nuxt plugin](https://nuxtjs.org/docs/2.x/directory-structure/plugins/).
Below is an example of how we can register our whppt plugins.

```js
// ~/plugins/whpptPlugins.js
import myWhpptPlugin from "./myWhpptPlugin";

export default ({ app }) => {
  app.$whppt.addPlugin(myWhpptPlugin);
};
```

## Page Type

The `pageType` object is where we can define our available whppt pages. For example, we could make a `generic` pageType,
which might look like this:

```js
export default {
  name: "generic",
  label: "Generic",
  collection: { name: "pages" /* other collection options */ },
  contentSections: ["content-top", "content-bottom"],
  templates: [],
  components: [],
  extractImages: () => [],
  extractLinks: () => [],
};
```

The example above, once the plugin has been registered with whppt, will populate the `new page` menu with `generic` as a selectable page type.

[comment]: <> (TODO: needs more information on pageType, e.g. templates and components)

## Page Settings

- [api](/api/plugins/pageSettings)

Within whppt there is a menu that is available at a page level. The page settings menu has multiple built in tabs that
give users the ability to change settings such as metadata for an individual page. Using the `pageSettings` object
inside a plugin we can register our own tab to be displayed inside the page setting menu.

Registering a tab within page settings can be useful when you want custom control over page level settings.

The page settings dialog in WhpptJS will register multiple tabs out of the box for you. the default tabs include
General, SEO, Open Graph, Twitter and Roles. You can read more about these tabs in the [User Guide]().

## Site Settings

- [api](/api/plugins/siteSettings)

The `siteSettings` key is similar to `pageSettings` except that its concern will be at a site level rather than a single
page. For example if we wanted to allow the content manager of the site the ability to change a banner message on the site
that appears across all pages, we could use a `siteSettings` object to register a tab within the site settings menu.

The site settings dialog in WhpptJS will register multiple tabs out of the box for you. The default tabs include General,
Open Graph, Twitter, SEO, Redirects, Files and Roles. You can read more about these tabs in the [User Guide]().

## Dashboards

- [api](/api/plugins/dashboard)

The `dashboard` key is another way of registering a component into WhpptJS. Dashboard can expose a similar concept to the
`siteSettings` key, but the dashboard tabs should have a focus on visualising data e.g. tables or graphs. There's no
reason you can't put whatever you need within a dashboard tab.

The dashboard dialog in WhpptJS will register multiple tabs out of the box for you. The default tabs include General and
Users.

## Editors

- [api](/api/plugins/editors)

`editors` are a handy way to create custom directives and components that expose your own way to edit content within the
WhpptJS sidebar. Each editor can provide a custom directive but, if a directive isn't provided, the editor will register
one for you.

## Lifecycle Hooks

- [api](/api/plugins/lifecycleHooks)

WhpptJS plugins have multiple life cycle hooks. These are functions that will be ran either before or after certain pre-existing
actions like publishing a page. This can be handy to perform certain tasks like indexing a document into a search platform such
as Algolia.

## Templates

- [api](/api/plugins/templates)

Templates are a way to create default layouts for pages. In Whppt, page types can have multiple associated templates.
These templates provide a Vue component and can initialise data to be observable so that we can update page data in
whppt and directly see the changes as they're made.

Below is an example of what a template might look like on a Whppt plugin.

```js
const templates = [
  {
    key: "MyTemplate",
    label: "My Template",
    init({ $set }, page) {
      if (!page.contentItems) $set(page, "contentItems", []);

      return page;
    },
  },
];
```

Let's break down the above code. First up, the templates variable will need to be assigned to its corresponding `pageType`,
e.g. `pageType.templates = templates`.

Next lets look at the `key` attribute. The `key` attribute is how we tell our page which template to use. For example, if we
made a template like above with the key "MyTemplate" then over on our `_.vue` page we can import our template Vue
component and using the Vue `<component :is="" />` directive we can use the selected template.

For more on using templates inside pages, see [Pages](/guide/gettingStarted/pages).

## Components

- [api](/api/plugins/components)

Components or `pageType.components` within a plugin are a way to define which components will be available within `pageTypes`.
Below is an example of what the components can look like.

```js
const pageType = {
  /* rest of the pageType object goes here */
};

pageType.components = [
  {
    key: "MyComponent",
    label: "My Component",
    componentType: "People",
    init({ $set }, content) {
      return content;
    },
    previewInit({ $set }, content) {
      return content;
    },
    extractImages(content) {
      if (content.image) return [content.image.imageId]
      return []
    },
    extractLinks(content) {
      if (content.link) return [content.link.href]
      return []
    },
  },
];
```

Note: Prior to 2.0.0-54, base Whppt components such as `richText` were included on all `pageTypes` by default. In 2.0.0-54 and after, these components must be imported from `@whppt/nuxt` and added to each `pageType` that needs them.

Let's break down the above. The `componentType` attribute is what will be used internally with the
<router-link to="/guide/gettingStarted/components.html#content">Whppt Content Component</router-link>.

<!-- TODO: How to register components e.g. global or custom implementation -->

Components have 2 hooks that can be registered here. The most important one is the `init` hooks as seen about. We can
provide an init function to the component. This hook is used to create default data per components, this is necessary to
create observable data. In the case that we need to create nested data that needs to remain dynamic we can ensure the
data is registered here.

Below is an example of what the init hook might contain.

```js
init({ $set }, content = {}) {
  if(!content.header) $set(content, 'header', { title: '' }) // $set uses the Vue.set() method under the hood.

  return content; // ensure we return our data
}
```

The `previewInit` hook works the same as the `init` hook, however this hook will only be used when viewing the preview
of components. This allows you to set up better examples for each component.

The `extractImages` and `extractLinks` functions are also applicable to `pageTypes`, and are explained in more detail below.

## Extract Images

Extract Images or `pageType.extractImages` within a plugin are a way to retrieve any possible places that images can be used for specific `pageTypes`.
It's used for generating the page `dependencies`, which will keep track of which images are used and on what pages to prevent the deletion of an image in use.
Below is an example of what an extractImages function can look like, the only difference being that the component version receives `content` as its argument, while the `pageType` version receives the `page` object.

```js
const pageType = {
  /* rest of the pageType object goes here */
};

pageType.extractImages = (page) => {
  if (page.image) return [page.image.imageId]
  return []
};
```

The `extractImages` function receives the page as its only argument. 
If the `pageType` contains multiple templates with different locations for images, it's necessary to differentiate between them, e.g. with a switch statement for each template.
It should return an array of the `imageIds` of any possible images on the `pageType`. If there are none, then a function doesn't need to be provided.
Whppt will ignore any empty values, so every possible `imageId` can be returned from the function even if it may not be defined.


## Extract Links

Extract Links or `pageType.extractLinks` within a plugin are a way to retrieve any possible places that links can be used for specific `pageTypes`.
It's used for generating the page `dependencies`, which will keep track of which links are used and on what pages to prevent the deletion of a page that is referenced in any links on the site.
Below is an example of what an extractLinks function can look like

```js
const pageType = {
  /* rest of the pageType object goes here */
};

pageType.extractLinks = (page) => {
  if (page.link) return [page.link.href]
  return []
};
```

The `extractLinks` function receives the page as its only argument. 
If the `pageType` contains multiple templates with different locations for links, it's necessary to differentiate between them, e.g. with a switch statement for each template.
It should return an array of the `hrefs` of any possible links on the `pageType`. If there are none, then a function doesn't need to be provided.
Whppt will ignore any empty values, so every possible `href` can be returned from the function even if it may not be defined.
