import { DataTable } from "@/components/ui/datatable/data-table";
import { createFileRoute } from "@tanstack/react-router";
import { columns as customerColumn } from "@/components/customers/columns";
import { CustomerService } from "@/services/customer.service";
import { ErrorPage } from "@/components/common/error-page";
import { LoaderPage } from "@/components/common/loader-page";
import { useQuery } from "@tanstack/react-query";
import type { Customer } from "@/schema/customer.schema";
import PageTitle from "@/components/common/page-title";

export const Route = createFileRoute("/_appLayout/customers")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle>Customers Page</PageTitle>
      <CustomersPage />
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
  return <DataTable columns={customerColumn} data={customers ?? []} />;
}
