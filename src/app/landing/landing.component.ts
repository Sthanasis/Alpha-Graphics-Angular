import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../Interfaces/Project';
import { AuthStatus } from '../authenticationStatus';

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
  isAuth:boolean;
  
  constructor(private _projectService: ProjectsService, public authStatus: AuthStatus) { 
    this.isAuth = this.authStatus.isAuth;

  }
  
  ngOnInit(): void {
    this._projectService.GetProjects()
      .subscribe(res => {
        this.response= {...res.data}

        for(let key in this.response){
          this.projects = [...this.response[key]].reverse();
        }
        this.firstThreeProjects = this.projects.filter((_,index)=> index <= 2);

      })

  }

}
