import type { Invoice } from "@/schema/invoice.schema";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoice_id",
    header: "Invoice ID",
  },
  {
    accessorKey: "customer_id",
    header: "Customer ID",
  },
  {
    accessorKey: "invoice_date",
    header: "Invoice Date",
    cell: ({ getValue }) => {
      // Format date for display
      const date = getValue() as string;
      return new Date(date).toLocaleDateString();
    },
  },
  {
    accessorKey: "billing_address",
    header: "Billing Address",
  },
  {
    accessorKey: "billing_city",
    header: "Billing City",
  },
  {
    accessorKey: "billing_country",
    header: "Billing Country",
  },
  {
    accessorKey: "billing_postal_code",
    header: "Postal Code",
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ getValue }) => {
      // Format as currency
      const value = getValue() as number;
      return value.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
      });
    },
  },
];
