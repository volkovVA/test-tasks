import UI from './js/config/ui.config.js';
import {
  validate
} from './js/helpers/validate.js';
import {
  showInputError,
  removeInputError,
  removeTemplateError
} from './js/views/form.js';

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

function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  console.log(isValidForm);
}