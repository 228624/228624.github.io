

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
 Clipboard
function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    myHeading.textContent = '同道中人' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } 
  myButton.onclick = function() {
    setUserName();
 }
 function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'oh 同道中人，' + myName;
    }
  }