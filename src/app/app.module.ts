import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostShowComponent} from "./components/post-show/post-show.component";
import { PostAddComponent } from "./components/post-add/post-add.component";
import { PostEditComponent } from "./components/post-edit/post-edit.component";

import { PostService } from './services/post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostShowComponent,
    PostAddComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
