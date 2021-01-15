import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigationItem.component.html',
  styleUrls: ['./navigationItem.component.css']
})

export class NavigationItemComponent {
  @Input() name: string;
  @Input() logo: string;
  @Input() isAuth:boolean;
}