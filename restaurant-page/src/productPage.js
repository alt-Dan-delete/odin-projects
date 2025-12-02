import homeBackground from "./image.jpg"
import cakeImg1 from "./cakes/cake1.jpg"
import cakeImg2 from "./cakes/cake2.jpg"
import cakeImg3 from "./cakes/cake3.jpg"
import sliceImg1 from "./slices/slice1.jpg"
import sliceImg2 from "./slices/slice2.jpg"
import sliceImg3 from "./slices/slice3.jpg"
import sweetImg1 from "./sweets/sweet1.jpg"
import sweetImg2 from "./sweets/sweet2.jpg"
import sweetImg3 from "./sweets/sweet3.jpg"
import sweetImg4 from "./sweets/sweet4.jpg"
import sweetImg5 from "./sweets/sweet5.jpg"
import sweetImg6 from "./sweets/sweet6.jpg"


export function createProductPage() {
    const divMain = document.getElementById('main');
    divMain.style.backgroundImage = `url('${homeBackground}')`;


    const divContent = document.createElement('div');
    divContent.id = 'content';

    divMain.appendChild(divContent);

    const divTop = document.createElement('div');
    divTop.id = 'top';

    const divProductPage = document.createElement('div');
    divProductPage.id = "productPage";

    const h1Product = document.createElement('h1');
    h1Product.id = 'productH1';
    h1Product.textContent = 'Cakes';
    divProductPage.appendChild(h1Product);


    const divProductCakes = document.createElement('div');
    divProductCakes.id = 'productCakes';

    const divProductCake1 = document.createElement('div');
    divProductCake1.id = 'productItem';
    const divProductCake1img = document.createElement('img');
    divProductCake1img.id = 'productImage';
    divProductCake1img.src = `${cakeImg1}`;
    const divProductCake1h2 = document.createElement('h2');
    divProductCake1h2.textContent = 'Chocolate Cake';
    const divProductCake1h3 = document.createElement('h3');
    divProductCake1h3.textContent = '$10.00';
    divProductCake1.appendChild(divProductCake1img);
    divProductCake1.appendChild(divProductCake1h2);
    divProductCake1.appendChild(divProductCake1h3);

    const divProductCake2 = document.createElement('div');
    divProductCake2.id = 'productItem';
    const divProductCake2img = document.createElement('img');
    divProductCake2img.id = 'productImage';
    divProductCake2img.src = `${cakeImg2}`;
    const divProductCake2h2 = document.createElement('h2');
    divProductCake2h2.textContent = 'Hazel-Vanilla Cake';
    const divProductCake2h3 = document.createElement('h3');
    divProductCake2h3.textContent = '$15.00';
    divProductCake2.appendChild(divProductCake2img);
    divProductCake2.appendChild(divProductCake2h2);
    divProductCake2.appendChild(divProductCake2h3);

    const divProductCake3 = document.createElement('div');
    divProductCake3.id = 'productItem';
    const divProductCake3img = document.createElement('img');
    divProductCake3img.id = 'productImage';
    divProductCake3img.src = `${cakeImg3}`;
    const divProductCake3h2 = document.createElement('h2');
    divProductCake3h2.textContent = 'Srawberry Cake';
    const divProductCake3h3 = document.createElement('h3');
    divProductCake3h3.textContent = '$8.00';
    divProductCake3.appendChild(divProductCake3img);
    divProductCake3.appendChild(divProductCake3h2);
    divProductCake3.appendChild(divProductCake3h3);

    divProductCakes.appendChild(divProductCake1);
    divProductCakes.appendChild(divProductCake2);
    divProductCakes.appendChild(divProductCake3);
    divProductPage.appendChild(divProductCakes);

    const h2Product = document.createElement('h1');
    h2Product.id = 'productH1';
    h2Product.textContent = 'Slices';
    divProductPage.appendChild(h2Product);

    const divProductSlices = document.createElement('div');
    divProductSlices.id = 'productSweets';

    const divProductSlice1 = document.createElement('div');
    divProductSlice1.id = 'productItem';
    const divProductSlice1img = document.createElement('img');
    divProductSlice1img.id = 'productImage';
    divProductSlice1img.src = `${sliceImg1}`;
    const divProductSlice1h2 = document.createElement('h2');
    divProductSlice1h2.textContent = 'Strawberry Slice';
    const divProductSlice1h3 = document.createElement('h3');
    divProductSlice1h3.textContent = '$1.20';
    divProductSlice1.appendChild(divProductSlice1img);
    divProductSlice1.appendChild(divProductSlice1h2);
    divProductSlice1.appendChild(divProductSlice1h3);

    const divProductSlice2 = document.createElement('div');
    divProductSlice2.id = 'productItem';
    const divProductSlice2img = document.createElement('img');
    divProductSlice2img.id = 'productImage';
    divProductSlice2img.src = `${sliceImg2}`;
    const divProductSlice2h2 = document.createElement('h2');
    divProductSlice2h2.textContent = 'Chocolate Cream Slice';
    const divProductSlice2h3 = document.createElement('h3');
    divProductSlice2h3.textContent = '$1.20';
    divProductSlice2.appendChild(divProductSlice2img);
    divProductSlice2.appendChild(divProductSlice2h2);
    divProductSlice2.appendChild(divProductSlice2h3);

    const divProductSlice3 = document.createElement('div');
    divProductSlice3.id = 'productItem';
    const divProductSlice3img = document.createElement('img');
    divProductSlice3img.id = 'productImage';
    divProductSlice3img.src = `${sliceImg3}`;
    const divProductSlice3h2 = document.createElement('h2');
    divProductSlice3h2.textContent = 'Pistaccio Slice';
    const divProductSlice3h3 = document.createElement('h3');
    divProductSlice3h3.textContent = '$1.50';
    divProductSlice3.appendChild(divProductSlice3img);
    divProductSlice3.appendChild(divProductSlice3h2);
    divProductSlice3.appendChild(divProductSlice3h3);

    divProductSlices.appendChild(divProductSlice1);
    divProductSlices.appendChild(divProductSlice2);
    divProductSlices.appendChild(divProductSlice3);
    divProductPage.appendChild(divProductSlices);

    const h3Product = document.createElement('h1');
    h3Product.id = 'productH1';
    h3Product.textContent = 'Sweets';
    divProductPage.appendChild(h3Product);

    const divProductSweets = document.createElement('div');
    divProductSweets.id = 'productSweets';

    const divProductSweet1 = document.createElement('div');
    divProductSweet1.id = 'productItem';
    const divProductSweet1img = document.createElement('img');
    divProductSweet1img.id = 'productImage';
    divProductSweet1img.src = `${sweetImg1}`;
    const divProductSweet1h2 = document.createElement('h2');
    divProductSweet1h2.textContent = 'Chocolate Coin';
    const divProductSweet1h3 = document.createElement('h3');
    divProductSweet1h3.textContent = '$1.00';
    divProductSweet1.appendChild(divProductSweet1img);
    divProductSweet1.appendChild(divProductSweet1h2);
    divProductSweet1.appendChild(divProductSweet1h3);

    const divProductSweet2 = document.createElement('div');
    divProductSweet2.id = 'productItem';
    const divProductSweet2img = document.createElement('img');
    divProductSweet2img.id = 'productImage';
    divProductSweet2img.src = `${sweetImg2}`;
    const divProductSweet2h2 = document.createElement('h2');
    divProductSweet2h2.textContent = 'Strawberry Pancake';
    const divProductSweet2h3 = document.createElement('h3');
    divProductSweet2h3.textContent = '$1.20';
    divProductSweet2.appendChild(divProductSweet2img);
    divProductSweet2.appendChild(divProductSweet2h2);
    divProductSweet2.appendChild(divProductSweet2h3);

    const divProductSweet3 = document.createElement('div');
    divProductSweet3.id = 'productItem';
    const divProductSweet3img = document.createElement('img');
    divProductSweet3img.id = 'productImage';
    divProductSweet3img.src = `${sweetImg3}`;
    const divProductSweet3h2 = document.createElement('h2');
    divProductSweet3h2.textContent = 'Creamball';
    const divProductSweet3h3 = document.createElement('h3');
    divProductSweet3h3.textContent = '$0.70';
    divProductSweet3.appendChild(divProductSweet3img);
    divProductSweet3.appendChild(divProductSweet3h2);
    divProductSweet3.appendChild(divProductSweet3h3);

    const divProductSweet4 = document.createElement('div');
    divProductSweet4.id = 'productItem';
    const divProductSweet4img = document.createElement('img');
    divProductSweet4img.id = 'productImage';
    divProductSweet4img.src = `${sweetImg4}`;
    const divProductSweet4h2 = document.createElement('h2');
    divProductSweet4h2.textContent = 'Honeycomb Slice';
    const divProductSweet4h3 = document.createElement('h3');
    divProductSweet4h3.textContent = '$0.50';
    divProductSweet4.appendChild(divProductSweet4img);
    divProductSweet4.appendChild(divProductSweet4h2);
    divProductSweet4.appendChild(divProductSweet4h3);

    const divProductSweet5 = document.createElement('div');
    divProductSweet5.id = 'productItem';
    const divProductSweet5img = document.createElement('img');
    divProductSweet5img.id = 'productImage';
    divProductSweet5img.src = `${sweetImg5}`;
    const divProductSweet5h2 = document.createElement('h2');
    divProductSweet5h2.textContent = 'Choco Chip';
    const divProductSweet5h3 = document.createElement('h3');
    divProductSweet5h3.textContent = '$0.70';
    divProductSweet5.appendChild(divProductSweet5img);
    divProductSweet5.appendChild(divProductSweet5h2);
    divProductSweet5.appendChild(divProductSweet5h3);

    const divProductSweet6 = document.createElement('div');
    divProductSweet6.id = 'productItem';
    const divProductSweet6img = document.createElement('img');
    divProductSweet6img.id = 'productImage';
    divProductSweet6img.src = `${sweetImg6}`;
    const divProductSweet6h2 = document.createElement('h2');
    divProductSweet6h2.textContent = 'Toffi Chip';
    const divProductSweet6h3 = document.createElement('h3');
    divProductSweet6h3.textContent = '$1.30';
    divProductSweet6.appendChild(divProductSweet6img);
    divProductSweet6.appendChild(divProductSweet6h2);
    divProductSweet6.appendChild(divProductSweet6h3);


    divProductSweets.appendChild(divProductSweet1);
    divProductSweets.appendChild(divProductSweet2);
    divProductSweets.appendChild(divProductSweet3);
    divProductSweets.appendChild(divProductSweet4);
    divProductSweets.appendChild(divProductSweet5);
    divProductSweets.appendChild(divProductSweet6);
    divProductPage.appendChild(divProductSweets);

    const footer = document.createElement('footer');
    divProductPage.appendChild(footer);
    divContent.appendChild(divProductPage);

}