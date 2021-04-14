import { MessageService } from 'src/message.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private messageservice:MessageService){//messageservice dependency injection
   this.createForm();
 }

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
  }



}
