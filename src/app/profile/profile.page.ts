import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  numbers: any[];
  dates: any[];

  constructor() { 
    this.numbers = Array(5).fill(4);
    this.dates = Array(3).fill(4);
  }

  ngOnInit() {
  }

}
