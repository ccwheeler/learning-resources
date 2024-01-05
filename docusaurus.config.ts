import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "💻 Become a Full-Stack Software Engineer 💻",
  tagline: "All the 🤓 resources I've collected on my journey to Senior Developer 👩‍💻 🚀, it's all split up by topic 📚, so pick and choose what works for 🫵.",
  // favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://engineer-learning-resources.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "learnwithlottie", // Usually your GitHub org/user name.
  projectName: "learnwithlottie", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          sidebarCollapsed: true,

          // editUrl:
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: ["./src/css/custom.scss"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      // title: "",
      logo: {
        alt: "My Site Logo",
        src: "img/giphy2.gif",
      },
      items: [
      

        {
          type: "docSidebar",
          sidebarId: "frontendSidebar",
          position: "left",
          label: "Learn 🤓",
        }, 
        { to: "/docs/glossary", label: "Glossary 🔎", position: "left" },
        { to: "/docs/Topics/Design/Inspiration", label: "Inpsiration 💡", position: "left" },


           {
          type: "docSidebar",
          sidebarId: "componentsSidebar",
          position: "right",
          label: "Components 🖌️",
        }, 
        
        // {
        //   type: "docSidebar",
        //   sidebarId: "projectSidebar",
        //   position: "left",
        //   label: "Projects 🔨",
        // },
        
        // { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    // footer: {
    //   // style: "dark",
    //   links: [
    //     // {
    //     //   title: "Docs",
    //     //   items: [
    //     //     {
    //     //       label: "Tutorial",
    //     //       to: "/docs/intro",
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: "Community",
    //     //   items: [
    //     //     {
    //     //       label: "Stack Overflow",
    //     //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
    //     //     },
    //     //     {
    //     //       label: "Discord",
    //     //       href: "https://discordapp.com/invite/docusaurus",
    //     //     },
    //     //     {
    //     //       label: "Twitter",
    //     //       href: "https://twitter.com/docusaurus",
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: "More",
    //     //   items: [
    //     //     {
    //     //       label: "Blog",
    //     //       to: "/blog",
    //     //     },
    //     //     {
    //     //       label: "GitHub",
    //     //       href: "https://github.com/facebook/docusaurus",
    //     //     },
    //     //   ],
    //     // },
    //   ],
    //   // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      // theme: prismThemes.github,
      // darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
