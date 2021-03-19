import { DetailedWatchableListRepresentation, SimpleWatchableListRepresentation } from './../../models/list';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WatchableSearchResponse } from '../../models/watchables';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WatchableService {

  constructor(private http: HttpClient) {
  }

  public search(query: string, page = 1) {
    return this.http.post<WatchableSearchResponse>(
      `http://localhost:8080/watchable/search?query=${query}&page=${page}`,
      null
    );
  }

  public createList(
    name: string
  ): Observable<SimpleWatchableListRepresentation> {
    return this.http.post<SimpleWatchableListRepresentation>(
      'http://localhost:8080/watchable/list',
      {
        name: name,
      }
    );
  }

  public getLists(): Observable<SimpleWatchableListRepresentation[]> {
      return this.http
      .get<SimpleWatchableListRepresentation[]>(
        'http://localhost:8080/watchable/list'
      )
  }

  public getList(id: number): Observable<DetailedWatchableListRepresentation> {
    return this.http.get<DetailedWatchableListRepresentation>(`http://localhost:8080/watchable/list/${id}`)
  }

  public addToList(listId: number, watchableId: string): Observable<void> {
    return this.http.post<void>(`http://localhost:8080/watchable/list/${listId}/watchable`, {imdbIds: [watchableId]})
  }
}
