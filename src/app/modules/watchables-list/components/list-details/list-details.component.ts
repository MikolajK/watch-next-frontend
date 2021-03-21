import {
  DetailedWatchableRepresentation,
  UserVoteRepresentation,
} from './../../../../core/models/watchables';
import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetailedWatchableListRepresentation } from 'src/app/core/models/list';

@Component({
  selector: 'list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css'],
})
export class ListDetailsComponent implements OnInit, OnChanges {
  @Input() watchables: DetailedWatchableRepresentation[];
  @Input() votingEnabledSubject: BehaviorSubject<boolean> | undefined;

  @Output() onVote = new EventEmitter<DetailedWatchableRepresentation>();

  votingEnabled: boolean;
  constructor() {
    this.votingEnabled = false;
    this.watchables = [];
  }

  ngOnInit() {
    this.votingEnabledSubject?.subscribe(
      (value) => (this.votingEnabled = value)
    );
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  getTotal(watchableVotes: UserVoteRepresentation[]) {
    if (watchableVotes.length) {
      return watchableVotes
        .map((vote) => vote.votes)
        .reduce((previous, current) => previous + current);
    } else {
      return [];
    }
  }

  vote(watchable: DetailedWatchableRepresentation) {
    this.onVote.emit(watchable);
  }
}
