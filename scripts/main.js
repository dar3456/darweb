//image switcher
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vada.jpg') {
      myImage.setAttribute ('src','images/next.jpg');
    } else {
      myImage.setAttribute ('src','images/vada.jpg');
    }
}
// user name in heading
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.'); //prompt user to enter name
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}







// JavaScript Document
//var myHeading = document.querySelector('h1');//grab reference to heading h1
//myHeading.textContent = 'Hello world!';
/* multi line 
	commnet */
//alert('hello'); //pop up messeges
//function example
//function multiply(num1,num2) {
//	var result = num1*num2;
//	return result;
//}
/* conditional
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
*/

/* Events example */
//document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop poking me!');
//}
/* clciking will lead to run a function
document.querySelector('html').onclick = function() {};
is equivalent to

var myHTML = document.querySelector('html');
myHTML.onclick = function() {};\
*/



