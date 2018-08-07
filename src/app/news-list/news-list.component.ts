import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewSpotApiService} from '../new-spot-api.service';
import {NewsDto} from './news-dto';
import {isNullOrUndefined} from 'util';
import * as _ from 'lodash';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, OnDestroy {
  newsDTO: NewsDto;
  categoryList: Array<string>;
  categorySelected = 'technology';
  lodash = _;
  page = 1;
  PAGE_SIZE = 6;

  constructor(private newSpotApiService: NewSpotApiService) {
  }

  ngOnInit() {
    this.getNews();
    this.getCategories();
  }

  public getNews() {
    this.getNewsFromServer(this.page, this.PAGE_SIZE);
  }

  private getNewsFromServer(page?: number, pageSize?: number) {
    this.newSpotApiService.getNews(this.categorySelected, page, pageSize).subscribe((value: NewsDto) => {
      this.newsDTO = value;
    });
  }

  public getCategories() {
    this.newSpotApiService.getCategories().subscribe((value: Array<string>) => {
      this.categoryList = value;
      console.log(value);
    });
  }

  ngOnDestroy(): void {

  }

  public getImage(imageUrl: string) {
    if (isNullOrUndefined(imageUrl)) {
      return 'http://www.pinnacleeducations.in/wp-content/uploads/2017/05/no-image.jpg';
    }
    return imageUrl;
  }

  changePage(page: number) {
    if (page > 0 && page < this.newsDTO.totalResults / this.PAGE_SIZE) {
      this.getNewsFromServer(page, this.PAGE_SIZE);
      this.page = page;
    }
  }
}
