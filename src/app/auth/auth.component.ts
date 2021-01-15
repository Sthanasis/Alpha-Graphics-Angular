import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { AuthStatus } from '../authenticationStatus';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  constructor(
    public authService: AuthService, 
    public router: Router, 
    public authStatus:AuthStatus
    ) { }

  ngOnInit(): void {

  }

  data = {
    username: '',
    password: ''
  }
  goTo(path:string): void {
    this.router.navigateByUrl(path);
  }

  login(): void {
    this.authService.login(this.data)
      .subscribe(result => {
        console.log(result)
        if (result.status === 'success' ) {
          this.authStatus.setIsAuth();
          this.goTo('/');
        }
    });
  }
}
