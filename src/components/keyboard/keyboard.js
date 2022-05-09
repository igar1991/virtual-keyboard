import keyData from './keyData_ru.js';
import mapKeys from './mapKeys.js';
import createKey from './key.js';
import './style.css';

export default function Keyboard() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  wrapper.append(keyboard);
  mapKeys.forEach((row) => {
    const rowKey = document.createElement('div');
    rowKey.classList.add('row-keyboard');
    keyboard.append(rowKey);
    row.forEach((item) => {
      const currentKey = keyData.find((elem) => elem.code === item);
      rowKey.append(createKey(currentKey));
    });
  });
  return wrapper;
}
