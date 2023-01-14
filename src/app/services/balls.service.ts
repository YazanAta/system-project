import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BallsService {

  constructor() { }

  balls = [
    {
      id: "1",
      clubName: "Al Hilm League Ball",
      Price: "19.99",
      Img:"assets/balls/Al Hilm League Ball.jpg",
    },
    {
      id: "2",
      clubName: "Al Rihla Pro Ball",
      Price: "14.99",
      Img:"assets/balls/Al Rihla Pro Ball.jpg",
    },
    {
      id: "3",
      clubName: "MLS Pro Ball",
      Price: "9.99",
      Img:"assets/balls/MLS Pro Ball.jpg",
    },
    {
      id: "4",
      clubName: "MLS Training Ball",
      Price: "9.99",
      Img:"assets/balls/MLS Training Ball.jpg",
    },
    {
      id: "5",
      clubName: "Tiro Competition Ball",
      Price: "9.99",
      Img:"assets/balls/Tiro Competition Ball.jpg",
    },
    {
      id: "6",
      clubName: "UCL League Void Ball",
      Price: "9.99",
      Img:"assets/balls/UCL League Void Ball.jpg",
    }
  ]
}
