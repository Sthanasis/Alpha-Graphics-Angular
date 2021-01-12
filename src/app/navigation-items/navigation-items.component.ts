import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.css']
})
export class NavigationItemsComponent implements OnInit {

  navigationItems:Array<string> = ['','portfolio','about','contact'];
  logo: string = 'logo';
  constructor() { }

  ngOnInit(): void {
  }

}