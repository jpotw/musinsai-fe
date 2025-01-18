import { Goods } from '@/types/goods';
import { fetchGoodsReviews } from '@/app/api/reviews/[goodsNo]/route';
import { fetchGoods } from '@/app/api/goods/search/[query]/route';
import GoodsDetailClient from './GoodsDetailClient';

export default async function GoodsDetailPage({
  params
}: {
  params: Promise<{ query: string; goodsNo: string }>
}) {
  const resolvedParams = await params;
  
  const [searchResponse, reviews] = await Promise.all([
    fetchGoods(resolvedParams.query),
    fetchGoodsReviews(resolvedParams.goodsNo)
  ]);

  const goods = searchResponse.data.list.find(
    (item: Goods) => String(item.goodsNo) === resolvedParams.goodsNo
  );

  if (!goods) {
    throw new Error('Product not found');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <GoodsDetailClient initialData={goods} reviewStats={reviews} goodsNo={resolvedParams.goodsNo} />
    </div>
  );
}
