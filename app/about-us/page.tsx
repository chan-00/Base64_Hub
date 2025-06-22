import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Base64 Hub',
  description: 'Base64 Hub의 목적과 개발 배경에 대해 알아보세요.',
}

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Us
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            우리의 목적
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64 Hub는 개발자와 일반 사용자 모두가 쉽고 빠르게 Base64 인코딩/디코딩을 할 수 있는 
            무료 온라인 도구를 제공하는 것을 목적으로 합니다. 복잡한 설치 과정 없이 
            웹 브라우저만으로 언제 어디서나 사용할 수 있는 편리한 서비스를 만들었습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            개발 배경
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            현대 웹 개발에서 Base64 인코딩은 이미지, 파일, 데이터 전송 등 다양한 용도로 
            널리 사용되고 있습니다. 하지만 기존 도구들은 사용자 경험이 좋지 않거나 
            기능이 제한적이었습니다. 이러한 문제를 해결하기 위해 
            직관적이고 강력한 기능을 갖춘 Base64 변환기를 개발하게 되었습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            핵심 가치
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">빠른 성능</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                실시간 변환으로 즉시 결과를 확인할 수 있습니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">개인정보 보호</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                모든 데이터는 클라이언트에서 처리되어 서버로 전송되지 않습니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">접근성</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                모든 사용자가 쉽게 사용할 수 있도록 설계되었습니다.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            기술 스택
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Base64 Hub는 최신 웹 기술을 활용하여 구축되었습니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li><strong>Next.js 14:</strong> 서버 사이드 렌더링과 최적화된 성능</li>
            <li><strong>TypeScript:</strong> 타입 안전성과 개발 생산성 향상</li>
            <li><strong>Tailwind CSS:</strong> 반응형 디자인과 일관된 UI</li>
            <li><strong>Zustand:</strong> 효율적인 상태 관리</li>
            <li><strong>Vercel:</strong> 빠른 배포와 글로벌 CDN</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            개발팀
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64 Hub는 웹 개발에 대한 열정을 가진 개발자들이 모여 만든 프로젝트입니다. 
            사용자 중심의 설계와 최신 기술 트렌드를 반영하여 
            지속적으로 개선하고 발전시켜 나가고 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            향후 계획
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>더 많은 인코딩 형식 지원 (Base32, Base58, Base91 등)</li>
            <li>파일 업로드 및 변환 기능</li>
            <li>API 서비스 제공</li>
            <li>모바일 앱 개발</li>
            <li>다국어 지원 확대</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            연락처
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            문의사항이나 제안사항이 있으시면 언제든 연락주세요. 
            사용자의 피드백은 서비스 개선에 큰 도움이 됩니다.
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">
              <strong>이메일:</strong> contact@base64hub.com<br />
              <strong>문의 페이지:</strong> <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">문의하기</a>
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-6">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>💡 참고:</strong> Base64 Hub는 오픈 소스 프로젝트이며, 
              GitHub에서 소스 코드를 확인하고 기여할 수 있습니다. 
              더 나은 서비스를 위해 여러분의 기여를 환영합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 