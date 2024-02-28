import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public auth: AuthService, public ngZone: NgZone) {}

  ngOnInit(){
   
  }

  ionViewWillEnter(){
   

    App.addListener('appStateChange', (state) => {
      if (state.isActive) {
       
        this.ngZone.run(() => {
          this.auth.checkAndRequestPermissions();
        });
      }
    });

    this.auth.checkAndRequestPermissions();

  }


}
