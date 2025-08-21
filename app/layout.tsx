import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Manrope } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "LeetCode Motivator - Unleash Your Coding Potential",
  description: "Stay motivated and track your coding progress with friends",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}>
      <head>
        <style>{`
html {
  font-family: ${manrope.style.fontFamily};
  --font-sans: var(--font-manrope);
  --font-serif: var(--font-space-grotesk);
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
