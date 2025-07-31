// app/not-found.js
'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center bg-white px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl mb-6 text-gray-700">Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/" className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Go Back Home
      </Link>
    </div>
  )
}
