import keyDataRu from './keyData_ru.js';
import keyDataEn from './keyData_en.js';
import mapKeys from './mapKeys.js';
import createKey from './key.js';
import capsKey from './capsKey.js';
import './style.css';
import switchLang from './switchLang.js';

const pressed = new Set();

function writeKey() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const keyData = localStorage.getItem('lang') === 'ru' ? keyDataRu : keyDataEn;
  mapKeys.forEach((row) => {
    const rowKey = document.createElement('div');
    rowKey.classList.add('row-keyboard');
    keyboard.append(rowKey);
    row.forEach((item) => {
      const currentKey = keyData.find((elem) => elem.code === item);
      rowKey.append(createKey(currentKey));
    });
  });
  return keyboard;
}

function createKeyboard() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  const keyboard = writeKey();
  wrapper.append(keyboard);
  return wrapper;
}

function insertChar(char) {
  const textarea = document.querySelector('textarea');
  textarea.setRangeText(char, textarea.selectionStart, textarea.selectionEnd, 'end');
}

function deletePrevChar() {
  const textarea = document.querySelector('textarea');
  const cusorPosition = textarea.selectionStart;
  const currentValue = textarea.value.slice(0, cusorPosition - 1)
    .concat(textarea.value.slice(cusorPosition));
  textarea.value = currentValue;
  textarea.selectionStart = cusorPosition - 1;
  textarea.selectionEnd = cusorPosition - 1;
}

function deleteNextChar() {
  const textarea = document.querySelector('textarea');
  const cusorPosition = textarea.selectionStart;
  const currentValue = textarea.value.slice(0, cusorPosition)
    .concat(textarea.value.slice(cusorPosition + 1));
  textarea.value = currentValue;
  textarea.selectionStart = cusorPosition;
  textarea.selectionEnd = cusorPosition;
}

function checkLang(func, ...codes) {
  // eslint-disable-next-line no-restricted-syntax
  for (const code of codes) {
    if (!pressed.has(code)) {
      return;
    }
  }
  pressed.clear();
  func();
}

function ckickButton(e) {
  e.preventDefault();
  const keyData = localStorage.getItem('lang') === 'ru' ? keyDataRu : keyDataEn;
  const isShift = localStorage.getItem('isShift');
  const key = keyData.find((item) => item.code === e.code);
  if (!key || e.repeat) return;
  pressed.add(e.code);
  const currentButton = document.querySelector(`.${e.code}`);
  currentButton.classList.add('active-button');
  checkLang(switchLang, 'ControlLeft', 'AltLeft');
  switch (key.code) {
    case 'Enter': insertChar('\n');
      break;
    case 'Tab': insertChar('  ');
      break;
    case 'ControlLeft':
      break;
    case 'ControlRight':
      break;
    case 'Backspace': deletePrevChar();
      break;
    case 'Delete': deleteNextChar();
      break;
    case 'CapsLock': capsKey();
      break;
    case 'Alt':
      break;
    case 'ShiftLeft': capsKey();
      break;
    case 'ShiftRight':
      break;
    case 'AltLeft':
      break;
    case 'AltRight':
      break;
    default: insertChar(isShift === 'Y' ? key.shift : key.small);
      break;
  }
}

function upButton(e) {
  e.preventDefault();
  if (!keyDataRu.find((item) => item.code === e.code)) return;
  const currentButton = document.querySelector(`.${e.code}`);
  pressed.delete(e.code);
  currentButton.classList.remove('active-button');
  if (e.code === 'ShiftLeft') {
    capsKey();
  }
}

export default function Keyboard() {
  const keyboard = createKeyboard();
  localStorage.setItem('lang', 'ru');
  localStorage.setItem('isShift', 'N');
  document.addEventListener('keydown', ckickButton);
  keyboard.addEventListener('mousedown', ckickButton);
  document.addEventListener('keyup', upButton);
  keyboard.addEventListener('mouseup', upButton);

  return keyboard;
}
