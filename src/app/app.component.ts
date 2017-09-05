import { Component } from '@angular/core';
import { Note } from './note';
import { Category } from './category';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoriesService]
})

export class AppComponent {
  title = 'Angular4 Notes';

  constructor(private categoryService: CategoriesService){}

  notes: Note[] = [
    { id: 1, title: '1st note', content: 'this is the first note', category: 1, created: '2017-09-03T15:29:24.034Z'},
    { id: 2, title: '2nd note', content: 'this is the second note', category: 2, created: '2017-09-04T09:10:24.034Z'},
    { id: 3, title: '3rd note with a very long title', content: 'this is the third note', category: 3, created: '2017-09-04T12:32:24.034Z'},
  ];
  activeNote: Note;

  selectNote = (note) => {
    this.activeNote = note;
  }

  getCategory = (note) => {
    return this.categoryService.getCategory(note.category);
  }

  // onNoteCreated(event) {
  //   this.notes.push(event.note);
  // }

}
