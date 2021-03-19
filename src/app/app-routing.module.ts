import { WatchablesListComponent } from './modules/watchables-list/watchables-list.component';
import { ListDetailsComponent } from './modules/watchables-list/components/list-details/list-details.component';
import { WatchableSearchComponent } from './modules/watchable-search/watchable-search.component';
import { CreateWatchablesListComponent } from './modules/create-watchables-list/create-watchables-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    component: WatchableSearchComponent,
  },
  {
    path: 'list/create',
    component: CreateWatchablesListComponent,
  },
  {
    path: 'list/:id',
    component: WatchablesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
