import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { AuthApi } from "@/api/authApi";
import { LoaderPage } from "@/components/common/loader-page";
import { ErrorPage } from "@/components/common/error-page";

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
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["currentUserData"],
  //   queryFn: AuthApi.getCurrentUser,
  // });

  // if (isLoading) return <LoaderPage />;

  // if (isError) return <ErrorPage message={error.message} />;

  return (
    <>
      <h1>Dashboard Page</h1>
      {/* <p>Welcome, {data?.username}!</p> */}
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="bg-muted/50 aspect-video h-12 w-full rounded-lg"
        />
      ))}
    </>
  );
}
