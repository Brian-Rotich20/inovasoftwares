// app/loading.js

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="w-10 h-10 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
