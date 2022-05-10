export default function Key(item) {
  const { code, small, shift } = item;
  const wrapper = document.createElement('div');
  const isShift = localStorage.getItem('isShift');
  wrapper.classList.add(`${code}`, 'key-button');
  wrapper.dataset.code = `${code}`;
  const key = document.createElement('span');
  if (isShift === 'Y') {
    key.innerHTML = shift;
  } else {
    key.innerHTML = small;
  }

  wrapper.append(key);
  return wrapper;
}
