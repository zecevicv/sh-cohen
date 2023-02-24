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