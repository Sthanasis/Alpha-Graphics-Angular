import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../Interfaces/Project';

@Component({
  selector: 'app-portofolio-project',
  templateUrl: './portofolio-project.component.html',
  styleUrls: ['./portofolio-project.component.css']
})
export class PortofolioProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() isAuth:boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(this.project)
  }

}
