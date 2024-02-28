
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import {SITE_CONFIG} from '@/config/site'
import ToastProvider from '@/providers/ToastProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'


export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  authors: [
    {
      name: "Shubhankar Chakraborty",
      url: "https://github.com/shubho738",
    },
  ],
  creator: "Shubhankar Chakraborty",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },

  icons: {
    icon: "/icon.ico",
  },
}


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html 
      lang="en"
    >
      <body>
        <ToastProvider />
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
