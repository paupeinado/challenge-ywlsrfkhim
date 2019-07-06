import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import {Post} from "../../services/post/post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  postList: any = [];
  search: string;

  constructor(
      public postService: PostService
  ) {
    // this.search = "erli";
  }

  ngOnInit() {
    this.loadPosts();
  }

  // Load the Post collection
  loadPosts() {
    return this.postService.ListPost().subscribe((data: {}) => {
      this.postList = data;
    });
  }

  // Remove the Post
  removePost(post) {
    const index = this.postList.map(item => item.id).indexOf(post.id);

    return this.postService.DeletePost(post.id).subscribe(res => {
      this.postList.splice(index, 1);
    });
  }

  onActivate(componentReference) {
    if (componentReference.hasOwnProperty('created')) {
      componentReference.created.subscribe((newPost) => {
        this.postList.push(newPost);
      });
    }
  }

  trackByFn(post) {
    return post.id;
  }
}
