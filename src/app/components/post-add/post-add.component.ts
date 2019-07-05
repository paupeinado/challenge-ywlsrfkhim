import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PostService } from "../../services/post/post.service";
import { Post } from "../../services/post/post";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  isActive: boolean;
  newPostForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      public postService: PostService
  ) { }

  buildForm() {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      lat: ['', Validators.required],
      long: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  createPost() {
    const post = new Post(this.newPostForm.value);
    this.postService.CreatePost(post.toJson()).subscribe(val => {
      // this.ngZone.run(() => this.router.navigateByUrl('/'));
    });
  }

  ngOnInit() {
    this.buildForm();
    this.isActive = true;
  }
}
