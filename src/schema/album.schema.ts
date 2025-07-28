export type Album = {
  id: number;
  title: string;
  artist_id: number;
  artist_name: string;
};

export interface PaginatedAlbumsResponse {
  data: Album[];
  hasMore: boolean;
  limit: number;
  offset: number;
  total: number;
}
