export type Artist = {
  id: number;
  name: string;
};

export interface PaginatedArtistsResponse {
  data: Artist[];
  hasMore: boolean;
  limit: number;
  offset: number;
  total: number;
}
