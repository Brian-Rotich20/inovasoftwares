import { useState } from 'react';
import { Construction, X } from 'lucide-react';

export default function ConstructionDialog() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-[#0D9488] text-white rounded-lg hover:bg--700 transition-colors"
        >
          Show Dialog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      
      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Construction className="w-6 h-6 text-orange-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                Under Construction
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <p className="text-gray-600 mb-2">
            We're working to improve your experience. Please check back soon.
          </p>

          {/* Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-[#0D9488] text-white rounded-lg hover:bg-[#0D9488]/90 transition-colors font-medium"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}