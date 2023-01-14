import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BundesligaClubsService {

  constructor() { }
  clubs = [
    {
      id:1,
      clubName:"FC Bayern Munich",
      clubImg:"assets/Bundesliga/bayern.png",
      wh: "width: 20%; height: 20%",
      route:"bayern"
    },
    {
      id:2,
      clubName:"Borussia Dortmund",
      clubImg:"assets/Bundesliga/dortmund.png",
      wh: "width: 20%; height: 20%",
      route:"dortmund"
    },
    {
      id:3,
      clubName:"Eintracht Frankfurt",
      clubImg:"assets/Bundesliga/frankfurt.png",
      wh: "width: 23%; height: 20%",
      route:"frankfurt"
    },
    {
      id:4,
      clubName:"RB Leipzig",
      clubImg:"assets/Bundesliga/leipzig.png",
      wh: "width: 35%; height: 20%",
      route:"leipzig"
    },
    {
    id:5,
    clubName:"FC Union Berlin",
    clubImg:"assets/Bundesliga/unionBerlin.png",
    wh: "width: 40%; height: 20%; margin-top: 20px;",
    route:"unionBerlin"
    },
    {
      id:6,
      clubName: "VfL Wolfsburg",
      clubImg: "assets/Bundesliga/wolfsburg.png",
      wh: "width: 21%; height: 20%",
      route:"wolfsburg"
    }
  ]
}
