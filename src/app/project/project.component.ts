import { Component, OnInit,Input } from '@angular/core';
import { Project } from '../Interfaces/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project:Project;
  @Input() onClick:()=>void;
  constructor() { }

  ngOnInit(): void {
    console.log(this.onClick)
  }

  getFormatedDate():string[]{
    let arr:any = this.project.date.split(" ");
    arr = arr.slice(0, 4);
    arr = arr.join(" ");
    return arr;
  }

}
