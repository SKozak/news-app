import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewSpotApiService {
  API_URL = 'http://localhost:8080';
  protected headers = new HttpHeaders({}).append('Access-Control-Allow-Origin', 'http://localhost:8082');

  constructor(private httpClient: HttpClient) {
  }

  getNews(categorySelected: string, page: number, PAGE_SIZE: number) {
    const params = new HttpParams()
      .set('country', 'pl')
      .set('category', categorySelected)
      .set('page', page.toString())
      .set('pageSize', PAGE_SIZE.toString());
    return this.httpClient.get(`${this.API_URL}/api/news`, {params: params, headers: this.headers});
  }

  getCategories() {
    return this.httpClient.get(`${this.API_URL}/api/sources/categories`, {headers: this.headers});
  }
}
