import './style.css';

export default function Textarea() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper', 'textarea');
  const textarea = document.createElement('textarea');
  textarea.rows = '50';
  textarea.cols = '3';
  wrapper.append(textarea);
  return wrapper;
}
