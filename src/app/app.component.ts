import { SimpleWatchableListRepresentation } from './core/models/list';
import { Component } from '@angular/core';
import {
  SimpleWatchableRepresentation,
  WatchableSearchResponse,
} from './core/models/watchables';
import { WatchableService } from './core/services/watchable/watchable.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  watchables: SimpleWatchableRepresentation[];

  constructor(private watchableService: WatchableService) {
    this.watchables = [];
  }

  search(query: string) {
    this.watchableService
      .search(query)
      .subscribe(
        (data: WatchableSearchResponse) => (this.watchables = data.results)
      );
  }
}
