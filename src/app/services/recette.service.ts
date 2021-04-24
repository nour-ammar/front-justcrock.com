import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
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



  deleteService(id: String) {
    return this.http.delete('http://localhost:3000/api/recette/' + id);
  }
  addService (
    titre: string,
    description: string,
    pdf: any,
    image: any,
    categorie:any
   ){
    const body = new FormData();
    body.append('titre', titre);
    body.append('description', description);
    body.append('file', pdf);
    body.append('file', image);
    body.append('categorie', categorie);


    return this.http.post(this.urlApi, body);
   }
   getrecetteById(id: string) {
    return this.http.get('http://localhost:3000/api/recette/' + id);
  }
  getServiceComments(id:any){
    return this.http.get('http://localhost:3000/api/comment/' + id);

  }
  addServiceComment(idUser:any,comment:any,idrecette:any){
    const body={ commentaire:comment, UserId:idUser,Id_recette:idrecette}
    return this.http.post('http://localhost:3000/api/comment/addComment',body);

  }
  deleteServiceComment(id:any){
    return this.http.delete('http://localhost:3000/api/comment/' + id);

  }
  editServiceComment(commentaire:any,id:any,idrecette:any,userId:any){
   const body={
    commentaire:commentaire,
    id:id,
    Id_recette:idrecette,
    UserId:userId
    }

    return this.http.put('http://localhost:3000/api/comment/editComment',body);


  }
}
