# Dashboard

The `dashboard` value can be either an Object or an Array of Objects. A single Object will register a single
`dashboard` tab into the Whppt Dashboard while an Array can register multiple tabs.

```js
import MyDashboardComponentA from '../path/to/MyDashboardComponentA';
import MyDashboardComponentB from '../path/to/MyDashboardComponentB';

export default {
  // Register a single tab
  dashboard: {
    key: "themes",
    label: "Themes",
    component: MyDashboardComponentA,
  }

  // or register multiple...
  dashboard: [
    {
      key: "themes",
      label: "Themes",
      component: MyDashboardComponentA,
    },
    {
      key: "language",
      label: "Language",
      component: MyDashboardComponentB,
    }
  ],
}
```

## Key

The `key` property is used as an identifier for each dashboard. This value should be a unique string and be Kebab
case, Camel case or Pascal case.

### Usage

```js
export default {
  dashboard: {
    key: "themes",
  },
};
```

## Label

The `label` property is used for display purposes, for example the name of the dashboard.

### Usage

```js
export default {
  dashboard: {
    label: "Themes",
  },
};
```

## Component

The `component` key accepts a Vue component. This component is what is rendered inside the dashboard tab that will be
registered for you.

### Usage

```js
import MyDashboardComponent from "../path/to/MyDashboardComponent";

export default {
  siteSettings: {
    component: MyDashboardComponent,
  },
};
```
