import { ErrorPage } from "@/components/common/error-page";
import { LoaderPage } from "@/components/common/loader-page";
import PageTitle from "@/components/common/page-title";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MediaTypeService } from "@/services/media_type.service";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_appLayout/media_types")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle>Media Type Page</PageTitle>
      <MediaTypeGrid />
    </>
  );
}

function MediaTypeGrid() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["media_types"],
    queryFn: MediaTypeService.fetchAll,
  });

  if (isLoading) return <LoaderPage />;
  if (isError) return <ErrorPage message={error.message} />;

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <span className="text-4xl mb-2">📼</span>
        <span className="text-lg font-semibold">No media types found.</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((mediaType) => (
        <Card
          key={mediaType.media_type_id}
          className="hover:shadow-lg hover:cursor-pointer transition-shadow duration-300"
        >
          <CardHeader className="flex flex-col items-center text-center">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                mediaType.name,
              )}&background=random&size=128`}
              alt={mediaType.name}
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
            <CardTitle className="text-lg font-semibold">
              {mediaType.name}
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
