import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  lists: List[] = [];

  constructor() { 
    this.loadStorage();
  }

  createList( title: string ){

    const newList = new List(title);
    this.lists.push ( newList );
    this.saveStorage();

    return newList.id;
  }

  loadList( id:string | number){

    id = Number(id);

    return this.lists.find( listaData => listaData.id === id );
  }

  saveStorage(){

    localStorage.setItem('data', JSON.stringify(this.lists) );
  }

  loadStorage(){

    if( localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
    else{
      this.lists = [];
    }

  }

}
