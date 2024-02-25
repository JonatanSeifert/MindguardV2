import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(public auth: Auth, public firestore: Firestore, public router: Router) {
   }

  

  getUser(){
    const user = this.auth.currentUser;
    return user;
  }

  getUserData(){
    const user = this.auth.currentUser;
    console.log(user?.uid);
   
    
    const DataRef = doc(this.firestore, `profile/${user?.uid}`);
    return docData(DataRef);
   
  }

  async register(email: any, password: any){
    try {
      const user = createUserWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (error) {
      return null;
    }
   
  }

  async login(email: any, password:any){
    try {
      const user = signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (error) {
      return null;
    }
  }

  async logout(){
    
    signOut(this.auth);
    this.router.navigateByUrl('/', {replaceUrl: true})
    return;

  }

}
