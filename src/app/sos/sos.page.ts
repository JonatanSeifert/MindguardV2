import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.page.html',
  styleUrls: ['./sos.page.scss'],
})
export class SosPage implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }

  async logout(){
    const user = await this.authservice.logout();
   
     
    
  }

}
