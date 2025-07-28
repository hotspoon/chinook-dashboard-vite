import type { Album, PaginatedAlbumsResponse } from "@/schema/album.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class AlbumService {
  static kyInstance = kyInstance;
  static endpoint = "albums";

  static async fetchPaginated({
    limit,
    offset,
    name,
  }: {
    limit: number;
    offset: number;
    name?: string;
  }): Promise<PaginatedAlbumsResponse> {
    const params: Record<string, string | number> = { limit, offset };
    if (name) params.name = name;
    return await AlbumService.kyInstance
      .get(AlbumService.endpoint, { searchParams: params })
      .json<PaginatedAlbumsResponse>();
  }

  static async fetchAll(): Promise<Album[]> {
    return await AlbumService.kyInstance
      .get(AlbumService.endpoint)
      .json<Album[]>();
  }

  // Fetch a single album by ID
  static async fetchById(id: number): Promise<Album | null> {
    try {
      return await AlbumService.kyInstance
        .get(`${AlbumService.endpoint}/${id}`)
        .json<Album>();
    } catch (error) {
      return null;
    }
  }
}
