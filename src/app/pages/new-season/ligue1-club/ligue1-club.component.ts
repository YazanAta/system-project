import { Component, OnInit } from '@angular/core';
import { Ligue1ClubsService } from 'src/app/services/ligue1-services/ligue1-clubs.service';

@Component({
  selector: 'app-ligue1-club',
  templateUrl: './ligue1-club.component.html',
  styleUrls: ['./ligue1-club.component.css']
})
export class Ligue1ClubComponent implements OnInit {

  constructor(private service:Ligue1ClubsService) { }

  club:any;
  ngOnInit(): void {
    this.club = this.service.clubs;
  }

}
