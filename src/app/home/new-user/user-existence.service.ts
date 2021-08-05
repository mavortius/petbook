import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserExistenceService {
  constructor(private newUserService: NewUserService) {}

  // tslint:disable-next-line:typedef
  userAlreadyExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((username) =>
          this.newUserService.checkExistingUser(username)
        ),
        map((exists) => (exists ? { userAlreadyExists: true } : null)),
        first()
      );
    };
  }
}
