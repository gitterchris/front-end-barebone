import { join } from 'lodash';

let el = dummyComponent();
document.body.appendChild(el);

function dummyComponent() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  const [ first, ] = [ 1, 2, 3 ];

  var btn = document.createElement('button');
  btn.innerHTML = `Not working button - ${first}`;

  element.appendChild(btn);

  return element;
}
