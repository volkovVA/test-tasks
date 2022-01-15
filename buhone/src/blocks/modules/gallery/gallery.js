/* eslint-disable */
const activateGalleryModal = () => {
    const galleryBox = document.querySelector('.gallery__box');

    galleryBox.addEventListener('click', (event) => {
      const target = event.target;

      if (target.parentElement.classList.contains('gallery__item')) {
        const srcAttr = target.getAttribute('src');
        const body = document.querySelector('body');
        const html = createHtml(srcAttr);
        body.insertAdjacentHTML('beforeend', html);
        const modal = document.querySelector('.modal-image');
        const close = document.querySelector('.modal-icon');
        closeGalleryModal(modal, close);
      }
    });
  };

  const createHtml = (src) => {
    return `
      <div class="modal-image">
        <div class="modal-image__box">
          <div class="modal-icon"></div>
          <img src=${src} alt="картинка">
        </div>
      </div>
    `;
  };

  const closeGalleryModal = (el, x) => {
    el.addEventListener('click', (event) => {
      target = event.target;
      if (target == el || target == x) {
        el.remove();
      }
    });
  };

window.addEventListener('load', activateGalleryModal());