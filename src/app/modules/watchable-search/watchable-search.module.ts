import { WatchableSearchComponent } from './watchable-search.component';
import { WatchableSearchResultsComponent } from './components/watchable-search-results/watchable-search-results.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchableSearchBoxComponent } from './components/watchable-search-box/watchable-search-box.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WatchableSearchBoxComponent, WatchableSearchResultsComponent, WatchableSearchComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [WatchableSearchBoxComponent, WatchableSearchResultsComponent]
})
export class WatchableSearchModule {}
