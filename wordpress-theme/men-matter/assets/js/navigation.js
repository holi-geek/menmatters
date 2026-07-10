(function () {
  var toggle = document.querySelector('.mm-menu-toggle');
  var menu = document.querySelector('.mm-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close on link click (mobile)
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && window.innerWidth <= 768) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
