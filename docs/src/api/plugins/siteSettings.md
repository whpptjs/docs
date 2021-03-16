# Site Settings

<!-- TODO: All API details of siteSettings here. -->
<!-- TODO: Component props -->

<!-- TODO: Explain mixin below and how to use it -->

```js
// mixin
import { mapActions } from "vuex";

export default {
  props: {
    settings: { type: Object, required: true },
  },
  methods: {
    ...mapActions("whppt-nuxt/site", ["saveSiteSettings"]),
    saveSettings(settings) {
      const siteSettings = {
        ...this.settings,
        ...settings,
      };

      return this.saveSiteSettings({ siteSettings });
    },
  },
};
```
