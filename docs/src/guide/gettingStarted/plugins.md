---
sidebarDepth: 3
---

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

## More on plugins

Ok, now we know how to create and register a plugin we can dive deeper into what makes up a plugin.

### pageType

The pageType object is where we can define our available whppt pages. For example, we could make a `generic` pageType,
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

- TODO: needs more information on pageType, e.g. templates and components

### pageSettings

> [api](/api/plugins/pageSettings)

Within whppt there is a menu that is available at a page level. The page settings menu has multiple built in tabs that
give users the ability to change settings such as metadata for an individual page. Using the `pageSettings` object
inside a plugin we can register our own tab to be displayed inside the page setting menu.

Registering a tab within page settings can be useful when you want custom control over page level settings.

The page settings dialog in WhpptJS will register multiple tabs out of the box for you. the default tabs include
General, SEO, Open Graph, Twitter and Roles. You can read more about these tabs in the [User Guide]().

### siteSettings

> [api](api/plugins/siteSettings)

The `siteSettings` key is similar to `pageSettings` except that its concern will be at a site level rather than a single 
page. For example if we wanted to allow the content manager of the site the ability to change a banner message on the site 
that appears across all pages, we could use a `siteSettings` object to register a tab within the site settings menu.

The site settings dialog in WhpptJS will register multiple tabs out of the box for you. The default tabs include General,
 Open Graph, Twitter, SEO, Redirects, Files and Roles. You can read more about these tabs in the [User Guide]().

### dashboard

> [api](api/plugins/dashboard)

The `dashboard` key is another way of registering a component into WhpptJS. Dashboard can expose a similar concept to the
`siteSettings` key, but the dashboard tabs should have a focus on visualising data e.g. tables or graphs. There's no 
reason you can't put whatever you need within a dashboard tab. 

The dashboard dialog in WhpptJS will register multiple tabs out of the box for you. The default tabs include General and 
Users. 

### editors

> [api](api/plugins/editors)

`editors` are a handy way to create custom directives and components that expose your own way to edit content within the
WhpptJS sidebar. Each editor can provide a custom directive but, if a directive isn't provided, the editor will register
one for you. 

### lifecycle hooks

- beforePublish
- afterPublish
- beforeUnpublish
- afterUnpublish

## Templates

- vue templates
- key
- label
- init hooks and why

## Components

- key
- name
- componentType
- init hook
- still need to import components vue file into the template or register globally
