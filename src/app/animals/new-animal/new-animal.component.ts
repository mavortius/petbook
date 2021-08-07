import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AnimalsService } from '../animals.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css'],
})
export class NewAnimalComponent implements OnInit {
  formAnimal!: FormGroup;
  imageFile!: File;
  previewPhoto!: string;
  percentCompleted = 0;

  constructor(
    private animalsService: AnimalsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formAnimal = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload(): void {
    const allowComments = this.formAnimal.get('allowComments')?.value ?? false;
    const description = this.formAnimal.get('description')?.value ?? '';
    this.animalsService
      .upload(description, allowComments, this.imageFile)
      .pipe(finalize(() => this.router.navigate(['animals'])))
      .subscribe(
        (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentCompleted = Math.round(100 * (event.loaded / total));
          }
        },
        (error) => console.log(error)
      );
  }

  savePhoto(target: any): void {
    const [file] = target?.files;
    this.imageFile = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.previewPhoto = event.target.result);
    reader.readAsDataURL(file);
  }
}
