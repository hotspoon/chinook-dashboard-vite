import { DataTable } from "@/components/ui/datatable/data-table";
import { createFileRoute } from "@tanstack/react-router";
import { columns as customerColumn } from "@/components/customers/columns";
import { CustomerService } from "@/services/customer.service";
import { ErrorPage } from "@/components/common/error-page";
import { LoaderPage } from "@/components/common/loader-page";
import { useQuery } from "@tanstack/react-query";
import type { Customer } from "@/schema/customer.schema";

export const Route = createFileRoute("/_appLayout/customers")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Customers Page</h1>
        <CustomersPage />
      </div>
    </>
  );
}

function CustomersPage() {
  const {
    data: customers,
    isLoading,
    error,
  } = useQuery<Customer[]>({
    queryKey: ["customers"],
    queryFn: CustomerService.fetchAll,
  });

  if (isLoading) {
    return <LoaderPage />;
  }

  if (error instanceof Error) return <ErrorPage message={error.message} />;
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <DataTable columns={customerColumn} data={customers ?? []} />
    </div>
  );
}
