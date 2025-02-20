// Secret Message Button
document.getElementById("secret-btn").addEventListener("click", function() {
    document.getElementById("secret-message").classList.toggle("hidden");
});

// Image Slideshow
let images = ["assets/images/photo1.jpg", "assets/images/photo2.jpg"];
let index = 0;
let slideImg = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % images.length;
    slideImg.src = images[index];
}, 3000);
