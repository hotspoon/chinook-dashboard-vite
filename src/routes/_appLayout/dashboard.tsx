import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_appLayout/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      {
        title: "Dashboard",
      },
    ],
  }),
});

function Dashboard() {
  return (
    <>
      <h1>Dashboard Page</h1>
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="bg-muted/50 aspect-video h-12 w-full rounded-lg"
        />
      ))}
    </>
  );
}
