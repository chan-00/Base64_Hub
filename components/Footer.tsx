export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AdSense Placeholder - Top */}
          <div className="md:col-span-3">
            <div className="bg-gray-100 dark:bg-gray-700 h-20 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Google AdSense 배너 영역
              </span>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-6 h-6 bg-primary-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">B</span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    Base64 Hub
                  </span>
                </div>
                
                <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
                  <span>© 2024 Base64 Hub. All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 