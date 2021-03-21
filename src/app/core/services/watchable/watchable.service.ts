import { UserProfileRepresentation } from './../../models/user';
import {
  DetailedWatchableListRepresentation,
  SimpleWatchableListRepresentation,
} from './../../models/list';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WatchableSearchResponse } from '../../models/watchables';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WatchableService {
  constructor(private http: HttpClient) {}

  public search(query: string, page = 1) {
    return this.http.post<WatchableSearchResponse>(
      `${environment.baseUrl}/watchable/search?query=${query}&page=${page}`,
      null
    );
  }

  public createList(
    name: string
  ): Observable<SimpleWatchableListRepresentation> {
    return this.http.post<SimpleWatchableListRepresentation>(
      `${environment.baseUrl}/watchable/list`,
      {
        name: name,
      }
    );
  }

  public getLists(): Observable<SimpleWatchableListRepresentation[]> {
    return this.http.get<SimpleWatchableListRepresentation[]>(
      `${environment.baseUrl}/watchable/list`
    );
  }

  public getList(id: number): Observable<DetailedWatchableListRepresentation> {
    return this.http.get<DetailedWatchableListRepresentation>(
      `${environment.baseUrl}/watchable/list/${id}`
    );
  }

  public addToList(listId: number, watchableId: string): Observable<void> {
    return this.http.post<void>(
      `${environment.baseUrl}/watchable/list/${listId}/watchable`,
      { imdbIds: [watchableId] }
    );
  }

  getUsers(listId: number) {
    return this.http.get<UserProfileRepresentation[]>(
      `${environment.baseUrl}/watchable/list/${listId}/user`
    );
  }

  vote(listId: number, imdbId: string, votes: number) {
    return this.http.put<void>(
      `${environment.baseUrl}/watchable/list/${listId}/watchable/${imdbId}/vote`,
      { votes: votes }
    );
  }

  assignUser(listId: number, userId: string) {
    return this.http.post<void>(`${environment.baseUrl}/watchable/list/${listId}/user`, {username: userId})
  }

  unassignUser(listId: number, userId: string) {
    return this.http.delete<void>(`${environment.baseUrl}/watchable/list/${listId}/user/${userId}`)
  }
}
