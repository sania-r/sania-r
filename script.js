document.addEventListener('DOMContentLoaded', function() {

//naven//
fetch("nav.html")
  .then(response => response.text())
  .then(navHTML => {
    document.querySelector(".navbar").innerHTML = navHTML;

  //runs after//
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})
);
});

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
var neony = document.getElementById('overlay-container');
var video = neony.querySelector('video');

video.playbackRate = 1.0;

let played = false;  // Flag to track if the video has played once

window.addEventListener("scroll", () => {
  const targetY = 633.5999755859375;
  const scrollY = window.scrollY; 

  //parameters for welcome-container//
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scalingValue = 1 + scrollY / maxScroll;
  const opacityValue = Math.max(0, 1 - (scrollY / targetY));

  //applying for welcome-container//
  start.style.transform = `scale(${scalingValue})`;
  start.style.opacity = opacityValue;


  const innerHeight = console.log(scrollY);
  
//parameters for neon layer fade//
 const targetZ = 105.5999984741211;
 const neonyOpacity = Math.max(0, Math.min(1, (scrollY - targetZ)));

 //applying neon opacity and playback//
  if (scrollY >= targetZ && !played) {
    neony.style.opacity = 1;
    video.play();
    played = true;
  }
  
  if (scrollY < targetZ) {
    played = false;
    video.currentTime = 0;
    video.pause();
    neony.style.opacity = 0;
  }

});
}

scrolly();

function scrolleryy(){
  var arrow = document.getElementById('scrollery');

  arrow.addEventListener("click", () =>{
    window.scrollTo (0, 700);
  });

}
scrolleryy();

function colorchange(){
  var project = document.querySelector('.project-container');
  
window.addEventListener("scroll", () => {
  const targetY = 605;
  const scrollY = window.scrollY; 



  //appliance//

 
  if (scrollY > targetY){ 
  project.style.backgroundColor = "white";
} else {
  project.style.backgroundColor = "rgba(251, 14, 91, 0.2)";
}

});

}

colorchange();


//Other event listeners and functionality//




});

