const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// when someone clicks on the hamburger button
navToggle.addEventListener('click', () => {
  // if the navigation menu is closed, open it
  // if the navigation menu is open, close it
  const visibility = nav.getAttribute('data-visible');

  if (visibility === 'false') {
    nav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    nav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
