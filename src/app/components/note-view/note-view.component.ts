import { Component, Input } from '@angular/core';
import { Note } from '../../classes/note';
import { Category } from '../../classes/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css'],
  providers: [CategoriesService]
})

export class NoteViewComponent {
  @Input() note: Note;
  editTitle: Boolean = false;
  editContent: Boolean = false;
  categories: Category[];

  constructor(private categoryService: CategoriesService) {
    this.categories = this.categoryService.getCategories();
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
    return this.categoryService.getCategory(note.category);
  }

}
