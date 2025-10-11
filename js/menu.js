document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  document.addEventListener('click', function (e) {
    if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal-close');
  if (modal && modalClose) {
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.showModal = function (msg) {
      modal.querySelector('.modal-message').textContent = msg;
      modal.style.display = 'flex';
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
});