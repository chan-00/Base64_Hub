import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Base64 Hub - 빠르고 간편한 Base64 인코더/디코더',
  description: '실시간 Base64 인코딩/디코딩 도구. UTF-8, EUC-KR 지원, URL-safe 옵션, 히스토리 기능을 제공합니다.',
  keywords: 'base64, encoder, decoder, 인코더, 디코더, UTF-8, EUC-KR',
  authors: [{ name: 'Base64 Hub' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  verification: {
    google: 'your-google-verification-code', // Google Search Console에서 받은 인증 코드
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Google AdSense 스크립트 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3750717920048892"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google AdSense 크롤러 인식을 위한 메타 태그 */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 