import { Component, OnInit, Input } from '@angular/core';
import { WatchableSearchRepresentation } from 'src/app/core/models/watchables';

@Component({
  selector: 'watchable-search-results',
  templateUrl: './watchable-search-results.component.html',
  styleUrls: ['./watchable-search-results.component.sass']
})
export class WatchableSearchResultsComponent implements OnInit {

  @Input()
  watchables: WatchableSearchRepresentation[];

  constructor() {
    this.watchables = []
  }

  ngOnInit(): void {
  }

}
