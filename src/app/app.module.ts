import { WatchablesListModule } from './modules/watchables-list/watchables-list.module';
import { CreateWatchablesListModule } from './modules/create-watchables-list/create-watchables-list.module';
import { WatchableSearchModule } from './modules/watchable-search/watchable-search.module';
import { WatchNextNavigationModule } from './modules/watch-next-navigation/watch-next-navigation.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const watchNextModules = [
  WatchNextNavigationModule,
  WatchableSearchModule,
  CreateWatchablesListModule,
  WatchablesListModule
];

const angularModules = [BrowserModule, HttpClientModule];

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, ...angularModules, ...watchNextModules],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
