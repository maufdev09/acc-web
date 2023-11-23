import {   Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito_Sans = Nunito_Sans({ subsets: ['latin'],weight:['200','400','600'],
variable:"--font-nunito"})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${nunito_Sans.variable} font-nunito 2xl:container mx-auto`}>{children}</body>
    </html>
  )
}
