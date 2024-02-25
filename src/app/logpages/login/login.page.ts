import { Component, OnInit } from '@angular/core';
import { authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name: any;
  data: any;
  constructor(public authservice: AuthService, public loadingCtrl: LoadingController, public router: Router) {  
   
    //this.startload();
    authState(this.authservice.auth).subscribe(user => {
      if(user){
        authservice.getUserData().subscribe(data =>{
          if(data){
                  this.data = data;
                  this.name = data['name'];
                  //this.dismissload();
                }
        })
      }
    });
  }

  email: string = "jonatan.seifert77@gmail.com";
  password: string = "Passwort@1";

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
    const user = await this.authservice.login(this.email, this.password);
    if(user){
      this.router.navigateByUrl('/home', {replaceUrl: true})
    }
    console.log(user);
    
  }

 

  test(){
    
   
  }

}
