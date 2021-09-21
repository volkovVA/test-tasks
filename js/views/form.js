function inputErrorTemplate(msg) {
  return `
    <p class="invalid-feedback">${msg}</p>
  `;
}

export function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || 'Invalid input';
  const template = inputErrorTemplate(msg);

  el.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend', template);
}

export function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector('.invalid-feedback');
  if (!err) return;

  el.classList.remove('is-invalid');
  parent.removeChild(err);
}

export function removeTemplateError() {
  const errTemplate = document.querySelectorAll('.invalid-feedback');

  if (errTemplate.length > 1) {
    errTemplate[1].remove();
  }
}