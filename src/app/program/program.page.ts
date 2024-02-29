import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
})
export class ProgramPage  {

  program:any ;

  constructor(public route: ActivatedRoute, public authservice: AuthService, public loader: LoadingController,public Router: Router) { }

  async ngAfterViewInit() {
    const loading = await this.loader.create();
    await loading.present();
    this.route.queryParams.subscribe(params => {
      if (params && params['dataObj']) {
        const receivedData = JSON.parse(params['dataObj']);
        //console.log(receivedData);
        this.program = receivedData;
      }
    });
  
    if(this.program==0){

     
      let choose = [];
      let programs = [];
      if(this.authservice.data.program!=undefined){
        programs = JSON.parse(this.authservice.data.program);
      }
      
      // else{
      //   await this.authservice.programRate("Breathing Exercise", false);
      //   await this.authservice.programRate("3-3-3 Rule", false);
      // }
      
      
      
      for(let p of programs){
       let counter = p.helpfullness+10;
        for(let i = 0; i < counter; i++){
          choose.push(p);
        }
      }

      
      

      if(choose.length != 0){
        const randomIndex = Math.floor(Math.random() * choose.length);
        console.log(Math.random() * choose.length);
        
        if(choose[randomIndex].name=="Breathing Exercise"){
          this.program = 1;

        }else if(choose[randomIndex].name=="3-3-3 Rule"){
         
          this.program = 2;
          
        }else{
          console.log("daFuq");
          this.Router.navigateByUrl('/home' ,{replaceUrl: true});
          
        }
      }else{
        this.program = Math.floor(Math.random()*2 +1 );
        console.log("random");
        
      }
      
    }

    this.loader.dismiss();

  }

}
