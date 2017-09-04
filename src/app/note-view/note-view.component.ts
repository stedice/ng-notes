import { Component, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})

export class NoteViewComponent {
  @Input() note: Note;
  editTitle: Boolean = false;
  editContent: Boolean = false;

  setEditTitle(value) {
    this.editTitle = value;
    this.editContent = !value || false;
  }

  setEditContent(value) {
    this.editContent = value;
    this.editTitle = !value || false;
  }

}
