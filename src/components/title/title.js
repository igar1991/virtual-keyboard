export default function Title() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper', 'title');
  const title = document.createElement('h1');
  title.innerHTML = 'RSS Vertual keyboard';
  wrapper.append(title);
  return wrapper;
}
