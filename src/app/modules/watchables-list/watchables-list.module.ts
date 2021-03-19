import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { WatchablesListComponent } from './watchables-list.component';

@NgModule({
  declarations: [ListDetailsComponent, WatchablesListComponent],
  imports: [
    CommonModule
  ]
})
export class WatchablesListModule { }
