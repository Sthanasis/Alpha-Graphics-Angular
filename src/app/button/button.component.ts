import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnType:string;
  className:string;
  constructor() { }

  ngOnInit(): void {
    if(this.btnType === 'Dark'){
      this.className = 'btn-dark';
    }
  }
  onClick(){
    console.log('clicked')
  }
}
