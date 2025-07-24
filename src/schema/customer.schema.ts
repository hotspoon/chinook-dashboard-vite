import { z } from "zod";

export const CustomerSchema = z.object({
  customer_id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  company: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postal_code: z.string(),
  phone: z.string(),
  fax: z.string(),
  email: z.string().email(),
  support_rep_id: z.number(),
});

// TypeScript type inferred from Zod schema
export type Customer = z.infer<typeof CustomerSchema>;
