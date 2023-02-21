if (window.matchMedia('(min-width: 992px)').matches) {
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const navbarLinks = document.querySelectorAll('.nav-link-text');
          const navbarLogo = document.querySelector('.antic-logo') as HTMLElement;
          const navbarLinkWrapper = document.querySelectorAll('.nav-link-line');
          const buttonNavbar = document.querySelector('.button_navbar') as HTMLElement;
          const navbarBurger = document.querySelector('.hamburger') as HTMLElement;

          navbarLinks.forEach((link) => {
            (link as HTMLElement).style.color = 'white';
          });

          navbarLogo.style.color = 'white';

          buttonNavbar.classList.add('is--invert');
          navbarBurger.classList.add('is--invert');
          navbarLinkWrapper.forEach((linkLine) => {
            (linkLine as HTMLElement).style.backgroundColor = 'white';
          });
        } else {
          const navbarLinks = document.querySelectorAll('.nav-link-text');
          const navbarLogo = document.querySelector('.antic-logo');
          const navbarLinkWrapper = document.querySelectorAll('.nav-link-line');
          const buttonNavbar = document.querySelector('.button_navbar');
          const navbarBurger = document.querySelector('.hamburger');

          navbarLinks.forEach((link) => {
            (link as HTMLElement).style.color = '#22222d';
          });

          (navbarLogo as HTMLElement).style.color = '#22222d';

          (buttonNavbar as HTMLElement).classList.remove('is--invert');
          (navbarBurger as HTMLElement).classList.remove('is--invert');

          navbarLinkWrapper.forEach((linkLine) => {
            (linkLine as HTMLElement).style.backgroundColor = '#22222d';
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
          (navbarLogo as HTMLElement).style.color = 'white';
          const navbarBurger = document.querySelector('.hamburger');
          (navbarBurger as HTMLElement).classList.add('is--invert');
        } else {
          const navbarLogo = document.querySelector('.antic-logo');
          (navbarLogo as HTMLElement).style.color = '#22222d';
          const navbarBurger = document.querySelector('.hamburger');
          (navbarBurger as HTMLElement).classList.remove('is--invert');
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
