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
// Removed: import { useDebounce } from "@/hooks/use-debounce"; // No longer directly needed here for the query
import { ArtistService } from "@/services/artist.service";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod"; // Import zod for schema validation
import { useState, useEffect } from "react"; // Added useEffect for debouncing the search input

// Define a search schema for your route
const artistSearchSchema = z.object({
  // query: z.string().catch(""), // 'catch("")' makes the 'query' optional and defaults to an empty string if not present
  query: z.string().trim().optional().default(""),
});

export const Route = createFileRoute("/_appLayout/artists")({
  component: RouteComponent,
  validateSearch: artistSearchSchema, // Apply the search schema to the route
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
  // Use TanStack Router's useSearch hook to get and update search params
  const { query } = Route.useSearch();
  const navigate = Route.useNavigate(); // Get the navigate function from the route

  // Local state for the input field to allow immediate feedback while typing
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      navigate({
        search: (prev) => {
          const newQuery = inputValue.trim();
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

  const {
    data: artists = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["artists", query], // Use the debounced query from search params
    queryFn: () =>
      query ? ArtistService.fetchByName(query) : ArtistService.fetchAll(),
  });

  if (isLoading) return <LoaderPage />;

  if (isError) return <ErrorPage message={error.message} />;

  const nothingFound = artists.length === 0;

  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="Search artists..."
          value={inputValue} // Bind to local state for immediate feedback
          onChange={(e) => setInputValue(e.target.value)} // Update local state on change
          className="mb-2 p-1 border rounded"
          autoFocus
        />
      </div>
      {nothingFound ? (
        <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
          <span className="text-4xl mb-2">😕</span>
          <span className="text-lg font-semibold">
            {query.trim()
              ? `No artists found for "${query}"`
              : "No artists found."}
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {artists.map((artist) => (
            <Card key={artist.ID}>
              <CardHeader>
                <CardTitle>{artist.Name}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
