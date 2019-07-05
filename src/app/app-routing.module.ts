import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostEditComponent} from "./components/post-edit/post-edit.component";
import {PostShowComponent} from "./components/post-show/post-show.component";
import {PostListComponent} from "./components/post-list/post-list.component";
import {PostAddComponent} from "./components/post-add/post-add.component";


const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      { path: 'add', component: PostAddComponent },
      { path: 'show/:id', component: PostShowComponent },
      { path: 'update/:id', component: PostEditComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
