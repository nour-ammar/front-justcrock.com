import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RecetteService } from './services/recette.service';

@Injectable({
  providedIn: 'root'
})
export class RecettesResolver implements Resolve<Observable<string>> {
  constructor(private readonly _api: RecetteService) {}

  async resolve(route: ActivatedRouteSnapshot) {
    const {id = null} = route.params;
    const items = await this._api.getAvisService();
    return items
  }
}
