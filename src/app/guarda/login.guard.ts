import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servico/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private as:  AuthService,
    private routerControl: Router
  ){}

  canActivate(): Promise<boolean>{
    return new Promise( results => {
      this.as.getAuth().onAuthStateChanged(user => {
        if(user) this.routerControl.navigate(['footer']);
        results(!user ? true: false)
      })
    })
  }
  
}
