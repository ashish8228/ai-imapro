
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "India’s First AI Filmmaking Institute - Coming Soon",
  description: "India’s First AI Filmmaking Institute launching soon. Join the revolution in AI education with cutting-edge curriculum.",
  keywords: 'AI Institute India, AIntelligence Education, Filmmaking Learning Courses, AI Training India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}