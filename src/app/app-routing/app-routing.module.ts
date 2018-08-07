import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from '../news-list/news-list.component';
import {SourcesListComponent} from '../sources-list/sources-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'newsList', pathMatch: 'full'},
  {
    path: 'newsList',
    component: NewsListComponent
  },
  {
    path: 'sourcesList',
    component: SourcesListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
