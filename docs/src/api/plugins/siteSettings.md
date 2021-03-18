# Site Settings

The `siteSettings` value can be either an Object or an Array of Objects. A single Object will register a single
`siteSetting` tab into the Whppt site setting dialogue while an Array can register multiple tabs.

```js
import MySiteSettingComponentA from '../path/to/MySiteSettingComponentA';
import MySiteSettingComponentB from '../path/to/MySiteSettingComponentB';

export default {
  // Register a single tab
  siteSettings: {
    key: "themes",
    label: "Themes",
    component: MySiteSettingComponentA,
  }

  // or register multiple...
  siteSettings: [
    {
      key: "themes",
      label: "Themes",
      component: MySiteSettingComponentA,
    },
    {
      key: "language",
      label: "Language",
      component: MySiteSettingComponentB,
    }
  ],
}
```

## Key

The `key` property is used as an identifier for each site setting. This value should be a unique string and be Kebab
case, Camel case or Pascal case.

### Usage

```js
export default {
  siteSettings: {
    key: "themes",
  },
};
```

## Label

The `label` property is used for display purposes, for example the name of the site setting tab.

### Usage

```js
export default {
  siteSettings: {
    label: "Themes",
  },
};
```

## Component

The `component` key accepts a Vue component. This component is what is rendered inside the `siteSettings` dialogue
tab that will be registered for you.

### Usage

```js
import MySiteSettingComponent from "../path/to/MySiteSettingComponent";

export default {
  siteSettings: {
    component: MySiteSettingComponent,
  },
};
```

## Site Settings Mixin

The site settings mixin can be imported into and used by your site settings component to expose some useful
functionality that you'll likely need within your component.

### Usage

```vue
<script>
import SiteSettingsMixin from "@whppt/nuxt/lib/util/mixins/siteSettings";

export default {
  name: "MySiteSettingComponent",
  mixins: [SiteSettingsMixin],
};
</script>
```

### Props

| Name     | Type   | Description                                                                                                              |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| settings | Object | The current site settings object. It is recommended not to mutate this directly to avoid mutating state outside of vuex. |

### Methods

| Name         | Args       | Description                                                                                    |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------- |
| saveSettings | (settings) | Merge your changes within the settings argument with the current site settings state and save. |
