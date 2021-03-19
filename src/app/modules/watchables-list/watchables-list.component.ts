import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailedWatchableListRepresentation } from 'src/app/core/models/list';
import { WatchableService } from 'src/app/core/services/watchable/watchable.service';

@Component({
  selector: 'app-watchables-list',
  templateUrl: './watchables-list.component.html',
  styleUrls: ['./watchables-list.component.css']
})
export class WatchablesListComponent implements OnInit {

  list: DetailedWatchableListRepresentation | undefined;

  constructor(private activatedRoute: ActivatedRoute, private watchableService: WatchableService) {
    let listIdValue = activatedRoute.snapshot.paramMap.get('id') || undefined
    if (!listIdValue) {
      throw new Error('List ID incorrect: ' + listIdValue)
    }
    this.watchableService.getList(Number.parseInt(listIdValue)).subscribe(data => {
      this.list = data;
    },
    error => {throw new Error('')})
  }

  ngOnInit(): void {

  }

  get listDetails() {
    if (!this.list) {
      throw new Error('')
    }

    return this.list;
  }

}
