/* eslint-disable */
const activateModal = () => {
  const btnModal = document.querySelectorAll('.first-screen__btn');
  const modal = document.querySelector('.modal');
  const body = document.querySelector('body');

  btnModal.forEach(el => {
    el.addEventListener('click', (e) => {
      modal.style.display = 'flex';
      body.style.overflowY = 'hidden';
    });
    closeModal(modal);
  });
};

const closeModal = (el) => {
  const modalContainer= document.querySelector('.modal__container');
  const body = document.querySelector('body');

  el.addEventListener('click', (event) => {
    target = event.target;
    if (target == el || target == modalContainer) {
      el.style.display = 'none';
      body.style.overflowY = 'visible';
    }
  });
};

window.addEventListener('load', activateModal());