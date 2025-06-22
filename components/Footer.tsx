
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 사이트 정보 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Base64 Hub
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              무료 Base64 인코더/디코더 도구로 텍스트와 바이너리 데이터를 쉽게 변환하세요.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              빠른 링크
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/guide" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                  사용법 가이드
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                  사이트 소개
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* 법적 링크 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              법적 정보
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                  이용약관
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">
                  쿠키 정책
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Base64 Hub. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  )
} 