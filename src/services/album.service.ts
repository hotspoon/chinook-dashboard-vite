import type { Album } from "@/schema/album.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class AlbumService {
  static kyInstance = kyInstance;
  static endpoint = "albums";

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
