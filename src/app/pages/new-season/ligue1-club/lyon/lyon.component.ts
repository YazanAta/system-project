import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ligue1ClubShirtInfoService } from 'src/app/services/ligue1-services/ligue1-club-shirt-info.service';

@Component({
  selector: 'app-lyon',
  templateUrl: './lyon.component.html',
  styleUrls: ['./lyon.component.css']
})
export class LyonComponent implements OnInit {

  constructor(private service: Ligue1ClubShirtInfoService, private router:Router) { }

  type:any;
  logged:any;
  myItems: any[] = [];
  ngOnInit(): void {
    this.type = this.service.Lyonnais;
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
