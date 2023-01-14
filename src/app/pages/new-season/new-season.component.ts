import { Component, OnInit, ViewChild} from '@angular/core';
import { LeaguesDetailService } from '../../services/leagues-detail.service';

@Component({
  selector: 'app-new-season',
  templateUrl: './new-season.component.html',
  styleUrls: ['./new-season.component.css']
})
export class NewSeasonComponent implements OnInit {
  
  constructor(private service:LeaguesDetailService) { }

  status:boolean = false;
  leagueData: any;
  count : number = 0;
  ngOnInit(): void { 
    this.leagueData = this.service.leagueDetails;
    console.log(this.count);
  }

  clickEvent(lg : any){
    this.count = lg.id;
    console.log(this.count);
  }

  show1(){
    if(this.count == 1){
      return true;
    }else{
      return false;
    }

  }
  show2(){
    if(this.count == 2){
      return true;
    }else{
      return false;
    }

  }
  show3(){
    if(this.count == 3){
      return true;
    }else{
      return false;
    }

  }
  show4(){
    if(this.count == 4){
      return true;
    }else{
      return false;
    }

  }
  show5(){
    if(this.count == 5){
      return true;
    }else{
      return false;
    }

  }
}
