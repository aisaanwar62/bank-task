document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".main .main-head .slide");
  let dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots");
  document.querySelector(".main .main-head").appendChild(dotsContainer);

  console.log("Number of slides found:", slides.length); // Check how many slides are selected

  let currentSlide = 0;

  // Create dots
  slides.forEach((slide, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dots .dot");

  function showSlide(n) {
    console.log("Showing slide:", n);
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[n].classList.add("active");

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    dots[n].classList.add("active");
  }

  // Function to automatically change slides
  function autoSlide() {
    showSlide(currentSlide);
    currentSlide = (currentSlide + 1) % slides.length;
  }

  // Set interval to change slides every few seconds
  setInterval(autoSlide, 2000); // Change slides every 2 seconds (adjust as needed)

  // Event listener for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      currentSlide = parseInt(this.dataset.index);
      showSlide(currentSlide);
    });
  });

  // Initial slide
  showSlide(currentSlide);
});
