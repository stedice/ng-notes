import { Injectable } from '@angular/core';
import { Note } from '../classes/note';

@Injectable()
export class NoteService {
	list: Note[] = [
    { 
    	id: 1, 
      title: '1st note', 
      content: 'this is the first note', 
      category: 1, 
      created: '2017-09-03T15:29:24.034Z'
    }, { 
      id: 2, 
      title: '2nd note', 
      content: 'this is the second note', 
      category: 2, 
      created: '2017-09-04T09:10:24.034Z'
    }, { 
      id: 3, 
      title: '3rd note with a very long title (it is very long indeed)', 
      content: 'this is the third note', 
      category: 3, 
      created: '2017-09-04T12:32:24.034Z'
    },
  ];
  currentId: number;

  constructor() { 
    this.currentId = this.list.map( el => el.id )
                               .reduce( (max, cur) => Math.max( max, cur ), 0 ) + 1;
  }

  getNotes = () =>{
    return this.list;
  }

  getNote = (id) => {
    return this.list.find( x => x.id === id);
  }

  addNote = () => {
    const date = new Date().toJSON();
    const newNote: Note = {id: this.currentId++, title: 'untitled', content: '...', category: 1, created: date};
    this.list.push(newNote);
    return newNote;
  }

  removeNote = (note:Note) => {
    const i = this.list.indexOf(note);
    if (i !== -1) {
        this.list.splice(i, 1);
    }
    return this.list;
  }

}
