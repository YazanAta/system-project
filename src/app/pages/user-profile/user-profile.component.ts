import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  thisUser : any;
  myStat = {
    stat: false
  };
  

  //for pdf
  allorders:any[] = [];
  myOrder:any[] = [];

  //end
  constructor(private router:Router) { }
  ngOnInit(): void {
    let oldItems= localStorage.getItem('CURRENT_USER');
    if(oldItems&&oldItems!=null)
    {
      this.thisUser=JSON.parse(oldItems);
    }
    let temp= localStorage.getItem('LOGIN_STAT');
    let s ;
    if(temp&&temp!=null)
    {
      s = JSON.parse(temp);
    }
    if(s.stat == false){
      this.router.navigate(['/login-page']);
    }

    //
    let myorders = localStorage.getItem('ORDER_INFO');
    if(myorders&&myorders!=null)
    {
      this.allorders=JSON.parse(myorders);
    }

    for(let i = 0; i<this.allorders.length; i++){
      let innerArrayLength = this.allorders[i].length
      if(this.allorders[i][innerArrayLength-1].name == (this.thisUser.FirstName + " " + this.thisUser.LastName)){
        this.myOrder.push(this.allorders[i]);
      }
    }
    //
  }

  logOut(){
    localStorage.removeItem('CURRENT_USER');
    localStorage.removeItem('LOGIN_STAT');
    localStorage.setItem('LOGIN_STAT', JSON.stringify(this.myStat));
    window.location.reload();
  }
  
  generatePdfFile(){
    let pdf = new jsPDF();
    pdf.setFontSize(20);
    pdf.text(this.thisUser.FirstName+ " " +this.thisUser.LastName + "'s Order",11,8);

    (pdf as any).autoTable({ html: '#my-table' })
    
    pdf.output('dataurlnewwindow');
    
  }

}
