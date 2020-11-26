import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertController: AlertController) {

  }

  async addList(){
    // this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertController.create({
      header: 'New list',
      inputs:[
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>{
            console.log('Cancel');
          }
        },
        {
          text: 'Create',
          handler: ( data ) => {
            if( data.title.length === 0){
              return;
            }

            //create the list
            const listId = this.deseosService.createList( data.title );

            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`)

          }

        }
      ]
    });

    alert.present();
  }

}
