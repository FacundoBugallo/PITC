import {$boxBar} from '../index.js'
import { upLoaded } from '../firebase/config.js';
 
export async function progressUpload (file) {
  const $progress = document.createElement("progress"),
        $span = document.createElement("span");

  $progress.value = 0;
  $progress.max = 100; 

  $boxBar.insertAdjacentElement("beforeend", $progress);
  $boxBar.insertAdjacentElement("beforeend", $span);

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener("progress", (ev)=>{
    let progress = parseInt((ev.loaded * 100) / ev.total)
    $progress.value = progress;
    $span.innerHTML = `<b>${file.name} - ${progress} %</b>`
  });

  fileReader.addEventListener("loadend", async (ev)=>{
    upLoaded(file) 
  });
} 