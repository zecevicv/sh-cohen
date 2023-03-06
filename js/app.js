/* #Hamburger
  ======================================================= */
const header = document.querySelector('.cohen-header');
const headerBtn = document.querySelector('.cohen-header-hamburger button');

if (headerBtn) {
  headerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
    headerBtn.classList.toggle('is-active');
  });
}

/* #Header
  ======================================================= */

// Color Change
if (document.querySelector('.cohen-header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('cohen-header-scrolled');
    } else {
      header.classList.remove('cohen-header-scrolled');
    }
  });
}

if (document.querySelector('.cohen-header')) {
  if (window.scrollY > 0) {
    header.classList.add('cohen-header-scrolled');
  } else {
    header.classList.remove('cohen-header-scrolled');
  }
}

/* #Animations
  ======================================================= */
gsap.registerPlugin(ScrollTrigger);

// Header
// if (document.querySelector('.cohen-header')) {
//   gsap.from(".cohen-header-action", {
//     opacity: 0,
//     duration: .4,
//     delay: .5,
//     y: -50
//   });
// }

// Banner
if (document.querySelector('.cohen-banner')) {
  gsap.from(".cohen-banner .text", {
    opacity: 0,
    duration: .5,
    delay: .3,
    y: 20
  });
}

// Banner 2
if (document.querySelector('.cohen-banner-2')) {
  gsap.from(".cohen-banner-2 .text", {
    opacity: 0,
    duration: .5,
    delay: .3,
    y: 20
  });
}

// Icons
if (document.querySelector('.cohen-icons-item')) {
  gsap.from(".cohen-icons-item", {
    opacity: 0,
    duration: .4,
    y: 50,
    scrollTrigger: {
      trigger: ".cohen-icons-item",
      start: "top 80%"
    },
    stagger: {
      each: 0.1,
    },
  });
}

// Team Members
if (document.querySelector('.cohen-team li')) {
  gsap.from(".cohen-team li", {
    opacity: 0,
    duration: .6,
    x: 50,
    scrollTrigger: {
      trigger: ".cohen-team li",
      start: "top 80%"
    },
    stagger: {
      each: 0.1,
    },
  });
}

// Info Section
if (document.querySelector('.cohen-info-section .img')) {
  gsap.from(".cohen-info-section .img", {
    opacity: 0,
    duration: .6,
    y: 25,
    scrollTrigger: {
      trigger: ".cohen-info-section",
      start: "top 70%"
    },
  });
}

// Info Section 2
if (document.querySelector('.cohen-info-section-2 .img')) {
  gsap.from(".cohen-info-section-2 .img", {
    opacity: 0,
    duration: .6,
    x: 15,
    scrollTrigger: {
      trigger: ".cohen-info-section-2",
      start: "top 70%"
    },
  });
}

// Media Boxes
if (document.querySelector('.cohen-media-box')) {
  gsap.from(".cohen-media-box", {
    opacity: 0,
    duration: .6,
    y: 50,
    scrollTrigger: {
      trigger: ".cohen-media-box",
      start: "top 70%"
    },
    stagger: {
      each: 0.4,
    },
  });
}

// Map
if (document.querySelector('.cohen-contact .text')) {
  gsap.from(".cohen-contact .text", {
    opacity: 0,
    duration: .6,
    x: 35,
    scrollTrigger: {
      trigger: ".cohen-contact",
      start: "top 50%"
    },
  });
}

// Logos
if (document.querySelector('.cohen-logos li')) {
  gsap.from(".cohen-logos li", {
    opacity: 0,
    duration: .4,
    y: 35,
    scrollTrigger: {
      trigger: ".cohen-logos li",
      start: "top 80%",
    },
    stagger: {
      each: 0.05,
    },
  });
}

// Product Grid
if (document.querySelector('.cohen-product-grid li')) {
  gsap.from(".cohen-product-grid li", {
    opacity: 0,
    duration: .5,
    y: 100,
    scrollTrigger: {
      trigger: ".cohen-product-grid li",
      start: "top 80%"
    },
    stagger: {
      each: 0.1,
    },
  });
}