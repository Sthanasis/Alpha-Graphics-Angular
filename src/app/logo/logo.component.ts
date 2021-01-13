import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  fadeInClass: string;
  fadeOutClass: string;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeInClass = "Fade-in";
      this.fadeOutClass = "Fade-out";
    }, 2000);
  }

}
