import { MessageService } from 'src/message.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '.././developers.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  full_name: String = "";
  constructor(private developerService: DevelopersService, private router: Router,private fb: FormBuilder,private messageservice:MessageService) { this.createForm();}
  getName(): void {
    this.developerService.getName().subscribe(data => {
      this.full_name = data.full_name.full_name;
      console.log(`Logged in as ${this.full_name}`)
    },
      error => {
        this.router.navigate(['login'])
      }
    )
  }


  angForm: FormGroup;

  createForm() {
   this.angForm = this.fb.group({//angForm is the formgroup name given in html form tag
      name: ['', Validators.required ],//formControlNames name and email
      email: ['', Validators.required ],
   });
 }
 getMessage()
 {
   return this.messageservice.messages;
 }
 done()
 {
   console.log(this.angForm.value);
   this.messageservice.addMessage('Data Submitted')
 }
 reset()
 {
   this.messageservice.clear()

   this.messageservice.addMessage('Just cleared the message')
   console.log('Cleared all the messages')
 }
  ngOnInit(): void {
    // this.messageservice.addMessage('Welcome to Home Page');
    this.getName();
  }



}
