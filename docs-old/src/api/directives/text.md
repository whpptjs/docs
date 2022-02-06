# Whppt Text

> v-whppt-text

```vue
<template>
  <div>
    <div v-whppt-text="content" data-property="myProperty">{{ myText }}</div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: () => ({
    myText: "",
    content: {
      myProperty: "",
    },
  }),
};
</script>
```
