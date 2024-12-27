// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDFXHg_2V6qkFMRuBraTcOQIa3iGI2OB0o",
    authDomain: "aroodhafoundation-1da40.firebaseapp.com",
    projectId: "aroodhafoundation-1da40",
    storageBucket: "aroodhafoundation-1da40.firebasestorage.app",
    messagingSenderId: "895151968230",
    appId: "1:895151968230:web:02a3c4d6c7bdc3e3791027",
    measurementId: "G-C72N80RQXF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
auth.languageCode = 'en';

const provider = new GoogleAuthProvider()

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user)
    window.location.href = "./loggedIN.html"
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

  });
})