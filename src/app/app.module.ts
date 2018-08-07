import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NewsListComponent} from './news-list/news-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
