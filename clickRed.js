let colors = [
  'rgb(210, 204, 49)',
  'rgb(210, 204, 49)',
  'rgb(186, 47, 47)',
  'rgb(210, 204, 49)',
  'rgb(210, 204, 49)',
  'rgb(210, 204, 49)'
];

const fyShuffle = arr => {
  let curIndex = arr.length;
  let tempVal;
  let randNum;

  while (curIndex !== 0) {
    randNum = Math.floor(Math.random() * curIndex);
    curIndex--

    tempVal = arr[curIndex];
    arr[curIndex] = arr[randNum];
    arr[randNum] = tempVal;
  }
  return arr;
}

const init = () => {
  let arrForUse = fyShuffle(colors);
  let startInterval = window.setTimeout(init, 650);

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = arrForUse[i];
    squares[i].addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor
      if (clickedColor === winningColor) {
        h1.textContent = 'You Clicked the Red Square!'
        window.clearTimeout(startInterval);
        playAgain.style.display = 'block';
      }
    });
  }
}

let playAgain = document.querySelector('.message');
let yesDisplay = document.getElementById('yes');
let noDisplay = document.getElementById('no')
let squares = document.querySelectorAll('.square');
let h1 = document.querySelector('h1');
let winningColor = 'rgb(186, 47, 47)';

playAgain.style.display = 'none';

yesDisplay.addEventListener('click', function() {
  h1.style.display = 'block';
  playAgain.style.display = 'none';
  init();
});

noDisplay.addEventListener('click', function() {
  playAgain.textContent = "Thank you for playing!"
})
init();
