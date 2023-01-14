import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NationsService {

  constructor() { }

  nations = [
    {
      id: "1",
      clubName: "England Shirt",
      Price: "19.99",
      Img:"assets/nations/england.jpg",
    },
    {
      id: "2",
      clubName: "Brazil Shirt",
      Price: "14.99",
      Img:"assets/nations/brazil.png",
    },
    {
      id: "3",
      clubName: "Argentina Shirt",
      Price: "9.99",
      Img:"assets/nations/argentina.jpg",
    },
    {
      id: "4",
      clubName: "Italy Shirt",
      Price: "9.99",
      Img:"assets/nations/italy.jpg",
    },
    {
      id: "5",
      clubName: "Germany Shirt",
      Price: "9.99",
      Img:"assets/nations/germany.jpg",
    },
    {
      id: "6",
      clubName: "Saudi Arabia Shirt",
      Price: "9.99",
      Img:"assets/nations/saudi.jpg",
    }
  ]
}
