import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {developer} from '../../developers';
import {DevelopersService} from '../../developers.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-developer.component.html',
  styleUrls: ['./update-developer.component.css']
})
export class UpdateDeveloperComponent implements OnInit {

  developerForm:FormGroup;
  group=['Admin','Registered'];
  message="";

  developers?:developer={full_name:'',email:'',password:'',group:''};

  constructor(private fb:FormBuilder, private developerService:DevelopersService) { }
  onSubmit():void{
    console.log(this.developerForm.value);
    this.developerService.updateDevelopers(this.developers).subscribe((data) => {
      console.log(data);
      this.message = "Developer Updated Sucessfully!";
    }
    );

  }

  ngOnInit(): void {
    this.developerForm=this.fb.group({
      full_name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      groupSelected:['',Validators.required]
    })
  }
}
