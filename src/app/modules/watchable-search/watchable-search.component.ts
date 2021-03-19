import { SimpleWatchableListRepresentation } from './../../core/models/list';
import { WatchableService } from './../../core/services/watchable/watchable.service';
import { SimpleWatchableRepresentation } from './../../core/models/watchables';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'watchable-search',
  templateUrl: './watchable-search.component.html',
  styleUrls: ['./watchable-search.component.css'],
})
export class WatchableSearchComponent implements OnInit {

  @Input() userLists: SimpleWatchableListRepresentation[];

  watchables: SimpleWatchableRepresentation[];

  constructor(private watchableService: WatchableService) {
    this.watchables = [];
    this.userLists = [];
  }

  ngOnInit(): void {}

  searchWatchables(query: string) {
    this.watchableService.search(query)
      .subscribe(
        (results) => this.watchables = results.results,
        (error) => console.log(error)
      )
  }
}
