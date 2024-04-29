import { useCallback, useEffect, useState } from 'react'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // Return success

export function useCopyToClipboard(props: { timeout?: number } = {}) {
  const timeout = props.timeout || 1500
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    let timeoutId: number | null = null

    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false)
      }, timeout)
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [timeout, hasCopied])

  const copy: CopyFn = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        console.warn('Clipboard not supported')
        return false
      }

      // Try to save to clipboard then save it in the state if worked
      try {
        await navigator.clipboard.writeText(text)
        setCopiedText(text)
        setHasCopied(true)
        return true
      } catch (error) {
        console.warn('Copy failed', error)
        setCopiedText(null)
        setHasCopied(false)
        return false
      }
    },
    [setCopiedText, setHasCopied],
  )

  return { copiedText, copy, hasCopied }
}
