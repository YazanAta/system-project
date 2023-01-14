import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-page',
  templateUrl: './stadium-page.component.html',
  styleUrls: ['./stadium-page.component.css']
})
export class StadiumPageComponent implements OnInit {

  constructor(private service: StadiumService, private router: Router) { }

  type:any;
  logged:any;
  myItems: any[] = [];
  ngOnInit(): void {
    this.type = this.service.stadium;
    let thisState= localStorage.getItem('LOGIN_STAT');
    if(thisState&&thisState!=null)
    {
      this.logged=JSON.parse(thisState).stat;
    }
  }
  
addToCart(item: any) {
  if(this.logged == true){
      let oldItems= localStorage.getItem('CART_ITEMS');
      if(oldItems&&oldItems!=null)
      {
        this.myItems=JSON.parse(oldItems);
      }
      this.myItems.push(item);
      localStorage.setItem('CART_ITEMS', JSON.stringify(this.myItems));
    }else{
    this.router.navigate(['/login-page']);
  }
}


}
