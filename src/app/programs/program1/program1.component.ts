import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Animation, AnimationController, IonContent } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-program1',
  templateUrl: './program1.component.html',
  styleUrls: ['./program1.component.scss'],
})
export class Program1Component  implements AfterViewInit {

  @ViewChild('swiper', { read: ElementRef }) swiper!: ElementRef;
  @ViewChild('number', { read: ElementRef })  btn!: ElementRef;

  swiperanim!: Animation;
  Counter:any = 0;
  roll:boolean = false;
  instructions: any="Start the Exercise";
  sors: any ="Start here"
  dateTime:any;

  constructor(public animimationctrl: AnimationController, public alertcntrl: AlertController, public router: Router, public authservice: AuthService) {
    

   }

  

  ngAfterViewInit() {

    this.swiperanim = this.animimationctrl.create('swiperanimation')
    .addElement(this.swiper.nativeElement) // Wähle das Swiper-Element aus
    .duration(15000) // Dauer der Animation in Millisekunden
    .fromTo('width', '100%', '0%');

   
    this.dateTime  = new Date().toISOString();
    this.authservice.addSOS("Breathing Exercise", this.dateTime);

    

  }

  stop(){
    if(this.sors == "Start here"){
      this.startanimation();
      console.log("start");
      
    }else{
    this.roll=false;
    this.swiperanim.stop();
    this.swiperanim.to('width', '100%');
    this.Counter = 0;
    console.log("stop");
    this.alert();
    
    }
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
          handler:async (data) => {

            await this.authservice.updateSos("Breathing Exercise", false, "new", this.dateTime, data.title, data.message);
            
            this.router.navigateByUrl('/home',{replaceUrl: true});
          }
      },{
        text: 'Helpfull',
        cssClass: 'alert-helpfull-confirm',
        handler:async (data) =>{

          await this.authservice.updateSos("Breathing Exercise", true, "new", this.dateTime, data.title, data.message);
          
          
          this.router.navigateByUrl('/home',{replaceUrl: true});
        }
      }
    
    ],
    });

    await alert.present();

  }


  async startanimation(){
    this.roll=true;
    while(this.roll){
    this.swiperanim.play();
    this.Counter=5;
    this.sors="Stop Exercise";
    this.instructions="Breathe in";
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=4;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=3;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=2;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=1;
    await this.delay(1000);
    if(!this.roll)return;
    this.instructions="Hold your breath";
    this.Counter=5;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=4;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=3;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=2;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=1;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=5;
    this.instructions="Breathe Out";
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=4;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=3;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=2;
    await this.delay(1000);
    if(!this.roll)return;
    this.Counter=1;
    await this.delay(1000);
    if(!this.roll)return;

    }




    
  }




  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}




}
