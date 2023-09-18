import { Injectable } from '@angular/core';
import { CanActivate, Router,  } from '@angular/router';
import { AuthService } from '../servico/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RotasGuard implements CanActivate {
  constructor(
    private as:  AuthService,
    private routerControl: Router
  ){}

  canActivate(): Promise<boolean>{
    return new Promise( results => {
      this.as.getAuth().onAuthStateChanged(user => {
        if(!user) this.routerControl.navigate(['']);
        results(user ? true: false)
      })
    })
   }


}
