// <!-- JavaScript to make the links show when clicking on the hamburger button -->

  // Get the hamburger button element
  var hamburger = document.querySelector('.navbar-toggler');

  // Get the links element
  var links = document.querySelector('#navbarNav');

  // Add a click event listener to the hamburger button
  hamburger.addEventListener('click', function() {
    // Toggle the 'show' class on the links element
    links.classList.toggle('show');
  });