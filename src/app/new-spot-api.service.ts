import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewSpotApiService {
  API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}

  getNews() {
    const params = new HttpParams().set('country', 'pl').set('category', 'technology');
    return this.httpClient.get(`${this.API_URL}/news`, { params });
  }
}
