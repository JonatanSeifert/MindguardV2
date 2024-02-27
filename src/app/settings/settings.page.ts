import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }


  async logout(){
    const user = await this.authservice.logout();
   
     
    
  }
}
