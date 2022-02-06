# Whppt Content

> v-whppt-content

```vue
<template>
  <div v-whppt-content="myComponentData.content" :whitelist="whitelist" :blacklist="blacklist">
    <div v-for="(content, index) in myComponentData.content" :key="index">
      <component :is="content.componentType" :content="content"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhpptDateDirectiveExample",
  data: () => ({
    myComponentData: {
      content: [],
    },
    whitelist: ['Anchor'],
    blacklist: []
  }),
};
</script>
```
