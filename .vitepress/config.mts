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
        search: {
          provider: "local",
          options: {},
        },
        nav: [
          { text: "Home", link: "/" },
          { text: "Dashboard", link: "/dashboard/index" },
          {
            text: "SDKs",
            items: [
              { text: "Presentation", link: "/sdk/" },
              { text: "Server", link: "/sdk/server" },
              { text: "Client", link: "/sdk/client" },
            ],
          },
          { text: "API", link: "/api" },
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
          {
            text: "SDKs",
            items: [
              { text: "Presentation", link: "/sdk/" },
              { text: "Server", link: "/sdk/server" },
              { text: "Client", link: "/sdk/client" },
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
          { text: "Accueil", link: "/fr/index" },
          { text: "Tableau de bord", link: "/fr/dashboard/index" },
          {
            text: "SDKs",
            items: [
              { text: "Présentation", link: "/fr/sdk/" },
              { text: "Serveur", link: "/fr/sdk/server" },
              { text: "Client", link: "/fr/sdk/client" },
            ],
          },
          { text: "API", link: "/fr/api" },
          { text: "Prix", link: "/fr/pricing" },
          { text: "Contact", link: "/fr/contact" },
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
          {
            text: "SDKs",
            items: [
              { text: "Présentation", link: "/fr/sdk/" },
              { text: "Serveur", link: "/fr/sdk/server" },
              { text: "Client", link: "/fr/sdk/client" },
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
