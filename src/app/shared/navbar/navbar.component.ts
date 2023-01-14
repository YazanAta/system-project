import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: SharedService,private activeRoute: ActivatedRoute) {}

  myItems: any;
  count = 0;
  loginStat: any;
  conditionl: boolean = true;
  conditionp: boolean = false;
  name:any;
  ngOnInit(): void {
    this.loadItems();
    let old = localStorage.getItem('LOGIN_STAT');
    if(old&&old!=null)
    {
      this.loginStat= JSON.parse(old);
      this.conditionp = this.loginStat.stat;
      this.conditionl = !(this.conditionp);
      
      console.log("Loginp is " + this.conditionp)
      console.log("Loginl is " + this.conditionl)

    }
    //for the nav character show
    if(this.conditionp == true){
      let thisUser= localStorage.getItem('CURRENT_USER');
      if(thisUser&&thisUser!=null)
      {
        this.name= JSON.parse(thisUser);
      }
      this.name = this.name.FirstName + " " + this.name.LastName;
    }
  }

  loadItems(){
    let oldItems= localStorage.getItem('CART_ITEMS');
    if(oldItems&&oldItems!=null)
    {
      this.myItems=JSON.parse(oldItems);
    }
    
    if(this.myItems != undefined){
      this.count = this.myItems.length
    }
    
    
    
  }


}
