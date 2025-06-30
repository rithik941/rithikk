const menuItems = [
  { name: "BBQ Ribs", price: 299 },
  { name: "Grilled Chicken", price: 199 },
  { name: "Smoked Brisket", price: 349 },
  { name: "BBQ Sausages", price: 179 },
  { name: "Cornbread", price: 59 },
  { name: "Coleslaw", price: 49 },
  { name: "BBQ Beans", price: 69 }
];

let cart = [];

const menuListEl = document.getElementById("menu-list");
const cartListEl = document.getElementById("cart-list");
const cartTotalEl = document.getElementById("cart-total");
const placeOrderBtn = document.getElementById("place-order");

function renderMenu() {
  menuItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button onclick="addToCart(${index})">Add</button>
    `;
    menuListEl.appendChild(li);
  });
}

function addToCart(index) {
  const item = menuItems[index];
  const existing = cart.find(c => c.name === item.name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  renderCart();
}

function renderCart() {
  cartListEl.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} × ${item.qty} - ₹${item.price * item.qty}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartListEl.appendChild(li);
  });

  cartTotalEl.textContent = `Total: ₹${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

placeOrderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  let summary = "Thank you for your order!\n\nItems:\n";
  cart.forEach(item => {
    summary += `- ${item.qty} × ${item.name} = ₹${item.price * item.qty}\n`;
  });
  alert(summary);
  cart = [];
  renderCart();
});

renderMenu();
