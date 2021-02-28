import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WatchableSearchResponse } from '../../models/watchables';



@Injectable({
  providedIn: 'root',
})
export class WatchableService {
  constructor(private http: HttpClient) { }

  public search(query: string, page = 1) {
    return this.http.post<WatchableSearchResponse>(`http://localhost:8080/watchable/search?query=${query}&page=${page}`, null)
  }

}
