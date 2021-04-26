import { Component, OnInit } from '@angular/core';
import {RecetteService} from './../../services/recette.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {UserService} from './../../services/user.service'


@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  myArray: any = [];
  file: any;
  categorie:any
  serverErrorMessages:any;
  userDetails:any;
  rates:any;
   recettes:any=[]
  constructor(private myService: RecetteService,private userService:UserService,private sanitizer: DomSanitizer, private router: Router
    ) { }

  ngOnInit(): void {
    this.myService.getServiceRates().subscribe((res:any)=>{
      this.rates=res
      console.log(this.rates)
    })
   this.getRecette()
   this.userService.getUserProfile().subscribe((data:any)=>{
    this.userDetails=data.user
    console.log(this.userDetails.role)
  })


  }
  getfile(f: any) {
    this.file = '';
    this.file = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/uploads/recettes/' + f
    );
    console.log(f);

  }
  deleteRecette(id: string) {
    console.log(id);

    this.myService
      .deleteService(id)

      .subscribe((data) => {
        console.log(data)
        return this.getRecette();
      });
  }
  getRecette(){

    this.myService.getService().subscribe((data:any) => {
      console.log(data);
      this.myArray = data;

      this.recettes = this.myArray.map((recette: any) => {
        var sum = 0;
         var nbr=0

    this.rates.map((rate: any) => {
      if(rate.Id_recette == recette.Id_recette){
        sum = sum +Number( rate.rates)
        nbr=nbr+1

      }

    })

    recette['averagerate'] = (sum /nbr).toFixed(1);
    return recette;
  })
  .sort(function (a: any, b: any) {
    if (a.averagerate === 'NaN') {
      return 1;
    } else if (b.averagerate === 'NaN') {
      return -1;
    } else {
      return b.averagerate - a.averagerate;
    }
  });
 console.log(this.myArray)
    })

  }


  getrecette(id:any){
    this.router.navigate(['details',  { id: id }]).then(() => {
      location.reload();
    });
  }

}
