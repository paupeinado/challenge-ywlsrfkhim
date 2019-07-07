import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from "../../services/post/post.service";
import { Post } from "../../services/post/post";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})

export class PostEditComponent implements OnInit {

  @Output() updated = new EventEmitter<Post>();

  postId: string;
  editPostForm: FormGroup;

  constructor(
      private actRoute: ActivatedRoute,
      public postService: PostService,
      public fb: FormBuilder,
      private ngZone: NgZone,
      private router: Router
  ) {
    this.editPostForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      lat: ['', Validators.required],
      long: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  updateForm() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.postId = id;

    this.postService.GetPost(id).subscribe((data) => {
      const post = new Post(data);

      this.editPostForm = this.fb.group({
        title: [post.title],
        content: [post.content],
        imageUrl: [post.imageUrl],
        lat: [post.lat],
        long: [post.long]
      });
    });
  }

  submitForm() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    const post = new Post(this.editPostForm.value);

    this.postService.UpdatePost(id, post).subscribe(data => {
      const updatedPpost = new Post(data);
      this.updated.emit(updatedPpost);
      this.ngZone.run(() => this.router.navigateByUrl('/show/' + id));
    });
  }

  ngOnInit() {
    this.updateForm();
  }
}
