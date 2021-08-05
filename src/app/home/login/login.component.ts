import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private authentication: AuthenticationService) {}

  ngOnInit(): void {}

  login(): void {
    this.authentication.authenticate(this.username, this.password).subscribe(
      (response) => console.log('Autenticado com sucesso!'),
      (error) => {
        alert('Usuário ou senha inválidos!');
        console.error(error);
      }
    );
  }
}
