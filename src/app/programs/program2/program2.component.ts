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
export class Program2Component  implements OnInit {

  @ViewChild('see', { read: ElementRef })  see!: ElementRef;
  @ViewChild('feel', { read: ElementRef })  feel!: ElementRef;
  @ViewChild('hear', { read: ElementRef })  hear!: ElementRef;

   pictureone: any;
   picturetwo: any;
   picturethree:any;


  @ViewChild('feelinputone',{ static: false })  feelinputone!: IonInput;
  @ViewChild('feelinputtwo', { static: false })  feelinputtwo!: IonInput;
  @ViewChild('feelinputthree', { static: false })  feelinputthree!: IonInput;

  @ViewChild('hearinputone', { static: false })  hearinputone!: IonInput;
  @ViewChild('hearinputtwo', { static: false })  hearinputtwo!: IonInput;
  @ViewChild('hearinputthree', { static: false })  hearinputthree!: IonInput;


  

  constructor(public authservice: AuthService, public alertcntrl: AlertController, public router:Router, public loader: LoadingController) { }

  ngOnInit() {
   
  }
  ngAfterViewInit() {

   

  
    this.authservice.addSOS("3-3-3 Rule");
    

    
    // this.pictureone = "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";
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



  tofeel(){
  
    this.see.nativeElement.classList.add('hidden');
    this.feel.nativeElement.classList.remove('hidden');
  }

  tohear(){
    this.feel.nativeElement.classList.add('hidden');
    this.hear.nativeElement.classList.remove('hidden');
  }

  backtofeel(){
    this.hear.nativeElement.classList.add('hidden');
    this.feel.nativeElement.classList.remove('hidden');
  }

  backtosee(){
    this.feel.nativeElement.classList.add('hidden');
    this.see.nativeElement.classList.remove('hidden');
  }

  async pictureOne(){
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

 async pictureSnd(){
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

  async pictureTrd(){
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



  async showFeel(id: any){
   console.log("shoe");
    let f:any;
   if(id==1){
     f =  this.feelinputone;
   }else if(id==2){
    f = this.feelinputtwo;
   }else{
    f= this.feelinputthree;
   }
   
   
    const s = await f.getInputElement();
    s.parentElement!.parentElement!.parentElement!.classList.remove('smoll');
   
    

  
   
    f.setFocus();
  }

  async showHear(id: any){
    console.log("shoe");
     let f:any;
    if(id==1){
      f =  this.hearinputone;
    }else if(id==2){
     f = this.hearinputtwo;
    }else{
     f= this.hearinputthree;
    }
    
    
     const s = await f.getInputElement();
     s.parentElement!.parentElement!.parentElement!.classList.remove('smoll');
    
     
 
   
    
     f.setFocus();
   }
 


}
