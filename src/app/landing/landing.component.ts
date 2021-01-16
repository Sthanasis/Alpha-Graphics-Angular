import { Component, DoCheck } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../Interfaces/Project';
import { AuthStatus } from '../authenticationStatus';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [ProjectsService]
})

export class LandingComponent implements DoCheck {
  response:object;
  projects:Array<Project>;
  firstThreeProjects:Array<Project>;
  isAuth:boolean;
  projectDeleted: boolean = false;

  constructor(private _projectService: ProjectsService, public authStatus: AuthStatus) { 
    this.isAuth = this.authStatus.isAuth;
    this._projectService.GetProjects()
    .subscribe(res => {
      this.response= {...res.data}

      for(let key in this.response){
        this.projects = [...this.response[key]].reverse();
      }
      this.firstThreeProjects = this.projects.filter((_,index)=> index <= 2);

    })
  }
  
  ngDoCheck(): void {
    if(this.projectDeleted){
      this._projectService.GetProjects()
        .subscribe(res => {
          this.response= {...res.data}

          for(let key in this.response){
            this.projects = [...this.response[key]].reverse();
          }
          this.firstThreeProjects = this.projects.filter((_,index)=> index <= 2);
          this.projectDeleted = false;
        })
 
    }
  }
  
  onDelete = () => {
    this.projectDeleted = true;
  }

}
