import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { DevelopersService } from './developers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private developerService: DevelopersService, private snack: MatSnackBar) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    this.developerService.getName().subscribe((data) => {

      if (expectedRole !== data.full_name.group) {
        console.log(data)
        this.snack.open('You are not allowed to acess this page!','Ok')
        this.router.navigate(['dashboard']);
        return false;
      } else {
        return true;
      }
    })
    return true;
  }
}
