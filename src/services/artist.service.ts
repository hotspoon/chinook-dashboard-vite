import type { Artist, PaginatedArtistsResponse } from "@/schema/artist.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class ArtistService {
  static kyInstance = kyInstance;
  static endpoint = "artists";

  static async fetchPaginated({
    limit,
    offset,
    name,
  }: {
    limit: number;
    offset: number;
    name?: string;
  }): Promise<PaginatedArtistsResponse> {
    const params: Record<string, string | number> = { limit, offset };
    if (name) params.name = name;
    return await ArtistService.kyInstance
      .get(ArtistService.endpoint, { searchParams: params })
      .json<PaginatedArtistsResponse>();
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
