import { useCallback, useMemo } from "react"
import {
  type ShareConfig,
  SOCIAL_PROVIDERS,
  type SocialProviderNames,
} from "./social-providers"

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number
}

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) => {
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  )

  const share = useCallback(
    (provider: SocialProviderNames) => {
      try {
        const providerConfig = SOCIAL_PROVIDERS[provider]

        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`)
        }

        const shareUrl = providerConfig.shareUrl(shareConfig)
        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600, height=600, location=yes, status=yes"
        )

        return !!shareWindow
      } catch (error) {
        // biome-ignore lint/suspicious/noConsole: log error
        console.error("Erro ao compartilhar:", error)

        return false
      }
    },
    [shareConfig]
  )

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key as SocialProviderNames,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProviderNames),
      })),
    ],
    [share]
  )

  return { shareButtons }
}
