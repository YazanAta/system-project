import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassicsService {

  constructor() { }
  classics = [
    {
      id: "1",
      clubName: "1988 Netherlands Home retro kit",
      Price: "19.99",
      Img:"assets/classics/1988 Netherlands Home retro kit.png",
    },
    {
      id: "2",
      clubName: "1989-1990 Liverpool home retro kit",
      Price: "14.99",
      Img:"assets/classics/1989-1990 Liverpool home retro kit.png",
    },
    {
      id: "3",
      clubName: "1995-1997 Chelsea Away Retro kit",
      Price: "9.99",
      Img:"assets/classics/1995-1997 Chelsea Away Retro kit.png",
    },
    {
      id: "4",
      clubName: "1996-1997 Barcelona Away Retro kit",
      Price: "9.99",
      Img:"assets/classics/1996-1997 Barcelona Away Retro kit.png",
    },
    {
      id: "5",
      clubName: "1997-1998 Juventus away retro kit",
      Price: "9.99",
      Img:"assets/classics/1997-1998 Juventus away retro kit.png",
    },
    {
      id: "6",
      clubName: "1998 Manchester United Home retro kit",
      Price: "9.99",
      Img:"assets/classics/1998 Manchester United Home retro kit.png",
    }
  ]

 
}
