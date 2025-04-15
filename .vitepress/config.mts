import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "FF Serli",
  description: "Documentation for the FF Serli dashboard",
  head: [["link", { rel: "icon", href: "/assets/icone_super_serli.png" }]],
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    fr: {
      label: "Français",
      lang: "fr",
      themeConfig: {
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "Rechercher",
              },
              modal: {
                noResultsText: "Pas de résultats",
                resetButtonTitle: "Réinitialiser la recherche",
                backButtonTitle: "Retour",
                displayDetails: "Afficher la liste détaillée",
                footer: {
                  closeText: "fermer",
                  selectText: "selectionner",
                  navigateText: "naviguer",
                },
              },
            },
          },
        },
        nav: [
          { text: "Accueil", link: "/" },
          { text: "Dashboard", link: "/dashboard" },
          { text: "API", link: "/api" },
          {
            text: "SDKs",
            items: [
              { text: "Serveur", link: "/sdk/server" },
              { text: "Client", link: "/sdk/client" },
            ],
          },
          { text: "Prix", link: "/pricing" },
          { text: "Contact", link: "/contact" },
        ],
      },
    },
  },
  themeConfig: {
    search: {
      provider: "local",
      options: {},
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Dashboard", link: "/dashboard" },
      { text: "API", link: "/api" },
      {
        text: "SDKs",
        items: [
          { text: "Server", link: "/sdk/server" },
          { text: "Client", link: "/sdk/client" },
        ],
      },
      { text: "Pricing", link: "/pricing" },
      { text: "Contact", link: "/contact" },
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
