# Pages

## Creating your Nuxt first page

In Nuxt, pages are simply a `.vue` file inside the `pages` directory. So if, we wanted to create a page we could 
simply create a file called `pages/index.vue`, fill it with a `<template></template>` and a `<script></script>`,
run our `dev` script and visit something like `http://localhost:3000/` in the browser and have a working page. 

## Using `_.vue` files for pages

Nuxt pages also allow for a few Server side hooks that can be run such as `asyncData` or `fetch`. 
Together, with these hooks and another awesome feature nuxt provides where we can use an `_`(underscore) for 
the name of our nuxt page, which works like a "catch all" in `vue-router`, we can dynamically load data for a whppt
page.

So lets go ahead and create a new file inside the `pages` directory, the file will be called `_.vue`. See [Nuxt Dynamic
Pages](https://nuxtjs.org/docs/2.x/directory-structure/pages#dynamic-pages) for more information on what nuxt is doing for us 
behinds the scenes.

Now, lets add some code into our `fetch` hook.

```vue
<script>
  import { mapState } from 'vuex';

  export default {
    name: 'MyWhpptPage',
    async fetch({ params, error, store }) {
      try {
        const slug = params.pathMatch; // grab the path from the router to be used to load our page.
        const pageType = 'page'; // the pageType reflects the pageType given to your Whppt Plugin Page Type. 
        const collection = 'pages'; // the collection reflects the collection given to your Whppt Plugin.
        
        await store.dispatch('whppt/page/loadPage', { slug, pageType, collection });
      } catch(err) {
        error(err);
      }
    },
    computed: {
      ...mapState('whppt/page', ['page'])
    }
  }
</script>
```

Alright, lets break down what's happening above. First off, we have a `vuex action` being dispatched. Whppt provides a few 
`vuex modules` for us to leverage. Read more about the store modules [here](/guide/gettingStarted/store). In this case we're 
accessing the `loadPage` action from the `whppt/page` store module.

`loadPage` takes in 1 argument, this is an object that can have 3 properties, `slug`, `pageType` and `collection`. Firstly, the 
slug will come from your pathMatch, e.g. if I visit `/hello` in the browser my slug will be `hello`. 

Next, we have the `pageType` and the `collection`. At least one of these is needed to find the correct data to load. `pageType` 
will be a reference to the Whppt plugin's `pageType` and the `collection` will refer to the plugin's collection. It is entirely
up to you as to which one use when loading your page. 

With the above, there's one thing missing, we're trying to load something that does not yet exist. In the next section we'll look 
at getting our first [Whppt plugin](/guide/gettingStarted/plugins) setup and how we can create a page so that the above setup will work.

[comment]: <> (TODO: Explain Templates and component is directve usage)
