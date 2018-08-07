import { Component, OnInit } from '@angular/core';
import {NewSpotApiService} from '../new-spot-api.service';
import {NewsDto} from './news-dto';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsDTO: NewsDto;
  constructor(private newSpotApiService: NewSpotApiService) { }

  ngOnInit() {
    this.getNews();
  }

  public getNews() {
    this.newSpotApiService.getNews().subscribe((value: NewsDto) => {
      this.newsDTO = value;
      console.log(value);
    });
  }

}
