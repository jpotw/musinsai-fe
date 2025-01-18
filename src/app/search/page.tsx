"use client"

import React from 'react';
import SearchVideoSearchBar from '@/components/search/search-video-search-bar';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <SearchVideoSearchBar />
        </div>
      </div>
    </div>
  );
}
