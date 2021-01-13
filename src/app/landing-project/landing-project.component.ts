import { Component, OnInit,Input } from '@angular/core';
import { Project } from '../Interfaces/Project';

@Component({
  selector: 'app-landing-project',
  templateUrl: './landing-project.component.html',
  styleUrls: ['./landing-project.component.css']
})

export class LandingProjectComponent implements OnInit {
  @Input() project:Project;

  constructor() { }

  ngOnInit(): void {
    console.log(this.project)

  }

}
