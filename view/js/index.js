window.addEventListener('scroll', function () {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    if (element.getBoundingClientRect().top < screenSize) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }

  }
});

document.addEventListener("DOMContentLoaded", (event) => {

  nextImage();

})


const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseenter', () => {
  carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'running';
});
