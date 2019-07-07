import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from "@agm/core";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostShowComponent} from "./components/post-show/post-show.component";
import { PostAddComponent } from "./components/post-add/post-add.component";
import { PostEditComponent } from "./components/post-edit/post-edit.component";
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ContainsTextPipe } from "./pipes/contains-text/contains-text.pipe";

import { PostService } from './services/post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostShowComponent,
    PostAddComponent,
    PostEditComponent,
    ContainsTextPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6CtlpcKI70M1ScgiyWYdCHzMvR2zPIrg'
    }),
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ConfirmationDialogComponent],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
