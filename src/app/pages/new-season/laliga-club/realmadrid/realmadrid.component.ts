import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { LaLigaService } from 'src/app/services/la-liga-services/laliga-club-shirt-info';

@Component({
  selector: 'app-realmadrid',
  templateUrl: './realmadrid.component.html',
  styleUrls: ['./realmadrid.component.css']
})
export class RealmadridComponent implements OnInit {

  constructor(private service: LaLigaService, private router:Router) { }

  

  type:any;
  logged:any;
  myItems: any[] = [];
  ngOnInit(): void {
    this.type = this.service.realMadrid;
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
/*from SalahAtwa to everyone:    5:30 PM
 <div class="col position-relative" *ngFor="let item of items">
                                        <div class="position-absolute end-0 top-0 z-index-1 ">
                                            <div class="tag tag-small bg-theme me-2">
                                                26% OFF
                                            </div>
                                        </div>
                                        <p class="mb-0"><small class="text-muted size-12">{{item.name}}</small>
                                        </p>
                                        <h5>$ {{item.price}}</h5>
                                        <button class="btn btn-sm px-0 text-color-theme" (click)="addToCart(item)">
                                            <i class="bi bi-bag-plus"></i> Add to Cart
                                        </button>
                                    </div>
  */ 

  
/*final
from SalahAtwa to everyone:    5:29 PM
addToCart(item: any) {
    console.log(item);
    let oldItems= localStorage.getItem('CART_ITEMS');
    if(oldItems&&oldItems!=null)
    {
      this.myItems=JSON.parse(oldItems);
    }
    this.myItems.push(item);
    localStorage.setItem('CART_ITEMS', JSON.stringify(this.myItems));
  }
from SalahAtwa to everyone:    5:29 PM
 loadItems(){
    let items=localStorage.getItem('CART_ITEMS');
    console.log(items);
  }
from SalahAtwa to everyone:    5:30 PM
 <div class="col position-relative" *ngFor="let item of items">
                                        <div class="position-absolute end-0 top-0 z-index-1 ">
                                            <div class="tag tag-small bg-theme me-2">
                                                26% OFF
                                            </div>
                                        </div>
                                        <p class="mb-0"><small class="text-muted size-12">{{item.name}}</small>
                                        </p>
                                        <h5>$ {{item.price}}</h5>
                                        <button class="btn btn-sm px-0 text-color-theme" (click)="addToCart(item)">
                                            <i class="bi bi-bag-plus"></i> Add to Cart
                                        </button>
                                    </div>*/
}
