import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, indexedDBLocalPersistence, initializeAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { Capacitor } from '@capacitor/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    provideFirebaseApp(() => initializeApp({"projectId":"mindguard-8cabd","appId":"1:922688798943:web:0f0b685d2b79c9b8a0296a","storageBucket":"mindguard-8cabd.appspot.com","apiKey":"AIzaSyDBNimtNM8PitvCGAmI8YqiTRaOF4hACPc","authDomain":"mindguard-8cabd.firebaseapp.com","messagingSenderId":"922688798943","measurementId":"G-CMMN24BDLP"})),
    provideAuth(() => {
      if(Capacitor.isNativePlatform()){
        return initializeAuth(getApp(),{
          persistence: indexedDBLocalPersistence
        });
      }else{
        return getAuth();
      }
     }), 
      provideFirestore(() => getFirestore()), 
      provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
