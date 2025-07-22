import { createFileRoute } from "@tanstack/react-router";
// import { useQuery } from "@tanstack/react-query"; // TODO
// import { AuthApi } from "@/api/authApi"; // TODO
// import { LoaderPage } from "@/components/common/loader-page"; // TODO
// import { ErrorPage } from "@/components/common/error-page"; // TODO
import { Skeleton } from "@/components/ui/skeleton";

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

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Skeleton className="aspect-video rounded-xl" />
          <Skeleton className="aspect-video rounded-xl" />
          <Skeleton className="aspect-video rounded-xl" />
        </div>
        <Skeleton className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
      {/* <p>Welcome, {data?.username}!</p> */}
      {/* {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="bg-muted/50 aspect-video h-12 w-full rounded-lg"
        />
      ))} */}
    </>
  );
}
