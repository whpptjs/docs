# Whppt Action

> v-whppt-actions

## Usage

```vue
<template>
  <MyComponent v-whppt-actions="{ content, actions }"></MyComponent>
</template>

<script>
export default {
  props: {
    content: Object,
  },
  computed: {
    actions() {
      return [
        { label: "MyAction", classes: "", action: ({ store, el, content, ev }) => console.log(store, el, content, ev) ) }
      ];
    },
  },
};
</script>
```

## Description

The Whppt actions directives is used to insert a floating menu for components. Whppt uses this directive inside it's own `Content` component so that each component inside will receive multiple actions out of the box. Custom actions can be passed to the directive to create custom actions for components. For example we could create a custom action that could clear the value of a field inside our component.

## Arguments

### content

<!-- TODO: content arg -->

### Actions

<!-- TODO: action arg -->

## Styles

<!-- TODO: Icons -->
<!-- TODO: Overriding the styles -->
