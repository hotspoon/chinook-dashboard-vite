import type { Artist } from "@/schema/artist.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class ArtistService {
  static kyInstance = kyInstance;
  static endpoint = "artists";

  static async fetchAll(): Promise<Artist[]> {
    return await ArtistService.kyInstance
      .get(ArtistService.endpoint)
      .json<Artist[]>();
  }

  static async fetchById(id: number): Promise<Artist | null> {
    try {
      return await ArtistService.kyInstance
        .get(`${ArtistService.endpoint}/${id}`)
        .json<Artist>();
    } catch (error) {
      return null;
    }
  }

  static async fetchByName(name: string): Promise<Artist[]> {
    try {
      return await ArtistService.kyInstance
        .get(`${ArtistService.endpoint}/search`, {
          searchParams: { name },
        })
        .json<Artist[]>();
    } catch (error: any) {
      if (error.response?.status === 404) {
        return [];
      }
      throw error; // rethrow other errors
    }
  }
}
