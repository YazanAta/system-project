import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrlClubsService {

  constructor() { }

  clubs = [
    {
      id:1,
      clubName:"Liverpool F.C.",
      clubImg:"assets/Prl/Liverpool.png",
      wh: "width: 15%; height: 20%",
      route:"Liverpool"
    },
    {
      id:2,
      clubName:"Manchester City F.C.",
      clubImg:"assets/Prl/mancity.png",
      wh: "width: 20%; height: 20%",
      route:"mancity"
    },
    {
      id:3,
      clubName:"Manchester United F.C.",
      clubImg:"assets/Prl/manutd.png",
      wh: "width: 23%; height: 20%",
      route:"manutd"
    },
    {
      id:4,
      clubName:"Arsenal F.C.",
      clubImg:"assets/Prl/arsenal.png",
      wh: "width: 19%; height: 20%",
      route:"arsenal"
    },
    {
    id:5,
    clubName:"Tottenham Hotspur F.C.",
    clubImg:"assets/Prl/tottenham.png",
    wh: "width: 10%; height: 20%",
    route:"tottenham"
    },
    {
      id:6,
      clubName: "Newcastle United F.C.",
      clubImg: "assets/Prl/newcastle.png",
      wh: "width: 21%; height: 20%",
      route:"newcastle"
    }
  ]
}
