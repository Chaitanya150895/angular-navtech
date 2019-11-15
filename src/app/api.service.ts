import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './model/LoginResultModel'

// ApiService class injects HttpClient and provides me a login() method so I can call this method from anywhere of the application. It returns an Observable<LoginResultModel>.

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

login(username: string, password: string): Observable<LoginResultModel>{
  return this.http.post<LoginResultModel>
  ('http://Localhost/tsk/api/users/token.json', {
    username:username,
    password:password
  });
}

}
