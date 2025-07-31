import { Code } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 z-50">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo with animated glow */}
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-2xl animate-pulse">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl animate-ping"></div>
        </div>

        {/* Company name */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-1">
            Inova <span className="text-yellow-600">Softwares</span>
          </h2>
          <p className="text-sm text-slate-600 font-medium">Professional Software Solutions</p>
        </div>

        {/* Loading spinner */}
        <div className="relative">
          <div className="w-8 h-8 border-3 border-slate-200 border-t-yellow-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-8 h-8 border-3 border-transparent border-r-yellow-400 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
        </div>

        {/* Loading text */}
        <div className="flex items-center space-x-1">
          <span className="text-xs text-slate-500 font-medium">Loading</span>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-yellow-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-1 h-1 bg-yellow-600 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-1 h-1 bg-yellow-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-40 w-28 h-28 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
    </div>
  )
}