import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import SearchVideoSearchBar from '@/components/search/search-video-search-bar';
import { Goods } from "@/types/goods";
import ProductCard from '@/components/search/product-card';
import { fetchGoods } from '@/app/api/goods/search/[query]/route';

function SearchResults({ products, searchQuery }: { products: Goods[], searchQuery: string }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-400">검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableBody>
          {Array.from({ length: Math.ceil(products.length / 6) }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: 6 }).map((_, colIndex) => {
                const product = products[rowIndex * 6 + colIndex];
                return (
                  <TableCell key={colIndex} className="p-2">
                    {product ? (
                      <ProductCard product={product} searchQuery={searchQuery} />
                    ) : null}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default async function SearchResultPage({
  params
}: {
  params: Promise<{ query: string }>
}) {
  const resolvedParams = await params;
  const decodedQuery = decodeURIComponent(resolvedParams.query);
  const response = await fetchGoods(decodedQuery);
  const products = response.data?.list || [];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto">
          <SearchVideoSearchBar />
          
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
              &quot;{decodedQuery}&quot; 검색 결과
            </h2>
            
            <SearchResults products={products} searchQuery={decodedQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}
