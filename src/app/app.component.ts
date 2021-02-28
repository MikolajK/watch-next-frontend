import { WatchableService } from './core/services/watchable/watchable.service';
import {
  WatchableSearchRepresentation,
  WatchableSearchResponse,
} from './core/models/watchables';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  watchables: WatchableSearchRepresentation[];

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
