import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  count: number = 0;
  public loginState : boolean = true;
  user: any;
  constructor() { }
  setCount(data: number){
    this.count = data;
  }
  getCount(){
    return this.count;
  }
  setLoginState(state: boolean){
    this.loginState = state;
  }
  getLoginState(){
    return this.loginState;
  }
  setUser(data: any){
    this.user = data;
  }
  getUser(){
    return this.user;
  }
}
