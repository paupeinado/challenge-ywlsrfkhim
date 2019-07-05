import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Post} from "../../services/post/post";
import {PostService} from "../../services/post/post.service";

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {

  post: Post;

  constructor(
      private actRoute: ActivatedRoute,
      public postService: PostService,
      private router: Router
  ) {

    // Subscribe to Router events and load Post when NavigationEnd
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.getPost();
      }
    });
  }

  getPost() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.postService.GetPost(id).subscribe(data => {
      this.post = new Post(data);
    });
  }


  ngOnInit() {
    this.getPost();
  }
}
