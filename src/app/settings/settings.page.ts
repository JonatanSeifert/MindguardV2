import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public authservice: AuthService, public router: Router) { }

  ngOnInit() {
  }


  async logout() {
    const user = await this.authservice.logout();



  }

  changeprofile() {
    this.router.navigateByUrl('/changeprofile');
  }

  aboutus() {
    this.router.navigateByUrl('/aboutus');
  }
}
