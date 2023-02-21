if (window.matchMedia('(min-width: 992px)').matches) {
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const navbarLinks = document.querySelectorAll('.nav-link-text');
          const navbarLogo = document.querySelector('.antic-logo');
          const navbarLinkWrapper = document.querySelectorAll('.nav-link-line');
          const buttonNavbar = document.querySelector('.button_navbar');
          const navbarBurger = document.querySelector('.hamburger');

          navbarLinks.forEach((link) => {
            link.style.color = 'white';
          });

          navbarLogo.style.color = 'white';

          buttonNavbar.classList.add('is--invert');
          navbarBurger.classList.add('is--invert');
          navbarLinkWrapper.forEach((linkLine) => {
            linkLine.style.backgroundColor = 'white';
          });
        } else {
          const navbarLinks = document.querySelectorAll('.nav-link-text');
          const navbarLogo = document.querySelector('.antic-logo');
          const navbarLinkWrapper = document.querySelectorAll('.nav-link-line');
          const buttonNavbar = document.querySelector('.button_navbar');
          const navbarBurger = document.querySelector('.hamburger');

          navbarLinks.forEach((link) => {
            link.style.color = '#22222d';
          });

          navbarLogo.style.color = '#22222d';

          buttonNavbar.classList.remove('is--invert');
          navbarBurger.classList.remove('is--invert');

          navbarLinkWrapper.forEach((linkLine) => {
            linkLine.style.backgroundColor = '#22222d';
          });
        }
      });
    },
    {
      rootMargin: '0px 0px -100% 0px',
    }
  );

  const darkSections = document.querySelectorAll('[mt-el=dark-section]');
  darkSections.forEach((section) => {
    observer.observe(section);
  });
} else if (window.matchMedia('(max-width: 991px)').matches) {
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const navbarLogo = document.querySelector('.antic-logo');
          navbarLogo.style.color = 'white';
          const navbarBurger = document.querySelector('.hamburger');
          navbarBurger.classList.add('is--invert');
        } else {
          const navbarLogo = document.querySelector('.antic-logo');
          navbarLogo.style.color = '#22222d';
          const navbarBurger = document.querySelector('.hamburger');
          navbarBurger.classList.remove('is--invert');
        }
      });
    },
    {
      rootMargin: '0px 0px -100% 0px',
    }
  );
  const darkSections = document.querySelectorAll('[mt-el=dark-section]');
  darkSections.forEach((section) => {
    observer.observe(section);
  });
}
