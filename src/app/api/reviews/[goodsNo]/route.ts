import { ReviewStats } from '@/types/review';
import { NextResponse } from 'next/server';

export async function fetchGoodsReviews(goodsNo: string): Promise<ReviewStats> {
  try {
    const url = `${process.env.MUSINSA_GOODS_API_URL}/api2/review/v1/goods/${goodsNo}/reviews/summary`;
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
}

export async function GET(
  request: Request,
  { params }: { params: { goodsNo: string } }
) {
  try {
    const data = await fetchGoodsReviews(params.goodsNo);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
