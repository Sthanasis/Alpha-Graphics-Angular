import { Component, Input, OnInit } from '@angular/core';
import { AuthStatus } from '../authenticationStatus';
import { CvServiceService } from '../cv-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  @Input() isAuth:boolean;
  file:any;

  constructor(private authStatus: AuthStatus, private cvService: CvServiceService ) {
    this.isAuth = this.authStatus.isAuth;
  }

  ngOnInit(): void {
  }

  uploadCv = () => {
    const input = document.querySelector('input');
    this.file = input.files[0];

    if(this.file){
      const data = new FormData();
      data.append("cv", this.file );
      this.cvService.PostCv(data);
    } else {
      alert('Select you cv in .pdf format');
    }
    
  }

  downloadCv = () =>{
    this.cvService.GetCv();
  }

}
