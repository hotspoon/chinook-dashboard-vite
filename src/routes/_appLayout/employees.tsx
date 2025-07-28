import { ErrorPage } from "@/components/common/error-page";
import { LoaderPage } from "@/components/common/loader-page";
import PageTitle from "@/components/common/page-title";
import { columns as employeeColumn } from "@/components/employees/columns";
import { DataTable } from "@/components/ui/datatable/data-table";
import { queryClient } from "@/lib/queryClients";
import type { Employee } from "@/schema/employee.schema";
import { EmployeeService } from "@/services/employee.service";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_appLayout/employees")({
  component: RouteComponent,
  loader: async () =>
    // This pre-fetches and caches the data.
    // The component will then "read" from this cache using useQuery.
    queryClient.ensureQueryData({
      queryKey: ["employees"],
      queryFn: EmployeeService.fetchAll,
    }),
});

function RouteComponent() {
  return (
    <>
      <PageTitle>Employees Page</PageTitle>
      <EmployeesPage />
    </>
  );
}

function EmployeesPage() {
  const {
    data: employees,
    isLoading,
    error,
  } = useQuery<Employee[]>({
    queryKey: ["employees"],
    queryFn: EmployeeService.fetchAll,
  });

  if (isLoading) {
    return <LoaderPage />;
  }

  if (error instanceof Error) return <ErrorPage message={error.message} />;

  return (
    <div>
      <div className="">
        <DataTable columns={employeeColumn} data={employees ?? []} />
      </div>
    </div>
  );
}
