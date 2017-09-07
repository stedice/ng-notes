import { Component, Input } from '@angular/core';
import { Note } from '../../classes/note';
import { Category } from '../../classes/category';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})

export class NoteViewComponent {
  @Input() note: Note;
  @Input() categories: Category[];
  editTitle: Boolean = false;
  editContent: Boolean = false;

  constructor(){
  }

  setEditTitle = (value) => {
    this.editTitle = value;
    //this.editContent = !value || false;
    this.note.title = this.note.title || '[untitled]';
  }

  setEditContent = (value) => {
    this.editContent = value;
    //this.editTitle = !value || false;
    this.note.content = this.note.content || '[empty]';
  }

  getCategory = (note) => {
    return this.categories.find((x) => x.id === note.category);
  }

}
