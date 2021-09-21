export function selectScreenMode() {
  const btnDark = document.querySelector('.btn-dark');
  const btnLight = document.querySelector('.btn-light');

  const body = document.querySelector('body');
  const greetingScreen = document.querySelector('.login-greeting-screen');
  const card = document.querySelector('.card');

  btnDark.addEventListener('click', () => {
    body.classList.add('dark');
    greetingScreen.classList.add('dark');
    card.classList.add('dark');
  });

  btnLight.addEventListener('click', () => {
    body.classList.remove('dark');
    greetingScreen.classList.remove('dark');
    card.classList.remove('dark');
  });
}