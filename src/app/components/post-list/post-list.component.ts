import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
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
      public postService: PostService,
      public dialog: MatDialog
  ) { }

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
  removePostDirect(post) {
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
