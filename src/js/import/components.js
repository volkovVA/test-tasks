/* eslint-disable */
window.onload = function () {
  activateAcc();
  activateGalleryModal();
};

// Accordion

const activateAcc = () => {
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

// Swiper Slider

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-left',
    prevEl: '.slider-button-right',
  }
});

// Form

document.addEventListener('DOMContentLoaded', () => {

  const ajaxSend = async (formData) => {
      const fetchResp = await fetch('mail.php', {
          method: 'POST',
          body: formData
      });
      if (!fetchResp.ok) {
          throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
      }
      return await fetchResp.text();
  };

  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
      form.addEventListener('submit', function (e) {
          e.preventDefault();
          const formData = new FormData(this);

          ajaxSend(formData)
              .then((response) => {
                  console.log(response);
                  form.reset();
              })
              .catch((err) => console.error(err));
      });
  });
});

// Lazy Load

let myLazyLoad = new LazyLoad();
myLazyLoad.update();