'use client'

interface AdvancedOptionsProps {
  removePadding: boolean
  setRemovePadding: (value: boolean) => void
  removeLineBreaks: boolean
  setRemoveLineBreaks: (value: boolean) => void
  toUpperCase: boolean
  setToUpperCase: (value: boolean) => void
  lineBreakInterval: number
  setLineBreakInterval: (value: number) => void
}

export default function AdvancedOptions({
  removePadding,
  setRemovePadding,
  removeLineBreaks,
  setRemoveLineBreaks,
  toUpperCase,
  setToUpperCase,
  lineBreakInterval,
  setLineBreakInterval
}: AdvancedOptionsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        고급 옵션
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <input
            id="removePadding"
            type="checkbox"
            checked={removePadding}
            onChange={(e) => setRemovePadding(e.target.checked)}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="removePadding" className="text-sm text-gray-700 dark:text-gray-300">
            패딩 제거 (=)
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input
            id="removeLineBreaks"
            type="checkbox"
            checked={removeLineBreaks}
            onChange={(e) => setRemoveLineBreaks(e.target.checked)}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="removeLineBreaks" className="text-sm text-gray-700 dark:text-gray-300">
            줄바꿈 제거
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input
            id="toUpperCase"
            type="checkbox"
            checked={toUpperCase}
            onChange={(e) => setToUpperCase(e.target.checked)}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="toUpperCase" className="text-sm text-gray-700 dark:text-gray-300">
            대문자 변환
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <label htmlFor="lineBreakInterval" className="text-sm text-gray-700 dark:text-gray-300">
            줄바꿈 간격:
          </label>
          <select
            id="lineBreakInterval"
            value={lineBreakInterval}
            onChange={(e) => setLineBreakInterval(Number(e.target.value))}
            className="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value={0}>없음</option>
            <option value={64}>64자</option>
            <option value={76}>76자</option>
            <option value={100}>100자</option>
          </select>
        </div>
      </div>
    </div>
  )
} 