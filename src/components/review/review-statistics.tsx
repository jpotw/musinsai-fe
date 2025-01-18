'use client';

import { ReviewStats } from '@/types/review';
import { motion } from 'framer-motion';
import { PieChart, BarChart } from 'lucide-react';

interface ReviewStatisticsProps {
  reviewStats: ReviewStats;
  className?: string;
}

export default function ReviewStatistics({ reviewStats, className = '' }: ReviewStatisticsProps) {
  const calculatePercentage = (count: number) => {
    if (reviewStats.totalCount === 0) return '0.0';
    return ((count / reviewStats.totalCount) * 100).toFixed(1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg border border-gray-100 h-full flex flex-col ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-medium text-gray-800 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-purple-600" />
            리뷰 개요
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {reviewStats.totalCount.toLocaleString()}개의 리뷰 데이터
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-100"
        >
          <BarChart className="w-4 h-4 mr-2" />
          상세 분석
        </motion.button>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1">
        <div className="relative">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-full rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 flex items-center justify-center shadow-sm"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-1">
                {reviewStats.totalCount === 0 ? 0 : reviewStats.satisfactionScore}
              </div>
              <div className="text-xs text-gray-500">평균 평점</div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-3 col-span-2 flex flex-col justify-between">
          {[
            {
              label: '일반 리뷰',
              count: reviewStats.totalCount - reviewStats.styleCount - reviewStats.monthCount,
              color: 'from-purple-50 to-white border-purple-100',
              barColor: 'bg-purple-400'
            },
            {
              label: '스타일 리뷰',
              count: reviewStats.styleCount,
              color: 'from-purple-50 to-white border-purple-100',
              barColor: 'bg-purple-400'
            },
            {
              label: '한 달 리뷰',
              count: reviewStats.monthCount,
              color: 'from-purple-50 to-white border-purple-100',
              barColor: 'bg-purple-400'
            }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl bg-gradient-to-r ${item.color} p-3 shadow-sm relative overflow-hidden flex-1`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{item.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    {item.count.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500">
                    {calculatePercentage(item.count)}%
                  </span>
                </div>
              </div>
              <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${calculatePercentage(item.count)}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full rounded-full ${item.barColor}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 
