import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/message.service';
import { AuthLoginService } from '../auth-login.service';
import {developer} from '.././developers';
import {DevelopersService} from '.././developers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  message=""

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private authService: AuthLoginService,public messageService: MessageService,private developerService:DevelopersService) { }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.loginDeveloper(this.loginForm.value).subscribe(result => {
        console.log("Logged in successfully!")
        console.log('Result',result);
        localStorage.setItem('token', result);
        this.router.navigate(['dashboard']);

      }, error => {
        this.message = error.error.message;
        // console.log(error);
      });
    }

  }
  developerForm:FormGroup;
  group=['Developer'];
  message1=false;
  submitted:boolean
  message2=""

  developers:developer={full_name:'',email:'',password:'',group:''};


  onSubmit1():void{
    console.log("Developer Details:",this.developers);

    this.developerService.addDevelopers(this.developers).subscribe(data => {
      console.log(data);
      this.message1=true;
      this.message2="Developer Added successfully!"
    },error=>{
      this.message = error.error.message;
    },
    );

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password: ['', [Validators.required]]
    })

    this.developerForm=this.fb.group({
      full_name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password:['',[Validators.required]],
      groupSelected:['',Validators.required]
    })
  }

}
