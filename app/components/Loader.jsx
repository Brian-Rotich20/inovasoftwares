// components/Loader.jsx
'use client'

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
