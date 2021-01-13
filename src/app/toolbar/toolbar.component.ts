import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  backgroundClass: string='Transparent';
  constructor() { }
 
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



}
