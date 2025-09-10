import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center" 
      style={{backgroundColor: '#111827'}}
    >
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <p className="mt-4 text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
