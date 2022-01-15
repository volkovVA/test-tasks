export function selectScreenMode() {
  const btnDark = document.querySelector('.btn-dark');
  const btnLight = document.querySelector('.btn-light');

  const body = document.querySelector('body');
  const greetingScreen = document.querySelector('.login-greeting-screen');
  const card = document.querySelector('.card');

  function addClass() {
    [...arguments].forEach(el => el.classList.add('dark'));
  }

  function removeClass() {
    [...arguments].forEach(el => el.classList.remove('dark'));
  }

  btnDark.addEventListener('click', () => {
    addClass(body, greetingScreen, card);
  });

  btnLight.addEventListener('click', () => {
    removeClass(body, greetingScreen, card);
  });
}