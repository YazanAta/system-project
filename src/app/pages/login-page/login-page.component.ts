import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }
  myItems: any[] = [];
  
  ngOnInit(): void {
    let temp= localStorage.getItem('LOGIN_STAT');
    let s ;
    if(temp&&temp!=null)
    {
      s = JSON.parse(temp);
    }
    if(s.stat == true){
      this.router.navigate(['/profile']);
    }
  }
  myStat = {
    stat: true
  };
  checkUser(user:NgForm){
    let oldItems= localStorage.getItem('USER_INFO');
    if(oldItems&&oldItems!=null)
    {
      this.myItems=JSON.parse(oldItems);
    }
    for( let i = 0; i<this.myItems.length; i++){
      if(this.myItems[i].Email == user.value.Email && this.myItems[i].password == user.value.Password){
        console.log("From Sec");
        localStorage.setItem('CURRENT_USER', JSON.stringify(this.myItems[i]));
        localStorage.removeItem('LOGIN_STAT');
        localStorage.setItem('LOGIN_STAT', JSON.stringify(this.myStat));
        window.location.reload();
        break;
      }else{
        //for not display the error message until the last element is checked
        if(i==this.myItems.length-1){
          localStorage.removeItem('LOGIN_STAT');
          localStorage.setItem('LOGIN_STAT', "false");
          
          let element = document.getElementById("incorrect");
          
          if (element != undefined) {
            
            element.style.display = 'inline-block';
          }
          window.setTimeout(function() {
            if (element != undefined) {
              element.style.display = 'none';
            }
          }, 1000);
        }
      }
    }
  }
  

}
