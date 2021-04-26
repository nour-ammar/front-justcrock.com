import { Component, OnInit } from '@angular/core';
import {UserService} from './../../services/user.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-reset-p',
  templateUrl: './reset-p.component.html',
  styleUrls: ['./reset-p.component.css']
})
export class ResetPComponent implements OnInit {
  email:any;
  registerForm: any;
  submitted = false;
  serverErrorMessages:any;
  showSuccessMessage:any
    constructor(private myService: UserService,private formBuilder: FormBuilder,private router:Router) { }

    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    });
    }

      get f() { return this.registerForm.controls; }

      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.myService
        .resetService(this.registerForm.value)
        .subscribe( (res:any)  =>{

          this.showSuccessMessage=true
          setTimeout(()=>this.showSuccessMessage=false,4000)
          // this.showSuccessMessage="email envoyer verifier votre email"


        },
              err =>{
                 this.serverErrorMessages=err.error.error
                 console.log(err)
              })
    }

  }
