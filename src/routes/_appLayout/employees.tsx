import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_appLayout/employees")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>Employees Page</h1>
      <EmployeesPage />
    </>
  );
}

function EmployeesPage() {
  return (
    <div>
      <h1>Employees Page</h1>
      <p>This is the employees page.</p>
    </div>
  );
}
