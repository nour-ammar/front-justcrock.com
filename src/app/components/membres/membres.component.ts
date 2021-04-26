import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css'],
})
export class MembresComponent implements OnInit {
  members: any = [];
  constructor() {}

  ngOnInit(): void {
    this.members = [
      {
        name: 'Nathalie Lopez',
        avis:
          "les amis ,il y a tout ce que vous chercher frnachement c'est formidable ",
        image:
          'https://resize1.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/nutrition/regimes/mincir-age/perdre-du-poids-apres-45-ans/134287-2-fre-FR/perdre-du-poids-apres-45-ans.jpg',
      },
      {
        name: 'Ahmed Lotfi',
        avis:
          "j'aime trop le concepts j'avais du temps à chercher une application pareil",
        image:
          'https://www.encrenoire-corporate.com/images//galeries/portraits-corpo-nature/thumbs_500x500/portrait-corpo-nature@2x.jpg',
      },
      {
        name: 'Karim Semoul',
        avis: "je regrette jamais d'avoir visiter votre site c'est trés utile",
        image:
          'https://vibrancephoto.fr/2019/wp-content/uploads/2019/12/portrait-corporate-dirigeant-toulouse.jpg',
      },
      {
        name: 'Naima Chreszn',
        avis: "super, franchement j'ai essayé vos recettes je recommends.",
        image:
          'https://qph.fs.quoracdn.net/main-qimg-e59f99bb0140a517ea3a3acfea9eb5b5',
      },
      {
        name: 'Tania Rodriguez',
        avis: "cool!! really it's an amazing site thank you for the idea",
        image:
          'https://i.pinimg.com/originals/20/2c/31/202c3136104ca75d46e077e34c99e84f.png',
      },
      {
        name: 'Mouhamed Brahim',
        avis: 'merci pour le contenue .. trés impressionant',
        image:
          'https://kodak-express-paris2.com/wp-content/uploads/2017/08/homme-portrait-sourire.jpg',
      },
    ];
  }
}
