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
  progressUpload(file);
});
