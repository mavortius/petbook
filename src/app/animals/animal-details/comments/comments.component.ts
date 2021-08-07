import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Comments } from './comments';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.findById(this.id);
    this.commentForm = this.formBuilder.group({
      commentText: ['', Validators.maxLength(300)],
    });
  }

  publish(): void {
    const commentText = this.commentForm.get('commentText')?.value ?? '';
    this.comments$ = this.commentsService.add(this.id, commentText).pipe(
      switchMap(() => this.commentsService.findById(this.id)),
      tap(() => {
        this.commentForm.reset();
        alert('Comentário publicado com sucesso!');
      })
    );
  }
}
