import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {
  members:any=[];
  constructor() { }

  ngOnInit(): void {
    this.members=[{name:"Nathalie Lopez",avis:"les amis ,il y a tout ce que vous chercher frnachement c'est formidable ",image:"https://img.freepik.com/photos-gratuite/sympathique-femme-souriante-recherche-plaisir-avant_176420-20779.jpg?size=626&ext=jpg"}, {name:"Ahmed Lotfi",avis:"j'aime trop le concepts j'avais du temps à chercher une application pareil", image:"https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"}, {name:"Karim Semoul" , avis:"je regrette jamais d'avoir visiter votre site c'est trés utile" , image:"https://lh3.googleusercontent.com/proxy/UwEsLyhTOyCEeeLoTbsC2f6G8ZS9W6v_uPsrQnokxdTgdA0aa-_n4OFacNXsD4okDHJEG3N0ZUXOEyQkaS3GC8SR4F6AlNhumcdn0tfAerqD"} , {name:"Naima Chreszn",avis:"super, franchement j'ai essayé vos recettes je recommends." , image:"https://i.pinimg.com/originals/28/cd/de/28cddecac42ca4a2379df57d91f19950.jpg"}, {name:"Tania Rodriguez",avis:"cool!! really it's an amazing site thank you for the idea", image:"https://media.istockphoto.com/photos/confident-businesswoman-over-gray-background-picture-id682897825?k=6&m=682897825&s=612x612&w=0&h=5H83yEz_b9qOdwxZVKlXQXH_rf4vfyDUig3DUG30u9Y="} , {name:"Mouhamed Brahim", avis:"merci pour le contenue .. trés impressionant",image:"https://images.squarespace-cdn.com/content/v1/526c1f5ce4b023d8f09340d7/1539361832020-NCX1G5AMK0VRQAA09CDL/ke17ZwdGBToddI8pDm48kFXbnozmmgWQk9QaXD5cjJN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBamDslz0dZPrZ-HD_QIQdN_1tj0nA2po57vGaTFRnKlJ/ismael-seck-quebec-solidaire-2018-montreal-portrait-professionnel-corporatif-studio.jpg"}]
  }

}
