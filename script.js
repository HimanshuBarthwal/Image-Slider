// Image array
const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg'
  ];
  
  let currentIndex = 0;
  const sliderImage = document.getElementById('slider-image');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  
  // Function to display image based on index
  function showImage(index) {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
      sliderImage.src = images[index];
      sliderImage.style.opacity = 1;
    }, 300);
  }
  
  // Show the first image on page load
  showImage(currentIndex);
  
  // Next button functionality
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
  
  // Previous button functionality
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  
  // Automatic slideshow every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 3000);
  