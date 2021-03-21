import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { WatchablesListComponent } from './watchables-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListDetailsComponent,
    WatchablesListComponent,
    UserDetailsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, BrowserModule],
})
export class WatchablesListModule {}
