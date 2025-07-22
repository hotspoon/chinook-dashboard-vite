import { useEffect, useState } from "react";

/**
 * Returns a debounced value that only updates after the specified delay.
 * @param value The value to debounce
 * @param delay The debounce delay in milliseconds
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
