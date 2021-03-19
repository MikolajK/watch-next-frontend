import { DetailedWatchableRepresentation } from "./watchables";

export interface SimpleWatchableListRepresentation {
  name: string;
  id: number;
}

export interface DetailedWatchableListRepresentation extends SimpleWatchableListRepresentation {
  watchables: DetailedWatchableRepresentation[];
}
