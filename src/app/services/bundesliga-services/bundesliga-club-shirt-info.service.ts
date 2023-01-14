import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BundesligaClubShirtInfoService {

  constructor() { }
  Bayern = [
    {
      id: "1",
      clubName: "Bayern Munich",
      Type:"Home Kit",
      Price: "19.99",
      Img:"assets/Bundesliga/Bayern Kits/home.png",
    },
    {
      id: "2",
      clubName: "Bayern Munich",
      Type:"Away Kit",
      Price: "14.99",
      Img:"assets/Bundesliga/Bayern Kits/away.png"
    },
    {
      id: "3",
      clubName: "Bayern Munich",
      Type:"Third Kit",
      Price: "9.99",
      Img:"assets/Bundesliga/Bayern Kits/third.png"
    }
  ]

  Dortmund = [
    {
      id: "1",
      clubName: "Dortmund",
      Type:"Home Kit",
      Price: "10.99",
      Img:"assets/Bundesliga/Dortmund Kits/home.png",
    },
    {
      id: "2",
      clubName: "Dortmund",
      Type:"Away Kit",
      Price: "8.99",
      Img:"assets/Bundesliga/Dortmund Kits/away.png"
    },
    {
      id: "3",
      clubName: "Dortmund",
      Type:"Third Kit",
      Price: "5.99",
      Img:"assets/Bundesliga/Dortmund Kits/third.png"
    }
  ]

  Frankfurt = [
    {
      id: "1",
      clubName: "Frankfurt",
      Type:"Home Kit",
      Price: "12.99",
      Img:"assets/Bundesliga/Frankfurt Kits/home.png",
    },
    {
      id: "2",
      clubName: "Frankfurt",
      Type:"Away Kit",
      Price: "9.99",
      Img:"assets/Bundesliga/Frankfurt Kits/away.png"
    },
    {
      id: "3",
      clubName: "Frankfurt",
      Type:"Third Kit",
      Price: "4.99",
      Img:"assets/Bundesliga/Frankfurt Kits/third.png"
    }
  ]

  Leipzig = [
    {
      id: "1",
      clubName: "Leipzig",
      Type:"Home Kit",
      Price: "15.99",
      Img:"assets/Bundesliga/Leipzig Kits/home.png",
    },
    {
      id: "2",
      clubName: "Leipzig",
      Type:"Away Kit",
      Price: "12.99",
      Img:"assets/Bundesliga/Leipzig Kits/away.png"
    },
    {
      id: "3",
      clubName: "Leipzig",
      Type:"Third Kit",
      Price: "10.99",
      Img:"assets/Bundesliga/Leipzig Kits/third.png"
    }
  ]

  Union = [
    {
      id: "1",
      clubName: "Union Berlin",
      Type:"Home Kit",
      Price: "10.99",
      Img:"assets/Bundesliga/Union Kits/home.png",
    },
    {
      id: "2",
      clubName: "Union Berlin",
      Type:"Away Kit",
      Price: "8.99",
      Img:"assets/Bundesliga/Union Kits/away.png"
    },
    {
      id: "3",
      clubName: "Union Berlin",
      Type:"Third Kit",
      Price: "4.99",
      Img:"assets/Bundesliga/Union Kits/third.png"
    }
  ]

  Wolfsburg = [
    {
      id: "1",
      clubName: "Wolfsburg",
      Type:"Home Kit",
      Price: "10.99",
      Img:"assets/Bundesliga/Wolfsburg Kits/home.png",
    },
    {
      id: "2",
      clubName: "Wolfsburg",
      Type:"Away Kit",
      Price: "7.99",
      Img:"assets/Bundesliga/Wolfsburg Kits/away.png"
    },
    {
      id: "3",
      clubName: "Wolfsburg",
      Type:"Third Kit",
      Price: "4.99",
      Img:"assets/Bundesliga/Wolfsburg Kits/third.png"
    }
  ]
}
