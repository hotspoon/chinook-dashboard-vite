import { z } from "zod";

export const InvoiceSchema = z.object({
  invoice_id: z.number(),
  customer_id: z.number(),
  invoice_date: z.string().datetime(), // ISO 8601 date string
  billing_address: z.string(),
  billing_city: z.string(),
  billing_country: z.string(),
  billing_postal_code: z.string(),
  total: z.number(),
});

// TypeScript type inferred from Zod schema
export type Invoice = z.infer<typeof InvoiceSchema>;
