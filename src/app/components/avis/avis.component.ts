import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RecetteService } from 'src/app/services/recette.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
avis:any
users:any
  constructor(private myService: RecetteService,private userService:UserService,private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
this.myService.getAvisService().subscribe((data)=>{
  this.avis=data
  console.log(this.avis)
})
this.userService.getAllService().subscribe((res:any)=>{
  this.users=res
  console.log('users',this.users)
})
  }

}
