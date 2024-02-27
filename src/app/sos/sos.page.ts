import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sos',
  templateUrl: './sos.page.html',
  styleUrls: ['./sos.page.scss'],
})
export class SosPage implements OnInit {

  constructor(public authservice: AuthService, public router: Router) { }

  ngOnInit() {
  }

  sos(){
    this.router.navigateByUrl('/program');
  }


  

}
