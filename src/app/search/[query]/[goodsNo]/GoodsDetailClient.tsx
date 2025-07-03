'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ReviewStats } from '@/types/review';
import Loading from '@/components/loading';
import { Goods } from '@/types/goods';
import ReviewStatistics from '@/components/review/review-statistics';

interface GoodsDetailClientProps {
  initialData: Goods;
  goodsNo: string;
  reviewStats: ReviewStats;
}

export default function GoodsDetailClient({ 
  initialData,
  goodsNo,
  reviewStats: initialReviewStats
}: GoodsDetailClientProps) {
  const [reviewStats, setReviewStats] = useState<ReviewStats>(initialReviewStats);
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        뒤로가기
      </button>
      
      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-5 h-[480px]">
          <div className="h-full relative rounded-lg shadow-sm overflow-hidden">
            {initialData?.thumbnail && (
              <img 
                src={initialData.thumbnail}
                alt={initialData.goodsName || 'Product image'}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        {/* 상품 정보 영역 */}
        <div className="col-span-7 h-[480px]">
          <div className="h-full flex flex-col">
            <div className="space-y-3 flex-shrink-0">
              <div>
                {initialData?.brandLinkUrl ? (
                  <a href={initialData.brandLinkUrl} className="text-gray-600 hover:text-black transition-colors">
                    {initialData.brandName}
                  </a>
                ) : (
                  <span className="text-gray-600">{initialData.brandName}</span>
                )}
                <a href={`https://www.musinsa.com/products/${initialData.goodsNo}`} target="_blank" rel="noopener noreferrer">
                  <h1 className="text-2xl font-bold mt-1">{initialData.goodsName}</h1>
                </a>
              </div>
              
              <div className="flex items-baseline gap-3">
                {initialData?.saleRate > 0 && (
                  <span className="text-red-500 font-bold text-lg">{initialData.saleRate}%</span>
                )}
                <span className="text-3xl font-bold">
                  {initialData?.price.toLocaleString()}원
                </span>
                {initialData?.normalPrice !== initialData?.price && (
                  <span className="text-gray-400 line-through text-sm">
                    {initialData?.normalPrice.toLocaleString()}원
                  </span>
                )}
              </div>

              <div className="pt-3 border-t">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>⭐ {initialData?.reviewScore}</span>
                  <span>리뷰 {initialData?.reviewCount.toLocaleString()}개</span>
                  <span>{initialData?.displayGenderText}</span>
                </div>
              </div>
            </div>

            {/* 리뷰 통계 영역 */}
            <ReviewStatistics reviewStats={reviewStats} className="flex-1 mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
} 