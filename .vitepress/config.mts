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
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Dashboard", link: "/dashboard/index" },
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
        sidebar: [
          {
            text: "Dashboard",
            items: [
              { text: "Organizations", link: "/dashboard/organizations" },
              { text: "Projects", link: "/dashboard/projects" },
              { text: "Flags", link: "/dashboard/flags" },
            ],
          },
        ],
        outlineTitle: "On this page",
        docFooter: {
          prev: "Previous",
          next: "Next",
        },
      },
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
          { text: "Tableau de bord", link: "/fr/dashboard/index" },
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
        sidebar: [
          {
            text: "Tableau de bord",
            items: [
              { text: "Organisations", link: "/fr/dashboard/organizations" },
              { text: "Projets", link: "/fr/dashboard/projects" },
              { text: "Drapeaux", link: "/fr/dashboard/flags" },
            ],
          },
        ],
        outlineTitle: "Sur cette page",
        darkModeSwitchLabel: "Thème",
        sidebarMenuLabel: "Menu",
        returnToTopLabel: "Retour en haut",
        lastUpdatedText: "Dernière mise à jour",
        docFooter: {
          prev: "Précédent",
          next: "Suivant",
        },
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
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Dylan-Serli/ff-serli-site-vitrine",
      },
    ],
  },
});
