import React from 'react';

const ArticleDetailLoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-gray-700 text-lg font-semibold">Loading article details...</p>
      </div>
    </div>
  );
};

export default ArticleDetailLoadingScreen;
