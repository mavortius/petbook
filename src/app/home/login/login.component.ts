import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authentication.authenticate(this.username, this.password).subscribe(
      (response) => {
        console.log('User authenticated', response.body);
        this.router.navigate(['animals']);
      },
      (error) => {
        alert('Usuário ou senha inválidos!');
        console.error(error);
      }
    );
  }
}
