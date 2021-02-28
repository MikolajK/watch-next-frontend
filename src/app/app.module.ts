import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchableSearchBoxComponent } from './modules/watchable-search/components/watchable-search-box/watchable-search-box.component';
import { WatchableSearchResultsComponent } from './modules/watchable-search/components/watchable-search-results/watchable-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchableSearchBoxComponent,
    WatchableSearchResultsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
