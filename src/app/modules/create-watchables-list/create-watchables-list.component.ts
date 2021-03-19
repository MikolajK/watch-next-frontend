import { SimpleWatchableListRepresentation } from './../../core/models/list';
import { WatchableSearchModule } from './../watchable-search/watchable-search.module';
import { WatchableService } from './../../core/services/watchable/watchable.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, delay, tap, debounceTime, publish } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-create-watchables-list',
  templateUrl: './create-watchables-list.component.html',
  styleUrls: ['./create-watchables-list.component.css'],
})
export class CreateWatchablesListComponent implements OnInit {
  createListFormGroup: FormGroup;
  submitButtonEnabled: boolean;
  displaySuccessNotification: boolean;
  displayFailureNotification: boolean;
  listId: number | undefined;

  constructor(private watchableService: WatchableService) {
    this.createListFormGroup = new FormGroup({});
    this.submitButtonEnabled = true;
    this.displaySuccessNotification = false;
    this.displayFailureNotification = false;
    this.listId = undefined;
  }

  ngOnInit(): void {
    this.createListFormGroup = new FormGroup({
      listName: new FormControl(this.listName, [
        Validators.required,
        Validators.maxLength(64),
      ]),
    });
  }

  get listName() {
    return this.createListFormGroup.get('listName');
  }

  onSubmit() {
    this.submitButtonEnabled = false;
    this.displayFailureNotification = false;
    this.watchableService
      .createList(this.listName?.value)
      .pipe(
        tap(() => {
          this.submitButtonEnabled = true;
        })
      )
      .subscribe(
        (data: SimpleWatchableListRepresentation) => {
          this.listId = data.id;
          this.displaySuccessNotification = true;
        },
        (error: HttpErrorResponse) => {
          this.displayFailureNotification = true;
          console.log(error);
        }
      );
  }

  onSuccessNotificationClose() {
    this.displaySuccessNotification = false;
  }

  onFailureNotificationClose() {
    this.displayFailureNotification = false;
  }
}
