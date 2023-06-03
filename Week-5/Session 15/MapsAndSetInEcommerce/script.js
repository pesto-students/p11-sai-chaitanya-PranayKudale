let productViews = new WeakMap();
let cartItems = new WeakSet();

// Function to increment product views
function incrementProductViews(productId) {
  // Get the current view count for the product
  let viewCount = productViews.get(productId);

  // If the product is not already present in the WeakMap, add it with initial value 1
  if (viewCount === undefined) {
    productViews.set(productId, 1);
  } else {
    // Increment the view count by 1
    viewCount++;
    productViews.set(productId, viewCount);
  }
}

// Function to add a product to the cart
function addToCart(productId) {
  // Check if the product is already in the cart
  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    // Add the product to the cart
    cartItems.add(productId);
    return "Product added to cart";
  }
}
