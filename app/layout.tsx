import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import GTMListener from './gtm-listener'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "India’s First AI Design & Film Making Institute | Imapro AI Institute",
  description:
    "Discover India’s first AI Design & Film Making Institute – Imapro AI Institute (ai.imapro.in). Learn how Artificial Intelligence is revolutionizing design, creativity, and film making. Admissions opening soon.",
  keywords:
    'AI Institute India, India’s First AI Design & Film Making Institute, Learn AI + Film Making | Admissions Open, AI Training India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PLK7SZ' // fallback to your GTM ID

  return (
    <html lang="en">
      <head>
        {/* GTM Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <GTMListener />
        </Suspense>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  )
}
