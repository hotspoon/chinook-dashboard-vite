import { AlbumService } from "@/services/album.service";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query"; // Import useQuery
import type { Album } from "@/schema/album.schema";
import { LoaderPage } from "@/components/common/loader-page";
import { ErrorPage } from "@/components/common/error-page";
import { queryClient } from "@/lib/queryClients";
import PageTitle from "@/components/common/page-title";

export const Route = createFileRoute("/_appLayout/albums")({
  component: RouteComponent,
  loader: async () =>
    queryClient.ensureQueryData({
      queryKey: ["albums"],
      queryFn: AlbumService.fetchAll,
    }),
});

function RouteComponent() {
  // The queryKey should match the one used in the loader.
  const {
    data: albums,
    isLoading,
    error,
  } = useQuery<Album[]>({
    queryKey: ["albums"],
    queryFn:
      AlbumService.fetchAll /* This can be omitted if you're sure the loader will always provide data,but it's safer to include it for consistency and potential re-fetches. */,
  });

  if (isLoading) {
    return <LoaderPage />;
  }

  if (error instanceof Error) return <ErrorPage message={error.message} />;

  return (
    <div>
      <PageTitle>Artists Page</PageTitle>
      <p>This is the albums page.</p>

      {albums && albums.length > 0 ? (
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <h3>{album.title}</h3>
              <p>Artist: {album.artist_name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No albums found.</p>
      )}

      {/* You can add more features here, e.g., a button to add a new album */}
      {/* <button onClick={() => console.log("Add new album")}>Add Album</button> */}
    </div>
  );
}
