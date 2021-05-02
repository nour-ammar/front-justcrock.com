import { Component, OnInit } from '@angular/core';
import {RecetteService} from './../../services/recette.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from './../../services/user.service'
import { Profile } from './user-profile.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
@Injectable()
export class RecettesComponent implements OnInit {
  myArray: any = [];
  file: any;
  categorie:any
  serverErrorMessages:any;
  userDetails:Profile;
  rates:any;
   recettes:any=[];
   p:any;


  constructor(config: NgbModalConfig, private modalService: NgbModal ,private titleService: Title,
    private metaTagService: Meta,private myService: RecetteService,private userService:UserService,private sanitizer: DomSanitizer, private router: Router
    ,private route: ActivatedRoute) {
      this.myService.getServiceRates().subscribe((res:any)=>{
        this.rates=res
      })
      config.backdrop = 'static';
      config.keyboard = false;
      this.userDetails = new Profile();

    }

    async ngOnInit(): Promise<void> {
      this.rates= await this.route.snapshot.data
    this.titleService.setTitle('toutes les recettes');
    this.metaTagService.updateTag({
      name:'description', content:'des recettes halal - food halal '
    });
    this.metaTagService.updateTag({
      name:'keywords', content:'recttes recipe halal islam food pates salades gateaux salés sucrés'
    })
    this.myService.getServiceRates().subscribe((res:any)=>{
      this.rates=res
    })
    // this.getRecette()
    this.myService.getService().subscribe((data:any) => {
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
  //  this.getRecette()
})

   this.userService.getUserProfile().subscribe((data:any)=>{
    this.userDetails=data.user
  })


  }
  open(content:any) {
    this.modalService.open(content);
  }

  deleteRecette(id: string) {
    console.log(id);

    this.myService
      .deleteService(id)
      .subscribe((data) => {
        console.log(data)
        this.getRecette();
        location.reload();
        // this.router.navigate(['recette'])
       })
  }
  getRecette(){

    this.myService.getService().subscribe((data:any) => {
      this.myArray = data;
    })

  }


  getrecette(id:any){
    this.router.navigate(['details',  { id: id }]).then(() => {
      location.reload();
    });
  }

}
