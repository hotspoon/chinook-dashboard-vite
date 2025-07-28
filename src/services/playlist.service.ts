import type { Playlist } from "@/schema/playlist.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class PlaylistService {
  static kyInstance = kyInstance;
  static endpoint = "playlists";

  // Fetch all playlists
  static async fetchAll(): Promise<Playlist[]> {
    return await PlaylistService.kyInstance
      .get(PlaylistService.endpoint)
      .json<Playlist[]>();
  }

  // Fetch a single playlist by ID
  static async fetchById(id: number): Promise<Playlist | null> {
    try {
      return await PlaylistService.kyInstance
        .get(`${PlaylistService.endpoint}/${id}`)
        .json<Playlist>();
    } catch (error) {
      return null;
    }
  }
}
