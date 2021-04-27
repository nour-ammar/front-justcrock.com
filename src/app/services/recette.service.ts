import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  recettes: any;
  http: HttpClient;
  urlApi = 'http://localhost:3000/api/recette';

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  getService() {
    return this.http.get(this.urlApi);
  }
  editService(
    description: string,
    ingredient:string,
    preparation:string,
    temps_Preparation: any,
    temps_cuisson: any,
    nombre_personne: any,
    image: any,
    id: any
  ) {
    const body = new FormData();
    body.append('Description', description);
    body.append('Ingredient', ingredient);
    body.append('Preparation', preparation);
    body.append('temps_Preparation', temps_Preparation);
    body.append('temps_cuisson', temps_cuisson);
    body.append('nombre_personne', nombre_personne);
    body.append('Photo', image);

    return this.http.put('http://localhost:3000/api/recette/' + id, body);
  }

  deleteService(id: String) {
    return this.http.delete('http://localhost:3000/api/recette/' + id);
  }
  addService(
    description: string,
    ingredient:string,
    preparation:string,
    temps_Preparation: any,
    temps_cuisson: any,
    nombre_personne: any,
    image: any
  ) {
    const body = new FormData();
    body.append('Description', description);
    body.append('Ingredient', ingredient);
    body.append('Preparation', preparation);
    body.append('temps_Preparation', temps_Preparation);
    body.append('temps_cuisson', temps_cuisson);
    body.append('nombre_personne', nombre_personne);
    body.append('Photo', image);

    return this.http.post(this.urlApi, body);
  }
  getrecetteById(id: string) {
    return this.http.get('http://localhost:3000/api/recette/' + id);
  }
  getServiceComments(id: any) {
    return this.http.get('http://localhost:3000/api/comment/' + id);
  }
  addServiceComment(idUser: any, comment: any, idrecette: any) {
    const body = {
      commentaire: comment,
      UserId: idUser,
      Id_recette: idrecette,
    };
    return this.http.post('http://localhost:3000/api/comment/addComment', body);
  }
  deleteServiceComment(id: any) {
    return this.http.delete('http://localhost:3000/api/comment/' + id);
  }
  editServiceComment(commentaire: any, id: any, idrecette: any, userId: any) {
    const body = {
      commentaire: commentaire,
      id: id,
      Id_recette: idrecette,
      UserId: userId,
    };

    return this.http.put('http://localhost:3000/api/comment/editComment', body);
  }
  editRateService(id:any,rateId:any,rateid:any,rates:any){
    const  body={
       id:rateid,
      Id_recette:id,
      UserId:rateId,
      rates:rates
  }
    return this.http.put(`http://localhost:3000/api/rate/editrate`,  body)

  }

  addRateService(id:any,raterId:any,rates:any){
  const  body={
        Id_recette:id,
        UserId:raterId,
        rates:rates
    }
    return this.http.post(`http://localhost:3000/api/rate/addrate`,body)

  }
  getRateService(id:any){
    return this.http.get('http://localhost:3000/api/rate/' + id);

  }
  getServiceRates(){
    return this.http.get('http://localhost:3000/api/rate/' );

  }
  addAvisService(body:any){
    return this.http.post('http://localhost:3000/api/avis/addAvis',body );

  }
  getAvisService(){
    return this.http.get('http://localhost:3000/api/avis/');

  }
  editAvisService(body:any){
    return this.http.put('http://localhost:3000/api/avis/editAvis',body );

  }
}
