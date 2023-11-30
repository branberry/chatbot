import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "MongoDB RAG Framework",
  tagline: "Build RAG applications with MongoDB and Atlas Vector Search",
  staticDirectories: ["static"],

  // Set the production url of your site here
  url: "https://mongodb.github.io",
  baseUrl: "/chatbot/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mongodb", // Usually your GitHub org/user name.
  projectName: "chatbot", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mongodb/chatbot/tree/main/docs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            // spec: 'https://raw.githubusercontent.com/mongodb/chatbot/main/design-docs/openapi.yml',
            spec: "docs/server/openapi.yaml",
            route: "/server/openapi/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // TODO: add link to GH repo
    navbar: {
      title: "MongoDB RAG Framework",
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      // items: [
      //   {
      //     type: 'docSidebar',
      //     sidebarId: 'tutorialSidebar',
      //     position: 'left',
      //     label: 'Tutorial',
      //   },
      //   {to: '/blog', label: 'Blog', position: 'left'},
      //   {
      //     href: 'https://github.com/facebook/docusaurus',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      // ],
    },
    // TODO: add links
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Quick Start",
              to: "/quick-start",
            },
            {
              label: "Github",
              to: "https://github.com/mongodb/chatbot",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;