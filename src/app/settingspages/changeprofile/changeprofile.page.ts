import { Component, OnInit } from '@angular/core';
import { doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-changeprofile',
  templateUrl: './changeprofile.page.html',
  styleUrls: ['./changeprofile.page.scss'],
})
export class ChangeprofilePage implements OnInit {

  constructor(public authservice: AuthService, public router: Router, public loader: LoadingController) {

  }

  ngOnInit() {

  }

  name: any;
  email: any;
  profilepic: any;


  tobase60(src: any){
    if(src== "https://ionicframework.com/docs/img/demos/avatar.svg"){
      return src;
    }else{
    return "data:image/jpeg;base64," + src;
    }
  }

  ionViewWillEnter() {
    this.name = this.authservice.data['name'];
    this.email = this.authservice.data['email'];
    this.profilepic = this.authservice.profilepic;
  }


  back() {
    this.router.navigateByUrl('home/settings');
  }


  async save(){
    const loading = await this.loader.create();
    await loading.present();
      await this.authservice.saveNewUserSettings(this.name, this.profilepic);
    loading.dismiss();
      this.router.navigateByUrl('home/settings');


}

 


  async changeprofilepic() {
    const loading = await this.loader.create();
    await loading.present();
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      allowEditing: false,
    });

    this.profilepic = image.base64String;
    loading.dismiss();
  }
}

