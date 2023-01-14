import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaligaClubsService {

  constructor() { }
  clubs = [
    {
      id:1,
      clubName:"Real Madrid CF",
      clubImg:"assets/La Liga/Real Madrid.png",
      clubR: "real madrid",
      wh: "width: 15%; height: 20%",
      route:"real-madrid"
    },
    {
      id:2,
      clubName:"FC Barcelona",
      clubImg:"assets/La Liga/Barcelona.png",
      wh: "width: 23%; height: 20%",
      route:"Barcelona"
    },
    {
      id:3,
      clubName:"Atlético Madrid",
      clubImg:"assets/La Liga/Atletico.png",
      wh: "width: 17%; height: 20%",
      route:"Atletico"
    },
    {
      id:4,
      clubName:"Valencia CF",
      clubImg:"assets/La Liga/Valencia.png",
      wh: "width: 17%; height: 20%",
      route:"Valencia"
    },
    {
    id:5,
    clubName:"Villareal CF",
    clubImg:"assets/La Liga/villareal.png",
    wh: "width: 17%; height: 20%",
    route:"villareal"
    },
    {
      id:6,
      clubName: "Real Sociedad",
      clubImg: "assets/La Liga/sociedad.png",
      wh: "width: 17%; height: 20%",
      route:"sociedad"
    }
  ]
}
