'use strict';
let arr = [];

const addElem = (mas) => {
            if(mas.reduce((a, b) => a + b, 0) <= 50) {
            mas.push(Math.floor(11 * Math.random()));
            addElem(mas);
        }
        return mas;

    }
const x = addElem(arr);

console.log(x);
