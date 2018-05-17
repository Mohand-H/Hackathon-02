class Random extends Component {
render(){
    return(

const getRandomId = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min +1)) + min               
}

const game = () => {

const gifBlock = document.getElementById("gif-block")
gifBlock.innerHTML = ''
document.getElementById("name-form").value = ''

fetch(`https://akabab.github.io/starwars-api/api/all.json`)
  .then(response => response.json())
  .then(aliens => {
  const random = getRandomId(0, aliens.length)
  const alien = aliens[random].id
  const alien_pic = aliens[random].id
  const choseOne = document.getElementById("image")
  image.innerHTML = createImage()
  const createImage = image =>
  `<div id="image">
  <img src="${image}">
  </div>

  export default Random