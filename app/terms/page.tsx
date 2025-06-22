import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 - Base64 Hub',
  description: 'Base64 Hub 서비스 이용에 대한 약관입니다.',
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          이용약관
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            최종 업데이트: 2024년 1월 1일
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            1. 서비스 개요
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64 Hub는 무료 온라인 Base64 인코더/디코더 서비스입니다. 사용자는 본 약관에 동의함으로써 
            서비스를 이용할 수 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            2. 서비스 이용
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            서비스 이용 시 다음 사항을 준수해야 합니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>서비스를 통한 불법적인 활동 금지</li>
            <li>타인의 권리를 침해하는 행위 금지</li>
            <li>서비스의 정상적인 운영을 방해하는 행위 금지</li>
            <li>악성 코드나 바이러스 유포 금지</li>
            <li>서버에 과도한 부하를 주는 행위 금지</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            3. 책임 제한
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64 Hub는 다음과 같은 경우에 책임을 지지 않습니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>서비스 이용으로 인한 데이터 손실</li>
            <li>서비스 중단으로 인한 손해</li>
            <li>사용자가 입력한 데이터의 보안 문제</li>
            <li>제3자가 제공하는 광고로 인한 손해</li>
            <li>천재지변, 전쟁, 테러 등 불가항력적 사유</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            4. 지적재산권
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64 Hub의 모든 콘텐츠, 디자인, 로고, 소프트웨어는 저작권법에 의해 보호됩니다. 
            사전 허가 없이 복제, 배포, 전송하는 것을 금지합니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            5. 서비스 변경 및 중단
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64 Hub는 사전 고지 없이 서비스의 내용을 변경하거나 중단할 수 있습니다. 
            서비스 중단 시 사용자에게 미리 공지하도록 노력합니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            6. 약관 변경
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            본 약관은 필요에 따라 변경될 수 있으며, 변경사항은 웹사이트에 공지됩니다. 
            변경된 약관은 공지일로부터 효력이 발생합니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            7. 분쟁 해결
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            본 약관과 관련된 분쟁이 발생할 경우, 관련 법령에 따라 해결합니다.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>💡 안내:</strong> 본 약관에 동의하지 않는 경우 서비스 이용을 중단하시기 바랍니다. 
              서비스 이용은 본 약관에 동의한 것으로 간주됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 