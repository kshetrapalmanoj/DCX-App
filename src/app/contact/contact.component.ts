import { MessageService } from './../../message.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  angForm: FormGroup;
  constructor(private fb: FormBuilder,private messageservice:MessageService) {//dependency injection
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phone:['',Validators.required],
      location:['', Validators.required],
      website:['', Validators.required],
      budget:['',Validators.required]
   });
 }

  getMessage()
  {
    return this.messageservice.messages;
  }
  reset()
  {
    this.messageservice.clear()

    this.messageservice.addMessage('Just cleared the message')
    console.log('Cleared all the messages')
  }
  done()
  {
    console.log(this.angForm.value);
    this.messageservice.addMessage('Data Submitted')
  }
  ngOnInit(): void {
    this.messageservice.addMessage('Welcome to Contact Page');
  }

}
