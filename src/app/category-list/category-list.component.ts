import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
 
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoriesService]
})
export class CategoryListComponent {
  categories: Category[];
  currentId: number;

  constructor(private categoryService: CategoriesService) {
    this.categories = this.categoryService.getCategories();
    this.currentId = this.categories.map( el => el.id )
                                    .reduce( (max, cur) => Math.max( max, cur ), 0 ) + 1;
  }

  addCategory = () => {
    const newCat: Category = {id: this.currentId++, name: 'unnamed', color: 'primary' };
    this.categories.push(newCat);
  }

  removeCategory = (cat:Category) => {
    const i = this.categories.indexOf(cat);
    if (i !== -1) {
        this.categories.splice(i, 1);
    }
  }
}
