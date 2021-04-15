import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/message.service';
import { AuthLoginService } from '../auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  message=""

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private authService: AuthLoginService,public messageService: MessageService) { }

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

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password: ['', [Validators.required]]
    })
  }

}
