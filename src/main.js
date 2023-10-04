import './style.css'
import { upLoaded } from './firebase/config'

const files = document.querySelector('#file');
const form = document.querySelector('.submitFile');


let file;

files.addEventListener("change",(ev) => {
  file = ev.target.files[0];
});

form.addEventListener("submit",async (ev) => {
  ev.preventDefault();
  try {
    const result = await upLoaded(file);
    console.log(result)
  } catch (error) {
    console.log(error);
    alert('Fallo interno')
  };
});