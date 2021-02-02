# Components

When you register `@whppt/nuxt` with a nuxt app, a series of components will be registered globally within your Vue 
app. These components are either a necessity, e.g. the [Editor App](#editor-app), which is required to show any of the
editor menus/components. While others are included to get you up and running faster with editable content.

## Editor App

The Editor App component should wrap the primary view of your app. For example, in nuxt, it will wrap the `<nuxt />` 
component. If you generated your project using the CLI tool, `create-whppt-app`, then this will already be done for you.

### Example
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
    name: 'DefaultLayout'
  }
</script>
```

### Props
 
- List of props and their descriptions go here

### Classes / Styling

- List of available classes here.

## Content 
`<w-content></w-content>`

Properties: `contentItems<Array>`

## Whppt Link
`<whppt-link></whppt-link>`

Properties: `to<Object>`

## Plain Text 
`<w-plain-text></w-plain-text>`

Properties: `content<Object>`, `property<String>`

## Rich Text 
`<w-rich-text></w-rich-text>`

Properties: `content<Object>`, `property<String>`

## Formatted Text
`<w-formatted-text></w-formatted-text>`

Properties: `content<Object>`, `property<String>`

## Anchor
`<w-anchor></w-anchor>`

Properties: `content<Object>`, `property<String>`


