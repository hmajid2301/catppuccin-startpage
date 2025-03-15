// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "London",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://homepage.homelab.haseebmajid.dev",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "Home Lab",
              url: "https://homepage.bare.homelab.haseebmajid.dev",
              icon: "home",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming()",
              url: "https://musicforprogramming.net/sixty",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "Mail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "Calendar",
              url: "https://calendar.proton.me/",
              icon: "calendar",
              icon_color: palette.peach,
            },
            {
              name: "Monkey Type",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              iconColor: palette.maroon,
            },
            {
              name: "My Blog",
              url: "https://haseebmajid.dev",
              icon: "article",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Home Lab",
          links: [
            {
              name: "Authentik",
              url: "https://www.authentik.haseebmajid.dev",
              icon: "brand-auth0",
              icon_color: palette.green,
            },
            {
              name: "Net Data",
              url: "https://netdata.bare.homelab.haseebmajid.dev",
              icon: "barbell",
              icon_color: palette.peach,
            },
            {
              name: "Grafana",
              url: "https://grafana.bare.homelab.haseebmajid.dev",
              icon: "device-heart-monitor",
              icon_color: palette.maroon,
            },
            {
              name: "Tailscale",
              url: "https://one.dash.cloudflare.com/2db62630e1032ef3eb682987078e4743/networks/tunnels?search=",
              icon: "cbrand-cloudflare",
              icon_color: palette.blue,
            },
            {
              name: "Tunnels",
              url: "https://one.dash.cloudflare.com/2db62630e1032ef3eb682987078e4743/networks/tunnels?search=",
              icon: "scale",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "Github",
              url: "https://github.com/hmajid2301",
              icon: "brand-github",
              icon_color: palette.peach,
            },
            {
              name: "GitLab",
              url: "https://gitlab.com/hmajid2301",
              icon: "brand-gitlab",
              icon_color: palette.maroon,
            },
            {
              name: "Source Graph",
              url: "https://sourcegraph.com/search",
              icon: "source-graph",
              icon_color: palette.peach,
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: palette.maroon,
            },
          ],
        },
        {
          name: "Docs",
          links: [
            {
              name: "Nix Options",
              url: "https://search.nixos.org/options",
              icon: "brand-snowflake",
              icon_color: palette.green,
            },
            {
              name: "Home Manager Options",
              url: "https://home-manager-options.extranix.com/",
              icon: "home-dot",
              icon_color: palette.peach,
            },
            {
              name: "Nix Packages",
              url: "https://search.nixos.org/",
              icon: "snowflake",
              icon_color: palette.maroon,
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "NixOS",
              url: "https://www.reddit.com/",
              icon: "snowflake",
              icon_color: palette.green,
            },
            {
              name: "HackerNews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-13.gif",
      categories: [
        {
          name: "social medias",
          links: [
            {
              name: "Telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "Whatsapp",
              url: "https://web.whatsapp.com",
              icon: "brand-whatsapp",
              icon_color: palette.peach,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.maroon,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "Simkl",
              url: "https://simkl.com/",
              icon: "device-tv",
              icon_color: palette.green,
            },
            {
              name: "Jellyfin",
              url: "https://jellyfin.haseebmajid.dev/",
              icon: "video",
              icon_color: palette.peach,
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.maroon,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
