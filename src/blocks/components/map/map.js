/* eslint-disable */
const activateMap = () => {
  const map = document.querySelector('.map');
  const mapActive = document.querySelector('.map__active');
  const closeBtn = document.querySelector('.map__close');
  map.addEventListener('click', () => {
    mapActive.classList.add('is-active');
  })
  closeMap(mapActive, closeBtn);
  fullScreenMode();
}

const closeMap = (el, close) => {
  el.addEventListener('click', (event) => {
    event.stopPropagation()
    target = event.target;
    if (target == el || target == close) {
        el.classList.remove('is-active');
    }
  });
};


const fullScreenMode = () => {
  const fullScreenBtn = document.querySelector('.map__fullscreen');

  fullScreenBtn.addEventListener('click', () => {
    toggleFullScreen();
  }, false);

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }
}

window.addEventListener('load', activateMap());