import { Component, OnInit,Input } from '@angular/core';

import { Project } from '../Interfaces/Project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-landing-project',
  templateUrl: './landing-project.component.html',
  styleUrls: ['./landing-project.component.css']
})

export class LandingProjectComponent implements OnInit {
  @Input() project:Project;
  @Input() isAuth:boolean;
  @Input() onDelete: ()=>void;
  showProject: boolean = false;
  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {

  }


  getProject = () =>{
    this.showProject = true;
    document.querySelector('body').classList.add('lockScroll');
  }

  removeProject = () => {
    console.log('clicked')
    this.showProject = false;
    document.querySelector('body').classList.remove('lockScroll');
  }

  deleteProject = () =>{
    this.projectsService.DeleteProject(this.project._id).subscribe(res=>{
      alert('Project Deleted')
      this.onDelete();
    });
  }
}
