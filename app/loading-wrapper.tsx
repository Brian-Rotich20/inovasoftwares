"use client";
import { useEffect, useState } from "react";
import { LoaderOne } from "./components/ui/loader";

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust as needed

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoaderOne />
      </div>
    );
  }

  return <>{children}</>;
}
