import Base64Converter from '@/components/Base64Converter'

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Base64 Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          빠르고 간편한 Base64 인코더/디코더. 실시간 변환, 다양한 인코딩 지원, 
          URL-safe 옵션을 제공합니다.
        </p>
      </div>
      
      <Base64Converter />
    </div>
  )
} 