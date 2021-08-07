import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { UserService } from '../../authentication/user/user.service';
import { Animals } from '../animal';
import { AnimalsService } from '../animals.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalListResolver implements Resolve<Animals> {
  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animals> | Promise<Animals> | Animals {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        const username = user.name ?? '';
        return this.animalsService.getListForUser(username);
      }),
      take(1)
    );
  }
}
