import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4DMW_maakKcN4KKWcG1wvog0VDTyg-xA",
  authDomain: "pets-social-network.firebaseapp.com",
  projectId: "pets-social-network",
  storageBucket: "pets-social-network.appspot.com",
  messagingSenderId: "203725896354",
  appId: "1:203725896354:web:52c97eac848632a61df5fb",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
