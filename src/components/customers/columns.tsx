import type { Customer } from "@/schema/customer.schema";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "customer_id",
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
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "postal_code",
    header: "Postal Code",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "fax",
    header: "Fax",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "support_rep_id",
    header: "Support Rep ID",
  },
];
