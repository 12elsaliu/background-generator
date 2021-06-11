const body = document.getElementById('body')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const random = document.getElementsByTagName('button')[0]
const info = document.getElementById('text')


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

function setInfo(color1,color2){
  const text = document.createTextNode(`background-color: linear-gradient(to right, ${color1}, ${color2})`)

  info.appendChild(text);
}
function cleanInfo(){
  info.innerHTML = '';

}
random.addEventListener('click', () => {
  cleanInfo()
  color1.value = getRandomColor()
  color2.value = getRandomColor()
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
  setInfo(color1.value,color2.value)
})
