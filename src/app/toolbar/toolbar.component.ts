import { Component, OnInit,HostListener, Input  } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() isAuth:boolean;
  @Input() setIsAuth:()=> void;

  backgroundClass: string='Transparent';
  constructor(private _authService:AuthService) {
  }
 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY !== 0) {
      this.backgroundClass = "Colored";
    } else {
      this.backgroundClass = 'Transparent';
    }
  }

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
