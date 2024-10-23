document.addEventListener('DOMContentLoaded', function() {

  //Animation function start//

function bouncy(){
var animation = bodymovin.loadAnimation({
  container: document.getElementById('animation-container'),
  path: 'logo.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: 'logos'
});
}

bouncy();


function scrolly(){
var start = document.querySelector('.welcome-container');
window.addEventListener("scroll", () => {
  const targetY = 633.5999755859375;
  const scrollY = window.scrollY; 
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scalingValue = 1 + scrollY / maxScroll;
  const opacityValue = 1 - (scrollY / targetY);
  const innerHeight = console.log(scrollY);
  
  
  
  start.style.transform = `scale(${scalingValue})`
  start.style.opacity = opacityValue;
  

});
}

scrolly();



function flashy(){
  var flash = bodymovin.loadAnimation({
    container: document.getElementById('flash-container'),
    path: 'gud.json',
    renderer: 'svg',
    loop: true,
    autoplay: false,
    name: 'logons'
  });

  return flash;
  }

const flashAnimation = flashy();


function toggleflash(){
  const starty = document.getElementById('flash-container');

  window.addEventListener("scroll", () => {
  const targetY = 211.1999969482422;
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollY >= targetY) {
    flashAnimation.play();
    starty.style.opacity = 1;
  } else {
    flashAnimation.stop();
    const opacityValue = Math.max(0, 1 - (targetY - scrollY) / targetY);
    starty.style.opacity = opacityValue;
  }
  
  });
}

toggleflash();

//Other event listeners and functionality//

function openmail(){
window.open('mailto:sania.rahimian@hotmail.com')
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



var btn = document.getElementById('btn')
btn.addEventListener('click', function(e){
  e.preventDefault()
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var body = 'name: '+name + '<br/> email: ' + email + '<br/> message: '+message;

  Email.send({
    SecureToken : "f30f2a8a-6520-4dca-8665-f13197ffc878",
    To : 'sania.rahimian@hotmail.com',
    From : "designbysaniaa@gmail.com",
    Subject : "New message",
    Body : body
}).then(
  message => alert(message)
);
});


var form = document.querySelector('.form');
var btn = document.getElementById('btn');
var thankyou = document.querySelector('.thankyou');

btn.addEventListener('click', () => {
  form.classList.toggle('active');
  thankyou.classList.toggle('active');
});


});

