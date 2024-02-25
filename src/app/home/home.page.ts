import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authservice: AuthService, public router: Router) {}


  async logout(){
    const user = await this.authservice.logout();
   
     
    
  }
}
