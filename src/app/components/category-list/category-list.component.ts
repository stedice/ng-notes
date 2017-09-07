import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Category } from '../../classes/category';
import { CategoryService } from '../../services/category.service';
 
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryService]
})
export class CategoryListComponent {
  @Input() removeAllNotes: Function;
  @Output() categoriesUpdated = new EventEmitter();
  categories: Category[];
  currentId: number;
  catSelected: Category;

  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.getCategories();
    this.currentId = this.categories.map( el => el.id )
                                    .reduce( (max, cur) => Math.max( max, cur ), 0 ) + 1;
  }

  addCategory = () => {
    this.categoryService.addCategory()
  }

  removeCategory = (cat:Category) => {
    //delete all notes in category
    if(cat && cat.id !==1) {  //don't remove category with id=1
      this.removeAllNotes(cat)
      this.categoryService.removeCategory(cat);
    }
  }

  selectCategory = (cat:Category) => {
    this.catSelected = cat;
  }

  save = () => {
    this.categoriesUpdated.emit({ categories: this.categories });
  }
}
