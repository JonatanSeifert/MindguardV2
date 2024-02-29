import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss'],
})
export class ProtocolComponent implements OnInit {

  item: any;

  constructor(public modalctrl: ModalController, public navParams: NavParams, public alertctrl: AlertController, public authservice: AuthService) { }

  ngOnInit() {
    this.item = this.navParams.get('item');
  }


  formatDateandTime(isoString: string): string {
    const dateObject = new Date(isoString);


    const formattedDate = dateObject.toLocaleDateString('en-Us', { day: 'numeric', month: 'long', year: 'numeric' });
    const formattedTime = dateObject.toLocaleTimeString('en-Us', { hour: '2-digit', minute: '2-digit' });

    return formattedDate + " " + formattedTime;
  }




  async edit() {
    const alert = await this.alertctrl.create({
      header: 'Well done!',
      message: 'You should take some notes and rate this Exercise',
      cssClass: 'helpfull-alert',
      animated: true,
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: this.item.name,
          placeholder: 'Title'
        },
        {
          name: 'message',
          type: 'textarea',
          value: this.item.description,
          placeholder: 'Explain your Situation'
        },
        // Füge hier weitere Inputfelder hinzu, falls benötigt
      ],
      buttons: [
        {
          text: 'Not Helpfull',
          cssClass: 'alert-helpfull-cancel',
          handler: async (data) => {
            let handler="stay";
            if(this.item.topflop!=false){
              handler="change";
            }
            await this.authservice.updateSos(this.item.UsedExercise, false, handler, this.item.dateTime, data.title, data.message);
            this.item.name = data.title;
            this.item.description = data.message;
            this.item.topflop = false;
          }
        }, {
          text: 'Helpfull',
          cssClass: 'alert-helpfull-confirm',
          handler: async (data) => {
            let handler="stay";
            if(this.item.topflop!=true){
              handler="change";
            }

            await this.authservice.updateSos(this.item.UsedExercise, true, handler, this.item.dateTime, data.title, data.message);
            this.item.name = data.title;
            this.item.description = data.message;
            this.item.topflop = true;

          }
        }

      ],
    });

    alert.present();
  }

}
