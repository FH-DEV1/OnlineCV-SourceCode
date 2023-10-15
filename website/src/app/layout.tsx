import './globals.css'
import type { Metadata } from 'next'
import ThemeProvider from './provider'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FH.Dev',
  description: 'FH.Dev website created using Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >   
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}