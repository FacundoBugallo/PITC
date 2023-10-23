import { upLoaded } from './firebase/config.js';
import { progressUpload } from './uploaderbar/bar.js'

const form = document.querySelector('.submitFile');
const files = document.querySelector('#file');

export const $boxBar = document.querySelector('#box-Bar');

let file;


files.addEventListener("change",(ev) => {
  file = ev.target.files[0];
  console.log(file);
});

form.addEventListener("submit",async (ev) => {
  ev.preventDefault();
  try {
    progressUpload()
    const result = await upLoaded(file);
    //llevarlo al Uploaded al Bar.js
    console.log(result)
  } catch (error) {
    console.log(error);
    alert('Fallo interno')
  };
});
