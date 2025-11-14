import { Facebook, Linkedin, Slack, AtSign, Twitter } from "lucide-react"

export type ShareConfig = {
  url: string
  title?: string
  text?: string
}

export type SocialProviderNames =
  | "linkedin"
  | "facebook"
  | "slack"
  | "twitter"
  | "threads"

export type SocialProviderProps = {
  name: string
  icon: React.ReactElement
  shareUrl: (config: ShareConfig) => string
}

export const SOCIAL_PROVIDERS: Record<
  SocialProviderNames,
  SocialProviderProps
> = {
  linkedin: {
    name: "LinkedIn",
    icon: <Linkedin className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        config.url
      )}`,
  },
  facebook: {
    name: "Facebook",
    icon: <Facebook className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        config.url
      )}`,
  },
  slack: {
    name: "Slack",
    icon: <Slack className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(
        config.title || ""
      )}`,
  },
  twitter: {
    name: "Twitter",
    icon: <Twitter className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`,
  },
  threads: {
    name: "Threads",
    icon: <AtSign className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://threads.net/intent/post?text=${encodeURIComponent(
        `${config.title || ""} ${config.url}`
      )}`,
  },
}
