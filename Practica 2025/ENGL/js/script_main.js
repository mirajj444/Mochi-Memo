const StorageManager = {
  initializeStorage: (key, defaultValue) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      const counter = document.querySelector(`.${key}-counter`);
      if (counter) counter.textContent = defaultValue.length;
    }
  },

  getItems: (key) => JSON.parse(localStorage.getItem(key)) || [],

  setItems: (key, items) => {
    localStorage.setItem(key, JSON.stringify(items));
  },
};

const CounterManager = {
  updateCounter: (selector, count) => {
    const counter = document.querySelector(selector);
    if (counter) {
      counter.textContent = count;
      counter.style.display = "flex";
    }
  },

  updateWishlistCounter: () => {
    const wishlist = StorageManager.getItems("wishlist");
    CounterManager.updateCounter(".wishlist-counter", wishlist.length);
  },

  updateCartCounter: () => {
    const cart = StorageManager.getItems("cart");
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    CounterManager.updateCounter(".cart-counter", totalItems);
  },
};

const CartRenderer = {
  renderCartItems: (items, products) => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalPrice = document.querySelector(".total-price");

    if (items.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart">
          <i class="fas fa-shopping-bag"></i>
          <p>Your cart is empty</p>
        </div>
      `;
      totalPrice.textContent = "$0.00";
      return;
    }

    let cartHTML = "";
    let total = 0;

    items.forEach((item) => {
      const product = products.find((p) => p.id === item.id) || item;
      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      cartHTML += `
        <div class="cart-item" data-id="${item.id}">
          <img src="${product.image}" alt="${
        product.name
      }" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-name">${product.name}</h4>
            <p class="cart-item-price">$${product.price.toFixed(2)}</p>
            <div class="cart-item-actions">
              <div class="quantity-control">
                <button class="quantity-btn minus">-</button>
                <input type="number" class="quantity-input" value="${
                  item.quantity
                }" min="1">
                <button class="quantity-btn plus">+</button>
              </div>
              <button class="remove-item">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    });

    cartItemsContainer.innerHTML = cartHTML;
    totalPrice.textContent = `$${total.toFixed(2)}`;

    CartRenderer.setupCartEventListeners();
  },

  setupCartEventListeners: () => {
    document.querySelectorAll(".quantity-btn.minus").forEach((btn) => {
      btn.addEventListener("click", function () {
        const input = this.nextElementSibling;
        if (parseInt(input.value) > 1) {
          input.value = parseInt(input.value) - 1;
          cartManager.updateQuantity(
            parseInt(this.closest(".cart-item").dataset.id),
            parseInt(input.value),
            products
          );
        }
      });
    });

    document.querySelectorAll(".quantity-btn.plus").forEach((btn) => {
      btn.addEventListener("click", function () {
        const input = this.previousElementSibling;
        input.value = parseInt(input.value) + 1;
        cartManager.updateQuantity(
          parseInt(this.closest(".cart-item").dataset.id),
          parseInt(input.value),
          products
        );
      });
    });

    document.querySelectorAll(".quantity-input").forEach((input) => {
      input.addEventListener("change", function () {
        if (parseInt(this.value) < 1) this.value = 1;
        cartManager.updateQuantity(
          parseInt(this.closest(".cart-item").dataset.id),
          parseInt(this.value),
          products
        );
      });
    });

    document.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", function () {
        cartManager.removeItem(
          parseInt(this.closest(".cart-item").dataset.id),
          products
        );
      });
    });
  },
};

window.wishlistManager = {
  addItem: (productId) => {
    const wishlist = StorageManager.getItems("wishlist");
    if (!wishlist.includes(productId)) {
      wishlist.push(productId);
      StorageManager.setItems("wishlist", wishlist);
      CounterManager.updateWishlistCounter();
    }
  },

  removeItem: (productId) => {
    let wishlist = StorageManager.getItems("wishlist");
    wishlist = wishlist.filter((id) => id !== productId);
    StorageManager.setItems("wishlist", wishlist);
    CounterManager.updateWishlistCounter();
  },

  getItems: () => StorageManager.getItems("wishlist"),

  isInWishlist: (productId) => {
    const wishlist = StorageManager.getItems("wishlist");
    return wishlist.includes(productId);
  },
};

window.cartManager = {
  addItem: (productId, products) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    let cart = StorageManager.getItems("cart");
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    StorageManager.setItems("cart", cart);
    CounterManager.updateCartCounter();

    if (document.querySelector(".cart-sidebar.active")) {
      CartRenderer.renderCartItems(this.getItems(), products);
    }
  },

  removeItem: (productId, products) => {
    let cart = StorageManager.getItems("cart");
    cart = cart.filter((item) => item.id !== productId);
    StorageManager.setItems("cart", cart);
    CounterManager.updateCartCounter();

    if (document.querySelector(".cart-sidebar.active")) {
      CartRenderer.renderCartItems(this.getItems(), products);
    }
  },

  updateQuantity: (productId, newQuantity, products) => {
    let cart = StorageManager.getItems("cart");
    const item = cart.find((item) => item.id === productId);

    if (item) {
      if (newQuantity > 0) {
        item.quantity = newQuantity;
      } else {
        cart = cart.filter((item) => item.id !== productId);
      }
      StorageManager.setItems("cart", cart);
      CounterManager.updateCartCounter();

      if (document.querySelector(".cart-sidebar.active")) {
        CartRenderer.renderCartItems(this.getItems(), products);
      }
    }
  },

  getItems: () => StorageManager.getItems("cart"),

  clearCart: (products) => {
    StorageManager.setItems("cart", []);
    CounterManager.updateCartCounter();

    if (document.querySelector(".cart-sidebar.active")) {
      CartRenderer.renderCartItems([], products);
    }
  },
};

