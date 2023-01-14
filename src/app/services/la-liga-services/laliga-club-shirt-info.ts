import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaLigaService {

  constructor() { }

  realMadrid = [
    {
      id: "1",
      clubName: "Real Madrid",
      Type:"Home Kit",
      Price: "19.99",
      Img:"assets/La Liga/RealMadrid Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "Real Madrid",
      Type:"Away Kit",
      Price: "14.99",
      Img:"assets/La Liga/RealMadrid Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "Real Madrid",
      Type:"Third Kit",
      Price: "9.99",
      Img:"assets/La Liga/RealMadrid Kits/Third.jpg"
    }
  ]

  Barcelona = [
    {
      id: "1",
      clubName: "Barcelona",
      Type:"Home Kit",
      Price: "10.99",
      Img:"assets/La Liga/Barcelona Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "Barcelona",
      Type:"Away Kit",
      Price: "8.99",
      Img:"assets/La Liga/Barcelona Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "Barcelona",
      Type:"Third Kit",
      Price: "5.99",
      Img:"assets/La Liga/Barcelona Kits/Third.jpg"
    }
  ]

  Villareal = [
    {
      id: "1",
      clubName: "Villareal",
      Type:"Home Kit",
      Price: "12.99",
      Img:"assets/La Liga/Villareal Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "Villareal",
      Type:"Away Kit",
      Price: "9.99",
      Img:"assets/La Liga/Villareal Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "Villareal",
      Type:"Third Kit",
      Price: "4.99",
      Img:"assets/La Liga/Villareal Kits/Third.jpg"
    }
  ]

  Valencia = [
    {
      id: "1",
      clubName: "Valencia",
      Type:"Home Kit",
      Price: "15.99",
      Img:"assets/La Liga/Valencia Kits/Home.jpeg",
    },
    {
      id: "2",
      clubName: "Valencia",
      Type:"Away Kit",
      Price: "12.99",
      Img:"assets/La Liga/Valencia Kits/Away.jpeg"
    },
    {
      id: "3",
      clubName: "Valencia",
      Type:"Third Kit",
      Price: "10.99",
      Img:"assets/La Liga/Valencia Kits/Third.jpeg"
    }
  ]

  AtleticoMadrid = [
    {
      id: "1",
      clubName: "Atletico Madrid",
      Type:"Home Kit",
      Price: "10.99",
      Img:"assets/La Liga/AtleticoMadrid Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "Atletico Madrid",
      Type:"Away Kit",
      Price: "8.99",
      Img:"assets/La Liga/AtleticoMadrid Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "Atletico Madrid",
      Type:"Third Kit",
      Price: "4.99",
      Img:"assets/La Liga/AtleticoMadrid Kits/Third.jpg"
    }
  ]

  RealSociedad = [
    {
      id: "1",
      clubName: "Real Sociedad",
      Type:"Home Kit",
      Price: "10.99",
      Img:"assets/La Liga/RealSociedad Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "Real Sociedad",
      Type:"Away Kit",
      Price: "7.99",
      Img:"assets/La Liga/RealSociedad Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "Real Sociedad",
      Type:"Third Kit",
      Price: "4.99",
      Img:"assets/La Liga/RealSociedad Kits/Third.jpg"
    }
  ]

}
