import './globals.css'
import type { Metadata } from 'next'
import ThemeProvider from './provider'
import Navbar from "./components/Navbar"

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
      <body className="flex min-h-screen flex-col p-4 pt-5 bg-gradient-to-t from-slate-400 to-slate-50 dark:from-gray-950 dark:to-gray-900">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}