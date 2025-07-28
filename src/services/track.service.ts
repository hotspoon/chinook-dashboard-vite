import type { Track, PaginatedTracksResponse } from "@/schema/track.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class TrackService {
  static kyInstance = kyInstance;
  static endpoint = "tracks";

  static async fetchPaginated({
    limit,
    offset,
    name,
  }: {
    limit: number;
    offset: number;
    name?: string;
  }): Promise<PaginatedTracksResponse> {
    const params: Record<string, string | number> = { limit, offset };
    if (name) params.name = name;
    return await TrackService.kyInstance
      .get(TrackService.endpoint, { searchParams: params })
      .json<PaginatedTracksResponse>();
  }

  static async fetchAll(): Promise<Track[]> {
    return await TrackService.kyInstance
      .get(TrackService.endpoint)
      .json<Track[]>();
  }

  // Fetch a single track by ID
  static async fetchById(id: number): Promise<Track | null> {
    try {
      return await TrackService.kyInstance
        .get(`${TrackService.endpoint}/${id}`)
        .json<Track>();
    } catch (error) {
      return null;
    }
  }
}
