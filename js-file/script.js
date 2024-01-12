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
