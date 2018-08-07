import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewSpotApiService {
  API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}

  getNews(categorySelected: string) {
    const params = new HttpParams().set('country', 'pl').set('category', categorySelected);
    return this.httpClient.get(`${this.API_URL}/news`, { params });
  }
  getCategories() {
    return this.httpClient.get(`${this.API_URL}/sources/categories`);
  }
}
