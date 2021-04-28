import { Component, OnInit } from '@angular/core';
import {UserService} from './../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  obj:any;
  contactForm:any;
  submitted:any;
  showSuccessMessage:any=false;
  serverErrorMessages:any
  constructor(private myService:UserService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
     this.contactForm = this.formBuilder.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
});
}

// convenience getter for easy access to form fields
get f() { return this.contactForm.controls; }
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.contactForm.invalid) {
      return;
  }
  this.obj={
   nom: this.contactForm.value.nom,
   email: this.contactForm.value.email,
   message: this.contactForm.value.message,
  }
  this.myService
      .sendService(this.obj)
      .subscribe((data) => {
        this.showSuccessMessage=true;
        setTimeout(()=>this.showSuccessMessage=false,4000)
        console.log('mail sent', data);
        this.router.navigate(['home'])

         });
  // display form values on success
}

}



