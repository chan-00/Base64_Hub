'use client'

import { useState } from 'react'

interface ResultFormatterProps {
  output: string
  onFormattedChange: (formatted: string) => void
}

export default function ResultFormatter({ output, onFormattedChange }: ResultFormatterProps) {
  const [lineBreakInterval, setLineBreakInterval] = useState(76)
  const [separator, setSeparator] = useState('')
  const [addHeader, setAddHeader] = useState(false)
  const [addFooter, setAddFooter] = useState(false)
  const [customTemplate, setCustomTemplate] = useState('')

  const formatOutput = () => {
    let formatted = output

    // 줄바꿈 추가
    if (lineBreakInterval > 0) {
      const chunks = []
      for (let i = 0; i < formatted.length; i += lineBreakInterval) {
        chunks.push(formatted.slice(i, i + lineBreakInterval))
      }
      formatted = chunks.join('\n')
    }

    // 구분자 추가
    if (separator) {
      formatted = formatted.replace(/(.{1})/g, `$1${separator}`).replace(new RegExp(`${separator}$`), '')
    }

    // 헤더 추가
    if (addHeader) {
      formatted = `-----BEGIN BASE64-----\n${formatted}`
    }

    // 푸터 추가
    if (addFooter) {
      formatted = `${formatted}\n-----END BASE64-----`
    }

    // 커스텀 템플릿 적용
    if (customTemplate) {
      formatted = customTemplate.replace('{content}', formatted)
    }

    onFormattedChange(formatted)
  }

  const clearFormatting = () => {
    onFormattedChange(output)
  }

  const copyFormatted = () => {
    navigator.clipboard.writeText(output)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        결과 포맷팅
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            줄바꿈 간격
          </label>
          <select
            value={lineBreakInterval}
            onChange={(e) => setLineBreakInterval(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value={0}>없음</option>
            <option value={64}>64자</option>
            <option value={76}>76자 (RFC 2045)</option>
            <option value={100}>100자</option>
            <option value={120}>120자</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            구분자
          </label>
          <input
            type="text"
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            placeholder="예: 공백, 탭, 콤마"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <input
            id="addHeader"
            type="checkbox"
            checked={addHeader}
            onChange={(e) => setAddHeader(e.target.checked)}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="addHeader" className="text-sm text-gray-700 dark:text-gray-300">
            헤더 추가 (-----BEGIN BASE64-----)
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="addFooter"
            type="checkbox"
            checked={addFooter}
            onChange={(e) => setAddFooter(e.target.checked)}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="addFooter" className="text-sm text-gray-700 dark:text-gray-300">
            푸터 추가 (-----END BASE64-----)
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          커스텀 템플릿 (선택사항)
        </label>
        <input
          type="text"
          value={customTemplate}
          onChange={(e) => setCustomTemplate(e.target.value)}
          placeholder="예: const data = '{content}';"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {'{content}'}를 사용하여 결과를 삽입할 수 있습니다.
        </p>
      </div>

      <div className="flex gap-2">
        <button onClick={formatOutput} className="btn-primary text-base">
          포맷 적용
        </button>
        <button onClick={clearFormatting} className="btn-secondary text-base">
          포맷 제거
        </button>
        <button onClick={copyFormatted} className="btn-secondary text-base">
          복사
        </button>
      </div>

      {/* 미리보기 */}
      {output && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            미리보기
          </h4>
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm font-mono break-all max-h-32 overflow-y-auto">
            {output}
          </div>
        </div>
      )}
    </div>
  )
} 