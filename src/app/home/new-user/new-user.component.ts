import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import NewUser from './new-user';
import { NewUserService } from './new-user.service';
import { lowerCaseValidator } from './lower-case-validator';
import { UserExistenceService } from './user-existence.service';
import { usernamePasswordValidator } from './username-password-validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: NewUserService,
    private userExistenceService: UserExistenceService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: ['', lowerCaseValidator],
        password: [''],
      },
      {
        validators: usernamePasswordValidator,
      }
    );
  }

  register(): void {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.service.registerNewUser(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => console.log(error)
      );
    }
  }
}
