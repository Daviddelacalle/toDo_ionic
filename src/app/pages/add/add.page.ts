import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item-model';
import { List } from 'src/app/models/list.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName = '';

  constructor(private deseosService: DeseosService,
              private route: ActivatedRoute) {

    const listId = this.route.snapshot.paramMap.get('listId');
    this.list = this.deseosService.loadList(listId);
  
  }

  ngOnInit() {
  }

  addItem(){
    if( this.itemName.length === 0 ){
      return;
    }

    const newItem = new ListItem( this.itemName);
  }
}
