# Features

Little bit of information about the features of WhpptJS.

## Directives

Little bit of info here about directives, why, what, how etc.

### v-whppt-text

```vue
<template>
 <div>
   <div v-whppt-text="content" data-property="myProperty">{{ myText }}</div>
 </div>
</template>

<script>
export default {
 name: 'MyComponent',
 data: () => ({
   myText: '',
   content: {
     myProperty: '',
   },
 }),
};
</script>
```

### v-whppt-default

```vue
<template>
 <div v-whppt-default="myComponentData">
   This is an example for the v-whppt-default directive.
 </div>
</template>

<script>
export default {
 name: 'MyComponent',
 data: () => ({
   myComponentData: {},
 }),
};
</script>
```

### v-whppt-anchor

```vue
<template>
 <div>
   <a :href="`#${myComponentData.anchor}`">Go to anchor</a>
   <!-- ... -->
   <div v-whppt-anchor="myComponentData" data-property="anchor">
     <span :id="myComponentData.anchor">{{ content.anchor }}</span>
   </div>
 </div>
</template>

<script>
export default {
 name: 'MyComponent',
 data: () => ({
   myComponentData: {
     anchor: '',
   },
 }),
};
</script>
```

### v-whppt-list

```vue
<template>
 <div v-whppt-list="{ data: myComponentData, addNew: pushNewToListItems }" data-property="listItems">
   <div v-for="(listItem, index) in myComponentData.listItems" :key="index">
     {{ listItem.text }}
   </div>
 </div>
</template>

<script>
export default {
 name: 'MyComponent',
 data: () => ({
   myComponentData: {
     listItems: [],
   },
 }),
 methods: {
   pushNewToListItems() {
     this.myComponentData.listItems.push({ text: 'New List Item' });
   },
 },
};
</script>
```

### v-whppt-link
```vue
<template>
 <div v-whppt-link="myComponentData.link">
   <whppt-link :to="myComponentData.link">{{ content.link.text }}</whppt-link>
 </div>
</template>

<script>
export default {
 name: 'WhpptLinkDirectiveExample',
 data: () => ({
   myComponentData: {
     link: { text: 'About', href: '/about', type: 'page' },
   },
 }),
};
</script>
```

### v-whppt-date

```vue
<template>
 <div v-whppt-date="myComponentData" data-property="date">
   <div>{{ myComponentData.date }}</div>
 </div>
</template>

<script>
export default {
 name: 'WhpptDateDirectiveExample',
 data: () => ({
   myComponentData: {
     date: '',
   },
 }),
};
</script>
```

### v-whppt-content
```vue
<template>
 <div v-whppt-content="myComponentData.content" data-whitelist="Anchor">
   <div v-for="(content, index) in myComponentData.content" :key="index">
     <component :is="content.displayType" :content="content"></component>
   </div>
 </div>
</template>

<script>
export default {
 name: 'WhpptDateDirectiveExample',
 data: () => ({
   myComponentData: {
     content: [],
   },
 }),
};
</script>
```

### v-whppt-rich-text

```vue
<template>
 <div
   v-whppt-formatted-text="myComponentData"
   data-property="richText"
   data-hide-menu
   data-hide-style
   data-hide-headers
   data-hide-lists
   data-hide-links
   class="w-full h-40 bg-purple-500"
 >
   <div v-html="myComponentData.richText" />
 </div>
</template>

<script>
export default {
 name: 'WhpptRichTextDirectiveExample',
 data: () => ({
   myComponentData: {
     richText: '',
   },
 }),
};
</script>
```

### v-whppt-formatted-text

```vue
<template>
 <div v-whppt-formatted-text="myComponentData" data-property="formattedText">
   <div class="richText" v-html="myComponentData.formattedText" />
 </div>
</template>

<script>
export default {
 name: 'WhpptFormattedTextDirectiveExample',
 data: () => ({
   myComponentData: {
     formattedText: '',
   },
 }),
};
</script>
```

### v-whppt-image
```vue
<template>
 <div
   v-whppt-image="myComponentData"
   data-sizes='{ "desktop": { "width": 300, "height": 300, "quality": 1, "aspectRatio": 1 } }'
 >
   <img
     :src="$whppt.getImage(myComponentData.image.imageId, 300, 300, myComponentData.image.desktop)"
     :alt="myComponentData.image.alt"
   />
 </div>
</template>

<script>
export default {
 name: 'WhpptImageDirectiveExample',
 data: () => ({
   myComponentData: {
     image: {
       imageId: '',
       alt: '',
     },
   },
 }),
};
</script>
```

## Components

Little bit of information about the built-in WhpptJS components and how to use them.
