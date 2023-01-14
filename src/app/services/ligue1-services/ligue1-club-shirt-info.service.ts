import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ligue1ClubShirtInfoService {

  constructor() { }

  monaco = [
    {
      id: "1",
      clubName: "AS Monaco",
      Type:"Home Kit",
      Price: "19.99",
      Img:"assets/Ligue 1/AS Monaco Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "AS Monaco",
      Type:"Away Kit",
      Price: "14.99",
      Img:"assets/Ligue 1/AS Monaco Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "AS Monaco",
      Type:"Third Kit",
      Price: "9.99",
      Img:"assets/Ligue 1/AS Monaco Kits/Third.jpg"
    }
  ]

  paris = [
    {
      id: "1",
      clubName: "PSG",
      Type:"Home Kit",
      Price: "10.99",
      Img:"assets/Ligue 1/PSG Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "PSG",
      Type:"Away Kit",
      Price: "8.99",
      Img:"assets/Ligue 1/PSG Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "PSG",
      Type:"Third Kit",
      Price: "5.99",
      Img:"assets/Ligue 1/PSG Kits/Third.jpg"
    }
  ]

  lille = [
    {
      id: "1",
      clubName: "LOSC Lille",
      Type:"Home Kit",
      Price: "12.99",
      Img:"assets/Ligue 1/LOSC Lille Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "LOSC Lille",
      Type:"Away Kit",
      Price: "9.99",
      Img:"assets/Ligue 1/LOSC Lille Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "LOSC Lille",
      Type:"Third Kit",
      Price: "4.99",
      Img:"assets/Ligue 1/LOSC Lille Kits/Third.jpg"
    }
  ]

  Nice = [
    {
      id: "1",
      clubName: "Nice",
      Type:"Home Kit",
      Price: "15.99",
      Img:"assets/Ligue 1/OGC Nice Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "Nice",
      Type:"Away Kit",
      Price: "12.99",
      Img:"assets/Ligue 1/OGC Nice Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "Nice",
      Type:"Third Kit",
      Price: "10.99",
      Img:"assets/Ligue 1/OGC Nice Kits/Third.jpg"
    }
  ]

  Marseille = [
    {
      id: "1",
      clubName: "Marseille",
      Type:"Home Kit",
      Price: "10.99",
      Img:"assets/Ligue 1/Olympique de Marseille Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "Marseille",
      Type:"Away Kit",
      Price: "8.99",
      Img:"assets/Ligue 1/Olympique de Marseille Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "Marseille",
      Type:"Third Kit",
      Price: "4.99",
      Img:"assets/Ligue 1/Olympique de Marseille Kits/Third.jpg"
    }
  ]

  Lyonnais = [
    {
      id: "1",
      clubName: "Lyonnais",
      Type:"Home Kit",
      Price: "10.99",
      Img:"assets/Ligue 1/Olympique Lyonnais Kits/Home.jpg",
    },
    {
      id: "2",
      clubName: "Lyonnais",
      Type:"Away Kit",
      Price: "7.99",
      Img:"assets/Ligue 1/Olympique Lyonnais Kits/Away.jpg"
    },
    {
      id: "3",
      clubName: "Lyonnais",
      Type:"Third Kit",
      Price: "4.99",
      Img:"assets/Ligue 1/Olympique Lyonnais Kits/Third.jpg"
    }
  ]
}
