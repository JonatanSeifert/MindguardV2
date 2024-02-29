import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  regForm = new FormGroup({
    fullname: new FormControl('', Validators.required),

    email: new FormControl('', [

      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$")
    ])
  });

  constructor(public loadingCtrl: LoadingController, public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }


  async signUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid && this.regForm.value.email && this.regForm.value.password) {
      const user = await this.authService.register(this.regForm.value.email, this.regForm.value.password, this.regForm.value.fullname).catch((error) => {
        console.log("error::" + error);
        loading.dismiss();
      });

     


      if (user != null) {

        loading.dismiss();
        this.authService.sendVerificationEmail();
        this.router.navigate(['/login']);
      }
      loading.dismiss();

    } else {
      loading.dismiss();
    }
  }
}
