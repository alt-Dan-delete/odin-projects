import "./styles.css";

// index.js
import { createHomepage } from "./homePage.js";
import {createProductPage} from "./productPage.js";
import {createContactPage} from "./contactPage.js";
import logoBakery from "./logo.png"

createHomepage();

const header = document.querySelector('header');
const navBar = document.createElement('nav');

const navLogo = document.createElement('div');
const navLogoImg = document.createElement('img');
navLogo.appendChild(navLogoImg);
navLogoImg.setAttribute('src', `${logoBakery}`);


const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
const cakesButton = document.createElement('button');
cakesButton.textContent = 'Everyday Cakes & Pastries';
const contactButton = document.createElement('button');
contactButton.textContent = 'Contact';

navBar.appendChild(navLogo);
navBar.appendChild(homeButton);
navBar.appendChild(cakesButton);
navBar.appendChild(contactButton);

header.appendChild(navBar);

homeButton.addEventListener('click', () => {
    if (document.getElementById('content') != null){
        clearPage();
    }
    createHomepage();
})

cakesButton.addEventListener('click', () => {    
    if (document.getElementById('content') != null){
    clearPage();
    }
    createProductPage();
})

contactButton.addEventListener('click', () => {    
    if (document.getElementById('content') != null){
    clearPage();
    }
    createContactPage();
})

function clearPage() {
    document.getElementById('content').remove();
}
