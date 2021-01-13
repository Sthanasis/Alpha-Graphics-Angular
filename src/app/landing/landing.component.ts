import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../Interfaces/Project';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [ProjectsService]
})

export class LandingComponent implements OnInit {
  response:object;
  projects:Array<Project>;
  firstThreeProjects:Array<Project>;
  constructor(private _projectService: ProjectsService) { }

  ngOnInit(): void {
    this._projectService.GetProjects()
      .subscribe(res => {
        this.response= {...res.data}

        for(let key in this.response){
          this.projects = [...this.response[key]].reverse();
        }
        this.firstThreeProjects = this.projects.filter((_,index)=> index <= 2);
        console.log(this.firstThreeProjects)
        
      })

  }

}
