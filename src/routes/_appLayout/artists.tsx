import { ErrorPage } from "@/components/common/error-page";
import { LoaderPage } from "@/components/common/loader-page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArtistService } from "@/services/artist.service";
import { useInfiniteQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "@/components/ui/skeleton";

const artistSearchSchema = z.object({
  query: z.string().trim().optional(),
});

const PAGE_SIZE = 50;

export const Route = createFileRoute("/_appLayout/artists")({
  component: RouteComponent,
  validateSearch: artistSearchSchema,
});

function RouteComponent() {
  return (
    <>
      <h1>Artists Page</h1>
      <ArtistGrid />
    </>
  );
}

function ArtistGrid() {
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
      queryKey: ["artists", query],
      queryFn: async ({ pageParam = 0 }) =>
        ArtistService.fetchPaginated({
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

  const artists = data ? data.pages.flatMap((page) => page.data) : [];
  const nothingFound = !isLoading && artists.length === 0;

  if (isLoading) return <ArtistSkeletonGrid count={8} />;
  if (isError) return <ErrorPage message={error.message} />;

  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="Search artists..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mb-2 p-1 border rounded"
          autoFocus
        />
      </div>

      {nothingFound ? (
        <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
          <span className="text-4xl mb-2">😕</span>
          <span className="text-lg font-semibold">
            {query?.trim()
              ? `No artists found for "${query}"`
              : "No artists found."}
          </span>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={artists.length}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<LoaderPage />}
          endMessage={
            <div className="text-center py-4 text-sm text-muted-foreground">
              No more artists.
            </div>
          }
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artists.map((artist) => (
              <Card
                key={artist.ID}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="flex flex-col items-center text-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      artist.Name,
                    )}&background=random&size=128`}
                    alt={artist.Name}
                    className="w-24 h-24 rounded-full object-cover mb-2"
                  />
                  <CardTitle className="text-lg font-semibold">
                    {artist.Name}
                  </CardTitle>
                  <CardDescription>Musician</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-center">
                  <button className="mt-2 px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer transition-colors duration-200">
                    View Profile
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

function ArtistSkeletonGrid({ count = 8 }) {
  return (
    <>
      <div>
        <Skeleton className="w-full h-8" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <Card
            key={i}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-col items-center text-center">
              <Skeleton className="w-24 h-24 rounded-full mb-2" />
              <CardTitle>
                <Skeleton className="w-20 h-4 mb-1" />
              </CardTitle>
              <CardDescription>
                <Skeleton className="w-16 h-3" />
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-center">
              <Skeleton className="w-24 h-6 mx-auto" />
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
