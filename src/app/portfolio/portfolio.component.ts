import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import {Project} from '../Interfaces/Project';
import { AuthStatus } from '../authenticationStatus';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  mode:string
  projects:Array<Project>;
  isAuth: boolean;

  constructor(private projectsService:ProjectsService, private authStats: AuthStatus) {
    this.isAuth = authStats.isAuth;
   }
  
  ngOnInit(): void {
    this.mode = this.getMode();
    if(this.mode === 'Graphic Design'){
      this.getGraphicDesigns()
    } else {
      this.getConceptArt();
    }
  }

  getGraphicDesigns = (event?) => {
    if(event){
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    }
    

    this.projectsService.GetGraphicDesignProjects().subscribe(
      result=> {
        this.projects = [...result.data.projects].reverse();
        this.setMode("Graphic Design");
      }
    )
  }

  getConceptArt = (event?) => {
    if(event){
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    }
    
    this.projectsService.GetConceptArtProjects().subscribe(
      result=> {
        this.projects = [...result.data.projects].reverse();
        this.setMode("Concept Art");

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
}
