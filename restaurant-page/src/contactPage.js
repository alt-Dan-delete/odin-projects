import pastryBackground from "./pastry.jpg"

export function createContactPage() {
    const divMain = document.getElementById('main');
    divMain.style.backgroundImage = `url('${pastryBackground}')`;

     const divContent = document.createElement('div');
    divContent.id = 'content';

    divMain.appendChild(divContent);

    const divTop = document.createElement('div');
    divTop.id = 'top';

    const divBottom = document.createElement('div');
    divBottom.id = 'bottom';

    divContent.appendChild(divTop);

    const divContact = document.createElement('div');
    divContact.id = 'contact';

    const h1Contact = document.createElement('h1');
    h1Contact.textContent = 'Contact';
    const dContact = document.createElement('div');
    const h2Contact = document.createElement('h2');
    h2Contact.textContent = '1111 Quest St. West';
    const pContact = document.createElement('p');
    pContact.textContent = 'NEW YORK, ON WEST.AW 12, MAIN ROAD';
    const telContact = document.createElement('p');
    telContact.textContent = 'phone - 111 222 3333';
    const mailContact = document.createElement('p');
    mailContact.textContent = 'info@deligthsbakery.com';


    divContact.appendChild(h1Contact);
    divContact.appendChild(dContact);
    dContact.appendChild(h2Contact);
    dContact.appendChild(pContact);
    divContact.appendChild(telContact);
    divContact.appendChild(mailContact);


    divTop.appendChild(divContact);
}