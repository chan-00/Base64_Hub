import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '쿠키 정책 - Base64 Hub',
  description: 'Base64 Hub의 쿠키 사용에 대한 정책입니다.',
}

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          쿠키 정책
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            최종 업데이트: 2024년 1월 1일
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            1. 쿠키란?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            쿠키는 웹사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일입니다. 
            쿠키는 사용자의 선호도, 로그인 상태, 방문 기록 등을 저장하여 
            더 나은 사용자 경험을 제공하는 데 사용됩니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            2. 우리가 사용하는 쿠키
          </h2>
          
          <div className="space-y-4 mb-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">필수 쿠키</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  웹사이트의 기본 기능을 위해 반드시 필요한 쿠키입니다.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>세션 관리</li>
                  <li>보안 기능</li>
                  <li>사용자 설정 저장</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">분석 쿠키</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  웹사이트 사용 통계를 수집하는 쿠키입니다.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>방문자 수 통계</li>
                  <li>페이지 조회수</li>
                  <li>사용자 행동 분석</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">광고 쿠키</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Google AdSense를 통해 관련성 높은 광고를 제공하기 위한 쿠키입니다.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>광고 개인화</li>
                  <li>광고 효과 측정</li>
                  <li>중복 광고 방지</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            3. Google AdSense 쿠키
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            본 웹사이트는 Google AdSense를 통해 광고를 제공합니다. Google AdSense는 다음과 같은 쿠키를 사용할 수 있습니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li><strong>DoubleClick 쿠키:</strong> 광고 개인화 및 효과 측정</li>
            <li><strong>Google Analytics 쿠키:</strong> 웹사이트 사용 통계</li>
            <li><strong>Google AdSense 쿠키:</strong> 광고 관련성 및 성과 측정</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            4. 쿠키 관리
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            사용자는 브라우저 설정을 통해 쿠키를 관리할 수 있습니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>모든 쿠키 허용</li>
            <li>필수 쿠키만 허용</li>
            <li>모든 쿠키 차단</li>
            <li>브라우저 종료 시 쿠키 삭제</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            5. GDPR 및 개인정보보호법 준수
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Base64 Hub는 GDPR(일반개인정보보호규정) 및 개인정보보호법을 준수합니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>쿠키 사용에 대한 명시적 동의 요청</li>
            <li>쿠키 사용 목적의 투명한 공개</li>
            <li>사용자의 쿠키 동의 철회 권리 보장</li>
            <li>쿠키 데이터의 안전한 처리</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            6. 쿠키 동의 관리
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            사용자는 언제든지 쿠키 동의를 변경하거나 철회할 수 있습니다. 
            브라우저 설정에서 쿠키를 삭제하거나 차단할 수 있으며, 
            이 경우 일부 서비스 기능이 제한될 수 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            7. 쿠키 정책 변경
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            본 쿠키 정책은 필요에 따라 변경될 수 있으며, 
            변경사항은 웹사이트에 공지됩니다.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>💡 안내:</strong> 쿠키 사용에 대한 자세한 내용이나 
              개인정보 처리에 대한 문의사항이 있으시면 
              <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 ml-1">문의하기</a>를 통해 연락주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 