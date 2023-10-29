import {im} from './module/maskPhone'
import {request} from './module/ajaxModule'

let phoneInput = document.querySelector('#phone');
let emailInput = document.querySelector('#email');
let nameInput = document.querySelector('#name');
let massageInput = document.querySelector('#massage');
let form = document.querySelector('.form');
let msgGood = document.querySelector(".msgGood")

var scrollbar = document.body.clientWidth - window.innerWidth + 'px';

im.mask(phoneInput);

const url = "http://localhost:9090/api/form";
request.responseType = "json"
form.addEventListener('submit', function(event){
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    event.preventDefault();
        let data  = {
            "name" : nameInput.value,
            "email" : emailInput.value,
            "phone" : phoneInput.value,
            "massage" : massageInput.value
        }
        request.send(JSON.stringify(data));
})


nameInput.addEventListener('focus', function(){
    msgGood.disabled = true;
    nameInput.nextElementSibling.innerHTML = ''
    nameInput.classList.remove("remove")
})

emailInput.addEventListener('focus', function(){
    msgGood.disabled = true;
    emailInput.nextElementSibling.innerHTML = ''
    emailInput.classList.remove("remove")
})

phoneInput.addEventListener('focus', function(){
    msgGood.disabled = true;
    phoneInput.nextElementSibling.innerHTML = ''
    phoneInput.classList.remove("remove")
})

massageInput.addEventListener('focus', function(){
    msgGood.disabled = true;
    massageInput.nextElementSibling.innerHTML = ''
    massageInput.classList.remove("remove")
})

document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.documentElement.classList.add("non-scroll")
    document.querySelector('body').style.marginLeft = scrollbar;
    document.querySelector('#openModal').style.marginLeft = scrollbar;
});

document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.documentElement.classList.remove("non-scroll")
    document.querySelector('body').style.marginLeft = "0px";
    document.querySelector('#openModal').style.marginLeft = "0px";
});



