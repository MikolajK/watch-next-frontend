import {
  DetailedWatchableRepresentation,
  UserVoteRepresentation,
} from './../../../../core/models/watchables';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css'],
})
export class ListDetailsComponent {
  @Input() watchables: DetailedWatchableRepresentation[] | undefined;

  constructor() {}

  get watchablesList() {
    if (!this.watchables) {
      throw new Error('No list found');
    }

    return this.watchables;
  }

  getTotal(watchableVotes: UserVoteRepresentation[]) {
    return watchableVotes
      .map((vote) => vote.votes)
      .reduce((previous, current) => previous + current);
  }
}
