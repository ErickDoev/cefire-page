'use client'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import {NextUIProvider} from '@nextui-org/react'
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; 

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <main className="blue-light">
        {children}
      </main>
    </NextUIProvider>
  )
}