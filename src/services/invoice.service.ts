import type { Invoice } from "@/schema/invoice.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class InvoiceService {
  static kyInstance = kyInstance;
  static endpoint = "invoices";

  // Fetch all invoices
  static async fetchAll(): Promise<Invoice[]> {
    return await InvoiceService.kyInstance
      .get(InvoiceService.endpoint)
      .json<Invoice[]>();
  }

  // Fetch a single invoice by ID
  static async fetchById(id: number): Promise<Invoice | null> {
    try {
      return await InvoiceService.kyInstance
        .get(`${InvoiceService.endpoint}/${id}`)
        .json<Invoice>();
    } catch (error) {
      return null;
    }
  }
}
