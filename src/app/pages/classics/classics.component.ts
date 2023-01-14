import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassicsService } from 'src/app/services/classics.service';

@Component({
  selector: 'app-classics',
  templateUrl: './classics.component.html',
  styleUrls: ['./classics.component.css']
})
export class ClassicsComponent implements OnInit {

  constructor(private service: ClassicsService, private router: Router) { }

  type:any;
  logged:any;
  myItems: any[] = [];
  count: any = "";
  ngOnInit(): void {
    this.type = this.service.classics;
    let thisState= localStorage.getItem('LOGIN_STAT');
    if(thisState&&thisState!=null)
    {
      this.logged=JSON.parse(thisState).stat;
    }
  }
  
addToCart(item: any, form: NgForm) {
  if(this.logged == true){
    if(form.value.size != ""){
      let merged = Object.assign({}, item, form.value);
      let oldItems= localStorage.getItem('CART_ITEMS');
      if(oldItems&&oldItems!=null)
      {
        this.myItems=JSON.parse(oldItems);
      }
      this.myItems.push(merged);
      localStorage.setItem('CART_ITEMS', JSON.stringify(this.myItems));
      this.count = item.id;
      this.temp(item.id);
      console.log(this.count);
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
