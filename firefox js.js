// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'Mcdonalds_France_2009_logo.svg (1).png') {
    myImage.setAttribute ('src','mcdonald-s-logo-6061A7A275-seeklogo.com.png');
  } else {
    myImage.setAttribute ('src','Mcdonalds_France_2009_logo.svg (1).png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Bienvenue, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bienvenue, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
