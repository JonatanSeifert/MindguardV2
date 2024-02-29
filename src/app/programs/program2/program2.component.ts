import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, IonInput, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-program2',
  templateUrl: './program2.component.html',
  styleUrls: ['./program2.component.scss'],
})
export class Program2Component implements OnInit {

  @ViewChild('see', { read: ElementRef }) see!: ElementRef;
  @ViewChild('feel', { read: ElementRef }) feel!: ElementRef;
  @ViewChild('hear', { read: ElementRef }) hear!: ElementRef;

  pictureone: any;
  picturetwo: any;
  picturethree: any;


  @ViewChild('feelinputone', { static: false }) feelinputone!: IonInput;
  @ViewChild('feelinputtwo', { static: false }) feelinputtwo!: IonInput;
  @ViewChild('feelinputthree', { static: false }) feelinputthree!: IonInput;

  @ViewChild('hearinputone', { static: false }) hearinputone!: IonInput;
  @ViewChild('hearinputtwo', { static: false }) hearinputtwo!: IonInput;
  @ViewChild('hearinputthree', { static: false }) hearinputthree!: IonInput;




  constructor(public authservice: AuthService, public alertcntrl: AlertController, public router: Router, public loader: LoadingController) { }

  dateTime: any;
  ngOnInit() {

  }
  ngAfterViewInit() {




    this.dateTime = new Date().toISOString();
    this.authservice.addSOS("3-3-3 Rule", this.dateTime);




  }

  stop() {
    this.alert();
  }

  async alert() {
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

      ],
      buttons: [
        {
          text: 'Not Helpfull',
          cssClass: 'alert-helpfull-cancel',
          handler: async (data) => {
            await this.authservice.updateSos("3-3-3 Rule", false, "new", this.dateTime, data.title, data.message);
            this.router.navigateByUrl('/home', { replaceUrl: true });
          }
        }, {
          text: 'Helpfull',
          cssClass: 'alert-helpfull-confirm',
          handler: async (data) => {
            await this.authservice.updateSos("3-3-3 Rule", true, "new", this.dateTime, data.title, data.message);

            this.router.navigateByUrl('/home', { replaceUrl: true });
          }
        }

      ],
    });

    await alert.present();

  }



  tofeel() {

    this.see.nativeElement.classList.add('hidden');
    this.feel.nativeElement.classList.remove('hidden');
  }

  tohear() {
    this.feel.nativeElement.classList.add('hidden');
    this.hear.nativeElement.classList.remove('hidden');
  }

  backtofeel() {
    this.hear.nativeElement.classList.add('hidden');
    this.feel.nativeElement.classList.remove('hidden');
  }

  backtosee() {
    this.feel.nativeElement.classList.add('hidden');
    this.see.nativeElement.classList.remove('hidden');
  }

  async pictureOne() {
    const loading = await this.loader.create();
    await loading.present();
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      allowEditing: false,
    });

    this.pictureone = image.base64String;
    loading.dismiss();

  }

  async pictureSnd() {
    const loading = await this.loader.create();
    await loading.present();
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      allowEditing: false,
    });

    this.picturetwo = image.base64String;
    loading.dismiss();
  }

  async pictureTrd() {
    const loading = await this.loader.create();
    await loading.present();
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      allowEditing: false,
    });

    this.picturethree = image.base64String;
    loading.dismiss();
  }



  async showFeel(id: any) {

    let f: any;
    if (id == 1) {
      f = this.feelinputone;
    } else if (id == 2) {
      f = this.feelinputtwo;
    } else {
      f = this.feelinputthree;
    }


    const s = await f.getInputElement();
    s.parentElement!.parentElement!.parentElement!.classList.remove('smoll');





    f.setFocus();
  }

  async showHear(id: any) {

    let f: any;
    if (id == 1) {
      f = this.hearinputone;
    } else if (id == 2) {
      f = this.hearinputtwo;
    } else {
      f = this.hearinputthree;
    }


    const s = await f.getInputElement();
    s.parentElement!.parentElement!.parentElement!.classList.remove('smoll');





    f.setFocus();
  }



}
