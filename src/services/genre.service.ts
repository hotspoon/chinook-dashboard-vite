import type { Genre } from "@/schema/genre.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class GenreService {
  static kyInstance = kyInstance;
  static endpoint = "genres";

  // Fetch all genres
  static async fetchAll(): Promise<Genre[]> {
    return await GenreService.kyInstance
      .get(GenreService.endpoint)
      .json<Genre[]>();
  }

  // Fetch a single genre by ID
  static async fetchById(id: number): Promise<Genre | null> {
    try {
      return await GenreService.kyInstance
        .get(`${GenreService.endpoint}/${id}`)
        .json<Genre>();
    } catch (error) {
      return null;
    }
  }
}
