import { useQuery } from 'react-query';
import { Product } from '../types/common';
import axiosClient from './axiosClient';

export const useProductListQuery = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => axiosClient.get<Product[]>('blogs')
  });

  return {
    ...rest,
    data: data?.data || []
  };
};
