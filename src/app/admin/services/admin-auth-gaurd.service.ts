import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminAuthGaurd implements CanActivate {

  constructor(
    private auth: AuthService,
    private userService: UserService) { }



  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
  }

}
