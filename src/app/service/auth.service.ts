import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from '@angular/fire/auth';
import { Firestore, collection, doc, docData, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authstates: any;
  userdatsub:any;
  data: any = "";

  finalarray: any =[];
 

  constructor(public auth: Auth, public firestore: Firestore, public router: Router) {
   
    this.authstates =  authState(this.auth).subscribe(user => {
     
      if(user){
      
        this.userdatsub = this.getUserData().subscribe(data =>{
          
          if(data){
            
                  this.data = data;
                  
                  if(user.emailVerified==true){
                   
                   
                   if(router.url=="/login" || router.url=="/register" || router.url=="/passwordreset" || router.url=="/"){ 
                    router.navigateByUrl('/home');
                   }

                   this.updateProtocol();

                  }
                  
                }
        })
      }
    });
   }

   async createUserData(fullname: any, email: any){

    const user = this.auth.currentUser;
   
  //  await setDoc(doc(this.firestore, "cities", "La"),{ name: "test"} );
    const dataRef = doc(this.firestore, `profile/${user?.uid}`);
    const dataSnap = await getDoc(dataRef);

    if(dataSnap.exists()){
      console.log("yay");
      
    }else{
      await setDoc(dataRef,{ name: fullname, email: email} );
      
    }
    

   }

  getUser(){
    const user = this.auth.currentUser;
    return user;
  }

  getUserData(){
    const user = this.auth.currentUser;
    
   
    
    const DataRef = doc(this.firestore, `profile/${user?.uid}`);
    return docData(DataRef);
   
  }

  async register(email: any, password: any, name: any){
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      
      
        updateProfile(user.user, {displayName: name});
        console.log("send2");
        
      
      return user;
     
            
    } catch (error) {
      return null;
    }
   
  }

  async login(email: any, password:any){
    try {
      const user = signInWithEmailAndPassword(this.auth, email, password);
      console.log("send");
      return user;
      
    } catch (error) {
      console.log("failed");
      
      return null;
    }
    
  }

  async logout(){
    this.userdatsub.unsubscribe();
    await signOut(this.auth);
    this.router.navigateByUrl('/', {replaceUrl: true})
    return;

  }

  async sendVerificationEmail(){
    if(this.auth.currentUser){
    const sendmail = sendEmailVerification(this.auth.currentUser);
    return sendmail;
    }else{
      console.log("AHHHHHH");
      return null;
    }
  }


  async resetPassword(email: any){
    return await sendPasswordResetEmail(this.auth, email);
  }


  async programRate(program: string, topflop: boolean){
    const user = this.auth.currentUser;
    const dataRef = doc(this.firestore, `profile/${user?.uid}`);

      let q = this.data['program'];
      let p:any = [];
      
      if(q!=undefined) p = JSON.parse(q);
      let f = false;
      
      for(let i of p){
        if(i.name==program){
          
          if(topflop){
            i.helpfullness++;
          } else{
            i.helpfullness--;
          }      
          f=true;
        }
      }  
        
      if(!f){
        if(topflop){
          p.push({name: program, helpfullness: 1});
        }else{
          p.push({name: program, helpfullness: 0});
        }
        
      }

      await setDoc(dataRef, {program : JSON.stringify(p)}, {merge: true});        
      
  }

  async addSOS(UsedExercise: string){
    let rawdata = this.data['protocol'];
    let data:any = [];
    if(rawdata!=undefined) data = JSON.parse(rawdata);

    let sos:any;

   //Location
    let location = "Location stuff"
    //Name
    let name = "Auto Generated"
    
    let dateTime = new Date().toISOString();
    
    
    //Used Exercise
    sos = {name: name, location: location,dateTime: dateTime ,usedExercise: UsedExercise};
    data.push(sos);
    const user = this.auth.currentUser;
    const dataRef = doc(this.firestore, `profile/${user?.uid}`);
    await setDoc(dataRef, {protocol : JSON.stringify(data)}, {merge: true});   

  }


  updateSOS(title: string, message: string, topflop: boolean){
    let rawdata = this.data['protocol'];
    let data:any = [];
    if(rawdata!=undefined) data = JSON.parse(rawdata);


    


  }

  updateProtocol(){

    let split = 'T';

    let rawdata = this.data['protocol'];
    let data:any = [];
    if(rawdata!=undefined) data = JSON.parse(rawdata);

    if(data.length==0){
      console.log("Nichts zum sortieren");
      return;
      
    }
    
    //generate relevant dates

    let dates:any = [];

    for(let dat of data){
      let date = new Date(dat.dateTime).toISOString().split(split)[0];
      
      if(dates.indexOf(date)==-1){


       
        dates.push(date);
       

      }

    }
    
    
 
    const dateObjects: Date[] = dates.map((isoString:any) => new Date(isoString));
    dateObjects.sort((b, a) => a.getTime() - b.getTime());
    dates = dateObjects.map((date) => date.toISOString());

    console.log("Relevant days:");
    console.log(dates);

     this.finalarray =[];

     
    for(let date of dates){

      let datearray:any = [];

      for(let dat of data){
      
        if(new Date(dat.dateTime).toISOString().split(split)[0] == new Date(date).toISOString().split(split)[0]){
          
          datearray.push(dat);
        }
        
      }

     datearray.reverse();

   
      this.finalarray.push({date: date, logs: datearray});
    }


    console.log(this.finalarray);

    //[{datum, [{data, date}]}]


   
    console.log("DoneSort");
    

  }

}
