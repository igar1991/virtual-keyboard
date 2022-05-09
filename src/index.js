import Description from './components/description/description.js';
import Keyboard from './components/keyboard/keyboard.js';
import Textarea from './components/textarea/textarea.js';
import Title from './components/title/title.js';

import './style.css';

document.body.append(Title());
document.body.append(Textarea());
document.body.append(Keyboard());
document.body.append(Description());
