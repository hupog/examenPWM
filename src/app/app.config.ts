import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "examenpwm-f3939", appId: "1:354905768407:web:6f20601778309cc5b98b92", storageBucket: "examenpwm-f3939.firebasestorage.app", apiKey: "AIzaSyBoB3FXUzhyEoySrs77U55yCzGz4hSREi4", authDomain: "examenpwm-f3939.firebaseapp.com", messagingSenderId: "354905768407" })), provideFirestore(() => getFirestore())]
};
