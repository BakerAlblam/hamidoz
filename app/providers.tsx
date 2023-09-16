// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from "@material-tailwind/react";
import { Theme } from '@radix-ui/themes';


const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

export default function Providers({children}: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <NextUIProvider>
    <Theme>
      {children}
      </Theme>
    </NextUIProvider>
    </ThemeProvider>
    </QueryClientProvider>
  )
}