import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'xyz';
  password = 'xyz';

  constructor(private http: HttpClient, private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  ngOnInit() {

  }

  tryLogin() {

    let postData = {
      "username": this.username,
      "password": this.password
    }
    this.http.post("http://localhost/task/api/users/token.json", postData, httpOptions).pipe().subscribe(data => {
      console.log(data);
      let token = data['data']['token'];
      let id = data['data']['id'];
      console.log("=============>" + token)
      this.customer.setToken(token);
      this.customer.setUserId(id);
      console.log(id);
      this.router.navigateByUrl('/orders');
      console.log(data);

    });


  }



}
