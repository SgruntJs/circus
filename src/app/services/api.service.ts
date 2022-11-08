import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getVideoList() {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos`)
  }
  getSingleVideo(id: number) {
      return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }
}
