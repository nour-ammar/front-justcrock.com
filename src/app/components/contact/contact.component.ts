import { Component, OnInit } from '@angular/core';
import {UserService} from './../../services/user.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model={
    email:'',
    message:'',
    nom:''
  }
  showSuccessMessage:any
  serverErrorMessages:any
  constructor(private myService:UserService,) { }

  ngOnInit(): void {

  }
  envoyer(){
this.myService.sendService(this.model).subscribe(


  (res:any)  =>{
    console.log('user added ',res)
    this.showSuccessMessage=true
    setTimeout(()=>this.showSuccessMessage=false,4000)
    this.model.email=""
    this.model.message=""
    this.model.nom=""},
  err =>{
    console.log(err)
    if(err.status=== 409)
     this.serverErrorMessages=err.error.message
     else
     this.serverErrorMessages='something went wrong .Please contact admin'
  }
)
  }
}
