import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { formatDate } from '@angular/common';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  

  constructor(public authservice: AuthService) { 
   
    
  }

  ngOnInit() {
  }

  formatDate(isoString: string): string {
    const dateObject = new Date(isoString);
    
   
    const formattedDate = dateObject.toLocaleDateString('en-Us', { day: 'numeric', month: 'long', year: 'numeric' });
    
    return formattedDate;
  }

  formatDateandTime(isoString: string): string {
    const dateObject = new Date(isoString);
    
   
    const formattedDate = dateObject.toLocaleDateString('en-Us', { day: 'numeric', month: 'long', year: 'numeric' });
    const formattedTime = dateObject.toLocaleTimeString('en-Us', { hour: '2-digit', minute: '2-digit'});
    
    return formattedDate+ " " + formattedTime;
  }

  formatTime(isoString: string): string {
    const dateObject = new Date(isoString);
    
   

    const formattedTime = dateObject.toLocaleTimeString('en-Us', { hour: '2-digit', minute: '2-digit'});
    
    return formattedTime;
  }

 

}
