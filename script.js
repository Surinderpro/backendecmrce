// script.js
const productsContainer = document.querySelector('.products');
const buyButtons = document.querySelectorAll('.buyNowBtn');

// Function to fetch products from the backend
function fetchProducts() {
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => {
      data.products.forEach(product => {
        console.log(data); 
        const productCard = `
          <div class="product">
            <img src="${product.imageUrl}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price}</p>
            <button class="buyNowBtn" data-link="${product.link}">Buy Now</button>
          </div>
        `;
        productsContainer.insertAdjacentHTML('beforeend', productCard);
      });

      // Add event listeners to the 'Buy Now' buttons
      buyButtons.forEach(button => {
        button.addEventListener('click', function() {
          const link = this.getAttribute('data-link');
          window.location.href = link;
        });
      });
    })
    .catch(error => {
      console.error('Error fetching product data:', error);
    });
}

// Call the fetchProducts function when the page loads
window.onload = fetchProducts;

// Toggle theme functionality (remains the same)
document.getElementById("toggle").addEventListener("click", function() {
  document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});




