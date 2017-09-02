import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteViewComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
