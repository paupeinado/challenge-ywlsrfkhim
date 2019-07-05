import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from "../../services/post/post.service";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})

export class PostEditComponent implements OnInit {

  updateIssueForm: FormGroup;

  constructor(
      private actRoute: ActivatedRoute,
      public postService: PostService,
      public fb: FormBuilder,
      private ngZone: NgZone,
      private router: Router
  ) {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.postService.GetPost(id).subscribe((data) => {
      this.updateIssueForm = this.fb.group({
        title: [data.title],
        content: [data.content],
        image_url: [data.imageUrl],
        lat: [data.lat],
        long: [data.long]
      });
    });
  }

  updateForm() {
    this.updateIssueForm = this.fb.group({
    });
  }

  submitForm() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.postService.UpdatePost(id, this.updateIssueForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/'));
    });
  }

  ngOnInit() {
    this.updateForm();
  }
}
