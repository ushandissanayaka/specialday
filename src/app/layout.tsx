import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Emma & Liam | Wedding Invitation',
  description: 'Join us to celebrate the wedding of Emma & Liam.',
  keywords: 'wedding, invitation, Emma, Liam, celebration',
  openGraph: {
    title: 'Emma & Liam | Wedding Invitation',
    description: 'Join us to celebrate the wedding of Emma & Liam.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&family=Great+Vibes&family=Pinyon+Script&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
