import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCoyDgtkYbopHaBmzyn2tCal9ujj6cG0jA",
  authDomain: "bindle-user.firebaseapp.com",
  databaseURL: "https://bindle-user-default-rtdb.firebaseio.com",
  projectId: "bindle-user",
  storageBucket: "bindle-user.appspot.com",
  messagingSenderId: "945685447725",
  appId: "1:945685447725:web:84c6b69233b8a57b6764a4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);