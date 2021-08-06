import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  private sourceUrl = '';

  @Input()
  imageDescription = '';

  @Input()
  set imageUrl(url: string) {
    if (url.startsWith('data')) {
      this.sourceUrl = url;
    } else {
      this.sourceUrl = `${environment.apiUrl}/imgs/${url}`;
    }
  }

  get imageUrl(): string {
    return this.sourceUrl;
  }

  constructor() {}

  ngOnInit(): void {}
}
