// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyC4DMW_maakKcN4KKWcG1wvog0VDTyg-xA",
//   authDomain: "pets-social-network.firebaseapp.com",
//   projectId: "pets-social-network",
//   storageBucket: "pets-social-network.appspot.com",
//   messagingSenderId: "203725896354",
//   appId: "1:203725896354:web:52c97eac848632a61df5fb",
// };
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
// export { storage };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnywvc1pTRhOEk3xhtpRNAGoa6WbsJFj4",
  authDomain: "sky-works-bd5eb.firebaseapp.com",
  projectId: "sky-works-bd5eb",
  storageBucket: "sky-works-bd5eb.appspot.com",
  messagingSenderId: "565063459315",
  appId: "1:565063459315:web:1efa0bed75103e9b187286",
  measurementId: "G-LCVT5NKGDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };