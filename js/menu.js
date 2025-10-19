document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) toggle.focus();
    });
  }

  document.addEventListener('click', function (e) {
    if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
      toggle && toggle.setAttribute('aria-expanded', 'false');
    }
  });

  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal-close');
  let lastActive = null;

  function closeModal() {
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    if (lastActive) lastActive.focus();
    lastActive = null;
  }

  if (modal && modalClose) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    window.showModal = function (msg, opener) {
      modal.querySelector('.modal-message').textContent = msg;
      lastActive = opener || document.activeElement;
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      const focusable = modal.querySelector('[tabindex], button, a, input, textarea, select');
      if (focusable) focusable.focus();
    }
  }

  window.showToast = function (msg) {
    const toast = document.querySelector('.toast');
    if (toast) {
      toast.textContent = msg;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 3000);
    }
  }

  document.body.addEventListener('click', function (e) {
    const link = e.target.closest('a[data-link]');
    if (link) {
      menu && menu.classList.remove('open');
      toggle && toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const modal = document.querySelector('.modal');
      if (modal && modal.getAttribute('aria-hidden') === 'false') {
        const modalClose = modal.querySelector('.modal-close');
        modalClose && modalClose.click();
      }
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle && toggle.setAttribute('aria-expanded', 'false');
        toggle && toggle.focus();
      }
    }
  });
});