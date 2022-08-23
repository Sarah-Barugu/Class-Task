'use strict'

const arr = [5, -2, -6, 0, 6, -1, 10, -100];
let num = 0;
for(let i = 0; i <= arr.length; i++) {
  if(arr[i] >= num) {
    num = arr[i];

    // const html = `
    //   <h1> ${num} </h1>
    // `
    // htmlFile2.insertAdjacentHTML('beforeend', html);
  }
}
document.write(`Output: ${num}`);