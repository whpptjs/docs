# Page Settings

The `pageSettings` value can be either an Object or an Array of Objects. A single Object will register a single
`pageSetting` tab into the Whppt Page setting dialogue while an Array can register multiple tabs.

```js
import MyPageSettingComponentA from '../path/to/MyPageSettingComponentA';
import MyPageSettingComponentB from '../path/to/MyPageSettingComponentB';

export default {
  // Register a single tab
  pageSettings: {
    key: "themes",
    label: "Themes",
    component: MyPageSettingComponentA,
  }

  // or register multiple...
  pageSettings: [
    {
      key: "themes",
      label: "Themes",
      component: MyPageSettingComponentA,
    },
    {
      key: "language",
      label: "Language",
      component: MyPageSettingComponentB,
    }
  ],
}
```

## Key

The `key` property is used as an identifier for each page setting. This value should be a unique string and be Kebab
case, Camel case or Pascal case.

### Usage

```js
export default {
  pageSettings: {
    key: "themes",
  },
};
```

## Label

The `label` property is used for display purposes, for example the name of the page setting tab.

### Usage

```js
export default {
  pageSettings: {
    label: "Themes",
  },
};
```

## Component

The `component` key accepts a Vue component. This component is what is rendered inside the `pageSettings` dialogue
tab that will be registered for you.

### Usage

```js
import MyPageSettingComponent from "../path/to/MyPageSettingComponent";

export default {
  pageSettings: {
    component: MyPageSettingComponent,
  },
};
```

## Page Settings Mixin

The page settings mixin can be imported into and used by your page settings component to expose some useful
functionality that you'll likely need within your component.

### Usage

```vue
<script>
import PageSettingsMixin from "@whppt/nuxt/lib/util/mixins/pageSettings";

export default {
  name: "MyPageSettingComponent",
  mixins: [PageSettingsMixin],
};
</script>
```

### Props

| Name | Type   | Description                                                                              |
| ---- | ------ | ---------------------------------------------------------------------------------------- |
| page | Object | The current page object, Settings can be applied to the page e.g. `page.myCustomSetting` |

### Methods

| Name         | Args   | Description                                                                       |
| ------------ | ------ | --------------------------------------------------------------------------------- |
| saveSettings | (page) | Merge your changes within the page argument with the current page state and save. |
