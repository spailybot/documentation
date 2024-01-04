import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const GITHUB_REPOSITORY_URL = "https://github.com/spailybot/documentation";

const config: Config = {
    title: "SpailyBot documentation",
    tagline: "Dinosaurs are cool",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://documentation.spailybot.app",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "spailybot", // Usually your GitHub org/user name.
    projectName: "documentation", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    trailingSlash: false,

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "fr",
        locales: ["fr", "en"],
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
                    editUrl: ({ docPath, locale }) => {
                        return `${GITHUB_REPOSITORY_URL}/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
                    },
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/spailybot/documentation/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "SpailyBot documentation",
            logo: {
                alt: "SpailyBot Logo",
                src: "img/icon.svg",
            },
            items: [
                // {
                //     type: "docSidebar",
                //     sidebarId: "main",
                //     position: "left",
                //     label: "LeftSidebar",
                // },
                // { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://app.spailybot.app/",
                    label: "website",
                    position: "right",
                },
            ],
        },
        footer: {
            // style: "dark",
            // links: [
            //     {
            //         title: "Docs",
            //         items: [
            //             {
            //                 label: "Tutorial",
            //                 to: "/docs/intro",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Community",
            //         items: [
            //             {
            //                 label: "Stack Overflow",
            //                 href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //             },
            //             {
            //                 label: "Discord",
            //                 href: "https://discordapp.com/invite/docusaurus",
            //             },
            //             {
            //                 label: "Twitter",
            //                 href: "https://twitter.com/docusaurus",
            //             },
            //         ],
            //     },
            //     {
            //         title: "More",
            //         items: [
            //             {
            //                 label: "Blog",
            //                 to: "/blog",
            //             },
            //             {
            //                 label: "GitHub",
            //                 href: "https://github.com/facebook/docusaurus",
            //             },
            //         ],
            //     },
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} SpailyBot, Built with <span title="love">❤️</span>, <a href="https://github.com/spailybot/documentation/graphs/contributors" title="community">👥</a> and <a href=\"https://docusaurus.io/\"><img style=\"top: 2px;position: relative;\" width=\"16\" src=\"https://docusaurus.io/fr/img/docusaurus_keytar.svg\" title=\"Docusaurus\"/></a>.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
