import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from '../news-list/news-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'newsList', pathMatch: 'full'},
  {
    path: 'newsList',
    component: NewsListComponent
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
