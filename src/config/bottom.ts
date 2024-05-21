// 定义底部按钮
export const BottomItems: BottomItems = {
  org: {
    title: "DePinify Socials",
    description:
      "DePinify, your gateway to decentralisation.",
    github: "https://github.com/stc-community",
    twitter: "https://twitter.com/Depinify",
    discord: "https://discord.gg/2UYRCmxw",
    youtube: "https://www.youtube.com/@stc-community",
    linkedin: "https://www.linkedin.com/in/stc-community-519b4227b/",
    telegram: "https://t.me/Depinify",
    medium: "https://medium.com/@depinify"
  }
};

interface BottomItems {
  org: {
    title: string;
    description?: string;
    github?: string;
    twitter?: string;
    medium?: string;
    telegram?: string;
    discord?: string;
    youtube?: string;
    linkedin?: string;
  };
}
