import type { Customer } from "@/schema/customer.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class CustomerService {
  static kyInstance = kyInstance;
  static endpoint = "customers";

  // Fetch all customers
  static async fetchAll(): Promise<Customer[]> {
    return await CustomerService.kyInstance
      .get(CustomerService.endpoint)
      .json<Customer[]>();
  }

  // Fetch a single customer by ID
  static async fetchById(id: number): Promise<Customer | null> {
    try {
      return await CustomerService.kyInstance
        .get(`${CustomerService.endpoint}/${id}`)
        .json<Customer>();
    } catch (error) {
      return null;
    }
  }
}
