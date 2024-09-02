import './globals.css'
import type { Metadata } from 'next'
import ThemeProvider from '@/components/provider'
import Navbar from "@/components/Navbar"
import Link from 'next/link'

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
      <body className="flex min-h-[100svh] flex-col p-4 pt-5 bg-gradient-to-t from-slate-300 to-slate-50 dark:from-gray-950 dark:to-gray-900">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >
          <Navbar />
          {children}
          <Link href="mailto:FHDEV@proton.me?subject=Job offer" className="cursor-pointer absolute left-[8vw] bottom-[8vw] md:left-[3vw] md:bottom-[3vw] backdrop-blur-md dark:bg-opacity-20 bg-opacity-20 bg-gray-300 dark:bg-gray-400 w-20 h-8 flex justify-center items-center border border-emerald-500 rounded-md">
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <h1 className="text-emerald-500">Hire Me</h1>
          </Link>
        </ThemeProvider>
      </body>
    </html>
  )
}