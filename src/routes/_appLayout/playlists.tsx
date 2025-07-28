import PageTitle from "@/components/common/page-title";
import { createFileRoute } from "@tanstack/react-router";
import { ErrorPage } from "@/components/common/error-page";
import { LoaderPage } from "@/components/common/loader-page";
import { PlaylistService } from "@/services/playlist.service";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/_appLayout/playlists")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle>Playlist Page</PageTitle>
      <PlaylistGrid />
    </>
  );
}

function PlaylistGrid() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["genres"],
    queryFn: PlaylistService.fetchAll,
  });

  if (isLoading) return <LoaderPage />;
  if (isError) return <ErrorPage message={error.message} />;
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <span className="text-4xl mb-2">🎶</span>
        <span className="text-lg font-semibold">No playlists found.</span>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((playlist) => (
          <div
            key={playlist.playlist_id}
            className="bg-blue-100 p-4 rounded-lg shadow hover:shadow-lg hover:cursor-pointer transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold">{playlist.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
