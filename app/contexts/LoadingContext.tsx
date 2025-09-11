// contexts/LoadingContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import LoadingSpinner from '../components/LoaderSpinner';

interface LoadingContextType {
  isLoading: boolean;
  navigate: (href: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true); // Start with loading on page load
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle initial page load/refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [pathname]); // Restart timer when pathname changes

  const navigate = (href: string) => {
    setIsNavigating(true);
    
    setTimeout(() => {
      router.push(href);
      setIsNavigating(false);
    }, 6000);
  };

  const showLoading = isLoading || isNavigating;

  return (
    <LoadingContext.Provider value={{ isLoading: showLoading, navigate }}>
      {showLoading && <LoadingSpinner />}
      {!showLoading && children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}