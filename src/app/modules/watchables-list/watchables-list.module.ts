import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { WatchablesListComponent } from './watchables-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [ListDetailsComponent, WatchablesListComponent, UserDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class WatchablesListModule { }
