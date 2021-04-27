import { Component, OnInit } from '@angular/core';
import {SignUpService} from './../../services/sign-up.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
FullName:any;
email:any;
password:any;
registerForm: any;
submitted = false;
role:any="user";
serverErrorMessages:any;
showSuccessMessage:any

  constructor(private myService: SignUpService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:['user']
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
      .addService(
        this.FullName,
        this.email,
        this.password,
        this.role
    )
      .subscribe( (res:any)  =>{


        this.showSuccessMessage=true
        setTimeout(()=>this.showSuccessMessage=false,4000)
      this.router.navigateByUrl('/login')

      },
            err =>{
              console.log(err.error)
              this.serverErrorMessages=err.error.error

            })
  }

}
