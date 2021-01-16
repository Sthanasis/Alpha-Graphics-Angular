import { Component, DoCheck } from '@angular/core';
import { ProjectsService } from '../projects.service';
import {Project} from '../Interfaces/Project';
import { AuthStatus } from '../authenticationStatus';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements DoCheck {
  mode:string
  projects:Array<Project>;
  isAuth: boolean;
  project:Project;
  projectDeleted:boolean = false;
  loading:boolean=false;

  constructor(private projectsService:ProjectsService, private authStats: AuthStatus) {
    this.isAuth = authStats.isAuth;
    this.mode = this.getMode();
    if(this.mode === 'Graphic Design'){
      this.getGraphicDesigns()
    } else {
      this.getConceptArt();
    }
  }
  
  ngDoCheck() {
    if(this.projectDeleted){
      if(this.mode === 'Graphic Design'){
        this.getGraphicDesigns()
      } else {
        this.getConceptArt();
      }
      this.projectDeleted = false;
    }
  }

  getGraphicDesigns = (event?) => {
    this.loading = true;
    if(event){
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    }
    

    this.projectsService.GetGraphicDesignProjects().subscribe(
      result=> {
        this.projects = [...result.data.projects].reverse();
        this.setMode("Graphic Design");
        this.loading = false;

      }
    )
  }

  getConceptArt = (event?) => {
    this.loading = true;

    if(event){
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    }
    
    this.projectsService.GetConceptArtProjects().subscribe(
      result=> {
        this.projects = [...result.data.projects].reverse();
        this.setMode("Concept Art");
        this.loading = false;

      }
    )
  }

  getMode(){
    if(sessionStorage.getItem('mode')){
      return sessionStorage.getItem('mode')
    } else {
      sessionStorage.setItem('mode','Graphic Design');
      return 'Graphic Design';
    }
  }

  setMode(mode:string){
    sessionStorage.setItem('mode',mode);
  }

  
  onDelete = () => {
    this.projectDeleted = true;
  }


}
