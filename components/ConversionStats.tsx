'use client'

import { isValidBase64 } from '@/lib/base64'
import { type EncodingType } from '@/lib/base64'

interface ConversionStatsProps {
  input: string
  output: string
  encoding: EncodingType
  isUrlSafe: boolean
}

export default function ConversionStats({ input, output, encoding, isUrlSafe }: ConversionStatsProps) {
  const inputLength = input.length
  const outputLength = output.length
  const compressionRatio = inputLength > 0 ? ((outputLength / inputLength) * 100).toFixed(1) : '0'
  const isValid = output.length > 0 ? isValidBase64(output, isUrlSafe) : true

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        변환 통계
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {inputLength}
          </div>
          <div className="text-gray-600 dark:text-gray-400">입력 문자</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {outputLength}
          </div>
          <div className="text-gray-600 dark:text-gray-400">출력 문자</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {compressionRatio}%
          </div>
          <div className="text-gray-600 dark:text-gray-400">압축률</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">
            {isValid ? (
              <span className="text-green-600 dark:text-green-400">✅</span>
            ) : (
              <span className="text-red-600 dark:text-red-400">❌</span>
            )}
          </div>
          <div className="text-gray-600 dark:text-gray-400">유효성</div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>인코딩: {encoding}</span>
          <span>{isUrlSafe ? 'URL-safe' : 'Standard'}</span>
        </div>
      </div>
    </div>
  )
} 