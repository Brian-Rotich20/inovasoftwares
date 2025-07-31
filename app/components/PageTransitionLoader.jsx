// components/PageTransitionLoader.jsx
'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Loader from './Loader'

export default function PageTransitionLoader() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 700) // fake delay
    return () => clearTimeout(timer)
  }, [pathname])

  return loading ? <Loader /> : null
}
