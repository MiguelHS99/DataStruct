import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({ projectId: "prueba-firebase-a8c61", appId: "1:744999684375:web:7387cb2552c13414c14f52", 
      storageBucket: "prueba-firebase-a8c61.firebasestorage.app", 
      apiKey: "AIzaSyAobvDaW7dL7zWvZmxJkckhw-3KkRM7Rfw", 
      authDomain: "prueba-firebase-a8c61.firebaseapp.com", 
      messagingSenderId: "744999684375" })), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore()
    )]
};
