const disses = [
  {
    id: 1,
    title: "Waffle with Berries",
    subTitle: "Waffle",
    mobileImage: "assets/images/image-waffle-mobile.jpg",
    desktopImage: "assets/images/image-waffle-desktop.jpg",
    tabletImage: "assets/images/image-waffle-tablet.jpg",
    thumbnail: "assets/images/image-waffle-thumbnail.jpg",
    price: "6.50",
  },
  {
    id: 2,
    title: "Vanilla Bean Creme Brulee",
    subTitle: "Creme Brulee",
    mobileImage: "assets/images/image-creme-brulee-mobile.jpg",
    desktopImage: "assets/images/image-creme-brulee-desktop.jpg",
    tabletImage: "assets/images/image-creme-brulee-tablet.jpg",
    thumbnail: "assets/images/image-creme-brulee-thumbnail.jpg",
    price: "7.00",
  },
  {
    id: 3,
    title: "Macaron Mix of Five",
    subTitle: "Macaron",
    mobileImage: "assets/images/image-macaron-mobile.jpg",
    desktopImage: "assets/images/image-macaron-desktop.jpg",
    tabletImage: "assets/images/image-macaron-tablet.jpg",
    thumbnail: "assets/images/image-macaron-thumbnail.jpg",
    price: "8.00",
  },
  {
    id: 4,
    title: "Classic Tiramisu",
    subTitle: "Tiramisu",
    mobileImage: "assets/images/image-tiramisu-mobile.jpg",
    desktopImage: "assets/images/image-tiramisu-desktop.jpg",
    tabletImage: "assets/images/image-tiramisu-tablet.jpg",
    thumbnail: "assets/images/image-tiramisu-thumbnail.jpg",
    price: "5.50",
  },
  {
    id: 5,
    title: "Pistachio Baklava",
    subTitle: "Baklava",
    mobileImage: "assets/images/image-baklava-mobile.jpg",
    desktopImage: "assets/images/image-baklava-desktop.jpg",
    tabletImage: "assets/images/image-baklava-tablet.jpg",
    thumbnail: "assets/images/image-baklava-thumbnail.jpg",
    price: "4.00",
  },
  {
    id: 6,
    title: "Lemon Meringue Pie",
    subTitle: "Pie",
    mobileImage: "assets/images/image-meringue-mobile.jpg",
    desktopImage: "assets/images/image-meringue-desktop.jpg",
    tabletImage: "assets/images/image-meringue-tablet.jpg",
    thumbnail: "assets/images/image-meringue-thumbnail.jpg",
    price: "5.00",
  },
  {
    id: 7,
    title: "Red Velvet Cake",
    subTitle: "Cake",
    mobileImage: "assets/images/image-cake-mobile.jpg",
    desktopImage: "assets/images/image-cake-desktop.jpg",
    tabletImage: "assets/images/image-cake-tablet.jpg",
    thumbnail: "assets/images/image-cake-thumbnail.jpg",
    price: "4.50",
  },
  {
    id: 8,
    title: "Salted Caramel Brownie",
    subTitle: "Brownie",
    mobileImage: "assets/images/image-brownie-mobile.jpg",
    desktopImage: "assets/images/image-brownie-desktop.jpg",
    tabletImage: "assets/images/image-brownie-tablet.jpg",
    thumbnail: "assets/images/image-brownie-thumbnail.jpg",
    price: "5.50",
  },
  {
    id: 9,
    title: "Vanilla Panna Cotta",
    subTitle: "Panna Cotta",
    mobileImage: "assets/images/image-panna-cotta-mobile.jpg",
    desktopImage: "assets/images/image-panna-cotta-desktop.jpg",
    tabletImage: "assets/images/image-panna-cotta-tablet.jpg",
    thumbnail: "assets/images/image-panna-cotta-thumbnail.jpg",
    price: "6.50",
  },
];

const parent = document.getElementById("cards");

const increase = (id) => {
  let itemNumber = parseInt(localStorage.getItem(`product-number-${id}`));
  itemNumber = itemNumber ? parseInt(itemNumber) : 0;
  localStorage.setItem(`product-number-${id}`, ++itemNumber);
  itemNumber !== 0
    ? (document.getElementById(`dec-${id}`).disabled = false)
    : (getElementById(`dec-${id}`).disabled = true);
  document.getElementById(`itemNumber-${id}`).innerText = itemNumber;
};

const decrease = (id) => {
  let itemNumber = parseInt(localStorage.getItem(`product-number-${id}`));
  itemNumber = itemNumber > 0 ? --itemNumber : 0;

  localStorage.setItem(`product-number-${id}`, itemNumber);
  const decrementButton = document.getElementById(`dec-${id}`);
  decrementButton.disabled = itemNumber === 0;
  document.getElementById(`itemNumber-${id}`).innerText = itemNumber;
};

const removeFromCart = (key) => {
  localStorage.setItem(key, 0);
};

function updateQuantities() {
  disses.forEach((dies) => {
    const itemQuantity = localStorage.getItem(`product-number-${dies.id}`)
      ? parseInt(localStorage.getItem(`product-number-${dies.id}`))
      : 0;

    const quantityDisplay = document.getElementById(`itemNumber-${dies.id}`);
    if (quantityDisplay) {
      quantityDisplay.textContent = itemQuantity;
    }
  });
}

const confirm = () => {
  document.getElementsByClassName("pop-up")[0].style.display = "flex";
};

