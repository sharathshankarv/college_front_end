import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

/**
 * Parses an error from RTK Query and returns a readable error message.
 * @param error - The error object from RTK Query
 * @returns A formatted error message
 */
export function getErrorMessage(error: unknown): string {
  if (!error) return "An unknown error occurred.";

  if ("status" in (error as FetchBaseQueryError)) {
    const err = error as FetchBaseQueryError;
    return `Error ${err.status}: ${JSON.stringify(err.data)}`;
  } else {
    const err = error as SerializedError;
    return err.message || "Unexpected error occurred.";
  }
}