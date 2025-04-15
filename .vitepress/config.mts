import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "FF Serli",
  description: "Documentation for the FF Serli dashboard",
  head: [["link", { rel: "icon", href: "/assets/icone_super_serli.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    logo: {
      light: "/assets/icone_super_serli.png",
      dark: "/assets/icone_super_serli.png",
      style: "transition: transform 0.3s ease;",
    },

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Dylan-Serli/ff-serli-site-vitrine",
      },
    ],
  },
});
