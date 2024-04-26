import { Component } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ opacity:0,transform: 'translateX(-10%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%)',opacity:1 })),
      ]),
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ opacity:0,transform: 'translateX(10%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%)',opacity:1 })),
      ]),
    ]),
    trigger('slideInFromBottomLeft', [
      transition(':enter', [
        style({ opacity:0,transform: 'translate(-10%,40%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%,0%)',opacity:1 })),
      ]),
    ]),
    trigger('slideInFromBottomRight', [
      transition(':enter', [
        style({ opacity:0,transform: 'translate(10%,40%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%,0%)',opacity:1 })),
      ]),
    ]),
  ],

})
export class LoginPageComponent {
monthlyUsers:number=9;
public number: number = 1700000;

  constructor(private auth:AuthenticationService){}
  Loginbtn(){
    this.auth.Login();
  }
  monthlyUsersstop:any=setInterval(()=>{
    this.monthlyUsers=this.monthlyUsers+10000;
  if(this.monthlyUsers === 900000){
clearInterval(this.monthlyUsersstop);
  }
  },10)
}

