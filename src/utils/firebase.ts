import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyBd4RvgyT8kolGgRKrFOvkPNxxUSNF84qE",
  authDomain: "fit-app-263ed.firebaseapp.com",
  projectId: "fit-app-263ed",
  storageBucket: "fit-app-263ed.appspot.com",
  messagingSenderId: "183469314744",
  appId: "1:183469314744:web:dc797c91d4a71378cdda4d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
