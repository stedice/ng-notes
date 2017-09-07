import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteViewComponent } from './components/note-view/note-view.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteViewComponent,
    CategoryListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
