import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  @Input() input:any;

  @Input() onChange:Function;
  
  containerClass: string = 'Input';
  elementClass: string = 'InputElement';

  constructor() { }


  ngOnInit(): void {
    if(this.input.type ==='radio'){
      this.containerClass ='RadioInputContainer'
      this.elementClass = 'RadioElement'
    } 
  }
  
  onInput(){

  }
}
