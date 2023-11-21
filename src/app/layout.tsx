import type { Metadata } from 'next'
import localFont from "next/font/local";
import './globals.css'

const satoshi = localFont({
  src: "./fonts/Satoshi-Regular.woff2",
  weight: "400",
});

export const metadata: Metadata = {
  title: 'Creon',
  description: 'NIFtables FE Tech Test Submission by Anderson Osayerie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  )
}
