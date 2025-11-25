"use client"

import { useCallback, useEffect, useState } from "react"

type UserClipboardProps = {
  timeout?: number
}

export const useClipboard = ({ timeout = 2000 }: UserClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      // biome-ignore lint/suspicious/noConsole: clipboard API not supported
      console.warn("Clipboard not supported")

      return false
    }

    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      // biome-ignore lint/suspicious/noConsole: clipboard API error
      console.error("Failed to copy!", error)
      setIsCopied(false)
      return false
    }

    setIsCopied(true)
  }, [])

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, timeout)

      return () => clearTimeout(timer)
    }
  }, [isCopied, timeout])

  return { isCopied, handleCopy }
}
