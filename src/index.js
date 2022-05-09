/* eslint linebreak-style: ["error", "windows"] */
import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello world! He';
  element.className = 'wrapper';

  return element;
}

document.body.append(component());
