import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sidedrawer',
  templateUrl: './sidedrawer.component.html',
  styleUrls: ['./sidedrawer.component.css']
})

export class SidedrawerComponent implements OnInit {
  @Input() isAuth:boolean;
  @Input() isOpen:boolean;
  @Input() closeSidedrawer: ()=>void;

  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
  }
  logout = () =>{
    this._authService.logout().subscribe(result => {
      
      if(result.status === 'success'){
        location.reload();
      }
    });
  }

}
