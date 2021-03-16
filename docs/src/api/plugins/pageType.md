# Page Type

<!-- TODO: name should be renamed to key -->

## name

A `pageType` can have a property called `name`. The name is a used as a key for each `pageType`. The `name` property should be Kebab case, Camel Case or Pascal Case.

### Usage

```js
{
  name: "my-page-type"; // or MyPageType, myPageType
}
```

## label

A `pageType` can have a property called `label`. The label is used to assign a display value to the `pageType`.
This is mainly used within the Whppt UI when selecting which page type to use.

### Usage

```js
{
  label: "MyDisplayValue";
}
```

## collection

`collection` is an object that can be passed declared on a `pageType`. The `collection` can hold 2 properties,
One is the `name` property while the other is `excludeFromSitemap`.

The `name` is a string value that contains a reference to a mongodb collection, this will be where any pages of this
`pageType` will be saved.

`excludeFromSitemap` is a boolean that will indicate where or not these pages will be included in the sitemap.
See [Sitemaps](/guide/gettingStarted/sitemaps) for more information on `excludeFromSitemap`.

### Usage

```js
{
  collection: { name: 'mycollection', excludeFromSitemap: false }
}
```

## contentSections

`contentSections` are a way to inform whppt of how many content sections your `pageType` may have.
This allows some features of whppt to function better, for example, Cloning a content component from one
page to another.

If for some reason you require multiple content section on a page, you can insert a string into the
`contentSections` array. The value will reflect the contents key, e.g. `pageType.contentTop`.

### Usage

```js
contentSections: ['contentTop', 'contentBottom'],
```

## templates

The `templates` key on a `pageType` is an array of available templates. This allows a single `pageType` to have multiple templates. Each template can initialise it's own data.
See the <RouterLink to="/guide/gettingStarted/plugins.html#templates">templates guide</RouterLink> or the [templates api docs](/api/plugins/templates) for more information.

## components

The `components` key on a `pageType` is another array, this array will contain available components for any pages created with the `pageType`. See
<RouterLink to="/guide/gettingStarted/plugins.html#templates">components guide</RouterLink> or the [components api docs](/api/plugins/components) for more information.
