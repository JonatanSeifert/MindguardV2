import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from '@angular/fire/auth';
import { Firestore, collection, doc, docData, getDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authstates: any;
  userdatsub:any;
  data: any = "";
 

  constructor(public auth: Auth, public firestore: Firestore, public router: Router) {
   
    this.authstates =  authState(this.auth).subscribe(user => {
     
      if(user){
      
        this.userdatsub = this.getUserData().subscribe(data =>{
          
          if(data){
            
                  this.data = data;
                  
                  if(user.emailVerified==true){
                    router.navigateByUrl('/home');

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

}
