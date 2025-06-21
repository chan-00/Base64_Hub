import Base64Converter from '@/components/Base64Converter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base64 인코더/디코더 - 무료 온라인 Base64 변환 도구',
  description: '무료 Base64 인코더/디코더. 실시간 Base64 인코딩/디코딩, UTF-8/EUC-KR 지원, URL-safe 옵션, 배치 처리, 고급 옵션 제공. 개발자를 위한 최고의 Base64 변환 도구.',
  keywords: 'base64, base64 인코더, base64 디코더, base64 변환, base64 인코딩, base64 디코딩, base64 온라인, base64 도구, base64 converter, base64 encoder, base64 decoder, UTF-8, EUC-KR, URL-safe, 무료, 온라인, 실시간',
  openGraph: {
    title: 'Base64 인코더/디코더 - 무료 온라인 Base64 변환 도구',
    description: '무료 Base64 인코더/디코더. 실시간 Base64 인코딩/디코딩, UTF-8/EUC-KR 지원, URL-safe 옵션 제공.',
    type: 'website',
    url: 'https://base64hub-studio.vercel.app',
    siteName: 'Base64 Hub',
    images: [
      {
        url: 'https://base64hub-studio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Base64 Hub - 무료 Base64 인코더/디코더',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base64 인코더/디코더 - 무료 온라인 Base64 변환 도구',
    description: '무료 Base64 인코더/디코더. 실시간 Base64 인코딩/디코딩, UTF-8/EUC-KR 지원, URL-safe 옵션 제공.',
    images: ['https://base64hub-studio.vercel.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://base64hub-studio.vercel.app',
  },
}

export default function HomePage() {
  return (
    <>
      {/* 구조화된 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Base64 Hub",
            "description": "무료 Base64 인코더/디코더. 실시간 Base64 인코딩/디코딩, UTF-8/EUC-KR 지원, URL-safe 옵션 제공.",
            "url": "https://base64hub-studio.vercel.app",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "실시간 Base64 인코딩/디코딩",
              "UTF-8 및 EUC-KR 인코딩 지원",
              "URL-safe 옵션",
              "배치 처리",
              "고급 옵션",
              "변환 히스토리",
              "다크/라이트 테마"
            ],
            "author": {
              "@type": "Organization",
              "name": "Base64 Hub"
            }
          })
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Base64 인코더/디코더
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            무료 온라인 Base64 변환 도구. 실시간 인코딩/디코딩, UTF-8/EUC-KR 지원, 
            URL-safe 옵션을 제공합니다.
          </p>
        </div>
        
        <Base64Converter />
      </div>
    </>
  )
} 