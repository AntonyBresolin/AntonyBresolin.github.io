import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

//chave banco firebase
//não mexe nisso
const firebaseConfig = {
  apiKey: "AIzaSyCRZ2yfqm-UqrvBUmzG_3o4YmO_vGGHGnY",
  authDomain: "aondetem-65bb0.firebaseapp.com",
  projectId: "aondetem-65bb0",
  storageBucket: "aondetem-65bb0.appspot.com",
  messagingSenderId: "591474947704",
  appId: "1:591474947704:web:546d05a611f253a1351f8d",
  measurementId: "G-EQRKK7QWCF",
};
const firebaseApp = initializeApp(firebaseConfig);


const storage = getStorage(firebaseApp);