'use client';

import { Goods } from '@/types/goods';
import Link from 'next/link';

interface ProductCardProps {
  product: Goods;
  searchQuery: string;
}

export default function ProductCard({ product, searchQuery }: ProductCardProps) {
  return (
    <Link 
      href={`/search/${encodeURIComponent(searchQuery)}/${product.goodsNo}`}
      className="block group"
    >
      <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
        {product.thumbnail && (
          <img
            src={product.thumbnail}
            alt={product.goodsName}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2">
          {product.goodsName}
        </h3>
        <div className="flex items-baseline gap-2">
          {product.saleRate > 0 && (
            <span className="text-red-500 font-bold text-sm">{product.saleRate}%</span>
          )}
          <span className="font-bold">{product.price.toLocaleString()}원</span>
          {product.normalPrice !== product.price && (
            <span className="text-gray-400 line-through text-sm">
              {product.normalPrice.toLocaleString()}원
            </span>
          )}
        </div>
      </div>
    </Link>
  );
} 
