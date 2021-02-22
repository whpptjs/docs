# Store

The Store is a huge part of how whppt allows you to edit content and directly see the results. So that being said 
Vuex and a store is a requirement of any Whppt application.

First off this does mean that a `store/index.js` file is also required, see Nuxt Docs for more on 
[setting up a store](https://nuxtjs.org/docs/2.x/directory-structure/store/) in Nuxt. 

Most of what happens within the store is abstracted away from the end user, however there is a few cases when the end
user may need to trigger certain vuex actions or access certain states from the registered modules.

In some cases you may want to manually update the selected components state (the selected component is the last
selected component clicked in the browser via the editor selector). This can be useful when registering your own editor 
and whppt components. Editing via the store, rather than using `v-model` and the `data` method exposed in Vue components is 
to avoid mutation errors that Vuex with throw when attempting to mutate state outside a mutation. 


## Useful Actions 

Below is 2 actions that can be called to mutate state for selected components and how they can be used.

### setSelectedComponentState

> whppt/editor/setSelectedComponentState

`setSelectedComponentState` is used for changing the value of something on the selected component. For example, if we had
a `header` component and, we wanted to update the title attribute within the header we can use `setSelectedComponentState`
(providing the header is the selected component).

```vue
<script>
import { mapActions } from 'vuex';

export default { 
  props: {
    content: {
      type: Object,
      required: true,
    }
  }
  methods: {
    ...mapActions('whppt/editor', ['setSelectedComponentState']),
    updateTitle() {
      this.setSelectedComponentState({ path: 'title', value: 'updated title' });
    }
  }
}
</script>
```

### pushSelectedComponentState

> whppt/editor/pushSelectedComponentState

`pushSelectedComponentState` is similar to `setSelectedComponentState` except that its purpose is reserved for 
pushing new items into an existing array, similar to `Array.push()` in javascript. The `path` in this case needs to
point to an array, otherwise it will error and you should likely use `setSelectedComponentState` in that case.

```vue
<script>
import { mapActions } from 'vuex';

export default { 
  props: {
    content: {
      type: Object,
      required: true,
    }
  }
  methods: {
    ...mapActions('whppt/editor', ['pushSelectedComponentState']),
    myMethod(value) {
      this.pushSelectedComponentState({ path: 'myArray', value,  });
    }
  }
}
</script>
```

## Registered Modules

Below is a list of Vuex modules that Whppt will register. Click through to view their API pages.

- [Page](/api/store/page)
- [Editor](/api/store/editor)
- [Site](/api/store/site)
- [Security](/api/store/security)
- [Config](/api/store/config)
- [Dashboard](/api/store/dashboard)
