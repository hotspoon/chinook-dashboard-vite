export type Artist = {
  ID: number;
  Name: string;
};

export interface PaginatedArtistsResponse {
  data: Artist[];
  hasMore: boolean;
  limit: number;
  offset: number;
  total: number;
}
