'use client';
import { useState } from 'react';
import { Construction, X } from 'lucide-react';

export default function ConstructionDialog() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null; // No dialog when closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Dialog */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-sm w-full p-5 z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Construction className="w-5 h-5 text-[#0D9488]" />
            <h2 className="text-base font-semibold text-gray-900">
              Under Construction
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <p className="text-sm text-gray-600 mb-4">
          We're working to improve your experience. Please check back soon.
        </p>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-3 py-1.5 bg-[#0D9488] text-white rounded-md hover:bg-[#0D9488]/90 transition-colors text-sm font-medium"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
