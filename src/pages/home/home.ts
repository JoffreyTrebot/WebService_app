import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { NewApiGlobal } from '../../models/newapi-global.model';
import { NewApiService } from '../../services/newapi.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news: NewApiGlobal;

  constructor(public navCtrl: NavController, private newApiService: NewApiService) {
  
    this.newApiService.getObjects()
    .then(newsFetched => {
      this.news = newsFetched;
      console.log(this.news);
    })
  }


}