const newOrderPlace = () => {
  const arrayOfObjects = Object.entries(localStorage).map(([key, value]) => ({
    key,
    value,
  }));
  arrayOfObjects.forEach((item) => {
    localStorage.setItem(item.key, 0);
  });
  document.getElementsByClassName("pop-up")[0].style.display = "none";
};

disses.forEach((dies, index) => {
  const imageSrc =
    window.innerWidth <= 600
      ? dies.mobileImage
      : window.innerWidth <= 700
      ? dies.tabletImage
      : dies.desktopImage;

  const content = `
    <div class="card">
      <img src="${imageSrc}" alt="${dies.subTitle}" class="dies-img"/>
      <div class="popup-button">
        <div class="btn">
          <div class="ele">
            <img src="assets/images/icon-add-to-cart.svg" alt="card" />
            <small>Add to Cart</small>
          </div>
          <div class="incDec">
            <button id="inc" onclick="increase(${dies.id})">+</button>
            <small id="itemNumber-${dies.id}" class="itemNumber"
              >0</small
            >
            <button
              id="dec-${dies.id}"
              class="dec"
                ${
                  !localStorage.getItem(`product-number-${dies.id}`) ||
                  parseInt(
                    localStorage.getItem(`product-number-${dies.id}`)
                  ) === 0
                    ? "disabled"
                    : ""
                }

              onclick="decrease(${dies.id})"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div class="details">
        <small>${dies.subTitle}</small>
        <p>${dies.title}</p>
        <p class="price">$${dies.price}</p>
      </div>
    </div>`;
  parent.innerHTML += content;
});

const displayCartItem = () => {
  let productList = document.getElementById("product-list");

  const arrayOfObjects = Object.entries(localStorage).map(([key, value]) => ({
    key,
    value,
  }));
  let vender;

  let TotalPrice = 0;
  let text = "";
  arrayOfObjects.forEach((item, idx) => {
    if (parseInt(item.value) !== 0) {
      const id = parseInt(item.key.substring(item.key.length - 1));
      if (id !== null) {
        vender = disses.find((x) => x.id === id);

        const Price = parseFloat(vender.price) * parseFloat(item.value);

        TotalPrice = TotalPrice + Price;

        if (vender) {
          text += `
          <div class="card-container">
            <div> 
              <div class="cart-heading">
                <p class="cart-title">${vender.title}</p>
                <div class="cart-overview">
                  <p class="quantity">${parseFloat(item.value)}x</p>
                  <p class="itemPrice">$${Price}</p>
                </div>
              </div>
            </div>
         <div class="delete" onclick="removeFromCart('${item.key}')">
  <img src="assets/images/icon-remove-item.svg"/>
</div>

          </div>
          `;
        }
      }
    }

    const totalItem = arrayOfObjects.reduce((total, num) => {
      return total + parseFloat(num.value);
    }, 0);

    if (totalItem !== 0) {
      document.getElementById("number").innerHTML = totalItem;
    } else {
      document.getElementById("number").innerHTML = 0;
    }
  });

  const totalPriceSection = `<div class="totalSection">
            <p>Order Total</p>
            <h1>$${TotalPrice}</h1>
          </div>`;

  const confirmButton = `<div class="btn-container"><button class="btn-con" onclick="confirm()">Confirm Order</button></div>`;

  if (text) {
    productList.innerHTML = text;
    productList.innerHTML += totalPriceSection;
    productList.innerHTML += confirmButton;
  } else {
    productList.innerHTML = `   <img
            src="assets/images/illustration-empty-cart.svg"
            alt="empty-cart"
          />
          <p id="empty-text">Your added items will appear here</p>`;
  }
};

const displayOrderConfirm = () => {
  let productList = document.getElementById("product-list-container");
  let newOrder = document.getElementById("confirmed-order-button");

  const arrayOfObjects = Object.entries(localStorage).map(([key, value]) => ({
    key,
    value,
  }));

  let vender;

  let TotalPrice = 0;
  let text = "";
  arrayOfObjects.forEach((item, idx) => {
    if (parseInt(item.value) !== 0) {
      const id = parseInt(item.key.substring(item.key.length - 1));
      if (id !== null) {
        vender = disses.find((x) => x.id === id);

        const Price = parseFloat(vender.price) * parseFloat(item.value);

        TotalPrice = TotalPrice + Price;

        if (vender) {
          text += `
          <div class="order-container">
            <div class="order-contain">
            <img src="${vender.thumbnail}"/>
              <div class="order-heading">
                <p class="order-title">${vender.title}</p>
                 <div class="quantity-price"><p class="order-quantity">${parseFloat(
                   item.value
                 )}x</p> <span class="single-price">@ $${
            vender.price
          }</span></div> 
              </div>
            </div>
         <div>
  $${Price}
</div>
          </div>
          `;
        }
      }
    }
  });

  const totalPriceSection = `<div class="totalSection">
            <p>Order Total</p>
            <h1>$${TotalPrice}</h1>
          </div>`;

  newOrder.innerHTML = `<button id="confirmed-order"  onclick="newOrderPlace()">Start new order</button>`;

  if (text) {
    productList.innerHTML = text;
    productList.innerHTML += totalPriceSection;
  }
};

setInterval(displayOrderConfirm, 1000);

setInterval(displayCartItem, 1000);

setInterval(updateQuantities, 1000);
