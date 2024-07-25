import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="theme-wrapper">
            {children}
            <Analytics/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}