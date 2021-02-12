# Whppt Plugins

One of the core concepts of WhpptJS is the ability to create plugins.

## Getting started

Below is an example of what a whppt plugin can look like. Not everything below is required and plugins can provide only
the concepts that you require e.g. If your plugin doesn't need to register a site setting then you can simply omit the
`siteSettings` object.

```js
// ~/myWhpptPlugin.js
import MyPageSettingComponent from './MyPageSettingComponent';
import MySiteSettingComponent from './MySiteSettingComponent';
import MyDashboardComponent from './MyDashboardComponent';
import MyEditorComponent from './MyEditorComponent';

export default {
  name: "Generic",
  pageSettings: {
    name: '',
    label: '',
    component: MyPageSettingComponent
  },
  siteSettings: {
    name: '',
    label: '',
    component: MySiteSettingComponent
  },
  dashboard: {
    name: '',
    label: '',
    component: MyDashboardComponent
  },
  pageType: {
    name: "",
    label: "",
    collection: {name: ""},
    templates: [],
    components: [],
  },
  editors: [
    {
      name: '',
      label: '',
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
import myWhpptPlugin from './myWhpptPlugin';

export default ({ app }) => {
  app.$whppt.addPlugin(myWhpptPlugin);
};
```

## Page Type

The `pageType` object is where we can define our available whppt pages. For example, we could make a `generic` pageType,
which might look like this:

```js 
export default {
  name: 'generic',
  label: 'Generic',
  collection: {name: 'pages', /* other collection options */},
  templates: [],
  componentes: [],
}
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
    key: 'myTemplate',
    label: 'My Template',
    init({ $set }, page) {
      if (!page.contentItems) $set(page, 'contentItems', []);
      
      return page;
    }
  }
]
```

Let's break down the above code. First up, the templates variable will need to be assigned to its corresponding `pageType`, 
e.g. `pageType.templates = templates`.

## Components

- key
- name
- componentType
- init hook
- still need to import components vue file into the template or register globally
