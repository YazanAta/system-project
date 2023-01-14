import { Component, OnInit } from '@angular/core';
import { LaligaClubsService } from 'src/app/services/la-liga-services/laliga-clubs.service';
import { Output, EventEmitter } from '@angular/core';
import { NewSeasonComponent } from '../new-season.component';


@Component({
  selector: 'app-laliga-club',
  templateUrl: './laliga-club.component.html',
  styleUrls: ['./laliga-club.component.css']
})
export class LaligaClubComponent implements OnInit {
  constructor(private service:LaligaClubsService) { }

  club:any;
  ngOnInit(): void {
    this.club = this.service.clubs;
  }
  

}
