let count = 0;

let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let countlabel = document.querySelector('#countlabel');

increase.addEventListener('click', () => {
  count += 1;
  countlabel.innerHTML = count;
});
reset.addEventListener('click', () => {
  count = 0;
  countlabel.innerHTML = count;
});
decrease.addEventListener('click', () => {
  count -= 1;
  countlabel.innerHTML = count;
});
