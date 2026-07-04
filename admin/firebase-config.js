// Firebase Configuration
// استبدل القيم التالية من إعدادات مشروع Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyD9_3YSoMXvP20K87qMHXlzKxYGaB5Pm_0",
  authDomain: "calmweb-72f2d.firebaseapp.com",
  projectId: "calmweb-72f2d",
  storageBucket: "calmweb-72f2d.firebasestorage.app",
  messagingSenderId: "131012333038",
  appId: "1:131012333038:web:dfc52fd76bdc0a7cbb92ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
