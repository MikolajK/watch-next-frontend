import { WatchablesListModule } from './modules/watchables-list/watchables-list.module';
import { CreateWatchablesListModule } from './modules/create-watchables-list/create-watchables-list.module';
import { WatchableSearchModule } from './modules/watchable-search/watchable-search.module';
import { WatchNextNavigationModule } from './modules/watch-next-navigation/watch-next-navigation.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakService } from 'keycloak-angular';
import { initializer } from './core/services/user/keycloak.service';
import { TokenInterceptor } from './core/services/token.interceptor';

const watchNextModules = [
  WatchNextNavigationModule,
  WatchableSearchModule,
  CreateWatchablesListModule,
  WatchablesListModule,
];

const angularModules = [BrowserModule, HttpClientModule];

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, ...angularModules, ...watchNextModules],
  exports: [AppComponent],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
