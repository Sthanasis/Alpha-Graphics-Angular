import { Component, DoCheck } from '@angular/core';
import { AuthStatus } from './authenticationStatus';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck  {
  isAuth: boolean;
  isOpen: boolean;
  constructor(public authStatus: AuthStatus){
    this.isAuth = authStatus.isAuth;
  }

  ngDoCheck(){
    if(this.authStatus.getIsAuth() !== this.isAuth){
      this.isAuth = this.authStatus.isAuth;
    }
  }

  toggleToolbar = () =>{
    this.isOpen=!this.isOpen;
  }

  closeSidedrawer = () =>{
    this.isOpen = false;
  }
}
