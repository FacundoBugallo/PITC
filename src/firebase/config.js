import { initializeApp } from 'firebase/app';
import {getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';
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

export async function upLoaded(file){
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  let url = await getDownloadURL(storageRef)
  return url
}