import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../Interfaces/Project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-portofolio-project',
  templateUrl: './portofolio-project.component.html',
  styleUrls: ['./portofolio-project.component.css']
})
export class PortofolioProjectComponent implements OnInit {
  @Input() project: Project;
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
