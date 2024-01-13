/* let thumbnail = document.querySelector(".images .big-image"); */
// To update the thumbnail

let galleryImg = document.querySelectorAll(".gallery img");
function updThumbnail(newSrc) {
    let thumbnail = document.querySelector(".images .big-image");
    thumbnail.src = newSrc;
}

//To update the counter 

let minus = document.querySelector("#counter .minus");
let plus = document.querySelector("#counter .plus");
let counter = document.querySelector("#counter p");


function updCounter() {
    let currVal = parseInt(counter.textContent);
    counter.textContent = currVal+1;
}
function decCounter() {
    let currVal = parseInt(counter.textContent);
    if (currVal>1) {
        counter.textContent = currVal-1;
    }
}

//Cart toggle
let showCart = document.querySelector(".hidden-content");

function toggle() {
    if (showCart.style.display==="none" || showCart.style.display==="") {
        showCart.style.display = "block";
    }
    else {
        showCart.style.display = "none";
    }
}
//Cart notification update

let cartButton = document.querySelector("#cart");
let counterVal = document.querySelector("#counter p"); //.textContent
let  bubble = document.querySelector("#cart-notification"); //.textContent

function cartValUpdate() {
    cartButton.addEventListener("click", () => {
        bubble.style.display = "block";
        bubble.textContent = counterVal.textContent;
    });
}
cartValUpdate();

// To update the cart value with the total amount

function changeContent() {
    const cartButton = document.getElementById('cart');
    let counterVal = document.querySelector("#counter p");
    const hiddenContent = document.querySelector('.hidden-content');

    cartButton.addEventListener('click', () => {
    const newContent = document.createElement('div');
    newContent.classList.add('wrapper');

    const heading = document.createElement('h4');
    heading.textContent = 'Cart';
    newContent.appendChild(heading);

    const firstCol = document.createElement('div');
    firstCol.classList.add('first-col');

    const img = document.createElement('img');
    img.src = 'images/image-product-1-thumbnail.jpg';
    img.alt = '';
    firstCol.appendChild(img);

    const textPrice = document.createElement('div');
    textPrice.classList.add('text-price');

    const p2 = document.createElement('p');
    p2.textContent = 'Fall Limited Edition Sneakers';
    textPrice.appendChild(p2);

    const pp = document.createElement('div');
    pp.classList.add('pp');

    const p3 = document.createElement('p');
    const quantity = parseInt(counterVal.textContent, 10);
    const unitP = 125.00;
    const totalP = quantity*unitP;
    p3.textContent = `$${unitP.toFixed(2)} x ${quantity} $${totalP.toFixed(2)}`;
    pp.appendChild(p3);

    textPrice.appendChild(pp);
    firstCol.appendChild(textPrice);

    const del = document.createElement('img');
    del.src = 'images/icon-delete.svg';
    del.alt = '';
    del.classList.add('del');
    del.style.cursor = "pointer";
    del.addEventListener('click', () => {
        resetCart();
    });
    firstCol.appendChild(del);

    newContent.appendChild(firstCol);

    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';
    checkoutButton.onclick = function () {
    alert('Thank You for Shopping with us');
    };
    newContent.appendChild(checkoutButton);
    hiddenContent.innerHTML = '';
    hiddenContent.appendChild(newContent);
    });
}
changeContent();

function resetCart() {
    const hiddenContent = document.querySelector('.hidden-content');
    hiddenContent.innerHTML = '';
    const message = document.createElement('p');
    message.textContent = 'Your Cart is empty';
    hiddenContent.appendChild(message);
}