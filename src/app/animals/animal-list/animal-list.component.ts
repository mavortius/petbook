import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Animals } from '../animal';
import { UserService } from '../../authentication/user/user.service';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.animals$ = this.userService.getUser().pipe(
      switchMap((user) => {
        const username = user.name ?? '';
        return this.animalsService.getListForUser(username);
      })
    );
  }
}
