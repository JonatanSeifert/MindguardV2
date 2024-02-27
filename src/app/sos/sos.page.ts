import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-sos',
  templateUrl: './sos.page.html',
  styleUrls: ['./sos.page.scss'],
})
export class SosPage implements OnInit {
  presentingElement:any = null;

  constructor(public authservice: AuthService, public router: Router, public modalctrl: ModalController) {

   }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  sos(){
    const queryParams = {
      dataObj: JSON.stringify(0)
    };
    this.modalctrl.dismiss();
    this.router.navigate(['/program'], {queryParams,  replaceUrl: true});
  }

  startcustom(p: number){
    const queryParams = {
      dataObj: JSON.stringify(p)
    };
    this.modalctrl.dismiss();
    this.router.navigate(['/program'], {queryParams,  replaceUrl: true});
  }

  

  

}
