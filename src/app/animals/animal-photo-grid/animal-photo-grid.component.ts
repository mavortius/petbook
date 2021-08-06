import { Component, Input, OnInit } from '@angular/core';

import { Animals } from '../animal';

@Component({
  selector: 'app-animal-photo-grid',
  templateUrl: './animal-photo-grid.component.html',
  styleUrls: ['./animal-photo-grid.component.css'],
})
export class AnimalPhotoGridComponent implements OnInit {
  @Input()
  animals!: Animals;

  constructor() {}

  ngOnInit(): void {}
}
