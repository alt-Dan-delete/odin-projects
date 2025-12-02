import homeBackground from "./image.jpg"

export function createHomepage() {


    // const divMain = document.createElement('div');
    // divMain.id = 'main';


    // document.querySelector('body').appendChild(divMain);


    const divMain = document.getElementById('main');

    divMain.style.backgroundImage = `url('${homeBackground}')`;

    // divMain.appendChild(document.createElement('header'));

    const divContent = document.createElement('div');
    divContent.id = 'content';

    divMain.appendChild(divContent);

    const divTop = document.createElement('div');
    divTop.id = 'top';

    const divBottom = document.createElement('div');
    divBottom.id = 'bottom';

    divContent.appendChild(divTop);
    divContent.appendChild(divBottom);

    const divWelcome = document.createElement('div');
    divWelcome.id = 'welcome';
    divTop.style.alignItems = 'end';

    const h1Welcome = document.createElement('h1');
    h1Welcome.textContent = 'Shop Online';
    const pWelcome = document.createElement('p');
    pWelcome.textContent = 'Welcome to our online store, where you can enjoy a wide selection of our treats for pickup or delivery. Order today!';
    const pButton = document.createElement('button');
    pButton.textContent = 'SHOP NOW';
    const pButtonHr = document.createElement('hr');
    pButton.appendChild(pButtonHr);

    divWelcome.appendChild(h1Welcome);
    divWelcome.appendChild(pWelcome);
    divWelcome.appendChild(pButton);

    divTop.appendChild(divWelcome);

    // Occasions Card
    const divBottomOccasions = document.createElement('div');
    divBottomOccasions.id = 'occasions';
    const pBottomOccasions = document.createElement('p');
    pBottomOccasions.textContent = 'Special Occasions';
    const h1BottomOccasions = document.createElement('h1');
    h1BottomOccasions.textContent = 'Beautiful Treats for Every Occasion';
    const p2BottomOccasions = document.createElement('p');
    p2BottomOccasions.textContent = "Whether for a birthday, anniversary or simply as a gift, we've got you covered with beautiful and delicious sweets that will add the perfect touch to your occasion. Voila!";
    divBottomOccasions.appendChild(pBottomOccasions);
    divBottomOccasions.appendChild(h1BottomOccasions);
    divBottomOccasions.appendChild(p2BottomOccasions);

    // Bakery Card
    const divBottomBakery = document.createElement('div');
    divBottomBakery.id = 'bakery';

    // Hours Card
    const divBottomHours = document.createElement('div');
    divBottomHours.id = 'hours';
    const h2BottomHours1 = document.createElement('h2');
    h2BottomHours1.textContent = 'Hours';
    const p1BottomHours = document.createElement('p');
    const p2BottomHours = document.createElement('p');
    const p3BottomHours = document.createElement('p');
    const p4BottomHours = document.createElement('p');
    const p5BottomHours = document.createElement('p');
    const p6BottomHours = document.createElement('p');
    const p7BottomHours = document.createElement('p');
    const h2BottomHours2 = document.createElement('h2');
    const p8BottomHours = document.createElement('p');
    p1BottomHours.textContent = 'Sunday: 8am - 8pm';
    p2BottomHours.textContent = 'Monday: 6am - 6pm';
    p3BottomHours.textContent = 'Tuesday: 6am - 6pm';
    p4BottomHours.textContent = 'Wednesday: 6am - 6pm';
    p5BottomHours.textContent = 'Thursday: 6am - 10pm';
    p6BottomHours.textContent = 'Friday: 6am - 10pm';
    p7BottomHours.textContent = 'Saturday: 8am - 10pm';
    h2BottomHours2.textContent = 'Location';
    p8BottomHours.textContent = '120 Main Valley, Ompatown, Colorado';
    divBottomHours.appendChild(h2BottomHours1);
    divBottomHours.appendChild(p1BottomHours);
    divBottomHours.appendChild(p2BottomHours);
    divBottomHours.appendChild(p3BottomHours);
    divBottomHours.appendChild(p4BottomHours);
    divBottomHours.appendChild(p5BottomHours);
    divBottomHours.appendChild(p6BottomHours);
    divBottomHours.appendChild(p7BottomHours);
    divBottomHours.appendChild(h2BottomHours2);
    divBottomHours.appendChild(p8BottomHours);

    divBottom.appendChild(divBottomOccasions);
    divBottom.appendChild(divBottomBakery);
    divBottom.appendChild(divBottomHours);

    const footer = document.createElement('footer');

    divContent.appendChild(footer);

}