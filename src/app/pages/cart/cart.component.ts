import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Declare a property to store the items in the cart
  
  constructor(private service: SharedService) { }
  /*Temproraly*/ 
  
  myItems: any[] = [];
  total: string = "";
  holder: number = 0;
  loadItems(){
    let oldItems= localStorage.getItem('CART_ITEMS');
    if(oldItems&&oldItems!=null)
    {
      this.myItems=JSON.parse(oldItems);
    }
    console.log(this.myItems);
  }
  ngOnInit(): void {
    this.loadItems();
    for(let i = 0; i<this.myItems.length; i++){
      this.holder += parseFloat(this.myItems[i].Price);
    }
    this.total = this.holder.toFixed(2);
  }
// Method to remove an item from the cart
    removeItem(item: any){
      console.log("in remove");
      const index = this.myItems.indexOf(item);
      if (index !== -1) {
        this.myItems.splice(index, 1);
      }
      localStorage.setItem('CART_ITEMS', JSON.stringify(this.myItems));
      this.holder -= parseFloat(item.Price);
      this.total = this.holder.toFixed(2);
      if(this.total == "-0.00"){
        this.total = "0.00"
      }
    }
  
  
  
}
