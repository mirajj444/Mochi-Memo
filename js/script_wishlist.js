document.addEventListener("DOMContentLoaded", function () {
  renderWishlistItems();
  updateWishlistCounter();
});

function renderWishlistItems() {
  const wishlistGrid = document.getElementById("wishlist-grid");
  const wishlistCountElement = document.getElementById("wishlist-count");
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  wishlistGrid.innerHTML = "";

  const itemCount = wishlist.length;
  wishlistCountElement.textContent = `${itemCount} ${
    itemCount === 1 ? "item" : "items"
  }`;

  if (itemCount === 0) {
    wishlistGrid.innerHTML = `
        <div class="empty-wishlist">
          <i class="fas fa-heart"></i>
          <h3>Your wishlist is empty</h3>
          <p>Save your favorite items here for later</p>
          <a href="products.html" class="shop-btn">Shop Now</a>
        </div>
      `;
    return;
  }

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  wishlistProducts.forEach((product) => {
    const productCard = createWishlistItem(product);
    wishlistGrid.appendChild(productCard);
  });
}

function createWishlistItem(product) {
  const productCard = document.createElement("div");
  productCard.className = "wishlist-item";
  productCard.setAttribute("data-product-id", product.id);

  productCard.addEventListener("click", function (e) {
    if (!e.target.closest(".wishlist-remove-btn, .add-to-cart-btn")) {
      navigateToProduct(product.id);
    }
  });

  productCard.innerHTML = `
      <div class="wishlist-item-image" style="background-image: url('${
        product.image
      }')">
        <button class="wishlist-remove-btn" onclick="removeFromWishlist(${
          product.id
        }, event)">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="wishlist-item-details">
        <h3 class="wishlist-item-name">${product.name}</h3>
        <div class="wishlist-item-footer">
          <div class="wishlist-item-price">$${product.price.toFixed(2)}</div>
          <button class="add-to-cart-btn" onclick="addToCart(${
            product.id
          }, event)">
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    `;

  return productCard;
}

function navigateToProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}

function removeFromWishlist(productId, event) {
  if (event) event.stopPropagation();

  wishlistManager.removeItem(productId);
  renderWishlistItems();
  updateWishlistCounter();

  document
    .querySelectorAll(`.wishlist-btn[onclick*="${productId}"]`)
    .forEach((btn) => {
      btn.classList.remove("active");
    });
}
