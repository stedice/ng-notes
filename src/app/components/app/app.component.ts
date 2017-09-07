import { Component } from '@angular/core';
import { Note } from '../../classes/note';
import { NoteService } from '../../services/note.service';
import { Category } from '../../classes/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NoteService, CategoryService]
})

export class AppComponent {
  title = 'Angular4 Notes';
  notes: Note[];
  activeNote: Note;
  categories: Category[];

  constructor(private noteService: NoteService, private categoryService: CategoryService){
    this.notes = this.getNotes();                          
    this.categories = this.getCategories();
  }

  getNotes = () => {
    return this.noteService.getNotes();
  }

  selectNote = (note) => {
    this.activeNote = note;
  }

  addNote = () => {
    this.activeNote = this.noteService.addNote();;
  }

  removeNote = (note:Note = this.activeNote) => {
    this.notes = this.noteService.removeNote(note);;
    this.activeNote = undefined;
  }

  removeAllNotes = (cat:Category) => {
    this.notes.forEach((note) =>{
      if(note.category === cat.id) {
        this.noteService.removeNote(note);
      }
    });
  }

  getCategories = () => {
    return this.categoryService.getCategories();
  }

  getCategory = (note) : Category => {
    return this.categories.find(x => x.id === note.category);
  }

  updateCategories = (event) => {
    this.categories = event.categories;
  }


}
