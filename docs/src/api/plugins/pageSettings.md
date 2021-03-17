# Page Settings

The `pageSettings` value can be either an Object or an Array of Objects. A single Object will register a single
`pageSetting` tab into the Whppt Page setting dialogue while an Array can register multiple tabs.

```js
import MyPageSettingComponentA from '../path/to/MyPageSettingComponentA';
import MyPageSettingComponentB from '../path/to/MyPageSettingComponentB';

export default {
  // Register a single tab
  pageSettings: {
    name: "themes",
    label: "Themes",
    component: MyPageSettingComponentA,
  }

  // or register multiple...
  pageSettings: [
    {
      name: "themes",
      label: "Themes",
      component: MyPageSettingComponentA,
    },
    {
      name: "language",
      label: "Language",
      component: MyPageSettingComponentB,
    }
  ],
}
```

## Name

<!-- TODO: name description -->

### Usage

```js
export default {
  pageSettings: {
    name: "themes",
  },
};
```

## Label

<!-- TODO: label description -->

### Usage

```js
export default {
  pageSettings: {
    label: "Themes",
  },
};
```

## Component

<!-- TODO: component description -->

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

<!-- TODO: usage and description -->
