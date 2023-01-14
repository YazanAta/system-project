import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  constructor() { }

  categoryDetails = [
    {
      id:1,
      categoryName:"New Season Shirts",
      categoryImg:"assets/shirt category/new.png",
      categoryR:"../new-season"
    },
    {
      id:2,
      categoryName:"Classic Shirts",
      categoryImg:"assets/shirt category/classic.png",
      categoryR:"../classics"
    },
    {
      id:3,
      categoryName:"Nations",
      categoryImg:"assets/shirt category/nations.png",
      categoryR: "../nations"
    }
  ]

  ngOnInit(): void {
  }

}
