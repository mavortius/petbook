import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NewUserService } from './new-user.service';
import NewUser from './new-user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: NewUserService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  register(): void {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser);
  }
}
