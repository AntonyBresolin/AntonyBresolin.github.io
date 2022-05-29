//chave banco firebase
//não mexe nisso
const firebaseConfig = {
  apiKey: process.env.API_KEY_FILE,
  authDomain: "aondetem-65bb0.firebaseapp.com",
  projectId: "aondetem-65bb0",
  storageBucket: "aondetem-65bb0.appspot.com",
  messagingSenderId: "591474947704",
  appId: "1:591474947704:web:546d05a611f253a1351f8d",
  measurementId: "G-EQRKK7QWCF",
};
firebase.initializeApp(firebaseConfig);
