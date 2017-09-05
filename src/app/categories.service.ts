import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable()
export class CategoriesService {
	list: Category[] = [
    { id: 1, name: 'Home', color: 'success'},
    { id: 2, name: 'Work', color: 'danger'},
    { id: 3, name: 'ToDo', color: 'warning'},
    { id: 4, name: 'Done', color: 'light'},
    { id: 5, name: 'Important', color: 'info'},
    { id: 6, name: 'Ideas', color: 'dark'},
    { id: 7, name: 'Shopping', color: 'secondary'},
  ];

  constructor() { 
  }

  getCategories = () =>{
    return this.list;
  }

  getCategory = (id) => {
    return this.list.find( x => x.id === id);
  }

  setCategory = (category) => {

  }

  addCategory = (newCategory) => {
    this.list.push(newCategory);
  }

}
