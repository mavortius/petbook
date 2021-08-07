import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animals } from '../animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      () => (this.animals = this.activatedRoute.snapshot.data.animals)
    );
  }
}
