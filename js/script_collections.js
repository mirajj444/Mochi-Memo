function getAllCollections() {
  const collectionsMap = {};

  products.forEach((product) => {
    if (!product.collection) return;

    if (Array.isArray(product.collection)) {
      product.collection.forEach((col) => {
        collectionsMap[col] = (collectionsMap[col] || 0) + 1;
      });
    } else {
      collectionsMap[product.collection] =
        (collectionsMap[product.collection] || 0) + 1;
    }
  });

  return Object.entries(collectionsMap).map(([name, count]) => ({
    name,
    count,
  }));
}

function getSampleProductsForCollection(collectionName) {
  const sampleProducts = [];

  for (const product of products) {
    if (!product.collection) continue;

    if (Array.isArray(product.collection)) {
      if (product.collection.includes(collectionName)) {
        sampleProducts.push(product);
        if (sampleProducts.length >= 4) break;
      }
    } else if (product.collection === collectionName) {
      sampleProducts.push(product);
      if (sampleProducts.length >= 4) break;
    }
  }

  return sampleProducts;
}

function createCollectionCard(collection) {
  const sampleProducts = getSampleProductsForCollection(collection.name);
  const card = document.createElement("div");
  card.className = "collection-card";

  let imageHTML = "";
  if (sampleProducts.length > 0) {
    imageHTML = `
      <div class="collection-image-grid">
        <div class="grid-cell">
          <img src="${sampleProducts[0].image}" alt="${
      collection.name
    }" loading="lazy">
        </div>
        <div class="grid-cell">
          <img src="${
            sampleProducts[1]?.image || sampleProducts[0].image
          }" alt="${collection.name}" loading="lazy">
        </div>
        <div class="grid-cell">
          <img src="${
            sampleProducts[2]?.image || sampleProducts[0].image
          }" alt="${collection.name}" loading="lazy">
        </div>
        <div class="grid-cell">
          <img src="${
            sampleProducts[3]?.image || sampleProducts[0].image
          }" alt="${collection.name}" loading="lazy">
        </div>
      </div>
    `;
  } else {
    imageHTML = `
      <div class="collection-fallback">
        <i class="fas fa-box-open"></i>
      </div>
    `;
  }

  card.innerHTML = `
    <div class="collection-image-container">
      ${imageHTML}
      <div class="collection-overlay">
        <h3 class="collection-title">${collection.name}</h3>
        <div class="product-count">${collection.count} ${
    collection.count === 1 ? "product" : "products"
  }</div>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    const encodedCollection = encodeURIComponent(collection.name);
    window.location.href = `/files/products.html?collection=${encodedCollection}`;
  });

  return card;
}

function displayCollections() {
  const collectionsContainer = document.getElementById("collections-container");
  if (!collectionsContainer) return;

  const collections = getAllCollections();

  collectionsContainer.innerHTML = "";
  collections.forEach((collection) => {
    collectionsContainer.appendChild(createCollectionCard(collection));
  });
}
document.addEventListener("DOMContentLoaded", displayCollections);
