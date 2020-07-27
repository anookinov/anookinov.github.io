let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/chelsea-terry-logo.jpeg') {
        myImage.setAttribute ('src', 'images/chelsea-samsung-logo.jpg');
    } else {
        myImage.setAttribute ('src', 'images/chelsea-terry-logo.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Chelsea is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Chelsea is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}