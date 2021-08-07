import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MessageModule } from '../components/message/message.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, MessageModule],
  exports: [ReactiveFormsModule, MessageModule],
})
export class SharedModule {}
