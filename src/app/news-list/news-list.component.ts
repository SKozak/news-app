import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewSpotApiService} from '../new-spot-api.service';
import {NewsDto} from './news-dto';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, OnDestroy {
  newsDTO: NewsDto;
  categoryList: Array<string>;
  categorySelected = 'technology';
  constructor(private newSpotApiService: NewSpotApiService) { }

  ngOnInit() {
    this.getNews();
    this.getCategories();
  }

  public getNews() {
    this.newSpotApiService.getNews(this.categorySelected).subscribe((value: NewsDto) => {
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
}
