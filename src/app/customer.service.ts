import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';
const USER_ID = 'USER_ID';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  setUserId(user_id: string): void {
    localStorage.setItem(USER_ID, user_id);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

}

// CustomerService class sets the given token to localStorage and has a isLogged() method, to check if customer is logged already. 
