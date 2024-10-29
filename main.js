var demi = document.querySelector(".emi");
function demiToggle(){
    let i = 1; // Initialize counter
    
    while (i <= 10) {
        demi.classList.add("emi-height"); // Add class with dynamic value
        i++; // Increment counter
    }
}

document.addEventListener("DOMContentLoaded", loadCart);

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.name === name);
  
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItemsDiv = document.getElementById("cart-items");
  let totalPrice = 0;

  cartItemsDiv.innerHTML = ""; // Clear the current cart display

  cart.forEach(item => {
    let itemDiv = document.createElement("div");
    itemDiv.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItemsDiv.appendChild(itemDiv);

    totalPrice += item.price * item.quantity;
  });

  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  document.getElementById("cart-count").textContent = itemCount;
}

function loadCart() {
  displayCart();
  updateCartCount();
}
function clearCart() {
    // Remove the cart from localStorage
    localStorage.removeItem("cart");
  
    // Reset the cart count display to zero
    document.getElementById("cart-count").textContent = 0;
  
    // Clear the cart display (assuming a div with id "cart-items" shows cart contents)
    document.getElementById("cart-items").innerHTML = "";
  
    // Reset the total price display
    document.getElementById("total-price").textContent = "0.00";
  }
