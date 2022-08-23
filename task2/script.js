'use strict'

const htmlFile = document.querySelector('.append');

const arr = [5, -2, -6, 0, 6, -1, 10, -100];
let num = 0;
for(let i = 0; i <= arr.length; i++) {
  if(arr[i] >= num) {
    num = arr[i];

    const html = `
      <h1> ${num} </h1>
    `
    htmlFile.insertAdjacentHTML('beforeend', html);
  }
}
console.log(num);