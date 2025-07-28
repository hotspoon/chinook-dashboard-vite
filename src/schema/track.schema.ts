export type Track = {
  track_id: number;
  name: string;
  album_id: number;
  media_type_id: number;
  genre_id: number;
  composer: string;
  milliseconds: number;
  bytes: number;
  unit_price: number;
};

export interface PaginatedTracksResponse {
  data: Track[];
  hasMore: boolean;
  limit: number;
  offset: number;
  total: number;
}
