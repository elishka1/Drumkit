// Play drum by keyboard press

// Play music by mouse click



let button1 = document.getElementById('button1');


document.addEventListener('keypress', () => {
  button1.play(boom.wav)
})
