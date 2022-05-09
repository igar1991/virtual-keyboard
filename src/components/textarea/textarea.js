import './style.css';

export default function Description() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper', 'textarea');
  const title = document.createElement('h2');
  title.innerHTML = 'RSS Vertual keyboard';
  wrapper.append(title);
  return wrapper;
}
