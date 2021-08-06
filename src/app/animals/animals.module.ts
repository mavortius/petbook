import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { AnimalPhotoGridComponent } from './animal-photo-grid/animal-photo-grid.component';

@NgModule({
  declarations: [AnimalListComponent, AnimalComponent, AnimalPhotoGridComponent],
  imports: [CommonModule, AnimalsRoutingModule, CardModule],
})
export class AnimalsModule {}
