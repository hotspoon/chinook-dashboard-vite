import { DataTable } from "@/components/ui/datatable/data-table";
import { createFileRoute } from "@tanstack/react-router";
import { columns as invoiceColumn } from "@/components/invoices/columns";
import { ErrorPage } from "@/components/common/error-page";
import { LoaderPage } from "@/components/common/loader-page";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "@/components/common/page-title";
import { InvoiceService } from "@/services/invoice.service";
import type { Invoice } from "@/schema/invoice.schema";

export const Route = createFileRoute("/_appLayout/invoices")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle>Invoices Page</PageTitle>
      <InvoicesPage />
    </>
  );
}

function InvoicesPage() {
  const {
    data: invoices,
    isLoading,
    error,
  } = useQuery<Invoice[]>({
    queryKey: ["invoices"],
    queryFn: InvoiceService.fetchAll,
  });

  if (isLoading) {
    return <LoaderPage />;
  }

  if (error instanceof Error) return <ErrorPage message={error.message} />;
  return <DataTable columns={invoiceColumn} data={invoices ?? []} />;
}
