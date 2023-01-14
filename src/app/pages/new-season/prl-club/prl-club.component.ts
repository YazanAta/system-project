import { Component, OnInit } from '@angular/core';
import { PrlClubsService } from 'src/app/services/prl-services/prl-clubs.service';

@Component({
  selector: 'app-prl-club',
  templateUrl: './prl-club.component.html',
  styleUrls: ['./prl-club.component.css']
})
export class PrlClubComponent implements OnInit {

  constructor(private service: PrlClubsService) { }

  club:any;
  ngOnInit(): void {
    this.club = this.service.clubs;
  }

}
