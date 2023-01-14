import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continue-shopping',
  templateUrl: './continue-shopping.component.html',
  styleUrls: ['./continue-shopping.component.css']
})
export class ContinueShoppingComponent implements OnInit {
  checked: boolean = false;
  unchecked: boolean = true;
  thisUser: any;
  items:any[] = [];
  orderDeatails: any[] = [];
  newOrder:any[] = [];
  constructor() { }

  ngOnInit(): void {
    //user info
    let user= localStorage.getItem('CURRENT_USER');
    if(user&&user!=null)
    {
      this.thisUser=JSON.parse(user);
    }
    let userinfo = {
      name: this.thisUser.FirstName + " " + this.thisUser.LastName,
      phone: this.thisUser.Phone ,
      address: this.thisUser.Address
    }
    this.thisUser = userinfo;
    //cart items
    let cartItems= localStorage.getItem('CART_ITEMS');
    if(cartItems&&cartItems!=null)
    {
      this.items=JSON.parse(cartItems);
    }
  }

  confirm(){
    this.checked = true;
    this.unchecked = false;
    this.items.push(this.thisUser)
    this.orderDeatails.push(this.items);
    let oldorder = localStorage.getItem('ORDER_INFO');
    if(oldorder&&oldorder!=null)
    {
      this.newOrder=JSON.parse(oldorder);
    }
    this.newOrder.push.apply(this.newOrder, this.orderDeatails)
    localStorage.setItem('ORDER_INFO', JSON.stringify(this.newOrder));
  }


}
