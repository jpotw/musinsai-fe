import { NextResponse } from 'next/server';
import { fetchGoodsReviews } from '../utils';

type Props = {
  params: Promise<{
    goodsNo: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: Props
) {
  const resolvedParams = await params;
  try {
    const data = await fetchGoodsReviews(resolvedParams.goodsNo);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
