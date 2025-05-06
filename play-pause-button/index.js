// const play = document.getElementById('hat').src = '../images/14.jpeg'; 
// console.log(play)
// play.innerHTML = 'Play >';
// function pause() {
// if(play.innerHTML === (document.getElementById('hat').src = '../images/14.jpeg')  ) {
//     play.innerHTML = document.getElementById('hat').src = '../images/15.jpeg'; 
//     // console.log('a')
// } else {
//     play.innerHTML = document.getElementById('hat').src = '../images/14.jpeg'; 
// }

// }
// console.log(2 + '2' - 1);
// pause();
// play.innerHTML = 'paus';
// if(play.innerHTML === 'paus') {
//     console.log('true')
// }

// function pause() {
    //     if(play.innerHTML === 'Play >') {
        //         play.innerHTML = 'Pause ||';
        //     }
        
// }

// pause();
const hat = document.getElementById('hat'); // To get the image element
const play = document.getElementById('sharp'); //To get button element.

//Getting initial state
// hat.src = '../images/14.jpeg';

function pause() {
    //Checking first image
    if (hat.src.endsWith('14.jpeg') /*=== window.location.origin + '.images/14.jpeg'*/) {
        hat.src = '../images/15.jpeg';
    } else {
        hat.src = '../images/14.jpeg'; 
    }
}