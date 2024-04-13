export interface Pagination<Data> {
  metadata: {
    page: number;
    size: number;
    totalPages: number;
    totalItems: number;
  };
  data: Data[];
}
