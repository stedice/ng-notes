import { Injectable } from '@angular/core';
import { Category } from '../classes/category';

@Injectable()
export class CategoryService {
	list: Category[] = [
    { id: 1, name: 'Home', color: 'success'},
    { id: 2, name: 'Work', color: 'danger'},
    { id: 3, name: 'ToDo', color: 'info'},
    { id: 4, name: 'Done', color: 'dark'},
    { id: 5, name: 'Important', color: 'warning'},
    { id: 6, name: 'Ideas', color: 'secondary'},
  ];

  constructor() { 
  }

  getCategories = () =>{
    return this.list;
  }

  getCategory = (id) => {
    return this.list.find( x => x.id === id);
  }

  addCategory = (newCategory) => {
    this.list.push(newCategory);
  }

}
