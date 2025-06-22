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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Base64 인코더/디코더
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            무료 온라인 Base64 변환 도구. 실시간 인코딩/디코딩, UTF-8/EUC-KR 지원, URL-safe 옵션을 제공합니다.
          </p>
        </div>

        {/* 변환기 바로 노출 */}
        <div className="mb-12">
          <Base64Converter />
        </div>

        {/* 설명/예시/FAQ/참고자료 카드형 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Base64란? */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Base64란?</h3>
            </div>
            <div className="card-content">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Base64는 바이너리 데이터를 ASCII 문자열로 인코딩하는 방식입니다. 
                이메일 첨부파일, 웹 API, 이미지 데이터 URI 등에서 널리 사용됩니다.
              </p>
            </div>
          </div>

          {/* 주요 특징 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">주요 특징</h3>
            </div>
            <div className="card-content">
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• 실시간 변환</li>
                <li>• UTF-8/EUC-KR 지원</li>
                <li>• URL-safe 옵션</li>
                <li>• 배치 처리</li>
              </ul>
            </div>
          </div>

          {/* 사용 예시 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">사용 예시</h3>
            </div>
            <div className="card-content">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                이메일 첨부파일, 웹 API 데이터 전송, 
                이미지 데이터 URI 생성 등에 활용됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            자주 묻는 질문
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Base64 인코딩이란?</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  바이너리 데이터를 64개의 ASCII 문자로 변환하는 과정입니다. 
                  텍스트, 이미지, 파일 등 모든 데이터를 안전하게 전송할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">URL-safe Base64란?</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  URL에서 사용할 수 있도록 특수문자(+/)를 대체문자(-_)로 변경한 Base64입니다. 
                  웹 API나 URL 파라미터에서 안전하게 사용할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">UTF-8과 EUC-KR의 차이점은?</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  UTF-8은 유니코드를 지원하는 범용 인코딩이고, 
                  EUC-KR은 한글을 위한 한국어 전용 인코딩입니다.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">데이터가 안전한가요?</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  모든 변환은 브라우저에서만 처리되며, 
                  서버로 데이터가 전송되지 않습니다. 
                  완전히 안전하고 프라이버시가 보장됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 참고자료 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            참고자료
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">사용법 가이드</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Base64 변환기의 모든 기능을 자세히 알아보세요.
                </p>
                <a href="/guide" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                  가이드 보기 →
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Base64 설명</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Base64 인코딩의 원리와 활용법을 알아보세요.
                </p>
                <a href="/about" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                  자세히 보기 →
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">개인정보처리방침</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  개인정보 수집 및 이용에 대한 안내입니다.
                </p>
                <a href="/privacy" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                  확인하기 →
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">문의하기</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  궁금한 점이나 개선사항이 있으시면 연락주세요.
                </p>
                <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                  문의하기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 