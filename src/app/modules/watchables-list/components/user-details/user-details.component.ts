import { UserProfileRepresentation } from './../../../../core/models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() removeUserButtonDisabled: boolean;
  @Input() addUserButtonDisabled: boolean;
  @Input() users: UserProfileRepresentation[];

  @Output() onRemoveUser: EventEmitter<string>;
  @Output() onAddUser: EventEmitter<string>;

  addUserFormGroup: FormGroup;

  constructor() {
    this.users = [];
    this.removeUserButtonDisabled = false;
    this.addUserButtonDisabled = false;
    this.onRemoveUser = new EventEmitter<string>();
    this.onAddUser = new EventEmitter<string>();
    this.addUserFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  deleteUser(userId: string) {
    this.onRemoveUser.emit(userId);
  }
  addUser() {
    let usernameFormControl = this.addUserFormGroup.get('username');
    if (usernameFormControl && usernameFormControl.valid) {
      this.onAddUser.emit(usernameFormControl.value);
    }

  }
}
