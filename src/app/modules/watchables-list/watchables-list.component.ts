import { DetailedWatchableListRepresentation } from './../../core/models/list';
import { UserProfileRepresentation } from './../../core/models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchableService } from 'src/app/core/services/watchable/watchable.service';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/user/authentication.service';
import { DetailedWatchableRepresentation } from 'src/app/core/models/watchables';

@Component({
  selector: 'app-watchables-list',
  templateUrl: './watchables-list.component.html',
  styleUrls: ['./watchables-list.component.css'],
})
export class WatchablesListComponent implements OnInit {
  users: UserProfileRepresentation[];
  votingEnabled: BehaviorSubject<boolean>;
  listId: number;
  list: DetailedWatchableListRepresentation | undefined;
  removeUserButtonDisabled: boolean;
  addUserButtonDisabled: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private watchableService: WatchableService,
    private userService: AuthenticationService
  ) {
    this.users = [];
    this.listId = Number.parseInt(
      activatedRoute.snapshot.paramMap.get('id') || ''
    );
    this.votingEnabled = new BehaviorSubject<boolean>(true);
    this.removeUserButtonDisabled = false;
    this.addUserButtonDisabled = false;
  }

  refreshList() {
    this.watchableService.getList(this.listId).subscribe(
      (data) => {
        this.list = data;
      },
      (error) => {
        throw new Error(error);
      }
    );

    this.watchableService
    .getUsers(this.listId)
    .subscribe((users) => (this.users = users));
  }

  ngOnInit(): void {
    this.refreshList();
  }

  handleVote(watchable: DetailedWatchableRepresentation) {
    this.votingEnabled.next(false);
    let userName = this.userService.getCurrentUser();
    console.log(userName);
    let currentVotes =
      watchable.userVotes.find((vote) => vote.user.name === userName)?.votes ||
      0;
    this.watchableService
      .vote(this.listId, watchable.imdbId, currentVotes + 1)
      .subscribe(
        () => this.votingEnabled.next(true),
        (error) => {
          throw new Error(error);
        },
        () => this.refreshList()
      );
  }

  removeUser(userId: string) {
    this.removeUserButtonDisabled = true;
    this.watchableService.unassignUser(this.listId, userId).subscribe(() => {
      this.removeUserButtonDisabled = false;
      this.refreshList();
    });
  }

  addUser(userId: string) {
    this.addUserButtonDisabled = true;
    this.watchableService.assignUser(this.listId, userId).subscribe(() => {
      this.addUserButtonDisabled = false;
      this.refreshList();
    })
  }
}
