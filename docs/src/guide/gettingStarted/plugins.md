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
    name: ''
    label: '',
    component: MyPageSettingComponent
  },
  siteSettings: {
    name: ''
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

To register our plugin with whppt we can create a nuxt plugin that will expose some functionality we need to tell whppt
about our whppt plugin. Below is an example of how we can register our whppt plugins using a nuxt plugin.

```js
// ~/plugins/whpptPlugins.js
import myWhpptPlugin from './myWhpptPlugin';

export default ({app}) => {
  app.$whppt.addPlugin(myWhpptPlugin);
};
```

## More on plugins

Ok, now that we know how to create and register a plugin we can dive deeper into what makes up a plugin.

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

The example above, once the plugin is registered with whppt, will populate the `new page` menu with `generic` as a selectable page type.

- TODO: needs more information on pageType, e.g. templates and components

### pageSettings

Within whppt there is a menu that is available at a page level. The page settings menu has multiple built in tabs that
give users the ability to change settings such as metadata for an individual page. Using the `pageSettings` object
inside a plugin we can register our own tab to be displayed inside the page setting menu.

Registering a tab within page settings can be useful when you want custom control over page level settings. You can
learn more about the pageSettings API [here](/api/plugins/pageSettings).

### siteSettings

### dashboard

### editors

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
