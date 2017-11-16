import { join } from 'lodash';
import './styles.css';


let el = dummyComponent();
document.body.appendChild(el);

function dummyComponent() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  var btn = document.createElement('button');
  btn.innerHTML = 'Not working button';

  element.appendChild(btn);

  return element;
}