const CheckoutManager = {
  loadCheckoutItems: (products) => {
    const cart = cartManager.getItems();
    const orderItemsContainer = document.getElementById("orderItems");
    const subtotalElement = document.getElementById("subtotal");
    const grandTotalElement = document.getElementById("grandTotal");

    let subtotal = 0;

    if (cart.length === 0) {
      orderItemsContainer.innerHTML = "<p>Your cart is empty</p>";
    } else {
      let itemsHTML = "";

      cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        itemsHTML += `
          <div class="order-item">
            <img src="${item.image}" alt="${item.name}" class="order-item-img">
            <div class="order-item-details">
              <div class="order-item-name">${item.name} × ${item.quantity}</div>
              <div class="order-item-price">$${itemTotal.toFixed(2)}</div>
            </div>
          </div>
        `;
      });

      orderItemsContainer.innerHTML = itemsHTML;
    }

    const shipping = 5.0;
    const grandTotal = subtotal + shipping;

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    grandTotalElement.textContent = `$${grandTotal.toFixed(2)}`;
  },

  handleCheckoutSubmit: (e) => {
    e.preventDefault();
    cartManager.clearCart(products);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 400);
  },
};

const UIHandlers = {
  toggleWishlist: (productId, event) => {
    event.stopPropagation();
    const button = event.currentTarget;

    if (wishlistManager.isInWishlist(productId)) {
      wishlistManager.removeItem(productId);
      button.classList.remove("active");
    } else {
      wishlistManager.addItem(productId);
      button.classList.add("active");
    }
  },

  addToCart: (productId, event) => {
    if (event) event.stopPropagation();
    cartManager.addItem(productId, products);
  },

  setupCartSidebar: () => {
    const cartToggle = document.getElementById("cart-toggle");
    const cartSidebar = document.querySelector(".cart-sidebar");
    const cartOverlay = document.querySelector(".cart-overlay");
    const closeCart = document.querySelector(".close-cart");

    if (cartToggle) {
      cartToggle.addEventListener("click", (e) => {
        e.preventDefault();
        cartSidebar.classList.add("active");
        cartOverlay.classList.add("active");
        CartRenderer.renderCartItems(cartManager.getItems(), products);
      });
    }

    const checkoutBtn = document.querySelector(".checkout-btn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        cartSidebar.classList.remove("active");
        cartOverlay.classList.remove("active");
        window.location.href = "checkout.html";
      });
    }

    if (closeCart) {
      closeCart.addEventListener("click", () => {
        cartSidebar.classList.remove("active");
        cartOverlay.classList.remove("active");
      });
    }

    if (cartOverlay) {
      cartOverlay.addEventListener("click", () => {
        cartSidebar.classList.remove("active");
        cartOverlay.classList.remove("active");
      });
    }
  },

  setupSearch: () => {
    if (window.innerWidth > 790) {
      const searchIcon = document.querySelector(".search_icon");
      const searchBar = document.querySelector(".search_bar");
      const searchInput = searchBar?.querySelector("input");

      searchIcon?.addEventListener("click", (e) => {
        e.stopPropagation();
        searchBar.classList.toggle("active");
        if (searchBar.classList.contains("active")) {
          searchInput.focus();
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchBar?.classList.contains("active")) {
          searchBar.classList.remove("active");
        }
      });

      searchBar?.addEventListener("click", (e) => e.stopPropagation());
    }
  },

  setupProfileDropdown: () => {
    const profileDropdown = document.querySelector(".profile-dropdown");
    const profileIcon = document.querySelector(".profile-icon");
    const dropdownContent = document.querySelector(".dropdown-content");
    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");

    const toggleDropdown = () => {
      if (window.innerWidth <= 790) {
        dropdownContent.classList.toggle("show");
      }
    };

    const closeDropdown = (e) => {
      if (!profileDropdown?.contains(e.target)) {
        dropdownContent?.classList.remove("show");
      }
    };

    profileIcon?.addEventListener("click", (e) => {
      if (window.innerWidth <= 790) {
        e.preventDefault();
        toggleDropdown();
      }
    });
  },

  setupLanguageToggle: () => {
    const languageText = document.getElementById("languageText");
    const languageToggle = document.querySelector(".language-toggle");

    if (languageText && languageToggle) {
      const currentUrl = window.location.pathname;
      const isRomanian = currentUrl.includes("RO.html");
      languageText.textContent = isRomanian ? "EN" : "RO";

      languageToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const currentUrl = window.location.pathname;
        const isRomanian = currentUrl.includes("RO.html");

        if (isRomanian) {
          const newUrl = currentUrl.replace("RO.html", ".html");
          const finalUrl = newUrl.endsWith("RO") ? newUrl.slice(0, -2) : newUrl;
          window.location.href = finalUrl;
        } else {
          const newUrl = currentUrl.replace(".html", "RO.html");
          const finalUrl = newUrl.includes(".html")
            ? newUrl
            : currentUrl + "RO.html";
          window.location.href = finalUrl;
        }
      });
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  StorageManager.initializeStorage("cart", []);
  StorageManager.initializeStorage("wishlist", []);
  CounterManager.updateWishlistCounter();
  CounterManager.updateCartCounter();

  UIHandlers.setupCartSidebar();
  UIHandlers.setupSearch();
  UIHandlers.setupProfileDropdown();
  UIHandlers.setupLanguageToggle();

  if (document.getElementById("checkoutForm")) {
    CheckoutManager.loadCheckoutItems(products);
    document
      .getElementById("checkoutForm")
      .addEventListener("submit", CheckoutManager.handleCheckoutSubmit);
  }
});
