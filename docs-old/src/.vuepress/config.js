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
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    docsRepo: "whpptjs/docs",
    docsDir: "docs/src",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: true,
    nav: [
      {
        text: "Guide",
        link: "/guide/gettingStarted/prerequisites",
      },
      {
        text: "API",
        link: "/api/",
      },
      // {
      //   text: "Versions",
      //   items: [{ text: "Version 2", link: "https://v2.whppt.org" }],
      // },
      {
        text: "Github",
        items: [
          {
            text: "Whppt / Nuxt",
            link: "https://github.com/whpptjs/whppt-nuxt",
          },
          {
            text: "Whppt / Api Express",
            link: "https://github.com/whpptjs/whppt-api-express",
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            {
              title: "Getting started",
              sidebarDepth: 1,
              children: [
                "gettingStarted/prerequisites",
                "gettingStarted/installation",
                "gettingStarted/domains",
                // "gettingStarted/structure",
                "gettingStarted/pages",
                "gettingStarted/plugins",
                "gettingStarted/directives",
                "gettingStarted/components",
                "gettingStarted/store",
                "gettingStarted/authentication",
              ],
            },
            {
              title: "Diving Deeper",
              sidebarDepth: 1,
              children: ["divingDeeper/extractingContent"],
            },
            // {
            //   title: "Deployment",
            //   sidebarDepth: 1,
            //   children: ["deployment/environment"],
            // },
          ],
        },
      ],
      "/api/": [
        {
          title: "API",
          path: "/api/",
          collapsable: false,
          children: [
            {
              title: "Plugins",
              sidebarDepth: 1,
              children: [
                "plugins/pageType",
                "plugins/pageSettings",
                "plugins/siteSettings",
                "plugins/dashboard",
                "plugins/editors",
                "plugins/lifecycleHooks",
                "plugins/templates",
                "plugins/components",
              ],
            },
            {
              title: "Directives",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "directives/text",
                "directives/anchor",
                "directives/list",
                "directives/link",
                "directives/date",
                "directives/content",
                "directives/richText",
                "directives/formattedText",
                "directives/image",
                "directives/actions",
                "directives/custom",
              ],
            },
            {
              title: "Components",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "components/EditorApp",
                "components/Content",
                "components/WhpptLink",
                "components/PlainText",
                "components/RichText",
                "components/FormattedText",
                "components/Anchor",
              ],
            },
          ],
        },
      ],
    },
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/register-components",
    "vuepress-plugin-smooth-scroll",
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: "Tip",
      },
    ],
  ],
};
