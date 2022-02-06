# Directives

Directives are a core concept of whppt. These directives and their implementation are what makes Whppt so dynamic
and editable in real time.

In this section of the guide, we'll look at what the directives do, the directives that Whppt provides and how you
can easily implement your own via Whppt plugins.

## What are whppt directives?

Whppt directives are simply just a way we've utilised Vue directives to allow components and data to be selected.
We can simply have a Vue component, apply a directive to it, pass the data belonging to the component to the directive
and trigger the Whppt or your custom editors.

## Whppt provided directives

Out of the box, Whppt registers multiple directives ready to be used. Below is a list of Whppt directives
that will be available to use. To find out more about each directive, follow the link through to see their API and
any examples of usage.

- [Whppt Text](/api/directives/text)
- [Whppt Anchor](/api/directives/anchor)
- [Whppt List](/api/directives/list)
- [Whppt Link](/api/directives/link)
- [Whppt Date](/api/directives/date)
- [Whppt Content](/api/directives/content)
- [Whppt Rich Text](/api/directives/richText)
- [Whppt Formatted Text](/api/directives/formattedText)
- [Whppt Image](/api/directives/image)
- [Whppt Actions](/api/directives/actions)

## Custom directives

In Whppt there are 2 types of custom directives, one is an auto generated for you when you provide `editors`
to a plugin (<RouterLink to="/guide/gettingStarted/plugins.html#editors">see editors</RouterLink>) while the other
can be completely custom.

Below is an example of supplying a custom directive to an editor:

```js
import Vue from "vue";

export default (
  { store, app: { $whppt } },
  menuIsInState,
  MENUSTATES,
  definition
) => {
  Vue.directive(definition.name, {});
};
```

To learn more about custom directives in whppt see the API documentation [here](/api/directives/custom).
