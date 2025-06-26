import { useQuery } from '@tanstack/react-query';
import { getBlogPageData } from '@/api/blog';
import { BlogAPIResponseType } from '@/types/blog';

export const useBlogQuery = (initialData?: BlogAPIResponseType) => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: getBlogPageData,
    initialData: initialData as BlogAPIResponseType,
    select: (data) => data.data,
    staleTime: Infinity,
  });
};