import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaguesDetailService {

  constructor() { }
  leagueDetails = [
    {
      id:1,
      leagueName:"La Liga",
      leagueImg:"assets/League Photos/LaLiga_logo.png"
    },
    {
      id:2,
      leagueName:"Premier League",
      leagueImg:"assets/League Photos/Premier_League_logo.png"
    },
    {
      id:3,
      leagueName:"Bundesliga ",
      leagueImg:"assets/League Photos/Bundesliga_logo.png"
    },
    {
      id:4,
      leagueName:"Serie A",
      leagueImg:"assets/League Photos/Serie_A_logo.png"
    },
    {
      id:5,
      leagueName:"Ligue 1",
      leagueImg:"assets/League Photos/Ligue_1_logo.png"
    }
  ]
}
