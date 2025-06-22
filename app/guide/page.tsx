import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base64 사용법 가이드 - Base64 Hub',
  description: 'Base64 인코딩/디코딩의 다양한 사용법과 프로그래밍 언어별 예제를 알아보세요.',
}

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Base64 사용법 가이드
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            프로그래밍 언어별 Base64 사용법
          </h2>
          
          {/* JavaScript */}
          <div className="card mb-6">
            <div className="card-header">
              <h3 className="card-title">JavaScript</h3>
            </div>
            <div className="card-content">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>인코딩:</strong>
                </p>
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`const text = "Hello, World!";
const encoded = btoa(text);
console.log(encoded); // SGVsbG8sIFdvcmxkIQ==`}
                </pre>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>디코딩:</strong>
                </p>
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`const encoded = "SGVsbG8sIFdvcmxkIQ==";
const decoded = atob(encoded);
console.log(decoded); // Hello, World!`}
                </pre>
              </div>
            </div>
          </div>

          {/* Python */}
          <div className="card mb-6">
            <div className="card-header">
              <h3 className="card-title">Python</h3>
            </div>
            <div className="card-content">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>인코딩:</strong>
                </p>
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`import base64

text = "Hello, World!"
encoded = base64.b64encode(text.encode('utf-8'))
print(encoded.decode('utf-8'))  # SGVsbG8sIFdvcmxkIQ==`}
                </pre>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>디코딩:</strong>
                </p>
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`import base64

encoded = "SGVsbG8sIFdvcmxkIQ=="
decoded = base64.b64decode(encoded)
print(decoded.decode('utf-8'))  # Hello, World!`}
                </pre>
              </div>
            </div>
          </div>

          {/* Java */}
          <div className="card mb-6">
            <div className="card-header">
              <h3 className="card-title">Java</h3>
            </div>
            <div className="card-content">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>인코딩:</strong>
                </p>
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`import java.util.Base64;

String text = "Hello, World!";
String encoded = Base64.getEncoder()
    .encodeToString(text.getBytes("UTF-8"));
System.out.println(encoded); // SGVsbG8sIFdvcmxkIQ==`}
                </pre>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>디코딩:</strong>
                </p>
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`import java.util.Base64;

String encoded = "SGVsbG8sIFdvcmxkIQ==";
String decoded = new String(
    Base64.getDecoder().decode(encoded), "UTF-8");
System.out.println(decoded); // Hello, World!`}
                </pre>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            실제 활용 사례
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">이메일 첨부파일</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  이메일 프로토콜은 텍스트만 지원하므로 바이너리 파일을 Base64로 인코딩하여 전송합니다.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">웹 API</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  JSON에서 바이너리 데이터를 포함할 때 Base64 인코딩을 사용합니다.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">JWT 토큰</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  JSON Web Token의 페이로드와 서명을 Base64로 인코딩합니다.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">데이터 URI</h3>
              </div>
              <div className="card-content">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  이미지나 파일을 HTML/CSS에 직접 삽입할 때 사용합니다.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            단계별 튜토리얼
          </h2>
          
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1단계: 텍스트 인코딩</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                "Hello, World!"를 Base64로 인코딩해보세요.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  <strong>결과:</strong> SGVsbG8sIFdvcmxkIQ==
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2단계: URL-safe 인코딩</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                URL에서 사용할 수 있도록 +와 /를 -와 _로 대체합니다.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  <strong>결과:</strong> SGVsbG8sIFdvcmxkIQ
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">3단계: 디코딩</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                인코딩된 문자열을 다시 원본 텍스트로 변환합니다.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  <strong>결과:</strong> Hello, World!
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            주의사항 및 팁
          </h2>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ 중요 주의사항</h3>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• Base64는 암호화가 아니므로 민감한 정보 보호에는 사용하지 마세요</li>
              <li>• 인코딩된 데이터는 원본보다 약 33% 크기가 증가합니다</li>
              <li>• 대용량 파일은 Base64 변환 시 성능 저하가 발생할 수 있습니다</li>
              <li>• URL에서 사용할 때는 URL-safe Base64를 사용하세요</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 유용한 팁</h3>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Base64 Hub의 실시간 변환 기능을 활용하여 빠르게 확인하세요</li>
              <li>• 변환 히스토리를 활용하여 자주 사용하는 데이터를 저장하세요</li>
              <li>• 고급 옵션을 사용하여 패딩 제거, 줄바꿈 제거 등을 설정하세요</li>
              <li>• 다양한 문자 인코딩(UTF-8, EUC-KR)을 지원하므로 적절히 선택하세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 