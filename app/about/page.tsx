import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base64란? - Base64 Hub',
  description: 'Base64 인코딩에 대한 상세한 설명과 사용법을 알아보세요.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Base64란?
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Base64 인코딩이란?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64는 바이너리 데이터를 텍스트로 변환하는 인코딩 방식입니다. 
            8비트 바이너리 데이터를 6비트씩 나누어 64개의 ASCII 문자로 표현하는 방식으로, 
            주로 이메일 첨부파일, 웹 API, 데이터베이스 저장 등에서 사용됩니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Base64 문자셋
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Base64는 다음 64개의 문자를 사용합니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>대문자 A-Z (26개)</li>
            <li>소문자 a-z (26개)</li>
            <li>숫자 0-9 (10개)</li>
            <li>특수문자 +, / (2개)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            URL-safe Base64
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            URL에서 사용할 때는 +와 / 문자가 특수문자로 해석될 수 있어 문제가 될 수 있습니다. 
            이를 해결하기 위해 URL-safe Base64에서는:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>+ 문자를 - 문자로 대체</li>
            <li>/ 문자를 _ 문자로 대체</li>
            <li>= 패딩 문자는 그대로 유지</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            사용 예시
          </h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              <strong>원본 텍스트:</strong> "Hello, World!"
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              <strong>Base64 인코딩:</strong> "SGVsbG8sIFdvcmxkIQ=="
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>URL-safe Base64:</strong> "SGVsbG8sIFdvcmxkIQ"
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            언제 사용하나요?
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>이메일 첨부파일 전송</li>
            <li>웹 API에서 바이너리 데이터 전송</li>
            <li>JSON에서 바이너리 데이터 포함</li>
            <li>데이터베이스에 바이너리 데이터 저장</li>
            <li>웹 토큰(JWT) 인코딩</li>
            <li>이미지나 파일을 텍스트로 변환</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            장단점
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                장점
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>텍스트 기반 시스템에서 바이너리 데이터 전송 가능</li>
                <li>인코딩/디코딩이 간단함</li>
                <li>대부분의 프로그래밍 언어에서 기본 지원</li>
                <li>데이터 무결성 보장</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                단점
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>원본 데이터보다 약 33% 크기 증가</li>
                <li>암호화가 아닌 단순 인코딩</li>
                <li>대용량 데이터에는 비효율적</li>
                <li>패딩 문자로 인한 오버헤드</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>💡 팁:</strong> Base64 Hub를 사용하면 실시간으로 텍스트를 Base64로 변환하거나 
              Base64 문자열을 원본 텍스트로 디코딩할 수 있습니다. 다양한 문자 인코딩(UTF-8, EUC-KR)과 
              URL-safe 옵션을 지원하여 더욱 편리하게 사용할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 