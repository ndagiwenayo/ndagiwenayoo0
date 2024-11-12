let cart = [];

function addToCart(itemName) {
    cart.push(itemName);
    alert(`${itemName} has been added to your cart!`);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

function displayGreeting() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    document.getElementById("hero-greeting").innerText = greeting;
}

window.addEventListener("load", displayGreeting);
