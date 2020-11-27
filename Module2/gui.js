//GUI - graphic user interface

import {Chicken} from './chicken.js'; //Importerar konstruktor så vi kan skapa instans-objekt av Chicken.
import {Cow} from './cow.js';
export const variable = 1;

let chick = new Chicken('white');
let chick2 = new Chicken('brown');
let cow = new Cow('big');
let cow2 = new Cow('small');

let chickenBtn = document.createElement('button');
chickenBtn.innerText = 'Chicken';
let cowBtn = document.createElement('button');
cowBtn.innerText = 'Cow';

let body = document.querySelector('body');
body.appendChild(chickenBtn);
body.appendChild(cowBtn);

chickenBtn.addEventListener('click', function(){
    console.log(chick.color, chick.sound);
    console.log(chick2.color, chick2.sound);
});

cowBtn.addEventListener('click', function(){
    console.log(cow.size, cow.sound);
    console.log(cow2.size, cow2.sound);
});