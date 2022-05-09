export default function Key(item) {
  const { code, small, shift } = item;
  const wrapper = document.createElement('div');
  wrapper.classList.add(`${code}`, 'key-button');
  const smallKey = document.createElement('span');
  smallKey.innerHTML = small;
  const shiftKey = document.createElement('span');
  shiftKey.innerHTML = shift;
  shiftKey.classList.add('hidden');
  wrapper.append(smallKey, shiftKey);
  return wrapper;
}
