import { UserProfileRepresentation } from "./user";

export interface SimpleWatchableRepresentation {
  imdbId: string;
  title: string;
  posterUrl: string;
  year: string;
}

export interface WatchableSearchResponse {
  results: SimpleWatchableRepresentation[];
  totalResults: number;
  totalPages: number;
}

export interface DetailedWatchableRepresentation extends SimpleWatchableRepresentation {
  genre: string;
  plotSummary: string;
  runtime: string;
  userVotes: UserVoteRepresentation[];
}

export interface UserVoteRepresentation {
  votes: number;
  user: UserProfileRepresentation;
}
