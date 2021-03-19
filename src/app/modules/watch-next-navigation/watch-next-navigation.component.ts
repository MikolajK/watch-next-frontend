import { WatchableService } from './../../core/services/watchable/watchable.service';
import { SimpleWatchableListRepresentation } from './../../core/models/list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'watch-next-navigation',
  templateUrl: './watch-next-navigation.component.html',
  styleUrls: ['./watch-next-navigation.component.css']
})
export class WatchNextNavigationComponent implements OnInit {

  userLists: SimpleWatchableListRepresentation[];

  constructor(private watchableService: WatchableService) {
    this.userLists = [];
   }

ngOnInit() {
  this.watchableService.getLists()
  .subscribe(data => { console.log(data); this.userLists = data})
}

}
