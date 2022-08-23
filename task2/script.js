'use strict'

const arr = [5, -2, -6, 0, 6, -1, 10, -100];
let num = 0;
for(let i = 0; i <= arr.length; i++) {
  if(arr[i] >= num) {
    num = arr[i];
  }
}
alert(`Output: ${num}`);
document.write(`Output: ${num}`);
