# Whppt Plugins

- About plugins.

## Getting started

```js
export default {
  name: "Generic",
  pageSettings: {},
  pageType: {
    name: "",
    label: "",
    collection: { name: "" },
    templates: [],
    components: [],
  },
  editors: [],
};
```

## Page Types

- name
- label
- collection object
- templates

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
