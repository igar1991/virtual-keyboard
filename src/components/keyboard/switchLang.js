import keyDataRu from './keyData_ru.js';
import keyDataEn from './keyData_en.js';

export default function switchLang() {
  const keyData = localStorage.getItem('lang') === 'en' ? keyDataRu : keyDataEn;
  const isShift = localStorage.getItem('isShift');
  const keyboard = document.querySelectorAll('.key-button span');
  keyboard.forEach((el) => {
    const currentKey = el.closest('.key-button');
    const currentAtribute = currentKey.dataset.code;
    const currentItem = keyData.find((item) => item.code === currentAtribute);
    if (isShift === 'Y') {
      // eslint-disable-next-line no-param-reassign
      el.innerHTML = currentItem.shift;
    } else {
      // eslint-disable-next-line no-param-reassign
      el.innerHTML = currentItem.small;
    }
  });
  localStorage.setItem('lang', `${localStorage.getItem('lang') === 'en' ? 'ru' : 'en'}`);
}
