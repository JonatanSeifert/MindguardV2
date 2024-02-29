import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.page.html',
  styleUrls: ['./passwordreset.page.scss'],
})
export class PasswordresetPage implements OnInit {

  resForm = new FormGroup({

    email: new FormControl('', [

      Validators.required,
      Validators.email
    ])
  });


  constructor(public loadingCtrl: LoadingController, public authService: AuthService, public alertcontroller: AlertController, public router: Router) { }

  ngOnInit() {
  }



  async reset() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.resForm?.valid && this.resForm.value.email) {
      const user = await this.authService.resetPassword(this.resForm.value.email).catch((error) => {
        console.log(error);
        loading.dismiss();
        return;
      });
      loading.dismiss();
      const alert = await this.alertcontroller.create({
        header: 'Password Reset',
        message: 'We send you an email to reset your password.',
        buttons: [{ text: 'Got it!', handler: () => { this.router.navigateByUrl('/'); } }],
      });

      await alert.present();



    } else {
      loading.dismiss();
      return;
    }
  }

}
