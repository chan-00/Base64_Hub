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

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Base64의 역사와 배경
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Base64는 1980년대 이메일 시스템(MIME)에서 바이너리 파일을 안전하게 전송하기 위해 고안되었습니다. 이후 웹, 데이터베이스, 인증(JWT) 등 다양한 분야에서 표준으로 자리잡았습니다.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            보안 이슈와 주의사항
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>Base64는 암호화가 아니므로 민감한 정보 보호에는 적합하지 않습니다.</li>
            <li>누구나 쉽게 디코딩할 수 있으므로 개인정보, 비밀번호 등은 반드시 암호화 후 사용하세요.</li>
            <li>대용량 파일을 Base64로 변환하면 데이터 크기가 커져 성능 저하가 발생할 수 있습니다.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            활용 팁
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>이미지, 파일을 HTML/CSS에 직접 삽입할 때 data URI로 활용할 수 있습니다.</li>
            <li>API 통신 시 바이너리 데이터를 안전하게 전송할 수 있습니다.</li>
            <li>JWT, OAuth 등 인증 토큰에서 Base64가 널리 사용됩니다.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            추가 FAQ
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li><strong>Q. Base64는 어디서 표준화되었나요?</strong><br/>A. IETF RFC 4648에서 표준으로 정의되어 있습니다.</li>
            <li><strong>Q. Base64로 인코딩된 데이터는 어떻게 디코딩하나요?</strong><br/>A. 대부분의 프로그래밍 언어에서 내장 함수로 지원합니다. 예: atob/btoa(JavaScript), base64 모듈(Python) 등</li>
            <li><strong>Q. Base64와 비슷한 인코딩 방식이 있나요?</strong><br/>A. Base32, Base58, Base91 등 다양한 변형이 존재합니다.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            참고 자료
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li><a href="https://ko.wikipedia.org/wiki/Base64" target="_blank" rel="noopener">Base64 - 위키백과</a></li>
            <li><a href="https://datatracker.ietf.org/doc/html/rfc4648" target="_blank" rel="noopener">RFC 4648 (Base64 표준)</a></li>
            <li><a href="https://developer.mozilla.org/ko/docs/Glossary/Base64" target="_blank" rel="noopener">MDN Web Docs - Base64</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 