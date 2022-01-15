import UI from './js/config/ui.config.js';
import {
  validate
} from './js/helpers/validate.js';
import {
  showInputError,
  removeInputError,
  removeTemplateError
} from './js/views/form.js';
import {
  login
} from './js/services/auth.service.js';
import {
  notify
} from './js/views/notifications.js';
import {
  selectScreenMode
} from './js/mode/screen-mode.js';

const {
  form,
  inputName,
  inputEmail,
  inputPassword,
} = UI;

const inputs = [inputName, inputEmail, inputPassword];

form.addEventListener('submit', e => {
  e.preventDefault();

  onSubmit();
  removeTemplateError();
});

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputName.value, inputEmail.value, inputPassword.value);
    form.reset();
    notify({
      msg: 'Login success',
      className: 'success'
    });
    setTimeout(() => {
      window.location.href = 'https://www.epam.com/';
    }, 2000);
  } catch (err) {
    notify({
      msg: 'Login failed',
      className: 'danger'
    });
  }
}

selectScreenMode();