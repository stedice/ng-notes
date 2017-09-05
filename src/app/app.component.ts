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
  currentId: number;

  notes: Note[] = [
    { id: 1, title: '1st note', content: 'this is the first note', category: 1, created: '2017-09-03T15:29:24.034Z'},
    { id: 2, title: '2nd note', content: 'this is the second note', category: 2, created: '2017-09-04T09:10:24.034Z'},
    { id: 3, title: '3rd note with a very long title', content: 'this is the third note', category: 3, created: '2017-09-04T12:32:24.034Z'},
  ];
  activeNote: Note;

  constructor(private categoryService: CategoriesService){
    this.currentId = this.notes.map( el => el.id )
                                    .reduce( (max, cur) => Math.max( max, cur ), 0 ) + 1;
  }

  selectNote = (note) => {
    this.activeNote = note;
  }

  getCategory = (note) => {
    return this.categoryService.getCategory(note.category);
  }

  getCategoryName = (note) => {
    return this.categoryService.getCategory(note.category).name;
  }

  addNote = () => {
    const date = new Date().toJSON();
    const newNote: Note = {id: this.currentId++, title: 'untitled', content: '...', category: 1, created: date};
    this.notes.push(newNote);
  }

  removeNote = (note:Note = this.activeNote) => {
    const i = this.notes.indexOf(note);
    if (i !== -1) {
        this.notes.splice(i, 1);
    }
    this.activeNote = undefined;
  }

}
