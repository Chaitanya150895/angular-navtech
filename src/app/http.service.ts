import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + localStorage.getItem('TOKEN')
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  serverUrl: string = "http://localhost/task/api";

  constructor(private http: HttpClient) { }

  getHttp(url: string) {
    return this.http.get(this.serverUrl + url, httpOptions)
  }

  getHttpWithoutToken(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(this.serverUrl + url, httpOptions)
  }

  postHttp(url: string, data) {
    return this.http.post(this.serverUrl + url, data, httpOptions)
  }

  putHttp(url: string, data) {
    return this.http.put(this.serverUrl + url, data, httpOptions)
  }

  deleteHttp(url: string) {
    return this.http.delete(this.serverUrl + url, httpOptions)
  }

}
