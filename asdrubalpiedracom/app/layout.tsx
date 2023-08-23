import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asdrubal Piedra',
  description: "Asdrubal Piedra's Resume",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="Jheader">
          <div className="Jside">
            <span>
              <a className="Ja" href="https://www.instagram.com/asdrubal_piedra/" target="_blank">
                <img className="Jicon" src="/icons8-instagram.svg"/>
              </a>
            </span>
            |
            <span>
              <a className="Ja" href="mailto:jason1234pm@gmail.com" target="_blank">
                <img className="Jicon" src="/icons8-mail.svg"/>
              </a>
            </span>
            |
            <span>
              <a className="Ja" href="https://www.linkedin.com/in/asdrubal-piedra-bb0b2b180/" target="_blank">
                <img className="Jicon" src="/icons8-linked-in.svg"/>
              </a> 
            </span>
          </div>
          <div className="Jtitle">
            <b>Asdrubal Piedra</b>
          </div>
          <div className="Jside" style={{textAlign:"right"}}>
            <Link href="/" style={{padding:"1em"}}>Home</Link>
            |
            <Link href="/about" style={{padding:"1em"}}>About</Link>
            |
            <Link href="/contact" style={{padding:"1em"}}>Contact</Link>
          </div>
        </header>
      {children}
      </body>
    </html>
  )
}
