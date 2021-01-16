import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnType:string;
  @Input() onClick:(param:any)=> void;
  @Input() selected: string;
  data:string = '';
  className:any;
  constructor() { }

  ngOnInit(): void {
    if(this.btnType === 'Dark'){
      this.className = 'btn-dark';
    } else if(this.btnType ==='default'){
      this.className = 'btn-default';
    } else if( this.btnType === 'Danger'){
      this.className = 'btn-danger';
    } else if(this.btnType==="Success"){
      this.className = 'btn-success';
    } else if(this.btnType === 'Download'){
      this.className ='btn-download';
      this.data = 'download';
    }

    if(this.selected){
      this.className = this.className + ' ' + this.selected;
    }
  }
  
}
