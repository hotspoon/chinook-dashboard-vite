import { z } from "zod";

export const EmployeeSchema = z.object({
  employee_id: z.number(),
  last_name: z.string(),
  first_name: z.string(),
  title: z.string(),
  BirthDate: z.string(),
  HireDate: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postal_code: z.string(),
  phone: z.string(),
  fax: z.string(),
  email: z.string().email(),
});

// TypeScript type inferred from Zod schema
export type Employee = z.infer<typeof EmployeeSchema>;
