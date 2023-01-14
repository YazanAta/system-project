import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ligue1ClubsService {

  constructor() { }

  clubs = [
    {
      id:1,
      clubName:"Paris Saint-Germain F.C.",
      clubImg:"assets/Ligue 1/PSG.png",
      wh: "width: 27%; height: 20%",
      route:"paris-saint-germain"
    },
    {
      id:2,
      clubName:"Olympique Lyonnais",
      clubImg:"assets/Ligue 1/Olympique Lyonnais.png",
      wh: "width: 23%; height: 20%",
      route:"olympique-lyonnaisn"
    },
    {
      id:3,
      clubName:"Olympique de Marseille",
      clubImg:"assets/Ligue 1/Olympique de Marseille.png",
      wh: "width: 21%; height: 20%",
      route:"olympique-de-marseille"
    },
    {
      id:4,
      clubName:"LOSC Lille",
      clubImg:"assets/Ligue 1/LOSC Lille.png",
      wh: "width: 29%; height: 20%",
      route:"losc-lille"
    },
    {
    id:5,
    clubName:"OGC Nice",
    clubImg:"assets/Ligue 1/OGC Nice.png",
    wh: "width: 27%; height: 20%",
    route:"ogc-nice"
    },
    {
      id:6,
      clubName: "AS Monaco",
      clubImg: "assets/Ligue 1/AS Monaco.png",
      wh: "width: 20%; height: 20%",
      route:"monaco"
    }
  ]
}
