// ✅ Ceci est un custom hook
import { useEffect, useState } from 'react'

export function useFadeIn(delay = 100) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return visible
}
