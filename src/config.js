import '../src/style.css'
import { initializeApp } from 'firebase/app'
import {getStorage, ref, uploadBytes } from 'firebase/storage'

const file = document.querySelector('#file')
const firebaseConfig = {
  apiKey: "AIzaSyBT_6OYaJYnd4oYcS01X1KGWPygWDTSOxM",
  authDomain: "photosintheclouds.firebaseapp.com",
  projectId: "photosintheclouds",
  storageBucket: "photosintheclouds.appspot.com",
  messagingSenderId: "231694863313",
  appId: "1:231694863313:web:4ed177fb11b54652e2eef0",
  measurementId: "G-55437Z6K4S"
};

// Initialize Firebase
//! Initialize Cloud Storage and get a reference to the service
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function upLoaded (file){
  const storageRef = ref(storage, 'some-child')
  uploadBytes(storageRef, file).then( snapshot => {
    console.log(snapshot);
  })
}

file.addEventListener("change",(ev) => {
  const file = ev.target.files[0];
  upLoaded(file)
});
