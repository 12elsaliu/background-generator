(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const body = document.getElementById('body')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const random = document.getElementsByTagName('button')[0]


color1.addEventListener('input', () => {
  body.style.background = 'linear-gradient(to right,' + color1.value + ',' + color2.value + ')'
  //should be in string because you write the attribute value in string
  //Use all '' or all ""
})

color2.addEventListener('input', () => {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

random.addEventListener('click', () => {
  color1.value = getRandomColor()
  color2.value = getRandomColor()
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
})
},{}]},{},[1]);
