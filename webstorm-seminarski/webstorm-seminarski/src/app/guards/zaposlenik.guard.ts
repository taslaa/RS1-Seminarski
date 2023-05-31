import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {KorisnikService} from "../servisi/korisnik.service";

@Injectable({
  providedIn: 'root'
})
export class ZaposlenikGuard implements CanActivate {
  constructor(private korisnikService : KorisnikService, private  router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(this.korisnikService.isUserZaposlenik())
    return true;

    this.router.navigate(["forbidden"]);
    return false;
  }

}
