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
  currentId: number;


  constructor() { 
    this.currentId = this.list.map( el => el.id )
                              .reduce( (max, cur) => Math.max( max, cur ), 0 ) + 1;
  }

  getCategories = () =>{
    return this.list;
  }

  getCategory = (id) => {
    return this.list.find( x => x.id === id);
  }

  // addCategory = (newCategory) => {
  //   this.list.push(newCategory);
  // }


  addCategory = () => {
    const newCat: Category = {id: this.currentId++, name: 'unnamed', color: 'primary' };
    this.list.push(newCat);
    return newCat;
  }

  removeCategory = (cat:Category) => {
    const i = this.list.indexOf(cat);
    if (i !== -1 && cat.id !== 1) {  
        this.list.splice(i, 1);
    }
    return this.list;
  }

}
