/* ==========================================================================
   The Wardrobe Shillong - Theme JavaScript
   ========================================================================== */

(function() {
  'use strict';

  /* ---------- Mobile Menu ---------- */
  const menuToggles = document.querySelectorAll('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuOverlay = document.querySelector('[data-menu-overlay]');

  if (mobileMenu) {
    menuToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('mobile-menu--open');
        if (menuOverlay) menuOverlay.classList.toggle('mobile-menu__overlay--open');
        document.body.style.overflow = mobileMenu.classList.contains('mobile-menu--open') ? 'hidden' : '';
      });
    });

    if (menuOverlay) {
      menuOverlay.addEventListener('click', function() {
        mobileMenu.classList.remove('mobile-menu--open');
        menuOverlay.classList.remove('mobile-menu__overlay--open');
        document.body.style.overflow = '';
      });
    }
  }

  /* ---------- Search Drawer ---------- */
  var searchToggles = document.querySelectorAll('[data-search-toggle]');
  var searchDrawer = document.querySelector('[data-search-drawer]');

  if (searchDrawer) {
    searchToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        searchDrawer.classList.toggle('search-drawer--open');
        if (searchDrawer.classList.contains('search-drawer--open')) {
          var input = searchDrawer.querySelector('input');
          if (input) input.focus();
        }
      });
    });
  }

  /* ---------- Hero Slideshow ---------- */
  var slideshows = document.querySelectorAll('[data-slideshow]');

  slideshows.forEach(function(slideshow) {
    var slides = slideshow.querySelectorAll('[data-slide]');
    var prevBtn = slideshow.querySelector('[data-slide-prev]');
    var nextBtn = slideshow.querySelector('[data-slide-next]');
    var counter = slideshow.querySelector('[data-slide-current]');
    var currentIndex = 0;

    if (slides.length <= 1) return;

    function goToSlide(index) {
      slides[currentIndex].classList.remove('hero-slideshow__slide--active');
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add('hero-slideshow__slide--active');
      if (counter) counter.textContent = currentIndex + 1;
    }

    if (prevBtn) prevBtn.addEventListener('click', function() { goToSlide(currentIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function() { goToSlide(currentIndex + 1); });

    // Autoplay
    setInterval(function() { goToSlide(currentIndex + 1); }, 5000);
  });

  /* ---------- Product Page: Image Thumbnails ---------- */
  var thumbnails = document.querySelectorAll('[data-thumbnail]');
  var mainImage = document.getElementById('ProductMainImage');

  thumbnails.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      thumbnails.forEach(function(t) { t.classList.remove('product-page__thumbnail--active'); });
      thumb.classList.add('product-page__thumbnail--active');
      if (mainImage) mainImage.src = thumb.getAttribute('data-image-url');
    });
  });

  /* ---------- Product Page: Quantity Selector ---------- */
  var quantityMinus = document.querySelectorAll('[data-quantity-minus]');
  var quantityPlus = document.querySelectorAll('[data-quantity-plus]');

  quantityMinus.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var input = btn.parentNode.querySelector('.quantity-input');
      if (input && parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
      }
    });
  });

  quantityPlus.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var input = btn.parentNode.querySelector('.quantity-input');
      if (input) {
        input.value = parseInt(input.value) + 1;
      }
    });
  });

  /* ---------- Announcement Bar Rotation ---------- */
  var announcementMessages = document.querySelectorAll('.announcement-bar__message');
  if (announcementMessages.length > 1) {
    var currentAnnouncement = 0;
    announcementMessages.forEach(function(msg, i) {
      msg.style.display = i === 0 ? 'block' : 'none';
    });

    setInterval(function() {
      announcementMessages[currentAnnouncement].style.display = 'none';
      currentAnnouncement = (currentAnnouncement + 1) % announcementMessages.length;
      announcementMessages[currentAnnouncement].style.display = 'block';
    }, 3000);
  }

  /* ---------- Share Button ---------- */
  var shareBtn = document.querySelector('[data-share-btn]');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(window.location.href).then(function() {
          shareBtn.textContent = 'Link copied!';
          setTimeout(function() { shareBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share'; }, 2000);
        });
      }
    });
  }

})();
