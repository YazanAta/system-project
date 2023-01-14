import { Component, OnInit } from '@angular/core';
import { SerieaClubsService } from 'src/app/services/seriea-services/seriea-clubs.service';

@Component({
  selector: 'app-seriea-club',
  templateUrl: './seriea-club.component.html',
  styleUrls: ['./seriea-club.component.css']
})
export class SerieaClubComponent implements OnInit {

  constructor(private service:SerieaClubsService) { }

  club:any;
  ngOnInit(): void {
    this.club = this.service.clubs;
  }

}
