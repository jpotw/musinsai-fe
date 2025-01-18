import { Goods } from '@/types/goods';

export interface SearchResponse {
  data: {
    list: Goods[];
  };
}

export async function fetchGoods(query: string): Promise<SearchResponse> {
  const params = new URLSearchParams({
    gf: 'A',
    keyword: query,
    sortCode: 'POPULAR',
    page: '1',
    size: '30',
    caller: 'SEARCH'
  });

  const url = `${process.env.MUSINSA_BASE_API_URL}/api2/dp/v1/plp/goods?${params}`;
  
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching goods:', error);
    throw error;
  }
} 
