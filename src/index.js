import { upLoaded } from './firebase/config.js';

const form = document.querySelector('.submitFile');
const files = document.querySelector('#file');

let file;


files.addEventListener("change",(ev) => {
  file = ev.target.files[0];
  console.log(file);
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