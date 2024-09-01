let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "London",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://homepage.bare.homelab.haseebmajid.dev",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "musicForProgramming()",
              url: "https://musicforprogramming.net/sixty",
              icon: "binary-tree",
              icon_color: "#fab387",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "Calendar",
              url: "https://calendar.proton.me/",
              icon: "calendar",
              icon_color: "#fab387",
            },
            {
              name: "Monkey Type",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "#f38ba8",
            },
            {
              name: "My Blog",
              url: "https://haseebmajid.dev",
              icon: "article",
              icon_color: "#89b4fa",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "Net Data",
              url: "https://netdata.bare.homelab.haseebmajid.dev",
              icon: "barbell",
              icon_color: "#fab387",
            },
            {
              name: "Grafana",
              url: "https://grafana.bare.homelab.haseebmajid.dev",
              icon: "device-heart-monitor",
              icon_color: "#f38ba8",
            },
            {
              name: "Tailscale",
              url: "https://one.dash.cloudflare.com/2db62630e1032ef3eb682987078e4743/networks/tunnels?search=",
              icon: "cbrand-cloudflare",
              icon_color: "#89b4fa",
            },
            {
              name: "Tunnels",
              url: "https://one.dash.cloudflare.com/2db62630e1032ef3eb682987078e4743/networks/tunnels?search=",
              icon: "scale",
              icon_color: "#cba6f7",
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
              icon_color: "#fab387",
            },
            {
              name: "GitLab",
              url: "https://gitlab.com/hmajid2301",
              icon: "brand-gitlab",
              icon_color: "#f38ba8",
            },
            {
              name: "Source Graph",
              url: "https://sourcegraph.com/search",
              icon: "source-graph",
              icon_color: "#fab387",
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: "#f38ba8",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "Home Manager Options",
              url: "https://home-manager-options.extranix.com/",
              icon: "home-dot",
              icon_color: "#fab387",
            },
            {
              name: "Nix Packages",
              url: "https://search.nixos.org/",
              icon: "snowflake",
              icon_color: "#f38ba8",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "HackerNews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: "#fab387",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "Whatsapp",
              url: "https://web.whatsapp.com",
              icon: "brand-whatsapp",
              icon_color: "#fab387",
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: "#f38ba8",
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
              icon_color: "#a6e3a1",
            },
            {
              name: "Jellyfin",
              url: "https://jellyfin.haseebmajid.dev/",
              icon: "video",
              icon_color: "#fab387",
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#f38ba8",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
