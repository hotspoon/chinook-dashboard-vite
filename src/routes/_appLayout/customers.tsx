import { columns, type Payment } from "@/components/payments/columns";
import { DataTable } from "@/components/payments/data-table";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_appLayout/customers")({
  component: RouteComponent,
});

function RouteComponent() {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
  return (
    <>
      <h1>Customer Page</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
