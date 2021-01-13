import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})

export class BackdropComponent implements OnInit {


  constructor() { }
  
  @Input() shade: string;
  ngOnInit(): void {

  }

}
