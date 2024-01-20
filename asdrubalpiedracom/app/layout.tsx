import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './component/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asdrubal Piedra',
  description: "Asdrubal Piedra's Portfolio",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main style={{zIndex:"-1"}}>
        {children}
        </main>
      </body>
    </html>
  )
}
