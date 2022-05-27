import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {
  constructor(private auth:AngularFireAuth,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var promise = new Promise<boolean>((resolve, reject) => {
        this.auth.authState.subscribe(user=>{
          if(user && user.email=='zahernajib77@gmail.com'  ){
            resolve(true);
          }
          else{
            this.router.navigate(['login']);
            resolve(false);
          }
        })
      });
      return promise;
  }
  
}
