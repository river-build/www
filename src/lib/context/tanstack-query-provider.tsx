'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { MINUTE_MS } from '@/constants/time-ms'
import { useState } from 'react'

export const TanstackQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 1 * MINUTE_MS } } }),
  )
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
