'use client'

import { useState } from 'react'
import { type EncodingType, encodeBase64, decodeBase64, isValidBase64 } from '@/lib/base64'

interface BatchItem {
  id: string
  input: string
  output: string
  isValid: boolean
}

interface BatchProcessorProps {
  encoding: EncodingType
  isUrlSafe: boolean
  removePadding: boolean
  removeLineBreaks: boolean
  toUpperCase: boolean
  lineBreakInterval: number
}

export default function BatchProcessor({
  encoding,
  isUrlSafe,
  removePadding,
  removeLineBreaks,
  toUpperCase,
  lineBreakInterval
}: BatchProcessorProps) {
  const [batchInput, setBatchInput] = useState('')
  const [batchResults, setBatchResults] = useState<BatchItem[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const processBatch = () => {
    if (!batchInput.trim()) return

    setIsProcessing(true)
    const lines = batchInput.split('\n').filter(line => line.trim())
    
    const results: BatchItem[] = lines.map((line, index) => {
      const trimmedLine = line.trim()
      let output = ''
      let isValid = false

      if (trimmedLine) {
        // Base64 디코딩 시도
        if (isValidBase64(trimmedLine, isUrlSafe)) {
          output = decodeBase64(trimmedLine, encoding, isUrlSafe)
        } else {
          // 일반 텍스트 인코딩
          output = encodeBase64(trimmedLine, encoding, isUrlSafe)
        }

        // 고급 옵션 적용
        if (removePadding) {
          output = output.replace(/=+$/, '')
        }
        if (removeLineBreaks) {
          output = output.replace(/[\r\n]/g, '')
        }
        if (toUpperCase) {
          output = output.toUpperCase()
        }
        if (lineBreakInterval > 0) {
          const chunks = []
          for (let i = 0; i < output.length; i += lineBreakInterval) {
            chunks.push(output.slice(i, i + lineBreakInterval))
          }
          output = chunks.join('\n')
        }

        isValid = true
      }

      return {
        id: `${index}-${Date.now()}`,
        input: trimmedLine,
        output,
        isValid
      }
    })

    setBatchResults(results)
    setIsProcessing(false)
  }

  const copyAllResults = () => {
    const allOutputs = batchResults.map(item => item.output).join('\n')
    navigator.clipboard.writeText(allOutputs)
  }

  const copyItem = (output: string) => {
    navigator.clipboard.writeText(output)
  }

  const removeItem = (id: string) => {
    setBatchResults(prev => prev.filter(item => item.id !== id))
  }

  const clearAll = () => {
    setBatchInput('')
    setBatchResults([])
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        배치 처리
      </h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          여러 줄 텍스트 입력 (한 줄씩 처리)
        </label>
        <textarea
          value={batchInput}
          onChange={(e) => setBatchInput(e.target.value)}
          placeholder="여러 줄의 텍스트를 입력하세요..."
          className="textarea-custom h-32"
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={processBatch}
          disabled={isProcessing || !batchInput.trim()}
          className="btn-primary disabled:opacity-50"
        >
          {isProcessing ? '처리 중...' : '배치 처리'}
        </button>
        <button onClick={copyAllResults} className="btn-secondary">
          전체 복사
        </button>
        <button onClick={clearAll} className="btn-secondary">
          모두 지우기
        </button>
      </div>

      {batchResults.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            처리 결과 ({batchResults.length}개)
          </h4>
          <div className="max-h-96 overflow-y-auto space-y-2">
            {batchResults.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 dark:border-gray-600 rounded p-3"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-600 dark:text-gray-400 truncate flex-1">
                    입력: {item.input}
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => copyItem(item.output)}
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      복사
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-red-600 hover:text-red-700 font-medium"
                    >
                      삭제
                    </button>
                  </div>
                </div>
                <div className="text-sm bg-gray-50 dark:bg-gray-700 p-2 rounded font-mono break-all">
                  {item.output}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 