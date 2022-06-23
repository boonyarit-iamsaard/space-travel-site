const currentPath = window.location.pathname;
const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

Array.from(nav.children).forEach(item => {
  const pathname = item.children[0].pathname;

  if (pathname === currentPath) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
});

navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');

  if (visibility === 'false') {
    nav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    nav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
