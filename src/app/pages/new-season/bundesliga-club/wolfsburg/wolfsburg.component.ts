import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BundesligaClubShirtInfoService } from 'src/app/services/bundesliga-services/bundesliga-club-shirt-info.service';

@Component({
  selector: 'app-wolfsburg',
  templateUrl: './wolfsburg.component.html',
  styleUrls: ['./wolfsburg.component.css']
})
export class WolfsburgComponent implements OnInit {

  constructor(private service: BundesligaClubShirtInfoService, private router:Router) { }
  

  type:any;
  myItems: any[] = [];
  logged:any;
  ngOnInit(): void {
    this.type = this.service.Wolfsburg;
    let thisState= localStorage.getItem('LOGIN_STAT');
    if(thisState&&thisState!=null)
    {
      this.logged=JSON.parse(thisState).stat;
    }
  }
  
  addToCart(item: any, form: NgForm) {
    if(this.logged == true){
      console.log(form.value.size);
      if(form.value.size != ""){
        let merged = Object.assign({}, item, form.value);
        let oldItems= localStorage.getItem('CART_ITEMS');
        if(oldItems&&oldItems!=null)
        {
          this.myItems=JSON.parse(oldItems);
        }
        this.myItems.push(merged);
        localStorage.setItem('CART_ITEMS', JSON.stringify(this.myItems));
        this.temp(item.id);
      }else{
        let element = document.getElementById("warning"+item.id);
        if (element != undefined) {
          element.style.display = 'inline-block';
        }
        window.setTimeout(function() {
          if (element != undefined) {
            element.style.display = 'none';
          }
        }, 1000);
        console.log("Error")
      }
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
