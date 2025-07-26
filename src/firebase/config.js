// src/firebase/config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAdYChl-HxaF0nTJ501oATm2Rg2rC_uAI",
  authDomain: "school-admin-dashboard-98244.firebaseapp.com",
  projectId: "school-admin-dashboard-98244",
  storageBucket: "school-admin-dashboard-98244.firebasestorage.app",
  messagingSenderId: "945856931658",
  appId: "1:945856931658:web:6ee30e6489f15eb53483b3",
  measurementId: "G-8RRYJDFYQM",
};

const app = initializeApp(firebaseConfig);

export default app;
