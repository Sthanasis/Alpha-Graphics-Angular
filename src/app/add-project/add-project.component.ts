import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent implements OnInit {

  title:string = '';
  project:any;
  type:string= '';
  description:string = '';

  inputTypes:Array<object> = [
    {
      type:'text',
      value: this.title,
      placeholder: 'title',
      label: 'Project Title'
    },
    {
      type:'file',
      accepts: 'image/*',
      name: 'photo',
      label: 'Project image in .jpeg'
    },
    {
      type: 'radio',
      value: 'Graphic Design',
      name: 'type',
      label: 'Graphic Design'

    },
    {
      type: 'radio',
      value: 'Concept Art',
      name: 'type',
      label: 'Concept Art'
    },
    {
      type: 'textarea',
      value: this.description,
      placeholder:'Description',
      label: 'Project Description'
    }
  ]

  getDataKey(inputType:any):any{
    const dataObject = {
      'text':  this.title,
      'file' :  this.project,
      'radio' :  this.type ,
      'textarea' :  this.description,
    }
    return dataObject[inputType];
  }
  
  constructor(private _projectService: ProjectsService) { }

  ngOnInit(): void {
  }

  onSubmit(e:any):void{
    e.preventDefault();
    let type = '';
    let radioTarget:any;
    if(e.target[2].checked){
      type = e.target[2].value;
      radioTarget = e.target[2];
    } else if(e.target[3].checked){
      type = e.target[3].value;
      radioTarget = e.target[3];
    }
    let toSubmit = true;
    const data = {
      title: e.target[0].value,
      project: e.target[1].files[0],
      type: type,
      description:e.target[4].value,
    }
    if(data.title.trim() === '' || data.type.trim() === '' || data.description.trim() === ''){
      toSubmit = false;
    }
    if(data.project === undefined){
      toSubmit = false;
    }
    if(toSubmit){
      //mutate data to formData
      const postData = new FormData();
      postData.append("title", data.title);
      postData.append("description", data.description);
      postData.append("photo", data.project);
      postData.append("type", data.type);

      this._projectService.PostProject(postData)
      .subscribe(
        data => {
          if(data.status === 'success'){
            alert('Project Posted Successfully');
            e.target[0].value = ''
            e.target[1].value = ''
            radioTarget.checked = false;
            e.target[4].value = ''
          } else {
            alert('Something went wrong')
          }

        }
      );
    } else {
      alert('Please complete every field')

    }
  }


}
