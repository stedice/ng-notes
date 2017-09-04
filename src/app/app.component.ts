import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4 Notes';

  notes: Note[] = [
    { id: 1, title: '1st note', content: 'this is the first note', category: 1, created: '2017-09-03T15:29:24.034Z'},
    { id: 2, title: '2nd note', content: 'this is the second note', category: 1, created: '2017-09-04T09:10:24.034Z'},
    { id: 3, title: '3rd note with a very long title', content: 'this is the third note', category: 1, created: '2017-09-04T12:32:24.034Z'},
  ];
  activeNote: Note;

  selectNote(note) {
    this.activeNote = note;
  }

  // onUserCreated(event) {
  //   this.users.push(event.user);
  // }

}
