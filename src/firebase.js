import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDiDaHvTU9v66Wh3sTbeUAUy-zhVXYA5c8",
    authDomain: "surge-assignment-dev.firebaseapp.com",
    projectId: "surge-assignment-dev",
    storageBucket: "surge-assignment-dev.appspot.com",
    messagingSenderId: "1018585985631",
    appId: "1:1018585985631:web:a3df93420256928a7221ea",
    measurementId: "G-9WW36WWM5L"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);