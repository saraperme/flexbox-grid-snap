const toggleClass = document.querySelectorAll('.toggle_class')[0];
const toggleClassTwo = document.querySelectorAll('.toggle_class')[1];
const toggleButton = document.querySelectorAll('.toggle_button')[0];
const toggleButtonTwo = document.querySelectorAll('.toggle_button')[1];
const toggleBars = document.querySelectorAll('.toggle_bars')[0];
const rightMobile = document.querySelectorAll('.right_mobile')[0];
const image = document.querySelector('.image');
const screen = document.querySelector('.container');
const screen2 = document.querySelector('header');

toggleButton.addEventListener('click', () => {
    toggleClass.classList.toggle('active')
  })

toggleButtonTwo.addEventListener('click', () => {
    toggleClassTwo.classList.toggle('active')
  })  

  toggleBars.addEventListener('click', () => {
    rightMobile.classList.toggle('active')
    toggleBars.classList.toggle('active')
    screen.classList.toggle('active')
    screen2.classList.toggle('active')
  })  


  window.onresize = function(){ 
  if (window.innerWidth<=800){
    image.src='image-hero-mobile.png'
  }
  else{
    image.src='image-hero-desktop.png'
  }
}