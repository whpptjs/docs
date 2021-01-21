const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "WhpptJS",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  theme: "default-prefers-color-scheme",
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    prefersTheme: "dark",
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/gettingStarted/prerequisites",
      },
      {
        text: "Api",
        link: "/api/",
      },
      // {
      //   text: "Versions",
      //   items: [{ text: "Version 2", link: "https://v2.whppt.org" }],
      // },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            {
              title: "Getting started",
              collapsable: false,
              sidebarDepth: 1,
              children: [
                "gettingStarted/prerequisites",
                "gettingStarted/installation",
                "gettingStarted/structure",
                "gettingStarted/pages",
                "gettingStarted/directives",
                "gettingStarted/components",
                "gettingStarted/store",
                "gettingStarted/authentication",
                "gettingStarted/plugins",
              ],
            },
            {
              title: "Deployment",
              collapsable: false,
              sidebarDepth: 1,
              children: ["deployment/environment"],
            },
          ],
        },
      ],
      "/api/": [
        {
          title: "API",
          path: "/api/",
          collapsable: false,
          children: ["config", "users/cli", "domains"],
        },
      ],
    },
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom", "vuepress-plugin-smooth-scroll"],
};
