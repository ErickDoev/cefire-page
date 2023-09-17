import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Roboto, Inter } from 'next/font/google'
import { Providers } from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
