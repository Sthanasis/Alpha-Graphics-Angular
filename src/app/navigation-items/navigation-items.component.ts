import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.css']
})
export class NavigationItemsComponent implements OnInit {
  @Input() isAuth: boolean;
  navigationItems:Array<string> = ['','portfolio','about','contact','addProject'];
  logo: string = 'logo';
  constructor() { }

  ngOnInit(): void {
  }

}
