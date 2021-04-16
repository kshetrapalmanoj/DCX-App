import { ServicesService } from './../services.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './../../message.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
message=false
  // message=""
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private messageservice:MessageService,private http:HttpClient, private contact: ServicesService) {//dependency injection
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phone:['',Validators.required],
      location:['', Validators.required],
      website:['', Validators.required],
      budget:['',Validators.required],
      startDate:['',Validators.required],
      pages:['',Validators.required],
      color:['',Validators.required]
   });
 }


 onSubmit(FormData) {
  console.log(FormData)
  this.contact.PostMessage(FormData)
    .subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
      console.log(response)

    }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })
    this.message=true;
}

  ngOnInit(): void {
    // this.messageservice.addMessage('Welcome to Contact Page');
  }

}
