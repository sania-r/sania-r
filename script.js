function openmail(){
window.open('mailto:sania.rahimian@hotmail.com')
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



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
})


var form = document.querySelector('.form');
var btn = document.getElementById('btn');
var thankyou = document.querySelector('.thankyou');

btn.addEventListener('click', () => {
  form.classList.toggle('active');
  thankyou.classList.toggle('active');
})
