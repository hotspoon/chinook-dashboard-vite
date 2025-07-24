import type { Employee } from "@/schema/employee.schema";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "employee_id",
    header: "ID",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "birth_date",
    header: "Birth Date",
  },
  {
    accessorKey: "hire_date",
    header: "Hire Date",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
];
