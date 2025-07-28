import { ErrorPage } from "@/components/common/error-page";
import { LoaderPage } from "@/components/common/loader-page";
import PageTitle from "@/components/common/page-title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PAGE_SIZE } from "@/data/constant";
import { TrackService } from "@/services/track.service";
import { useInfiniteQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import z from "zod";

const trackSearchSchema = z.object({
  query: z.string().trim().optional(),
});

export const Route = createFileRoute("/_appLayout/tracks")({
  component: RouteComponent,
  validateSearch: trackSearchSchema,
});

function RouteComponent() {
  return (
    <>
      <PageTitle>Track Page</PageTitle>
      <TrackGrid />
    </>
  );
}

function TrackGrid() {
  const { query } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [inputValue, setInputValue] = useState(() => query ?? "");

  useEffect(() => {
    const handler = setTimeout(() => {
      const newQuery = inputValue.trim();
      navigate({
        search: (prev = {}) => {
          const currentQuery = (prev.query || "").trim();
          if (newQuery === currentQuery) return prev;

          return newQuery
            ? { ...prev, query: newQuery }
            : (({ query, ...rest }) => rest)(prev);
        },
      });
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue, navigate]);

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["tracks", query],
      queryFn: async ({ pageParam = 0 }) =>
        TrackService.fetchPaginated({
          limit: PAGE_SIZE,
          offset: pageParam,
          name: query?.trim() || undefined,
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage.hasMore || lastPage.data.length === 0) return undefined;
        return allPages.length * PAGE_SIZE;
      },
      refetchOnWindowFocus: false,
    });

  const tracks = data ? data.pages.flatMap((page) => page.data) : [];
  const nothingFound = !isLoading && tracks.length === 0;

  if (isLoading) return <LoaderPage />;
  if (isError) return <ErrorPage message={error.message} />;
  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="Search tracks..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mb-2 p-1 border rounded"
          autoFocus
        />

        {nothingFound ? (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <span className="text-4xl mb-2">😕</span>
            <span className="text-lg font-semibold">
              {query?.trim()
                ? `No tracks found for "${query}"`
                : "No tracks found."}
            </span>
          </div>
        ) : (
          <InfiniteScroll
            dataLength={tracks.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<LoaderPage />}
            endMessage={
              <div className="text-center py-4 text-sm text-muted-foreground">
                No more tracks.
              </div>
            }
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tracks.map((track) =>
                track ? (
                  <Card
                    key={track.track_id}
                    className="hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader className="flex flex-col items-center text-center">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                          track.name,
                        )}&background=random&size=128`}
                        alt={track.name}
                        className="w-24 h-24 rounded-full object-cover mb-2"
                      />
                      <CardTitle className="text-lg font-semibold">
                        {track.name}
                      </CardTitle>
                      <CardDescription>
                        {track.composer || "Unknown Composer"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-center">
                      <div>Album ID: {track.album_id}</div>
                      <div>Genre ID: {track.genre_id}</div>
                      <div>
                        Duration: {Math.floor(track.milliseconds / 60000)}:
                        {String(
                          Math.floor((track.milliseconds % 60000) / 1000),
                        ).padStart(2, "0")}{" "}
                        min
                      </div>
                      <div>Price: ${track.unit_price.toFixed(2)}</div>
                      <button className="mt-2 px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer transition-colors duration-200">
                        View Details
                      </button>
                    </CardContent>
                  </Card>
                ) : null,
              )}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}
