import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BallsService } from 'src/app/services/balls.service';

@Component({
  selector: 'app-balls-page',
  templateUrl: './balls-page.component.html',
  styleUrls: ['./balls-page.component.css']
})
export class BallsPageComponent implements OnInit {

  constructor(private service: BallsService, private router:Router) { }
  type:any;
  myItems: any[] = [];
  logged:any;
  ngOnInit(): void {
    this.type = this.service.balls;
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
        this.temp(item.id);
    }else{
      this.router.navigate(['/login-page']);
    }

  }


  temp(tp: any){

    let element = document.getElementById("check"+tp);
    if (element != undefined) {
      element.style.display = 'inline-block';
    }
      window.setTimeout(function() {
        if (element != undefined) {
          element.style.display = 'none';
        }
      }, 1000);
    }
}

