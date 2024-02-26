
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import {siteConfig} from '@/config/site'
import ToastProvider from '@/providers/ToastProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
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
      <body 
        className={inter.className}
      >
        <ToastProvider />
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
