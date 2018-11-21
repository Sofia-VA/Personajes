import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto',
  templateUrl: 'foto.html',
})
export class FotoPage {

  imga="";
  act="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imga=this.navParams.get('imga');
    this.act=this.navParams.get('act');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoPage');
  }

}
