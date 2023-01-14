import { Component, OnInit } from '@angular/core';
import { BundesligaClubsService } from 'src/app/services/bundesliga-services/bundesliga-clubs.service';

@Component({
  selector: 'app-bundesliga-club',
  templateUrl: './bundesliga-club.component.html',
  styleUrls: ['./bundesliga-club.component.css']
})
export class BundesligaClubComponent implements OnInit {

  constructor(private service: BundesligaClubsService) { }

  club:any;
  ngOnInit(): void {
    this.club = this.service.clubs;
  }

}
