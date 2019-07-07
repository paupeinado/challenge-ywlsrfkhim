import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { Post } from "../../services/post/post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  postList: Post[] = [];
  search: string;

  constructor(
      public postService: PostService,
      public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  // Load the Post collection
  loadPosts() {
    const self = this;
    return this.postService.ListPost().subscribe((data: Post[]) => {
      data.forEach((value) => {
        self.postList.push(new Post(value));
      });
    });
  }

  onActivate(componentReference) {
    if (componentReference.hasOwnProperty('created')) {
      /* Listen to Post created event */
      componentReference.created.subscribe((newPost) => {
        this.postList.push(newPost);
      });
    } else if (componentReference.hasOwnProperty('updated')) {
      /* Listen to Post updated event */
      componentReference.updated.subscribe((updatedPost) => {
        const foundIndex = this.postList.findIndex(x => x.id === updatedPost.id);
        this.postList[foundIndex] = updatedPost;
      });
    }
  }

  trackByFn(post) {
    return post.id;
  }

  // Remove the Post
  removePost(post: Post): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Are you sure to delete "' + post.title + '"?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.postList.map(item => item.id).indexOf(post.id);

        return this.postService.DeletePost(post.id).subscribe(res => {
          this.postList.splice(index, 1);
        });
      }
    });
  }
}
