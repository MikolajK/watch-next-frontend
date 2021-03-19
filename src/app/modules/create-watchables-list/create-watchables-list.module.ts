import { CreateWatchablesListComponent } from './create-watchables-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateWatchablesListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CreateWatchablesListComponent]
})
export class CreateWatchablesListModule {
}
