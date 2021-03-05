# Editor App

The Editor App component should wrap the primary view of your app. For example, in nuxt, it will wrap the `<nuxt />`
component. If you generated your project using the CLI tool, `create-whppt-app`, then this will already be done for you.

## Example

```vue
<template>
  <div>
    <w-editor-app>
      <nuxt />
    </w-editor-app>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
```

## Props

- List of props and their descriptions go here

## Classes / Styling

- List of available classes here.
