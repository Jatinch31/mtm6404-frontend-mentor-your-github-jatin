document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cartText = document.getElementById("cart-text");
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumb");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.querySelector(".close-lightbox");
    const plusBtn = document.getElementById("plus");
    const minusBtn = document.getElementById("minus");
    const quantityText = document.getElementById("quantity");
    const addToCart = document.querySelector(".add-to-cart");

    let quantity = 1;
    let cartItems = 0;

    // Quantity buttons
    plusBtn.addEventListener("click", () => {
        quantity++;
        quantityText.textContent = quantity;
    });

    minusBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityText.textContent = quantity;
        }
    });

    // Add to Cart
    addToCart.addEventListener("click", () => {
        cartItems = quantity;
        cartText.textContent = `You have ${cartItems} items in the cart`;
    });

    // Thumbnails click event
    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            mainImage.src = thumb.src.replace("-thumbnail", "");
        });
    });

    // Lightbox
    mainImage.addEventListener("click", () => {
        lightbox.style.display = "flex";
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});
