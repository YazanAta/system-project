import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieaClubsService {

  constructor() { }
  clubs = [
    {
      id:1,
      clubName:"A.C. Milan",
      clubImg:"assets/seriea/AC Milan.png",
      wh: "width: 15%; height: 20%",
      route:"ac-milan"
    },
    {
      id:2,
      clubName:"Inter Milan",
      clubImg:"assets/seriea/Inter Milan.png",
      wh: "width: 23%; height: 20%",
      route:"inter-milan"
    },
    {
      id:3,
      clubName:"Juventus F.C.",
      clubImg:"assets/seriea/Juventus.png",
      wh: "width: 17%; height: 20%",
      route:"juventus"
    },
    {
      id:4,
      clubName:"S.S.C. Napoli",
      clubImg:"assets/seriea/Napoli.png",
      wh: "width: 40%; height: 20%",
      route:"napoli"
    },
    {
    id:5,
    clubName:"A.S. Roma",
    clubImg:"assets/seriea/Roma.png",
    wh: "width: 48%; height: 20%",
    route:"roma"
    },
    {
      id:6,
      clubName: "Atalanta B.C.",
      clubImg: "assets/seriea/Atalanta.png",
      wh: "width: 17%; height: 20%",
      route:"atalanta"
    }
  ]
}
