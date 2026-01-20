export interface SearchParams {
  page?: string;
  pageSize?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filter?: string;
}