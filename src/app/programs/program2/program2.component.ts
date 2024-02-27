import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-program2',
  templateUrl: './program2.component.html',
  styleUrls: ['./program2.component.scss'],
})
export class Program2Component  implements OnInit {

  constructor(public authservice: AuthService, public alertcntrl: AlertController, public router:Router) { }

  ngOnInit() {}
  ngAfterViewInit() {

   

  
    this.authservice.addSOS("3-3-3 Rule");

    

  }



  stop(){
    this.alert();
  }


  async alert(){
    const alert = await this.alertcntrl.create({
      header: 'Well done!',
      message: 'You should take some notes and rate this Exercise',
      cssClass: 'helpfull-alert',
      animated: true,
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title'
        },
        {
          name: 'message',
          type: 'textarea',
          placeholder: 'Explain your Situation'
        },
        // Füge hier weitere Inputfelder hinzu, falls benötigt
      ],
      buttons: [
        {
          text: 'Not Helpfull',
          cssClass: 'alert-helpfull-cancel',
          handler:async () => {
            await this.authservice.programRate("3-3-3 Rule", false);
            this.router.navigateByUrl('/home',{replaceUrl: true});
          }
      },{
        text: 'Helpfull',
        cssClass: 'alert-helpfull-confirm',
        handler:async () =>{
          await this.authservice.programRate("3-3-3 Rule", true);
          this.router.navigateByUrl('/home',{replaceUrl: true});
        }
      }
    
    ],
    });

    await alert.present();

  }

}
