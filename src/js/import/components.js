window.onload = function () {
  activatedAcc();
  activatedGalleryModal();
};

// Accordion

const activatedAcc = () => {
  const acc = document.querySelector('.faq__acc');

  acc.addEventListener('click', (event) => {
    const target = event.target;
    const parent = target.parentElement;
    const accItem = document.querySelectorAll('.faq__acc-item');

    if (target.classList.contains('faq__question')) {
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
        return;
      }
      accItem.forEach(el => {
        el.classList.remove('active');
      });
      parent.classList.add('active');
    }
  });
};

// Gallery Modal Window

const activatedGalleryModal = () => {
  const galleryBox = document.querySelector('.gallery__box');

  galleryBox.addEventListener('click', (event) => {
    const target = event.target;

    if (target.parentElement.classList.contains('gallery__item')) {
      const srcAttr = target.getAttribute('src');
      const body = document.querySelector('body');
      const html = createdHtml(srcAttr);
      body.insertAdjacentHTML('beforeend', html);
      const modal = document.querySelector('.modal-image');
      const close = document.querySelector('.modal-icon');
      closedGalleryModal(modal, close);
    }
  });
};

const createdHtml = (src) => {
  return `
    <div class="modal-image">
      <div class="modal-image__box">
        <div class="modal-icon"></div>
        <img src=${src} alt="картинка">
      </div>
    </div>
  `;
};

const closedGalleryModal = (el, x) => {
  el.addEventListener('click', (event) => {
    target = event.target;
    if (target == el || target == x) {
      el.remove();
    }
  });
};

// Yandex Map

