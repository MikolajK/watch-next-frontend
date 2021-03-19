import { WatchableService } from './../../../../core/services/watchable/watchable.service';
import { SimpleWatchableListRepresentation } from './../../../../core/models/list';
import { Component, OnInit, Input } from '@angular/core';
import { SimpleWatchableRepresentation } from 'src/app/core/models/watchables';

@Component({
  selector: 'watchable-search-results',
  templateUrl: './watchable-search-results.component.html',
  styleUrls: ['./watchable-search-results.component.css'],
})
export class WatchableSearchResultsComponent implements OnInit {
  @Input()
  watchables: SimpleWatchableRepresentation[];

  @Input() userLists: SimpleWatchableListRepresentation[];

  modalOpen: boolean;
  modalImdbId: string;

  constructor(private watchableService: WatchableService) {
    this.watchables = [];
    this.userLists = [];
    this.modalOpen = false;
    this.modalImdbId = '';

    this.watchableService
      .getLists()
      .subscribe((data) => (this.userLists = data));
  }

  ngOnInit(): void {}

  addToList(listId: number, imdbId: string) {
    this.watchableService.addToList(listId, imdbId).subscribe();
    this.modalOpen = false;
  }

  showListsModal(imdbId: string) {
    console.log(imdbId);
    this.modalOpen = true;
    this.modalImdbId = imdbId;
  }

  closeListsModal() {
    this.modalOpen = false;
    this.modalImdbId = '';
  }

  get hasSingleList() {
    return this.userLists.length === 1;
  }
}
