import { Component, OnInit } from '@angular/core';
import {UserService} from './../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  obj:any;
  contactForm:any;
  submitted:any;
  showSuccessMessage:any
  serverErrorMessages:any
  constructor(private myService:UserService,private formBuilder: FormBuilder) { }

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
        console.log('mail sent', data);
        location.reload()
   });
  // display form values on success
}

}



