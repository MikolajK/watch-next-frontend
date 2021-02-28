export interface WatchableSearchRepresentation {
  imdbId: string;
  title: string;
  posterUrl: string;
  year: string;
}

export interface WatchableSearchResponse {
  results: WatchableSearchRepresentation[];
  totalResults: number;
  totalPages: number;
}
