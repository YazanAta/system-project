import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router:Router) { }

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
    
    let oldItems= localStorage.getItem('USER_INFO');
    if(oldItems&&oldItems!=null)
    {
      this.userInfo=JSON.parse(oldItems);
    }
  }

  userInfo : any[] = [];
  valid:boolean = true;
  submit(form : NgForm){
    
    for(let i=0; i<this.userInfo.length; i++){
      this.valid = true;
      if(this.userInfo[i].Email == form.value.Email){
        this.valid = false;
        break;
      }
    }
    
    if(this.valid == true){
      this.userInfo.push(form.value)
      localStorage.setItem('USER_INFO', JSON.stringify(this.userInfo));
      this.router.navigate(['/login-page']);
    }else{
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

  onReset(form: NgForm): void {
    form.reset();
  }
  

}
