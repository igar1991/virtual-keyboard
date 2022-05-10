export default function Description() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper', 'desc');
  const text1 = document.createElement('h3');
  text1.innerHTML = 'Клавиатура создана в операционной системе Windows';
  const text2 = document.createElement('h3');
  text2.innerHTML = 'Для переключения языка комбинация: левые Ctrl + Alt';
  wrapper.append(text1, text2);
  return wrapper;
}
