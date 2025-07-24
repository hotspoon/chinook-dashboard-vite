import type { Employee } from "@/schema/employee.schema";
import kyInstance from "@/lib/auth/kyInstance";

export class EmployeeService {
  static kyInstance = kyInstance;
  static endpoint = "employees";

  // Fetch all employees
  static async fetchAll(): Promise<Employee[]> {
    return await EmployeeService.kyInstance
      .get(EmployeeService.endpoint)
      .json<Employee[]>();
  }

  // Fetch a single employee by ID
  static async fetchById(id: number): Promise<Employee | null> {
    try {
      return await EmployeeService.kyInstance
        .get(`${EmployeeService.endpoint}/${id}`)
        .json<Employee>();
    } catch (error) {
      return null;
    }
  }
}
