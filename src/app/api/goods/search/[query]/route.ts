import { NextResponse } from 'next/server';
import { fetchGoods } from '../utils';

type Props = {
  params: Promise<{
    query: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: Props
) {
  const resolvedParams = await params;
  try {
    const data = await fetchGoods(resolvedParams.query);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch goods' },
      { status: 500 }
    );
  }
} 
