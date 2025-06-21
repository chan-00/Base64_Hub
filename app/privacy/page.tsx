import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보처리방침 - Base64 Hub',
  description: 'Base64 Hub의 개인정보 수집 및 이용에 대한 안내입니다.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          개인정보처리방침
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            최종 업데이트: 2024년 1월 1일
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            1. 개인정보 수집 및 이용 목적
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64 Hub는 사용자의 개인정보를 수집하지 않습니다. 모든 변환 작업은 
            사용자의 브라우저에서 클라이언트 사이드로 처리되며, 서버로 데이터가 전송되지 않습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            2. 수집하는 정보
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            우리는 다음과 같은 정보를 수집할 수 있습니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li><strong>로컬 스토리지 데이터:</strong> 사용자의 변환 히스토리 및 테마 설정 (브라우저에만 저장)</li>
            <li><strong>쿠키:</strong> 기본적인 웹사이트 기능을 위한 필수 쿠키</li>
            <li><strong>로그 데이터:</strong> 서버 접근 로그 (IP 주소, 접근 시간 등)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            3. 개인정보의 보유 및 이용기간
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            사용자가 입력한 변환 데이터는 서버에 저장되지 않으며, 브라우저의 로컬 스토리지에만 
            임시로 저장됩니다. 사용자가 브라우저 데이터를 삭제하면 모든 히스토리 정보가 영구적으로 삭제됩니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            4. 개인정보의 제3자 제공
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64 Hub는 사용자의 개인정보를 제3자에게 제공하지 않습니다. 
            다만, 법령에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 
            수사기관의 요구가 있는 경우를 제외합니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            5. 광고 및 추적
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            본 웹사이트는 Google AdSense를 통해 광고를 제공할 수 있습니다. 
            Google AdSense는 다음과 같은 정보를 수집할 수 있습니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>IP 주소</li>
            <li>브라우저 정보</li>
            <li>방문 페이지</li>
            <li>광고 클릭 정보</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Google의 개인정보처리방침은 <a href="https://policies.google.com/privacy" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">여기</a>에서 확인할 수 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            6. 사용자의 권리
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            사용자는 다음과 같은 권리를 가집니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>개인정보 수집 및 이용에 대한 동의 철회</li>
            <li>개인정보의 열람 및 정정 요구</li>
            <li>개인정보의 삭제 요구</li>
            <li>개인정보 처리의 정지 요구</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            7. 개인정보 보호책임자
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 
            정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>개인정보 보호책임자</strong><br />
              이메일: privacy@base64hub.com<br />
              연락처: 웹사이트 내 문의 양식을 통해 연락
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            8. 개인정보처리방침 변경
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 
            추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 
            고지할 것입니다.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>⚠️ 중요:</strong> Base64 Hub는 사용자의 데이터를 서버에 저장하지 않습니다. 
              모든 변환 작업은 사용자의 브라우저에서만 처리되며, 입력한 데이터는 서버로 전송되지 않습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 