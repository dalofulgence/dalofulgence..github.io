
// let sound = document.querySelector('.keys');

// let A = sound.childNodes[1].dataset.key
// let S = sound.childNodes[3].dataset.key
// let D = sound.childNodes[5].dataset.key
// let F = sound.childNodes[7].dataset.key
// let G = sound.childNodes[9].dataset.key
// let H = sound.childNodes[11].dataset.key
// let J = sound.childNodes[13].dataset.key
// let K = sound.childNodes[15].dataset.key
// let L = sound.childNodes[17].dataset.key



// function playA() {
//     var audioA = document.getElementsByTagName("audio")[0];
//     audioA.play()
// }

// function playS() {
//     var audioA = document.getElementsByTagName("audio")[1];
//     audioA.play()
// }
// function playD() {
//     var audioD = document.getElementsByTagName("audio")[2];
//     audioD.play()
// }
// function playF() {
//     var audioF = document.getElementsByTagName("audio")[3];
//     audioF.play()
// }
// function playG() {
//     var audioG = document.getElementsByTagName("audio")[4];
//     audioG.play()
// }
// function playH() {
//     var audioH = document.getElementsByTagName("audio")[5];
//     audioH.play()
// }
// function playJ() {
//     var audioJ = document.getElementsByTagName("audio")[6];
//     audioJ.play()
// }
// function playK() {
//     var audioK = document.getElementsByTagName("audio")[7];
//     audioK.play()
// }
// function playL() {
//     var audioL = document.getElementsByTagName("audio")[8];
//     audioL.play()
// }


// var audioS = document.getElementsByTagName("audio")[1];
// var audioD = document.getElementsByTagName("audio")[2];
// var audioF = document.getElementsByTagName("audio")[3];
// var audioG = document.getElementsByTagName("audio")[4];
// var audioH = document.getElementsByTagName("audio")[5];
// var audioJ = document.getElementsByTagName("audio")[6];
// var audioK = document.getElementsByTagName("audio")[7];
// var audioL = document.getElementsByTagName("audio")[8];



function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.play();
    key.classList.add('playing'); // adds the class 
  }

  function endSound (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key)
      return;
    key.classList.remove('playing'); // removes the class
  }

  window.addEventListener('keydown', playSound)
  window.addEventListener('keyup', endSound)