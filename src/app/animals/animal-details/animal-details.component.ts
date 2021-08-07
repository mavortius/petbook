import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Animal } from '../animal';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css'],
})
export class AnimalDetailsComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalsService.findById(this.animalId);
  }

  like(): void {
    this.animalsService.like(this.animalId).subscribe((response) => {
      if (response) {
        this.animal$ = this.animalsService.findById(this.animalId);
      }
    });
  }

  remove(): void {
    this.animalsService.remove(this.animalId).subscribe(
      () => this.router.navigate(['/animals']),
      (error) => console.log(error)
    );
  }
}
