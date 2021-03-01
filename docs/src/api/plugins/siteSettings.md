# Site Settings

- All API details of siteSettings here.
- Component props
- siteSetting mixin

```js 
// mixin
import { mapActions } from 'vuex';

export default {
props: {
    settings: { type: Object, required: true },
  },
  methods: {
    ...mapActions('whppt-nuxt/site', ['saveSiteSettings']),
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
