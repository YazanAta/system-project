import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  constructor() { }
  stadium = [
    {
      id: "1",
      clubName: "Ac-milan Stadium",
      Price: "19.99",
      Img:"assets/stadium/ac-milan.jpg",
    },
    {
      id: "2",
      clubName: "Arsenal Stadium",
      Price: "14.99",
      Img:"assets/stadium/arsenal.png",
    },
    {
      id: "3",
      clubName: "Bayern Stadium",
      Price: "9.99",
      Img:"assets/stadium/byern.png",
    },
    {
      id: "4",
      clubName: "Chelsea Stadium",
      Price: "4.99",
      Img:"assets/stadium/chelsea.png",
    },
    {
      id: "5",
      clubName: "Real Madrid Stadium",
      Price: "19.99",
      Img:"assets/stadium/realmadrid.jpg",
    },
    {
      id: "6",
      clubName: "juventus Stadium",
      Price: ".5",
      Img:"assets/stadium/juventus.png",
    }
  ]
}
