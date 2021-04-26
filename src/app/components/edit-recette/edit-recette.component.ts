import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RecetteService } from './../../services/recette.service';

@Component({
  selector: 'app-edit-recette',
  templateUrl: './edit-recette.component.html',
  styleUrls: ['./edit-recette.component.css'],
})
export class EditRecetteComponent implements OnInit {
  files: any = [];
  loginForm: any;
  submitted = false;
  id: any;
  constructor(
    private myservice: RecetteService,
    private router: Router,
    private activateroute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      temps_Préparation: ['', [Validators.required]],
      nombre_personne: ['', [Validators.required]],
      temps_cuisson: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id = this.activateroute.snapshot.params.id;
  }
  onSelectimage(event: any) {
    this.files.push(event.target.files[0]);
  }
  editrecette() {
    this.submitted = true;

    // stop here if form is invalid

    this.loginForm.image = this.files[0];
    console.log(this.loginForm.image);

    this.myservice
      .editService(

        this.loginForm.value.description,
        this.loginForm.value.temps_Préparation,
        this.loginForm.value.temps_cuisson,
        this.loginForm.value.nombre_personne,
        this.loginForm.image,
        this.id,
      )
      .subscribe((data) => {
        console.log(this.loginForm.image);
        console.log('recette updated', data);
      });
  }
}
