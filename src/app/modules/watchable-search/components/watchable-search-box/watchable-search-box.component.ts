import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'watchable-search-box',
  templateUrl: './watchable-search-box.component.html',
  styleUrls: ['./watchable-search-box.component.sass'],
})
export class WatchableSearchBoxComponent implements OnInit {
  @Output()
  queryEvent = new EventEmitter<string>();
  searchBoxFormControl: FormControl;

  constructor() {
    this.searchBoxFormControl = new FormControl();
    this.searchBoxFormControl.valueChanges
    .pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(value => this.queryEvent.emit(value))
  }

  ngOnInit(): void {}
}
