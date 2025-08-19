'use client';
import { useEffect } from 'react';
import { toast } from 'sonner';

export function ConstructionToast() {
  useEffect(() => {
    toast("🚧 This website is currently under construction", {
      description: "Please check back later for updates.",
      duration: Infinity,
      dismissible: true,
    });
  }, []);

  return null; // no UI, just triggers the toast
}
