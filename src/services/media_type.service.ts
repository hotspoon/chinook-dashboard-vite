import type { MediaType } from "@/schema/media_type.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class MediaTypeService {
  static kyInstance = kyInstance;
  static endpoint = "media_types";

  // Fetch all media types
  static async fetchAll(): Promise<MediaType[]> {
    return await MediaTypeService.kyInstance
      .get(MediaTypeService.endpoint)
      .json<MediaType[]>();
  }

  // Fetch a single media type by ID
  static async fetchById(id: number): Promise<MediaType | null> {
    try {
      return await MediaTypeService.kyInstance
        .get(`${MediaTypeService.endpoint}/${id}`)
        .json<MediaType>();
    } catch (error) {
      return null;
    }
  }
}
