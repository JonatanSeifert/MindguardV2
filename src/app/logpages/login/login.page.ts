import { Component, OnInit } from '@angular/core';
import { authState } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authstates: any;
  name: any;
  data: any;

  logForm = new FormGroup({


    email: new FormControl ('', [

      Validators.required
    ]),

    password: new FormControl ('',[
      Validators.required
    ])
});
  constructor(public authservice: AuthService, public loadingCtrl: LoadingController, public router: Router) {  
   
   
  //  this.authstates =  authState(this.authservice.auth).subscribe(user => {
  //     if(user){
  //       authservice.getUserData().subscribe(data =>{
  //         if(data){
  //                 this.data = data;
  //                 this.name = data['name'];
  //                 //this.dismissload();
  //               }
  //       })
  //     }
  //   });
  }



  async ngOnInit() {


  //   this.authservice.subscribe((data) => {
  //     console.log("load");
  //     if(data){
  //       this.data = data;
  //       this.name = data['name'];
  //     }
      
    
    
  // });
  }

   loading:any;
  async startload(){
     this.loading = await this.loadingCtrl.create();
    await this.loading.present();
  }
  
  async dismissload(){
    this.loading.dismiss();
  }

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if(this.logForm.valid && this.logForm.value.email && this.logForm.value.password){

      const user = await this.authservice.login(this.logForm.value.email, this.logForm.value.password).catch(error=>{

      }
      );
      
      if(user){
      let verified: boolean | undefined = false;
      verified = this.authservice.getUser()?.emailVerified;
      
      if(verified){
        await this.authservice.createUserData(user.user.displayName, user.user.email);
        this.router.navigateByUrl('/home', {replaceUrl: true});
      }
    
    }

    }

    loading.dismiss();
    
   
    
  }

  unsubscribe(){
    this.authstates.unsubscribe();
  }

  test(){
    
   
  }

}
