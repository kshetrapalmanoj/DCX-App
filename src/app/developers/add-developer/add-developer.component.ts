import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {developer} from '../../developers';
import {DevelopersService} from '../../developers.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloperComponent implements OnInit {
  developerForm:FormGroup;
  group=['A4','A5','B4'];
  message=false;
  submitted:boolean
  message1=""

  developers:developer={full_name:'',email:'',password:'',group:''};

  constructor(private fb:FormBuilder, private developerService:DevelopersService) { }

  onSubmit():void{
    console.log("Developer Details:",this.developers);

    this.developerService.addDevelopers(this.developers).subscribe(data => {
      console.log(data);
      this.message=true;
      this.message1="Developer Added successfully!"
      // this.developerForm.reset()
    },error=>{
      this.message = error.error.message;
    },


    );

  }

  ngOnInit(): void {
    this.developerForm=this.fb.group({
      full_name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password:['',[Validators.required]],
      groupSelected:['',Validators.required]
    })
  }

}
